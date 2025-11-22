import { getString, removeKey, setString } from '@config/mmkv';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isSignedIn: boolean;
  access_token: string | null;
  refresh_token: string | null;
  isFirstTime?: boolean;
  profileId?: number;
  referralCode?: string;
  isReferral?: boolean;
  idp?: string;
  isFirstNavigate?: boolean;
}

export enum TokenType {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

const initialState: AuthState = {
  isSignedIn: !!getString(TokenType.ACCESS_TOKEN),
  access_token: getString(TokenType.ACCESS_TOKEN),
  refresh_token: getString(TokenType.REFRESH_TOKEN),
  isFirstTime: false,
  profileId: undefined,
  referralCode: undefined,
  isReferral: false,
  idp: undefined,
  isFirstNavigate: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      state.isSignedIn = !!access_token;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      if (access_token) {
        setString(TokenType.ACCESS_TOKEN, access_token);
      }
      if (refresh_token) {
        setString(TokenType.REFRESH_TOKEN, refresh_token);
      }
    },
    setFirstTime: (state, action) => {
      state.isFirstTime = action.payload;
    },
    setProfileId: (state, action) => {
      state.profileId = action.payload;
    },
    removeToken: state => {
      state.isSignedIn = false;
      state.access_token = null;
      state.refresh_token = null;
      state.profileId = undefined;
      removeKey(TokenType.ACCESS_TOKEN);
      removeKey(TokenType.REFRESH_TOKEN);
    },
    setReferralCode: (state, action) => {
      state.referralCode = action.payload;
    },
    setIsReferral: (state, action) => {
      state.isReferral = action.payload;
    },
    setIdp: (state, action) => {
      state.idp = action.payload;
    },
    setIsFirstNavigate: (state, action) => {
      state.isFirstNavigate = action.payload;
    },
  },
});

export const {
  setToken,
  removeToken,
  setFirstTime,
  setProfileId,
  setReferralCode,
  setIsReferral,
  setIdp,
  setIsFirstNavigate,
} = authSlice.actions;

export default authSlice.reducer;
