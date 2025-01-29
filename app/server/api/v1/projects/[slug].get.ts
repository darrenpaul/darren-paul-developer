import type { Project } from '~~/types/project'
import { serverSupabaseServiceRole } from '#supabase/server'
import { getProjectBySlug } from '~~/database/project'

export default defineEventHandler(async (event) => {
	const supabase = serverSupabaseServiceRole(event)

	const { slug } = event?.context?.params

	const { data, error } = await getProjectBySlug(supabase, slug)

	if (error) {
		console.error(error.message)
	}

	if (!data || data.length === 0) {
		return { data: null, error }
	}

	return { data: data[0] as Project, error }
})
