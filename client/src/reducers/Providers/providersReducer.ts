import { AllProv, GET_PROV, DispatchProvTypes} from '../../actions/actionTypes';

export interface State {
    providers: AllProv | any,
    // prov: {name:string, description:string, img: string}
}
export const initState: State = { providers: null }

const providersReducer = (state: State = initState, action: DispatchProvTypes): State => {
    switch (action.type) {
        case GET_PROV:
            // return { ...state, user: action.payload }
            // return { ...state, user: [action.payload, ...state.user] }
            return { ...state, providers: action.payload }
        default:
            return state
    }
}

export default providersReducer;