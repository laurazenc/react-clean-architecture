import Image from 'media/domain/models/Image'

interface ImageService {
	getImages(id: string, media: 'movie' | 'tv'): Promise<Image>
}

export default ImageService
