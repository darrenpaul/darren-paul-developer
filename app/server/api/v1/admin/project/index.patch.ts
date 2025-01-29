import { serverSupabaseServiceRole } from '#supabase/server'
import { updateProjectById } from '~~/database/project'

export default defineEventHandler(async (event) => {
	const supabaseAdmin = serverSupabaseServiceRole(event)

	const body = await readBody(event)

	const { data } = await updateProjectById(supabaseAdmin, {
		...body,
	})

	return data
})
