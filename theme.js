let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

	if (theme.getElementById("href") == "homecss/q.css") {
		theme.href = "homecss/uq.css";
	} else {
		theme.href = "homecss/q.css";
	}
}