import Movie from 'media/domain/models/Movie'

const TrendingMovies = ({ movies = [] }: { movies: Movie[] }) => {
	return (
		<section className='md:space-y-24'>
			<div className='min-h-[100px] space-y-0.5 md:space-y-2'>
				<h2 className='w-56 cursor-pointer font-semibold text-white transition-colors duration-200 py-2'>
					Trending Movies
				</h2>
				<div className='group relative md:-ml-2'>
					<div className='flex items-start scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>
						{movies.map((movie) => (
							<div
								key={movie.slug}
								className='relative h-360 min-w-[120px] cursor-pointer transition-transform duration-200 ease-out md:h-360 md:min-w-[120px] md:hover:scale-105'
							>
								<div className='relative min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80 drop-shadow-sm inset-0'>
									<img
										src={movie.image.backdrop}
										className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										alt={movie.title}
									/>
									<span className='absolute bottom-2 left-2 md:bottom-1 md:left-1 bg-red-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-500 dark:text-white '>
										{movie.track.watchers} people watching
									</span>
								</div>
								<div className='font-semibold text-lg mt-4'>{movie.title}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrendingMovies
