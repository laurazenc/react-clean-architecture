interface ImageProps {
	poster: string
	backdrop: string
}

class Image {
	poster: string
	backdrop: string
	constructor(image: ImageProps) {
		this.poster = image.poster
		this.backdrop = image.backdrop
	}
}

export default Image
