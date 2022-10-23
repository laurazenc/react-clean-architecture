import Track from './Track'
import Image from './Image'

interface ShowProps {
	id: number
	title: string
	slug: string
	year: number
	image: Image
	track: Track
}

class Show {
	id: number
	title: string
	slug: string
	year: number
	image: Image
	track: Track
	constructor(movie: ShowProps) {
		this.id = movie.id
		this.title = movie.title
		this.slug = movie.slug
		this.year = movie.year
		this.image = movie.image
		this.track = movie.track
	}
}

export default Show
