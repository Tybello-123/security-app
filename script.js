

let newIncidents = document.getElementById("enter-issue");
let addBtn = document.getElementById("add-btn").addEventListener("click",enterIssue);
let browseBtn = document.getElementById("form").addEventListener("submit", browseIncidents);

function enterIssue() {

    let listItem = document.createElement("LI");  
    //create a list item using document.createElement

    let incident = newIncidents.value;
    //get the value of the textarea element input

    //assign the value of the list item to the incident
          listItem.innerHTML = incident;

        let newListItem =  document.getElementById("crime-list").appendChild(listItem);
    //get the id of the parent element and append the child
  
      return newListItem

      
}


function clearInput(){
  let clear = document.getElementById("enter-issue");
    if(clear.value !="") {
        clear.value = "";
      
    }
}


var items = []
let newFullListItem = newIncidents.value;
function browseIncidents(e){
  e.preventDefault();


}

function store(newFullListItem) {
  browseIncidents()

 
    items.push(newFullListItem);

    sessionStorage.setItem("new-incident", JSON.stringify(newFullListItem));

    window.location.href = "browse.html"
}

