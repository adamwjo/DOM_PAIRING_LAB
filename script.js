// Not linked
function changeTitleText() {
    header = document.getElementsByTagName('h1');
    header[0].innerText = "My Favs";
}

changeTitleText()

function changeColor() {
    style = document.getElementsByTagName('h1');
    style[0].style.color = 'red';
}

changeColor()

function addListItem() {
   ul = document.getElementById('items');
   li = document.createElement('li');
   li.className = "list-group-item";
   li.innerText = "Bread";
   ul.appendChild(li);
}

addListItem()

function outputList() {
   items = document.getElementById('items').querySelectorAll('li');
   items.forEach(item => console.log(item.innerText))
}

outputList()

function changeStyle() {
    items = document.getElementById('items').querySelectorAll('li');
    items.forEach(item => {
       item.innerText = "Bread";
       item.style.color = "Blue"})
 }

 changeStyle()

 function addButton(){
     let button = document.createElement('button');
     button.innerText = "Button";
     button.addEventListener('click', function(event){
        //  alert("You've clicked this");
        const btnColor = ["btn btn-primary", "btn btn-secondary", "btn btn-success", "btn btn-warning", "btn btn-info", "btn btn-light", "btn btn-dark", "btn btn-danger"]
        button.className = btnColor[Math.floor(Math.random() * btnColor.length)]
    //  button.style.backgroundColor = getRandomColor()

     })
     let div = document.getElementsByClassName('container');
     div[1].append(button);
 }

   addButton()


   






