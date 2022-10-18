import UseCase from 'common/domain/useCases/UseCase'
import { inject, injectable } from 'inversify'
import Movie from 'media/domain/models/Movie'
import MovieRepository from 'media/domain/repositories/MovieRepository'

@injectable()
class GetTrendingMoviesUseCase implements UseCase<null, Promise<Movie[]>> {
	constructor(@inject('MovieRepository') private movieRepository: MovieRepository) {}
	async execute(): Promise<Movie[]> {
		return this.movieRepository.getTrending()
	}
}

export default GetTrendingMoviesUseCase
