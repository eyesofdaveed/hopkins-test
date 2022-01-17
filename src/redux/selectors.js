export const selectLaureates = (state) => state.data.fetchedData.laureates;

export const selectPageNumber = (state) => state.data.pageNumber;

export const selectTotalCount = (state) => state.data.fetchedData.meta && state.data.fetchedData.meta.count;

export const selectLoading = (state) => state.app.loading;
