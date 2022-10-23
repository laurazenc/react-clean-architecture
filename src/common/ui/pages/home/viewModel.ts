import { useQuery } from '@tanstack/react-query'
import { container } from 'common/config/di'
import Movie from 'media/domain/models/Movie'
import Show from 'media/domain/models/Show'
import GetTrendingMoviesUseCase from 'media/domain/useCases/getTrendingMovies'
import GetTrendingShowsUseCase from 'media/domain/useCases/getTrendingShows'
import { useMemo } from 'react'

function HomeViewModel() {
	const getTrendingMoviesUseCase = useMemo(
		() => container.get<GetTrendingMoviesUseCase>('GetTrendingMoviesUseCase'),
		[],
	)
	const getTrendingShowsUseCase = useMemo(
		() => container.get<GetTrendingShowsUseCase>('GetTrendingShowsUseCase'),
		[],
	)

	const trendingMovies = useQuery<Movie[]>(['TRENDING_MOVIES'], () =>
		getTrendingMoviesUseCase.execute(),
	)
	const trendingShows = useQuery<Show[]>(['TRENDING_SHOWS'], () =>
		getTrendingShowsUseCase.execute(),
	)

	return {
		trendingMovies,
		trendingShows,
	}
}

export default HomeViewModel
