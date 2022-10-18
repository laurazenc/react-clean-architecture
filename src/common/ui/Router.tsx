import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route index path='/callback' element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
