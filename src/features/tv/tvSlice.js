import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import instance from "../../helper/axios";
import { act } from "react";
import { apiRequests, endpoints, platformTypes } from "../../helper/apirequests";

const initialState = {
    netflixOrginals: {
        status: "idle",
        data: null,
        error: null
    },
    popularTv: {
        status: "idle",
        data: null,
        error: null
    },
    topRated: {
        status: "idle",
        data: null,
        error: null
    },
    onAir: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
        const response = await instance.get(apiRequests.getNetflixOriginals);
        return response.data;
    }
)

export const fetchPopularTv = createAsyncThunk(
    'tv/popular',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.tv, endpoints.popular));
        return response.data
    }
)


export const fetchTopRated = createAsyncThunk(
    'tv/topRated',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.tv, endpoints.topRated));
        return response.data
    }
)


export const fetchOnTheAir = createAsyncThunk(
    'tv/onAir',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.tv, endpoints.onTheAir));
        return response.data
    }
)







export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOriginals.pending, (state) => {
                state.netflixOrginals.status = "loading";
            })
            .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
                state.netflixOrginals.status = "success";
                state.netflixOrginals.data = action.payload;
            })
            .addCase(fetchPopularTv.pending, (state) => {
                state.popularTv.status = "loading";
            })
           .addCase(fetchPopularTv.fulfilled, (state, action) => {
                state.popularTv.status = "success";
                state.popularTv.data = action.payload;
            })
           .addCase(fetchPopularTv.rejected, (state, action) => {
                state.popularTv.status = "failed";
                state.popularTv.error = action.error;
            })
            .addCase(fetchTopRated.pending, (state) => {
                state.topRated.status = "loading";
            })
           .addCase(fetchTopRated.fulfilled, (state, action) => {
                state.topRated.status = "success";
                state.topRated.data = action.payload;
            })
           .addCase(fetchTopRated.rejected, (state, action) => {
                state.topRated.status = "failed";
                state.topRated.error = action.error;
            })
            
            .addCase(fetchOnTheAir.pending, (state) => {
                state.onAir.status = "loading";
            })
           .addCase(fetchOnTheAir.fulfilled, (state, action) => {
                state.onAir.status = "success";
                state.onAir.data = action.payload;
            })
           .addCase(fetchOnTheAir.rejected, (state, action) => {
                state.onAir.status = "failed";
                state.onAir.error = action.error;
            })
            
            
            ;
            
    }
});

export const selectNetflixOrginals = (state) => state.tv.netflixOrginals;
export const selectpopularTv = (state) => state.tv.popularTv;
export const selectTopRatedTv = (state) => state.tv.topRated;
export const selectOnAir = (state) => state.tv.onAir;




export default tvSlice.reducer;