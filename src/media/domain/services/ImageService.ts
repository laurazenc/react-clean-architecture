import Image from 'media/domain/models/Image'

interface ImageService {
	getImages(id: string): Promise<Image>
}

export default ImageService
