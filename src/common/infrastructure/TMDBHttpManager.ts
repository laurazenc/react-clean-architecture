import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import HttpManager from 'common/data/protocols/http'
import { injectable } from 'inversify'

@injectable()
class TMDBHttpManager implements HttpManager {
	private http: AxiosInstance
	constructor() {
		this.http = axios.create({
			headers: {
				'Content-Type': 'application/json',
			},
		})
		this.http.interceptors.request.use(this.handleRequest)
	}
	get<T>(url: string): Promise<AxiosResponse<T>> {
		return this.http.get(url)
	}

	private handleRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
		return config
	}
}

export default TMDBHttpManager
