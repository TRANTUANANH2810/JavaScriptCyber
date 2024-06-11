const BASE_URL = "https://6666b94ca2f8516ff7a494f5.mockapi.io/api";

/**
 *
 * @param {RequestInfo} url
 * @param {RequestInit} opts
 */
export const fetchApi = (url, opts) => {
    fetch(`${BASE_URL}/${url}`, opts);
};
