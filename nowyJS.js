// const message = document.getElementById('message');
// const changeButton = document.getElementById("changeBtn");
// console.log(document)

// changeButton.addEventListener("click", () => {
// 	message.textContent = "Hello world!";
// 	message.style.color = "red";
// });


// const button = document.getElementById('addBtn')
// const input = document.getElementById('itemInput')
// const list = document.getElementById('itemList')

// button.addEventListener("click", () => {
// 	const value = input.value;
// 	if(value) {
// 	const li = document.createElement("li")
// 	li.textContent = value;
// 	input.value ="" 
// 	list.appendChild(li)
// 	}
// })

// const themeButton = document.getElementById('themeToggle')

// themeButton.addEventListener ("click", () => {
// 	const isLight = document.body.classList.contains("light")
// 	if (isLight) {
// 		themeButton.textContent = "Tryb jasny";
// 		document.body.classList.replace("light", "dark");
// 	} else {
// 		themeButton.textContent = "Tryb ciemny";
// 		document.body.classList.replace("dark", "light");
// 	}
// 	localStorage.setItem("theme", document.body.classList[0]);
// });

// document.addEventListener("DOMContentLoaded", () => {
// 	const savedTheme = localStorage.getItem("theme");
// 	document.body.classList.add(savedTheme);
// 	document.body.classList.remove(savedTheme === "light" ? "dark" : "light");
// 	themeButton.textContent = savedTheme === "light" ? "Tryb ciemny" : "Tryb jasny";
// });

const span = document.getElementById('counter');

const countPage = () => {
	let counter = localStorage.getItem("counter");
	if (counter) {
		counter++;
		span.textContent = counter;
		localStorage.setItem("counter", counter)
	} else {
		counter = 1;
		span.textContent = counter;
		localStorage.setItem("counter", counter)
	}
}

document.addEventListener("DOMContentLoaded", () => {
countPage();
})

/*Nie zwraca listy*/
const testList = [9, 4, 7] 
testList.forEach((el)=>(console.log(el*2)))

/*Zwraca listę*/
const mappedList = testList.map((el)=>el*3)
console.log(mappedList)

/*Filtruje starą listę i pokazuje wybrane elementy, np. poniżej zwraca tylko liczby parzyste*/
const filteredList = testList.filter((el)=>el%2==0)
console.log(filteredList)

/*Szukanie pierwszego elementu na liście*/
const foundElement = testList.find((el) => {
	return el%2===0
})
console.log(foundElement)

const foundIndex = testList.findIndex ((el) => {
	return el%8===0
})
console.log(foundIndex)

/* Zwraca funkcje jeżęli spełnia warunek*/
const some = testList.some ((el) => {
	return el % 2 === 0
})
console.log(some)

/* Zwraca funkcje jeżęli spełnia wszystkie warunki*/
const every = testList.every ((el) => {
	return el % 2===0
})
console.log(some, every)

/*Sortowanie listy; a-b = lista rosnąca; b-a = lista malejąca*/
testList.sort((a,b)=>b-a)
console.log(testList)

/*Zwraca z listy jedną wartość np. poprzez mnożenie*/
const reducedList = testList.reduce((acc, val)=>acc*val,1)
console.log(reducedList)

// const list2 = [-3, 5, 6]
// console.log (
// 	list2.some ((el) => {
// 		return el < 0;
// 	}))


	const nameList = ["Ania", "Hania", "Frania"]

	const reducesString = nameList.reduce((acc,el, index)=>
		{console.log(index);
			if (index < nameList.length - 1) {
			return acc + el + ", ";
			}
			else{
				return acc + el;
			}
		}, "");
	console.log(reducesString)