import TrendingMovies from 'media/ui/TrendingMovies/TrendingMovies'
import TrendingShows from 'media/ui/TrendingShows/TrendingShows'
import { memo } from 'react'
import HomeViewModel from './viewModel'

const Home = memo(() => {
	const { trendingMovies, trendingShows } = HomeViewModel()
	return (
		<main className='relative pb-24 lg:space-y-24'>
			<TrendingMovies movies={trendingMovies.data || []} />
			<TrendingShows shows={trendingShows.data || []} />
		</main>
	)
})

Home.displayName = 'Home'

export default Home
