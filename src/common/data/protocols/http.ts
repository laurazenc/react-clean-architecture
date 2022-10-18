interface HttpManager {
	get<T>(url: string): Promise<unknown>
}

export default HttpManager
