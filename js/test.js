document.getElementById("btn-add").addEventListener("click", function(){
const inputField = document.getElementById("text-input").value;
const parentContainer = document.getElementById("parent-container");
const li = document.createElement("li");
li.innerText = inputField;
li.classList.add("new-li");
parentContainer.appendChild(li);
const allList = document.getElementsByClassName("new-li");
for(const item of allList){;
item.addEventListener("click", function(event){
  event.target.parentNode.removeChild(event.target);

});
};

});
function setInnerText(elementId, newValue){
  document.getElementById(elementId).innerText = newValue;
};

function getInputValueById(elementId){
 const value = document.getElementById(elementId).value;
 return value;

};

document.getElementById("hit").addEventListener('click', function(){
setInnerText('p-1', "BANGLADESH");
setInnerText('p-2', "USA");
setInnerText('p-3', "CANADA");
setInnerText('p-4', "UK");
const inputValue = getInputValueById("text-input")
console.log(inputValue);
});