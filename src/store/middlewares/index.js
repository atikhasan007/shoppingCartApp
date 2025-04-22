// export const ourMiddleware = (store) => (next) => async (action) => {
//     // console.log(JSON.stringify(store.getState()), "store state");
//     // console.log(action, "action");

   

//      if (typeof action === 'function'){
//         action(store.dispatch);
//         return;

//      }


//      next(action);
// };





 export const fetchPost = async (dispatch) => {
    dispatch({
        type: "post/fetchStarted",
    });

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data = await res.json();

        dispatch({
            type: "post/fetchSuccess",
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: "post/fetchFailed",
            payload: err.message,
        });
    }
}



 export const fetchUser = async (dispatch) => {

    dispatch({
        type: "user/fetchStarted",
    });

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
        const data = await res.json();
     
        dispatch({
            type: "user/fetchSuccess",
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: "user/fetchFailed",
            payload: err.message,
        });
    }
    

}