interface AuthService {
	authorize(): void
	getToken(code: string): Promise<void>
}

export default AuthService
