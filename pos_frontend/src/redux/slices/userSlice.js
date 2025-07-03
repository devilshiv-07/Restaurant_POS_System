import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    name: "Devilshiv",
    email : "",
    phone: "",
    role: "Admin",
    isAuth: false,
    logoutInProgress: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { _id, name, phone, email, role  } = action.payload;
            state._id = _id;
            state.name = name;
            state.phone = phone;
            state.email = email;
            state.role = role;
            state.isAuth = true;
            state.logoutInProgress = false;
        },

        removeUser: (state) => {
            state._id = "";
            state.email = "";
            state.name = "";
            state.phone = "";
            state.role = "";
            state.isAuth = false;
            state.logoutInProgress = false;
        },

        setLogoutInProgress: (state, action) => {
            state.logoutInProgress = action.payload;
        }
    }
})

export const { setUser, removeUser, setLogoutInProgress } = userSlice.actions;
export default userSlice.reducer;