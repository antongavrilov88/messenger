export const userStore = (state: any) => {
	return {
		...state,
		user: {
			userData: null,
			userID: null,
			error: null
		}
	};
};
