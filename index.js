module.exports = (req, res) => {
	let date = new Date().getDay();
	let helg = Boolean(date >= 7 && date >= 5);
	if (helg) res.end("Helg!");
	res.end("Det er ikke helg :/");
}