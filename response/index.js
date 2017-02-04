function * handle_response(request) {
    console.log(request)

    const funct = require('../skills/' + request.responseType)

    return yield funct.get(request.originalQuery, request)
}

module.exports = {
    get: handle_response
}
