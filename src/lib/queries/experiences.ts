import { orderBy } from 'lodash-es';
import { DatabaseTable } from '../../constants/database-table';
import type { Experience } from '../../types/experience';
import { supabase } from '../supabase';

type RawExperience = Omit<Experience, 'tools'> & {
  tools: Array<{ tool: { title: string; iconUri: string } }>;
};

const toolSelectString = ['title', 'iconUri:icon_uri'].join(',');
const experienceToolSelectString = [
  `tool:${DatabaseTable.TOOL}(${toolSelectString})`,
].join(',');
const selectString = [
  'id',
  'company',
  'startDate:start_date',
  'endDate:end_date',
  'role',
  'employmentType:employment_type',
  'content',
  `tools:${DatabaseTable.EXPERIENCE_TOOL}(${experienceToolSelectString})`,
].join(',');

export async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from(DatabaseTable.EXPERIENCE)
    .select(selectString)
    .order('start_date', { ascending: false })
    .eq('published', true)
    .eq('client_id', import.meta.env.PUBLIC_CLIENT_ID)
    .returns<RawExperience[]>();

  if (error) {
    throw new Error(`getExperiences failed: ${error.message}`);
  }

  if (!data) return [];

  return data.map((experience) => {
    const tools = experience.tools.map(({ tool }) => ({ ...tool })) as Experience['tools'];
    const toolsSorted = orderBy(tools, ['title'], ['asc']);
    return { ...experience, tools: toolsSorted } as Experience;
  });
}
