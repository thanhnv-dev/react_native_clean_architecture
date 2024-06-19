import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {LoginUseCase} from 'features/auth/application/LoginUseCase';
import AuthRespositoriesImpl from 'features/auth/data/repositories/authRespositoriesImpl';
import {RootState} from 'redux/store';
import {AuthSliceState} from './types';

type LoginActionProps = {
    email: string;
    password: string;
};

export const loginAction: any = createAsyncThunk(
    'auth/login',
    async ({email, password}: LoginActionProps, {rejectWithValue}) => {
        try {
            const authRespositoriesImpl = new AuthRespositoriesImpl();
            const loginUseCase = new LoginUseCase(authRespositoriesImpl);
            const res = loginUseCase.execute(email, password);

            return res;
        } catch (error: any) {
            return rejectWithValue(error?.response);
        }
    },
);

const initialState: AuthSliceState = {
    user: null,
    loading: false,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<AuthSliceState>) => {
        builder.addCase(
            loginAction.fulfilled,
            (state: AuthSliceState, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload;
            },
        );
    },
});

export const getScale = (state: RootState) => state?.auth?.scale;

export default authSlice.reducer;
