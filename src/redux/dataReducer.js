import { FETCH_DATA, PAGE_NUMBER, SEARCH_QUERY } from './types'

const initialState = {
    fetchedData: [],
    pageNumber: 1,
    searchQuery: "",
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, fetchedData: action.payload }
        case PAGE_NUMBER:
            return { ...state, pageNumber: action.payload }
        case SEARCH_QUERY:
            return { ...state, searchQuery: action.payload, pageNumber: 1 }
        default: return state
    }
}