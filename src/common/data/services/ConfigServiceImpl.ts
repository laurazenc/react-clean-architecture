import ConfigService from 'common/domain/services/ConfigService'
import { injectable } from 'inversify'

@injectable()
class ConfigServiceImpl implements ConfigService {
	base_url: string
	client_id: string
	client_secret: string
	trakt_api_version: number
	redirect_url: string
	storage_prefix: string
	tmdb_api_url: string
	tmdb_api_key: string
	tmdb_image_url: string

	constructor() {
		this.base_url = this.getUrl()
		this.client_id = this.getClientId()
		this.client_secret = this.getClientSecret()
		this.trakt_api_version = 2
		this.redirect_url = this.getRedirectUrl()
		this.storage_prefix = '@box_tracker'
		this.tmdb_api_url = this.getTMDBUrl()
		this.tmdb_api_key = this.getTMDBKey()
		this.tmdb_image_url = 'https://image.tmdb.org'
	}

	private getUrl() {
		return import.meta.env.VITE_TRAKT_API_URL
	}
	private getClientId() {
		return import.meta.env.VITE_TRAKT_CLIENT_ID
	}
	private getClientSecret() {
		return import.meta.env.VITE_TRAKT_CLIENT_SECRET
	}
	private getRedirectUrl() {
		return import.meta.env.VITE_AUTH_CALLBACK
	}
	private getTMDBUrl() {
		return import.meta.env.VITE_TMDB_API_URL
	}
	private getTMDBKey() {
		return import.meta.env.VITE_TMDB_API_KEY
	}
}

export default ConfigServiceImpl
