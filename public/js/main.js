window.addEventListener('load', async (e) => {
	let reqHeaders = await fetch('/headers');

	console.log(reqHeaders);
});
