import { Container } from 'inversify'
import { createContext, ReactNode } from 'react'

export const InversifyContext = createContext<{ container: Container | null }>({ container: null })

type InversifyProviderProps = {
	container: Container
	children: ReactNode
}

export const InversifyProvider = ({ container, children }: InversifyProviderProps) => {
	return <InversifyContext.Provider value={{ container }}>{children}</InversifyContext.Provider>
}
