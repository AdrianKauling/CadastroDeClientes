function options(method, body = null) {
    return {
        method,
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(body)
    }
}