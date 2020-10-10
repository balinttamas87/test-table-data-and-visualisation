import handlePromise from "./handlePromise";

const request = (endpoint, { body, ...customConfig } = {}) => {
    const headers = { 'Content-Type': 'application/json' };

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (body) {
        try {
            config.body = JSON.stringify(body)
        } catch (error) {
            throw new Error("Error while stringifying body")
        }
    }

    return window
        .fetch(endpoint, config)
        .then(async response => {
            const [responseBodyError, data] = await handlePromise(response.json());
            if (responseBodyError) throw new Error("Error while reading response body");

            if (response.ok) {
                return data
            } else {
                return Promise.reject(
                    new Error(
                        `Error statusCode: ${response.status} statusText: ${response.statusText}`
                        )
                    )
            }
        })
}

export default request;