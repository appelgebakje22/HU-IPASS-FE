/**
 * @param {string} route
 * @param {string} method
 * @param {*} data
 * @param {object} headers
 * @returns {Promise<Response>}
 */
const doFetch = (route, method, data, headers) => {
	method = method.toUpperCase();
	const props = {
		method,
		mode:     "cors",
		cache:    "no-cache",
		headers:  {"Content-Type": "application/json", ...headers},
		redirect: "follow",
	};
	if (method !== "GET") props.body = data || {};
	return fetch(apiUrl + route, props);
};

/**
 * @param {string} route
 * @param {*} data
 * @param {object} headers
 * @returns {Promise<Response>}
 */
const doGET = (route, data = {}, headers = {}) => doFetch(route, "get", data, headers);
/**
 * @param {string} route
 * @param {*} data
 * @param {object} headers
 * @returns {Promise<Response>}
 */
const doPOST = (route, data, headers = {}) => doFetch(route, "post", data, headers);
/**
 * @param {string} route
 * @param {*} data
 * @param {object} headers
 * @returns {Promise<Response>}
 */
const doPUT = (route, data, headers = {}) => doFetch(route, "put", data, headers);
/**
 * @param {string} route
 * @param {*} data
 * @param {object} headers
 * @returns {Promise<Response>}
 */
const doDELETE = (route, data, headers = {}) => doFetch(route, "delete", data, headers);