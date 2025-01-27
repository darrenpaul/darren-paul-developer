import type { SupabaseClient } from '@supabase/supabase-js'
import type { Experience } from '~~/types/experience'
import { orderBy } from 'lodash-es'
import { DatabaseTable } from '~~/constants/database-table'

export async function updateExperienceById(
	supabaseClient: SupabaseClient,
	payload: {
		id: string
		content: string
	},
) {
	const now = new Date()

	return await supabaseClient
		.from(DatabaseTable.EXPERIENCE)
		.update({
			content: payload.content,
			updated_at: now,
		})
		.eq('id', payload.id)
		.select('id')
		.single<{ id: string }>()
}

export async function getExperiences(supabaseClient: SupabaseClient) {
	const toolSelectString = ['title', 'iconUri:icon_uri'].join(',')

	const experienceToolSelectString = [
		`tool:${DatabaseTable.TOOL}(${toolSelectString})`,
	].join(',')

	const selectString = [
		'id',
		'company',
		'startDate:start_date',
		'endDate:end_date',
		'role',
		'employmentType:employment_type',
		'content',
		`tools:${DatabaseTable.EXPERIENCE_TOOL}(${experienceToolSelectString})`,
	].join(',')

	const { data, error } = await supabaseClient
		.from(DatabaseTable.EXPERIENCE)
		.select(selectString)
		.order('start_date', { ascending: false })
		.eq('published', true)
		.eq('client_id', process.env.NUXT_PUBLIC_CLIENT_ID)
		.returns<Experience[]>()

	if (data) {
		const cleanedData = data.map((experience) => {
			const tools = experience.tools.map(({ tool }) => ({ ...tool }))

			const toolsSorted = orderBy(tools, ['title'], ['asc'])

			return {
				...experience,
				tools: toolsSorted,
			}
		})

		return { data: cleanedData, error }
	}

	return { data, error }
}
