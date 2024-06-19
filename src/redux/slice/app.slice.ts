import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ThemeKey from 'constants/enum/theme.key';
import {RootState} from 'redux/store';

type AppSliceType = {
    scale: number;
    themeMode: ThemeKey;
};

const initialState: AppSliceType = {
    scale: 1,
    themeMode: ThemeKey.light,
};

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers: {
        setScale: (state, action: PayloadAction<number>) => {
            state.scale = action.payload;
        },
        setTheme: (state, action: PayloadAction<ThemeKey>) => {
            state.themeMode = action.payload;
        },
    },
    extraReducers: () => {},
});

export const {setScale, setTheme} = appSlice.actions;

export const getScale = (state: RootState) => state.app.scale;
export const getThemeMode = (state: RootState) => state.app.themeMode;

export default appSlice.reducer;
