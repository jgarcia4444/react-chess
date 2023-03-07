const initialState = {
    email: "",
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        default: 
            return {
                ...initialState,
            }
    }
}

export default userReducer;