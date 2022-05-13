startApp();

async function startApp() {
	const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';
	const response = await fetch(apiUrl);
	const data = await response.json();

	processData(data[0]);

	// console.log(data[0]);
}

function processData(data) {
	// console.log(data.rates);
	console.log(data.rates[0]);

	data.rates.forEach(element => {
		console.log(element);
	});

	// console.log(data.table);
	// console.log(data.no);
	// const number = document.querySelector('.date');
	// number.appendChild(data.no);
}
