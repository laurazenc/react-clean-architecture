import { useSearchParams } from 'react-router-dom'
import LoginViewModel from './viewModel'

const Login = () => {
	const [urlParams] = useSearchParams()
	const viewModel = LoginViewModel()

	if (urlParams.get('code')) {
		viewModel.getToken(urlParams.get('code') as string)
	}

	return <div>loading</div>
}

export default Login
