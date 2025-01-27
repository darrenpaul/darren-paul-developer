import { serverSupabaseServiceRole } from '#supabase/server'
import { getExperiences } from '~~/database/experience'

export default defineEventHandler(async (event) => {
	const supabase = serverSupabaseServiceRole(event)

	const { data, error, count } = await getExperiences(supabase)
	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: error.message,
		})
	}

	return { experiences: data, count }
})
