import { useQuery } from '@tanstack/react-query'
import { container } from 'common/config/di'
import Movie from 'media/domain/models/Movie'
import GetTrendingMoviesUseCase from 'media/domain/useCases/getTrendingMovies'
import { useMemo } from 'react'

function HomeViewModel() {
	const getTrendingMoviesUseCase = useMemo(
		() => container.get<GetTrendingMoviesUseCase>('GetTrendingMoviesUseCase'),
		[],
	)

	const trendingMovies = useQuery<Movie[]>(['TRENDING_MOVIES'], () =>
		getTrendingMoviesUseCase.execute(),
	)

	return {
		trendingMovies,
	}
}

export default HomeViewModel
