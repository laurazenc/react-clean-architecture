import { memo, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import HomeViewModel from './viewModel'

const Home = memo(() => {
	const rowRef = useRef<HTMLDivElement>(null)
	const [isMoved, setIsMoved] = useState(false)

	const viewModel = HomeViewModel()

	const handleClick = (direction: string) => {
		setIsMoved(true)

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current

			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
		}
	}
	return (
		<main className='relative pb-24 lg:space-y-24'>
			<section className='md:space-y-24'>
				<div className='min-h-[100px] space-y-0.5 md:space-y-2'>
					<h2 className='w-56 cursor-pointer text-sm font-semibold text-gray-900 transition-colors duration-200  md:text-2xl'>
						Trending
					</h2>
					<div className='group relative md:-ml-2'>
						<ChevronLeftIcon
							className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
								!isMoved && 'hidden'
							}`}
							onClick={() => handleClick('left')}
						/>

						<div
							ref={rowRef}
							className='flex items-start scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'
						>
							{viewModel.trendingMovies.data?.map((movie) => (
								<div
									key={movie.slug}
									className='relative h-360 min-w-[120px] cursor-pointer transition-transform duration-200 ease-out md:h-360 md:min-w-[120px] md:hover:scale-105'
								>
									<div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80'>
										<img
											src={movie.image.backdrop}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
											alt={movie.title}
										/>
									</div>
									<div className='font-semibold text-lg mt-4'>{movie.title}</div>
								</div>
							))}
						</div>

						<ChevronRightIcon
							className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
							onClick={() => handleClick('right')}
						/>
					</div>
				</div>
			</section>
		</main>
	)
})

Home.displayName = 'Home'

export default Home
