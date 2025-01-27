import { serverSupabaseServiceRole } from '#supabase/server'
import { updateExperienceById } from '~~/database/experience'

export default defineEventHandler(async (event) => {
	const supabaseAdmin = serverSupabaseServiceRole(event)

	const body = await readBody(event)

	const { data } = await updateExperienceById(supabaseAdmin, {
		...body,
	})

	return data
})
