const initialProps ={

    stateValidations: false

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialProps, action) {


    switch(action.type) {

        case "STATE_VALIDATIONS":
            return{
                ...state,
                stateValidations: action.payload
            };

            default:
                return state;
}
}