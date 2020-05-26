/**
 * @param {string} route
 * @param {string} method
 * @param {*} data
 * @returns {Promise<Response>}
 */
const doFetch = (route, method, data) => {
	method = method.toUpperCase();
	const props = {
		method,
		mode:           "cors",
		cache:          "no-cache",
		credentials:    "include",
		headers:        {"Content-Type": "application/json"},
		redirect:       "follow",
	};
	if (method !== "GET") props.body = JSON.stringify(data);
	return fetch(apiUrl + route).then(res => res.json());
};

/**
 * @param {string} route
 * @param {* | undefined} data
 * @returns {Promise<Response>}
 */
const doGET = (route, data = {}) => doFetch(route, "get", data);
/**
 * @param {string} route
 * @param {* | undefined} data
 * @returns {Promise<Response>}
 */
const doPOST = (route, data) => doFetch(route, "post", data);
/**
 * @param {string} route
 * @param {* | undefined} data
 * @returns {Promise<Response>}
 */
const doPUT = (route, data) => doFetch(route, "put", data);
/**
 * @param {string} route
 * @param {* | undefined} data
 * @returns {Promise<Response>}
 */
const doDELETE = (route, data) => doFetch(route, "delete", data);