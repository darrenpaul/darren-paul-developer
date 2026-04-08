import { orderBy } from 'lodash-es';
import { DatabaseTable } from '../../constants/database-table';
import type { Project } from '../../types/project';
import { supabase } from '../supabase';

type RawProject = Omit<Project, 'tools'> & {
  tools: Array<{ tool: { title: string; iconUri: string } }>;
};

const toolSelectString = ['title', 'iconUri:icon_uri'].join(',');
const projectToolSelectString = [
  `tool:${DatabaseTable.TOOL}(${toolSelectString})`,
].join(',');
const selectString = [
  'id',
  'title',
  'slug',
  'thumbnailUri:thumbnail_uri',
  'description',
  'content',
  'liveUri:live_uri',
  `tools:${DatabaseTable.PROJECT_TOOL}(${projectToolSelectString})`,
].join(',');

interface GetProjectsOptions {
  favorite?: boolean;
  limit?: number;
  slug?: string;
}

export async function getProjects(
  options: GetProjectsOptions = {},
): Promise<Project[]> {
  let sbQuery = supabase.from(DatabaseTable.PROJECT).select(selectString);

  if (options.limit !== undefined) {
    sbQuery = sbQuery.limit(options.limit);
  }
  if (options.favorite !== undefined) {
    sbQuery = sbQuery.eq('favorite', options.favorite);
  }
  if (options.slug !== undefined) {
    sbQuery = sbQuery.eq('slug', options.slug);
  }

  const { data, error } = await sbQuery
    .order('created_at', { ascending: false })
    .eq('published', true)
    .eq('client_id', import.meta.env.PUBLIC_CLIENT_ID)
    .returns<RawProject[]>();

  if (error) {
    throw new Error(`getProjects failed: ${error.message}`);
  }

  if (!data) return [];

  return data.map((project) => {
    const tools = project.tools.map(({ tool }) => ({ ...tool })) as Project['tools'];
    const toolsSorted = orderBy(tools, ['title'], ['asc']);
    return { ...project, tools: toolsSorted } as Project;
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const results = await getProjects({ slug, limit: 1 });
  return results[0] ?? null;
}
