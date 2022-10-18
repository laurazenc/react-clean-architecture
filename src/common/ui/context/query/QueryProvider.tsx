import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			keepPreviousData: true,
			retry: false,
		},
	},
})

const QueryProvider = ({
	children,
	...props
}: PropsWithChildren<Partial<QueryClientProviderProps>>) => {
	return (
		<QueryClientProvider {...props} client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default QueryProvider
