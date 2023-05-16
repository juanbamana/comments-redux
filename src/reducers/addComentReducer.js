const initialProps ={

    comments: []

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialProps, action) {


    switch(action.type) {

        case "ADD_COMMENT":
            return{
                ...state,
                comments:[...state.comments, action.payload] 
            };

            default:
                return state;
}
}