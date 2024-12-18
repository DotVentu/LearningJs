
listElement = ["mario", "character", 1, 435]

const data = {
	name: "si",
	age: 9,

	dataEl: {
		profile: 3
	}
}

console.log(data)

let $content = document.querySelector('.content')
let $h1 = document.querySelector('.h1')
let $h11 = document.querySelector('.h11')

console.log($h11)

console.log($content)

for (let i = 0; i < listElement.length; i++) {
	const element = listElement[i];

	console.log(element)

	const list = document.createElement('li')

	list.innerHTML = element

	$content.appendChild(list)
}

$h1.innerHTML = JSON.stringify(data)

