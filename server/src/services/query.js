// MongoDB specific: if we pass 0, Mongo will return all documents
const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

/*
    This function lets us make endpoint requests with pagination
    because MongoDB doesn't have a paging functionality for its
    queries but we can use its skip() functionality that allows us
    to skip X amount of records.
*/
function getPagination(query) {
    const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;

    const skip = (page - 1) * limit;

    return {
        skip: skip,
        limit: limit
    }
}

module.exports = {
    getPagination
}