import 'reflect-metadata'

import { container } from 'common/config/di'
import { InversifyProvider } from 'common/ui/context/inversify/InversifyProvider'
import { Router } from './Router'
import QueryProvider from './context/query/QueryProvider'

function App() {
	return (
		<InversifyProvider container={container}>
			<QueryProvider>
				<div className={`relative h-screen bg-gradient-to-b lg:h-[140vh] px-8 py-8`}>
					<Router />
				</div>
			</QueryProvider>
		</InversifyProvider>
	)
}

export default App
