const COUNTER_INC = 'counter/COUNTER_INC';
const COUNTER_DEC = 'counter/COUNTER_DEC';
const COUNTER_DEL = 'counter/COUNTER_DEL';

export function inc() {
    return{
        type: COUNTER_INC
    }
}

export function dec() {
    return{
        type: COUNTER_DEC
    }
}

export const del = () => ({
    type: COUNTER_DEL
});

const INITIAL_STATE = {
    count: 9
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case COUNTER_INC:
            return {...state, count: state.count + 1}
        case COUNTER_DEC:
            return {...state, count: state.count - 1}
        case COUNTER_DEL:
            return {...state, count: 9 }
        default:
            return state
    }
}


