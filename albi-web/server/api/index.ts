export default defineEventHandler((event) => {
	setResponseStatus(event, 200);
	return {
		status: 'App is healthy!'
	};
});
