const doErrorPanel = (elementId, error) => {
	const div = document.querySelector(elementId);
	div.classList.replace("grey", "red");
	div.innerHTML = `<h5>Daar ging iets fout...</h5>`;
	if (error) div.innerHTML += `<pre>${error}</pre>`;
};

const runForGuest = (callback, reverse = false) => {
	if (!!sessionStorage.getItem("jwt") === reverse) {
		callback();
	}
};