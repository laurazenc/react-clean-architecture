import AuthService from 'common/domain/services/AuthService'
import ConfigService from 'common/domain/services/ConfigService'
import { inject, injectable } from 'inversify'
import StorageDispatcher from '../protocols/storage'

interface AuthResponse {
	access_token: string
	token_type: 'bearer'
	expires_in: 7200
	refresh_token: string
}

@injectable()
class OAuthService implements AuthService {
	constructor(
		@inject('ConfigService') private configService: ConfigService,
		@inject('StorageDispatcher') private storage: StorageDispatcher,
	) {}
	authorize() {
		const url = `https://trakt.tv/oauth/authorize?response_type=code&client_id=${this.configService.client_id}&redirect_uri=${this.configService.redirect_url}`
		window.location.href = url
	}
	async getToken(code: string): Promise<void> {
		const url = `https://api.trakt.tv/oauth/token`

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				code,
				client_id: this.configService.client_id,
				client_secret: this.configService.client_secret,
				redirect_uri: this.configService.redirect_url,
				grant_type: 'authorization_code',
			}),
		})

		const data: AuthResponse = await response.json()
		if (data.access_token) {
			this.storage.set(`${this.configService.storage_prefix}.access_token`, data.access_token)
		}

		window.location.href = '/'
	}
}

export default OAuthService
