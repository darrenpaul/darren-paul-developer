export default class UrlQueryBuilder {
	private queryParams: URLSearchParams
	private baseUrl: string

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
		this.queryParams = new URLSearchParams()
	}

	withUrlQueryKeys(urlQueryKeys: Record<string, string>) {
		[...this.queryParams.keys()].forEach(key => this.queryParams.delete(key))

		Object.keys(urlQueryKeys).forEach((key) => {
			this.queryParams.delete(key)
		})

		Object.entries(urlQueryKeys).forEach(([key, value]) => {
			if (key) {
				this.queryParams.append(key, value)
			}
		})

		return this
	}

	build() {
		const elements = [this.baseUrl]

		const queryString = this.queryParams.toString()

		if (queryString) {
			elements.push(queryString)
		}

		return elements.join('?')
	}
}
