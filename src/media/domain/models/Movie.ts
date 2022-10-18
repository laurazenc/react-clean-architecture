import Track from './Track'
import Image from './Image'

interface MovieProps {
	id: number
	title: string
	slug: string
	year: number
	image: Image
	track: Track
}

class Movie {
	id: number
	title: string
	slug: string
	year: number
	image: Image
	track: Track
	constructor(movie: MovieProps) {
		this.id = movie.id
		this.title = movie.title
		this.slug = movie.slug
		this.year = movie.year
		this.image = movie.image
		this.track = movie.track
	}
}

export default Movie
