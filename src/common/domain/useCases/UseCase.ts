interface UseCase<Request, Response> {
	execute(request?: Request): Response
}

export default UseCase
