import UseCase from 'common/domain/useCases/UseCase'
import { inject, injectable } from 'inversify'

import Show from 'media/domain/models/Show'
import ShowRepository from 'media/domain/repositories/ShowRepository'

@injectable()
class GetTrendingShowsUseCase implements UseCase<null, Promise<Show[]>> {
	constructor(@inject('ShowRepository') private showRepository: ShowRepository) {}
	async execute(): Promise<Show[]> {
		return this.showRepository.getTrending()
	}
}

export default GetTrendingShowsUseCase
