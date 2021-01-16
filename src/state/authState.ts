export const authStore = (state: any) => {
	return {
		...state,
		auth: {
			status: false
		}
	};
};
