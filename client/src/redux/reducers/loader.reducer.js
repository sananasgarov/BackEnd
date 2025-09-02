export const loaderReducer = (state = false, action) => {
 switch (action.type){
    case "SET_LOADER":
        return !state;
    default:
        return state;
 }
}