import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

interface ProductsState {
    data: Products | null;
    loading: boolean;
    error: string;
}

const initialState: ProductsState = {
    data: null,
    loading: false,
    error: ""
}

export const fetchProductsData = createAsyncThunk("fetchProduct", async () => {
    const response = await axios.get<Products>("https://upayments-studycase-api.herokuapp.com/api/products/",
        { headers: { "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY2VzZWxpbTkxQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9pbmNlc2VsaW0iLCJpYXQiOjE2NjUzMzMwMzIsImV4cCI6MTY2NTc2NTAzMn0.1bMrRfs2CKsYdneY41HChRbBuSryXfgCpLoQ16cr8Lc"}` } })
    return response.data.products;
})

const productsSlice = createSlice({
    name: "productsData",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchProductsData.fulfilled, (state, action: PayloadAction<Products>) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchProductsData.rejected, (state, action) => {
            state.loading = false;
            state.error = "Fetch Error !"
        })
    }
})

export default productsSlice.reducer;


export interface Products {
    products: any;
    map: any;
    __v: number;
    _id: string;
    avatar: string;
    category: string;
    createdAt: Date;
    description: string;
    developerEmail: string;
    name: string;
    price: number;
    updatedAt: Date;
}

export type Post = {
    name: string,
    price: number,
    description: string,
    avatar: string,
    category: string,
    developerEmail: string
}

function addPost(data: any): any {
    throw new Error('Function not implemented.');
}
