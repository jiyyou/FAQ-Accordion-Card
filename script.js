const items = document.querySelectorAll('.card__item');

console.log(items);

// items.addEventListener('click', e => {
// 	console.log(e);
// 	console.log('hello');
// })

items.forEach(item => {
	item.addEventListener('click', e => {
		console.log(e);
	})
})