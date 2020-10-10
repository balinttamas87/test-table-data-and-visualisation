const handlePromise = (promise, errorExtension) => {
    return promise
        .then(data => ([null, data]))
        .catch(error => {
            let extendedError = error;
            
            if (errorExtension) {
                extendedError = { ...error, ...errorExtension }
            }
            return [extendedError, undefined];
        });
}

export default handlePromise;