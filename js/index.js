startApp();

async function startApp() {
	const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';
	const response = await fetch(apiUrl);
	const data = await response.json();
	console.log(data);
}
