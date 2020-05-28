window.baseUrl = document.querySelector("meta[name='base-url']").content;
window.apiUrl = document.querySelector("meta[name='api-url']").content;

document.addEventListener("DOMContentLoaded", () => {
	M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
});

document.querySelectorAll(".needs-auth").forEach(element => {
	const inverse = element.getAttribute("data-auth-inverse") === "true";
	element.style.display = !sessionStorage.getItem("jwt") === inverse ? "block" : "none";
});