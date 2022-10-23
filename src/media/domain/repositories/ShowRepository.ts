import Show from 'media/domain/models/Show'

interface ShowRepository {
	getTrending(): Promise<Show[]>
}

export default ShowRepository
