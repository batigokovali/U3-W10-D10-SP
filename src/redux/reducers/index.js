const initialState = {
    locations: {
        content: [],
        isLoading: false,
    },
    user: {},
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LOCATIONS":
            return {
                ...state,
                locations: {
                    ...state.locations,
                    content: [...state.locations.content, action.payload],
                },
            };

        case "REMOVE_FROM_LOCATIONS":
            return {
                ...state,
                locations: {
                    ...state.locations,
                    content: state.locations.content.filter(
                        (el, i) => i !== action.payload
                    ),
                },
            };

        default:
            return state;
    }
};

export default mainReducer;
