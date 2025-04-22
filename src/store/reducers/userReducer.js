

const initState = {
    isLoading : true,
    users: [],
    errorMessage: "",


}


export const userReducer  = (state=initState, action)=>{
    switch (action.type){
        case "user/fetchStarted" : {
            return {
                ...state,
                isLoading : true,
                errorMessage: null,


            }
        }


      case "user/fetchSuccess" : {
        return {
            ...state,
            isLoading : false,
            users: action.payload,
            errorMessage : null,


        }
      }


      case "user/fetchFailed" : {
        return {
            ...state,
            isLoading : false,
            
            errorMessage : action.payload,

        }
      }


        default: {
            return state;
            
        }


    }
}

