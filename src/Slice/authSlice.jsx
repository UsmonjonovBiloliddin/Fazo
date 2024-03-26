import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null,
};

const authService = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signUserStart: (state) => {
			state.isLoading = true;
		},
		signUserSuccess: (state, actions) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = actions.payload;
			state.error = null
		},
		signUserError: (state , actions) => {
			state.isLoading = false;
			state.error = actions.payload
		},
		loginUserStart: (state) => {
			state.isLoading = true;
		},
		loginUserSuccess: (state, actions) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = actions.payload;
			state.error = null
		},
		loginUserError: (state , actions) => {
			state.isLoading = false;
			state.error = actions.payload
		},

		logoutUser: state => {
			state.loggedIn = false;
			state.user = null;
		}
	},
});

export const {
	signUserStart,
    signUserSuccess,
    signUserError,
	loginUserStart,
    loginUserSuccess,
    loginUserError,
	logoutUser
} = authService.actions;

export default authService.reducer;
