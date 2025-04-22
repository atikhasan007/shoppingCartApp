

// const initState = {
//     isLoading : true,
//     users: [],
//     errorMessage: "",


// }


// export const userReducer  = (state=initState, action)=>{
//     switch (action.type){
//         case "user/fetchStarted" : {
//             return {
//                 ...state,
//                 isLoading : true,
//                 errorMessage: null,


//             }
//         }


//       case "user/fetchSuccess" : {
//         return {
//             ...state,
//             isLoading : false,
//             users: action.payload,
//             errorMessage : null,


//         }
//       }


//       case "user/fetchFailed" : {
//         return {
//             ...state,
//             isLoading : false,
            
//             errorMessage : action.payload,

//         }
//       }


//         default: {
//             return state;
            
//         }


//     }
// }









import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserList = createAsyncThunk("fetchUsers", async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
    const data = await res.json();
    
    return data;
})



const initState = {
    isLoading : true,
    users: [],
    errorMessage: "",
}


export const userSlice = createSlice({
    name : "user",
    initialState: initState,
    reducers: {},
    extraReducers : (builder ) => {
        builder.addCase(fetchUserList.pending, (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        })
        builder.addCase(fetchUserList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.errorMessage = null;
        })
        builder.addCase(fetchUserList.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;    
        })
    }
})


export default userSlice.reducer;
