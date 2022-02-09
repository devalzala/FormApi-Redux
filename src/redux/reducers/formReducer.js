const initialState = {
    formValues: [],
}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case "form":
            return{
                ...state,
                formValues: [...state.formValues, action.payload]
            }
            default: return state;
    }
}

export default formReducer;
