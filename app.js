function pickRandom(list, item, destinyBox) {
	const randomNum = Math.round(
		Math.random() * (document.querySelector(list).childElementCount - 1)
	);
	const htmlTag = document.querySelectorAll(item)[randomNum].textContent;
	document.querySelector(destinyBox).textContent = htmlTag;
}

function draw() {
	pickRandom('.html-tags', '.html-tags__tag', '.box__word--for-tag');
	document.querySelector('button').textContent = 'Draw again';
	pickRandom(
		'.html-attributes',
		'.html-attributes__attribute',
		'.box__word--for-attr'
	);
	document.querySelector('button').textContent = 'Draw again';
	pickRandom(
		'.css-properties',
		'.css-properties__property',
		'.box__word--for-prop'
	);
	document.querySelector('button').textContent = 'Draw again';
}

document.querySelector('button').addEventListener('click', draw);
