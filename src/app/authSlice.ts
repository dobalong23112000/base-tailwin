import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authApi from '../api/petro/authApi';
import PreferenceKeys from '../general/constants/PreferenceKeys';
import { updateAxiosAccessToken } from '../api/axiosClient';
interface UserInfoResponse {
  result: 'success' | 'failed';
  account?: {
    username: string;
    email: string;
    accessToken?: string;
    expirationDateToken?: string;
  };
}

// MARK: --- Thunks ---
// Sign in
export const thunkSignIn = createAsyncThunk('auth/signIn', async (params) => {
  const res = await authApi.signIn(params);
  return res.data;
});



// Get current user info
export const thunkGetCurrentUserInfo = createAsyncThunk(
  'auth/getCurrentUserInfo',
  async (params) => {
    const res = await authApi.getCurrentUserInfo(params);
    return res.data;
  }
);

// Sign out
export const thunkSignOut = createAsyncThunk('auth/signOut', async function (params) {
  const res = await authApi.signOut(params);
  return res;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isSigningIn: false,
    current: {},
  },
  reducers: {
    signOut: (state) => {
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Sign in
    builder
      .addCase(thunkSignIn.pending, (state) => {
        state.isSigningIn = true;
      })
      .addCase(thunkSignIn.rejected, (state) => {
        state.isSigningIn = false;
      })
      .addCase(thunkSignIn.fulfilled, (state, action: PayloadAction<UserInfoResponse>) => {
        state.isSigningIn = false;
        const { result, account } = action.payload;

        if (result === 'success' && account) {
          state.current = account;

          if (account.accessToken) {
            localStorage.setItem(PreferenceKeys.accessToken, account.accessToken);
            updateAxiosAccessToken(account.accessToken);
          }

          if (account.expirationDateToken) {
            localStorage.setItem(PreferenceKeys.accessTokenExpired, account.expirationDateToken);
          }
        }
      });

    // Get current user info
    builder
      .addCase(thunkGetCurrentUserInfo.pending, (state) => {
        state.isSigningIn = true;
      })
      .addCase(thunkGetCurrentUserInfo.rejected, (state) => {
        state.isSigningIn = false;
      })
      .addCase(thunkGetCurrentUserInfo.fulfilled, (state, action: PayloadAction<UserInfoResponse>) => {
        state.isSigningIn = false;
        const { result, account } = action.payload;

        if (result === 'success' && account) {
          state.current = account;

          if (account.accessToken) {
            localStorage.setItem(PreferenceKeys.accessToken, account.accessToken);
          }

          if (account.expirationDateToken) {
            localStorage.setItem(PreferenceKeys.accessTokenExpired, account.expirationDateToken);
          }
        }
      });

    // Sign out
    builder.addCase(thunkSignOut.fulfilled, (state, action) => {
      const data = action.payload;
      if (data) {
        state.current = {};
      }

      // UserHelper.signOut();
      window.location.href = '/sign-in';
    });
  },
});

const { reducer, actions } = authSlice;
export const { signOut } = actions;
export default reducer;
