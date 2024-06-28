import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios";
import { apiRequests, endpoints, platformTypes } from "../../helper/apirequests";

const initialState = {
    nowPlayingMovies: {
        status: "idle",
        data: null,
        error: null
    },
    popularMovies: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchNowPlayingMovies = createAsyncThunk(
    'movie/fetchNowPlayingMovies',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.movie, endpoints.nowPlaying));
        return response.data
    }
)

export const fetchPopularMovies = createAsyncThunk(
    'movie/popular',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.movie, endpoints.popular));
        return response.data
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNowPlayingMovies.pending, (state) => {
                state.nowPlayingMovies.status = "loading";
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.nowPlayingMovies.status = "success";
                state.nowPlayingMovies.data = action.payload;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
                state.nowPlayingMovies.status = "failed";
                state.nowPlayingMovies.error = action.error;
            })
            .addCase(fetchPopularMovies.pending, (state) => {
                state.popularMovies.status = "loading";
            })
           .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.popularMovies.status = "success";
                state.popularMovies.data = action.payload;
            })
           .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.popularMovies.status = "failed";
                state.popularMovies.error = action.error;
            });
    },

    
});

export const selectNowPlayingMovies = (state) => state.movie.nowPlayingMovies;
export const selectPopularMovies = (state) => state.movie.popularMovies;


export default movieSlice.reducer;



// air tv movie current playing