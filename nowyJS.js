const message = document.getElementById('message');
const changeButton = document.getElementById("changeBtn");
console.log(document)

changeButton.addEventListener("click", () => {
	message.textContent = "Hello world!";
	message.style.color = "red";
});


const button = document.getElementById('addBtn')
const input = document.getElementById('itemInput')
const list = document.getElementById('itemList')

button.addEventListener("click", () => {
	const value = input.value;
	if(value) {
	const li = document.createElement("li")
	li.textContent = value;
	input.value ="" 
	list.appendChild(li)
	}
})