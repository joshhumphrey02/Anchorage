import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type IUser } from "../@types";
import profilePix from "@/assets/logos/profile svg.png";

const initialState: IUser = {
	id: "",
	name: "",
	email: "",
	verified: false,
	logged: "checking",
	image: profilePix,
};

export const storeSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
			return {
				...state,
				image:
					action.payload.image !== undefined
						? action.payload.image
						: profilePix,
				...action.payload,
			};
		},
	},
});

export const { updateUser } = storeSlice.actions;

export default storeSlice.reducer;
