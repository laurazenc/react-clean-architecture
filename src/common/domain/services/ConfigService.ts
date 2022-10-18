interface ConfigService {
	base_url: string
	client_id: string
	client_secret: string
	trakt_api_version: number
	redirect_url: string
	storage_prefix: string
	tmdb_api_url: string
	tmdb_api_key: string
	tmdb_image_url: string
}

export default ConfigService
