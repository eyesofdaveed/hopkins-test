import { FETCH_DATA, PAGE_NUMBER } from './types'

const initialState = {
    fetchedData: [],
    pageNumber: 1,
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, fetchedData: action.payload }
        case PAGE_NUMBER:
            return { ...state, pageNumber: action.payload }
        default: return state
    }
}