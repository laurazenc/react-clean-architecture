import AuthService from 'common/domain/services/AuthService'
import { useInjection } from 'common/ui/context/inversify/useDI'

function LoginViewModel() {
	const authService = useInjection<AuthService>('AuthService')

	const getToken = (code: string) => authService.getToken(code)

	return {
		getToken,
	}
}

export default LoginViewModel
