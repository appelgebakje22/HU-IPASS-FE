window.baseUrl = document.querySelector("meta[name='base-url']").content;
window.apiUrl = document.querySelector("meta[name='api-url']").content;

document.addEventListener("DOMContentLoaded", () => {
	M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
});

const doErrorPanel = (elementId, error) => {
	const div = document.querySelector(elementId);
	div.classList.replace("grey", "red");
	div.innerHTML = `<h5>Daar ging iets fout...</h5>`;
	if (error) div.innerHTML += `<pre>${error}</pre>`;
};

document.querySelectorAll(".needs-auth").forEach(element => {
	const inverse = element.getAttribute("data-auth-inverse") === "true";
	element.style.display = !sessionStorage.getItem("jwt") === inverse ? "block" : "none";
});