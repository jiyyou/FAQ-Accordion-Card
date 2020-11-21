const items = document.querySelectorAll('.card__item');

const expandFaq = () => {
	for (let i = 1; i <= items.length; i++) {
		let item = items[i - 1];

		item.addEventListener('click', e => {
			let answer = document.querySelector(`#answer${i}`);
			let question = document.querySelector(`#q${i}`);
			let arrow = document.querySelector(`#arrow${i}`);
			console.log(answer.style.display);	
			if (answer.style.display === 'block') {
				answer.style.display = 'none';
				question.style.fontWeight = 'normal';
				arrow.style.transform = 'rotate(0deg)';	
			}
			else {
				answer.style.display = 'block';
				question.style.fontWeight = 'bold';
				arrow.style.transform = 'rotate(180deg)';		
			}
		}) 
	}	
}

expandFaq();
