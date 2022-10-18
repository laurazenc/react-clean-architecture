import HttpManager from 'common/data/protocols/http'
import ConfigService from 'common/domain/services/ConfigService'
import { inject, injectable } from 'inversify'
import Image from 'media/domain/models/Image'
import ImageService from 'media/domain/services/ImageService'

@injectable()
class ImageServiceImpl implements ImageService {
	constructor(
		@inject('TMDBHttpManager') private http: HttpManager,
		@inject('ConfigService') private configService: ConfigService,
	) {}
	async getImages(id: string): Promise<Image> {
		const { data } = await this.http.get(
			`${this.configService.tmdb_api_url}/movie/${id}?api_key=${this.configService.tmdb_api_key}`,
		)
		return new Image({
			backdrop: `${this.configService.tmdb_image_url}/t/p/w500${data.backdrop_path}`,
			poster: `${this.configService.tmdb_image_url}/t/p/w500${data.poster_path}`,
		})
	}
}

export default ImageServiceImpl
