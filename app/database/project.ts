import type { SupabaseClient } from '@supabase/supabase-js'
import type { Project } from '~~/types/project'
import { orderBy } from 'lodash-es'
import { DatabaseTable } from '~~/constants/database-table'

export async function getProjects(
	supabaseClient: SupabaseClient,
	queryParams: Record<string, string>,
) {
	const toolSelectString = ['title', 'iconUri:icon_uri'].join(',')

	const projectToolSelectString = [
		`tool:${DatabaseTable.TOOL}(${toolSelectString})`,
	].join(',')

	const selectString = [
		'id',
		'title',
		'slug',
		'thumbnailUri:thumbnail_uri',
		'description',
		'liveUri:live_uri',
		`tools:${DatabaseTable.PROJECT_TOOL}(${projectToolSelectString})`,
	].join(',')

	const sbQuery = supabaseClient
		.from(DatabaseTable.PROJECT)
		.select(selectString)

	if (queryParams.limit) {
		sbQuery.limit(Number.parseInt(queryParams.limit))
	}

	if (queryParams.favorite) {
		sbQuery.eq('favorite', queryParams.favorite === 'true')
	}

	const { data, error } = await sbQuery
		.order('created_at', { ascending: false })
		.eq('published', true)
		.eq('client_id', process.env.NUXT_PUBLIC_CLIENT_ID)
		.returns<Project[]>()

	if (data) {
		const cleanedData = data.map((project) => {
			const tools = project.tools.map(({ tool }) => ({ ...tool }))

			const toolsSorted = orderBy(tools, ['title'], ['asc'])

			return {
				...project,
				tools: toolsSorted,
			}
		})

		return { data: cleanedData, error }
	}

	return { data, error }
}
