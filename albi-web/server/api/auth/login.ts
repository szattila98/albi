interface LoginRequest {
	indentifier: string;
	password: string;
}

export default defineEventHandler(async (event) => {
	const body = await readBody<LoginRequest>(event);
});
