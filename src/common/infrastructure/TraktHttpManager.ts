import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import HttpManager from 'common/data/protocols/http'
import StorageDispatcher from 'common/data/protocols/storage'
import AuthService from 'common/domain/services/AuthService'
import ConfigService from 'common/domain/services/ConfigService'
import { inject, injectable } from 'inversify'

@injectable()
class AxiosHttpManager implements HttpManager {
	private http: AxiosInstance
	constructor(
		@inject('ConfigService') private configService: ConfigService,
		@inject('AuthService') private authService: AuthService,
		@inject('StorageDispatcher') private storage: StorageDispatcher,
	) {
		this.http = axios.create({
			headers: {
				'Content-Type': 'application/json',
				'trakt-api-key': this.configService.client_id,
				'trakt-api-version': this.configService.trakt_api_version,
			},
		})
		this.http.interceptors.request.use(this.handleRequest)
	}
	get<T>(url: string): Promise<AxiosResponse<T>> {
		return this.http.get(url)
	}

	private handleRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
		const token = await this.storage.get(`${this.configService.storage_prefix}.access_token`)

		if (!token) this.authService.authorize()

		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		}
		return config
	}
}

export default AxiosHttpManager
