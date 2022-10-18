import { Container } from 'inversify'
import TraktMovieRepository from 'media/data/repositories/TraktMovieRepository'
import MovieRepository from 'media/domain/repositories/MovieRepository'
import GetTrendingMoviesUseCase from 'media/domain/useCases/getTrendingMovies'
import ConfigService from 'common/domain/services/ConfigService'
import HttpManager from 'common/data/protocols/http'
import AxiosHttpManager from 'common/infrastructure/TraktHttpManager'
import AuthService from 'common/domain/services/AuthService'
import OAuthService from 'common/data/services/OAuthService'
import ConfigServiceImpl from 'common/data/services/ConfigServiceImpl'
import LocalStorage from 'common/infrastructure/LocalStorage'
import StorageDispatcher from 'common/data/protocols/storage'
import ImageService from 'media/domain/services/ImageService'
import ImageServiceImpl from 'media/data/services/ImageService'
import TMDBHttpManager from 'common/infrastructure/TMDBHttpManager'

const container = new Container()

// use cases
container.bind<GetTrendingMoviesUseCase>('GetTrendingMoviesUseCase').to(GetTrendingMoviesUseCase)

// repositories
container.bind<MovieRepository>('MovieRepository').to(TraktMovieRepository)

// services
container.bind<ConfigService>('ConfigService').to(ConfigServiceImpl)
container.bind<AuthService>('AuthService').to(OAuthService)
container.bind<ImageService>('ImageService').to(ImageServiceImpl)

// infra
container.bind<HttpManager>('AxiosHttpManager').to(AxiosHttpManager)
container.bind<HttpManager>('TMDBHttpManager').to(TMDBHttpManager)
container.bind<StorageDispatcher>('StorageDispatcher').to(LocalStorage)

export { container }
