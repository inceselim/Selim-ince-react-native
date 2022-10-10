import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

interface CategoriesState {
    data: Categories | null;
    loading: boolean;
    error: string;
}

const initialState: CategoriesState = {
    data: null,
    loading: false,
    error: ""
}

export const fetchCategoriesData = createAsyncThunk("fetchCategories", async () => {
    const response = await axios.get<Categories>("https://upayments-studycase-api.herokuapp.com/api/categories/",
        { headers: { "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY2VzZWxpbTkxQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9pbmNlc2VsaW0iLCJpYXQiOjE2NjUzMzMwMzIsImV4cCI6MTY2NTc2NTAzMn0.1bMrRfs2CKsYdneY41HChRbBuSryXfgCpLoQ16cr8Lc"}` } })
    return response.data.categories;
})

const categoriesSlice = createSlice({
    name: "categoriesData",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCategoriesData.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchCategoriesData.fulfilled, (state, action: PayloadAction<Categories>) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchCategoriesData.rejected, (state, action) => {
            state.loading = false;
            state.error = "Fetch Error !"
        })
    }
})

export default categoriesSlice.reducer;


export interface Categories {
    categories: any;
    map: any;
    __v: number;
    _id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
}