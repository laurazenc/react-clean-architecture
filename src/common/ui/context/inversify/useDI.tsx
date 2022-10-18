import { interfaces } from 'inversify'
import { useContext } from 'react'
import { InversifyContext } from './InversifyProvider'

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
	const { container } = useContext(InversifyContext)
	if (!container) {
		throw new Error()
	}
	return container.get<T>(identifier)
}
