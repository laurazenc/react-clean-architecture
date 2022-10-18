import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import HttpManager from 'common/data/protocols/http'
import ConfigService from 'common/domain/services/ConfigService'
import { inject, injectable } from 'inversify'
import Movie from 'media/domain/models/Movie'
import Track from 'media/domain/models/Track'
import MovieRepository from 'media/domain/repositories/MovieRepository'
import ImageService from 'media/domain/services/ImageService'

type TrendingMoviesResponse = {
	watchers: number
	movie: {
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
class TraktMovieRepository implements MovieRepository {
	constructor(
		@inject('AxiosHttpManager') private http: HttpManager,
		@inject('ConfigService') private configService: ConfigService,
		@inject('ImageService') private imagesService: ImageService,
	) {}
	async getTrending(): Promise<Movie[]> {
		const { data } = await this.http.get<TrendingMoviesResponse[]>(
			`${this.configService.base_url}/movies/trending?limit=5`,
		)

		const movies = await Promise.all(
			data.map(async (movie: TrendingMoviesResponse) => {
				const track = new Track({ watchers: movie.watchers })
				const image = await this.getImage(movie.movie.ids.tmdb.toString())

				return new Movie({
					id: movie.movie.ids.trakt,
					slug: movie.movie.ids.slug,
					title: movie.movie.title,
					year: movie.movie.year,
					track,
					image,
				})
			}),
		)

		return movies
	}
	private async getImage(tmdbid: string) {
		return this.imagesService.getImages(tmdbid)
	}
}

export default TraktMovieRepository
