import { SEARCH_QUERY, REQUEST_DATA, SHOW_LOADER, HIDE_LOADER, PAGE_NUMBER } from "./types";

export function searchQuery(searchParam) {
    return {
        type: SEARCH_QUERY,
        payload: searchParam
    }
}

export function fetchData() {
    return {
        type: REQUEST_DATA
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function pageNumber(pageNumber) {
    return {
        type: PAGE_NUMBER,
        payload: pageNumber
    }
}