import HttpManager from 'common/data/protocols/http'
import ConfigService from 'common/domain/services/ConfigService'
import { inject, injectable } from 'inversify'
import Movie from 'media/domain/models/Movie'
import Show from 'media/domain/models/Show'
import Track from 'media/domain/models/Track'
import ShowRepository from 'media/domain/repositories/MovieRepository'
import ImageService from 'media/domain/services/ImageService'

type TrendingShowsResponse = {
	watchers: number
	show: {
		title: string
		year: number
		ids: {
			trakt: number
			slug: string
			tmdb: number
		}
	}
}

@injectable()
class TraktShowRepository implements ShowRepository {
	constructor(
		@inject('AxiosHttpManager') private http: HttpManager,
		@inject('ConfigService') private configService: ConfigService,
		@inject('ImageService') private imagesService: ImageService,
	) {}
	async getTrending(): Promise<Movie[]> {
		try {
			const { data } = await this.http.get<TrendingShowsResponse[]>(
				`${this.configService.base_url}/shows/trending?limit=5`,
			)

			console.log(data)

			const shows = await Promise.all(
				data.map(async (show: TrendingShowsResponse) => {
					const track = new Track({ watchers: show.watchers })
					const image = await this.getImage(show.show.ids.tmdb.toString())
					console.log(image)

					return new Show({
						id: show.show.ids.trakt,
						slug: show.show.ids.slug,
						title: show.show.title,
						year: show.show.year,
						track,
						image,
					})
				}),
			)

			return shows
		} catch (e) {
			throw new Error()
		}
	}
	private async getImage(tmdbid: string) {
		return this.imagesService.getImages(tmdbid, 'tv')
	}
}

export default TraktShowRepository
