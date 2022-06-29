let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

	if (theme.getElementById("href") == "q.css") {
		theme.href = "uq.css";
	} else {
		theme.href = "q.css";
	}
}