import type { Tool } from './tool'

export interface Project {
	id: string
	title: string
	slug: string
	thumbnailUri: string
	description: string
	content: string
	liveUri: string
	tools: Tool[]
}
