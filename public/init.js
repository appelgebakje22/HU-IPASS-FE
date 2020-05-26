window.baseUrl = document.querySelector("meta[name='base-url']").content;
window.apiUrl = document.querySelector("meta[name='api-url']").content;

document.addEventListener("DOMContentLoaded", () => {
	M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
});