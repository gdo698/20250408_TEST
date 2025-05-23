const initalState = {
    login: { id: "", pwd: "" },
    register: { id: "", pwd: "", name: "", addr: "" },
    data: null,
    loading: false,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INITALSTATE" : return initalState;
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.form]: { ...state[action.form], [action.name]: action.value },
            };
        case "LIST":
            return { ...state, data: action.data };
        case "LOADING":
            return { ...state, loading: true, error: null };
        case "FINISHED":
            return { ...state, loading: false, error: null };
        case "ERROR":
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export { initalState, reducer };