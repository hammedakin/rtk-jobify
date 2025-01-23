import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";



const initialState = {
      isLoading: false,
      isSideBarOpen: false,
      user: getUserFromLocalStorage(),

};

export const registerUser = createAsyncThunk(
      'user/registerUser',
      async (user, thunkAPI) => {
            try {
                  const res = await customFetch.post('/auth/register', user);
                  return res.data;
            } catch (error) {
                  return thunkAPI.rejectWithValue(error.response.data.msg);
            }
      });

export const loginUser = createAsyncThunk(
      'user/loginUser',
      async (user, thunkAPI) => {
            try {
                  const res = await customFetch.post('/auth/login', user);
                  return res.data;
            } catch (error) {
                  return thunkAPI.rejectWithValue(error.response.data.msg);
            }
      });


const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {
            logoutUser: (state) => {
                  state.user = null;
                  state.isSideBarOpen = false;
                  removeUserFromLocalStorage();
            },
            toggleSidebar: (state) => {
                  state.isSideBarOpen = !state.isSideBarOpen;
            }
      },
      extraReducers: (builder) => {

            // Register User
            builder
                  .addCase(
                        registerUser.pending, (state) => {
                              state.isLoading = true;
                        })
                  .addCase(
                        registerUser.fulfilled, (state, { payload }) => {
                              console.log(payload);

                              const { user } = payload;
                              state.isLoading = false;
                              state.user = user;
                              addUserToLocalStorage(user);
                              toast.success(`Hello there ${ user.name }`);
                        })
                  .addCase(
                        registerUser.rejected, (state, action) => {
                              state.isLoading = false;
                              toast.error(action.payload);
                        });

            // Login User
            builder
                  .addCase(
                        loginUser.pending, (state) => {
                              state.isLoading = true;
                        })
                  .addCase(
                        loginUser.fulfilled, (state, { payload }) => {

                              const { user } = payload;
                              state.isLoading = false;
                              state.user = user;
                              addUserToLocalStorage(user);
                              toast.success(`Welcome back ${ user.name }`);
                        })
                  .addCase(
                        loginUser.rejected, (state, action) => {
                              state.isLoading = false;
                              toast.error(action.payload);
                        });
      },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;