import Movie from 'media/domain/models/Movie'

interface MovieRepository {
	getTrending(): Promise<Movie[]>
}

export default MovieRepository
