import fetch from 'isomorphic-fetch';

export const promiseToFetch = (url) => fetch(url).then(response => {
    return response.json().then(json => {
        if (!response.ok) {
            return Promise.reject(json)
        }
        return json;
    });
});
