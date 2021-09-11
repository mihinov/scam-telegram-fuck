const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const lang = document.documentElement.lang;

writeTextPage(lang);

let active = false;
if (localStorage.getItem('active') !== null) {
	active = JSON.parse(localStorage.getItem('active'));
}

if (active === true) {
	output.classList.remove('transition');
	output.classList.add('active');
}

btn.addEventListener('click', (e) => {
	e.preventDefault();

	output.classList.add('transition');
	if (output.classList.contains('active')) {
		output.classList.remove('active');
		localStorage.setItem('active', JSON.stringify(false));
	} else {
		output.classList.add('active');
		localStorage.setItem('active', JSON.stringify(true));
	}
});

function writeTextPage(lang) {
	const langObj = {
		ru: {
			btn: 'Что это за кнопка?',
			output: 'Я знаю где ты находишься :)'
		},
		en: {
			btn: 'What is this button?',
			output: 'Now I know where you live :)'
		}
	};
	
	if (lang === 'ru') {
		output.innerText = langObj.ru.output;
		btn.innerText = langObj.ru.btn
	} else {
		output.innerText = langObj.en.output;
		btn.innerText = langObj.en.btn
	}
}