import { FETCH_USER } from "../actions/types";

export default function(state = null, action){
//by def we don't know if the user's logged in, that is the request is not completed yet
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}