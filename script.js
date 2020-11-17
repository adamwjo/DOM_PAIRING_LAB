
// Not linked
// A function that selects the title and changes the text
// A function that selects the title and changes styling
// A function that adds an item to the "favorite things" list
// A function that selects and console.logs each list item
// A function that loops through each list item and changes its text and style
// - Write a function that creates a button, that when clicked, will change the background color. (click event)
// - Make a branch and "pull request" for your code.
const title = document.getElementById('header-title')
function changeTitle(text){
    title.innerText = text
}

function changeTitleStyle(color, text){
    const style = title.innerHTML = `<span style='color: ${color};'>${text}</span>`;
}
function addListItem(){
    const list = document.getElementById('items')
    const newItem = document.createElement('li')
    newItem.innerHTML = 'PS5'
    newItem.setAttribute("class", "list-group-item");
    list.append(newItem)
}
function logListItems(){
//    const allItems = 
//    document.querySelectorAll('.list-group-item')
//    allItems.forEach('item' => {console.log('item')})

   document.querySelectorAll('.list-group-item').forEach(item => console.log(item.innerText))
}

// function changeTitleStyle(color, st){
//     const style = title.innerHTML = `<span style='color: ${color};'> ${st}</span>`;
// }
function styleListItems(text){
document.querySelectorAll('.list-group-item').forEach(item => (item.innerHTML =  `<div class="p-3 mb-2 bg-primary text-white">${text}</div>`))
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = 'purple';
}
