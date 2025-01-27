import { serverSupabaseServiceRole } from '#supabase/server'
import { getProjects } from '~~/database/project'

export default defineEventHandler(async (event) => {
	const supabase = serverSupabaseServiceRole(event)

	const queryParams: Record<string, string> = getQuery(event)

	const { data, error } = await getProjects(supabase, queryParams)

	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: error.message,
		})
	}

	return { projects: data }
})
