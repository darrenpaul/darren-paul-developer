import type { Tool } from './tool'

export interface Experience {
	id: string
	company: string
	startDate: string
	endDate: string
	role: string
	employmentType: string
	content: string
	tools: Tool[]
}
