const initialProps ={

    stateModalAddComment: false

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialProps, action) {


    switch(action.type) {

        case "STATE_ADD_COMMENT_MODAL":
            return{
                ...state,
                stateModalAddComment: action.payload
            };

            default:
                return state;
}
}