let add = document.getElementById("submit").addEventListener("click",enterIssue);

let newIncidents = document.getElementById("textarea");
let form = document.getElementById("form").addEventListener("submit", browseIncidents);

function enterIssue() {

    let listItem = document.createElement("LI");  
    //create a list item using document.createElement

    let incident = newIncidents.value;
    //get the value of the textarea element input

    //assign the value of the list item to the incident
          listItem.innerHTML = incident;

       let newListItem =    document.getElementById("crime-list").appendChild(listItem);
    //get the id of the parent element and append the child

      // clearInput()
  
      // return newListItem
}
// enterIssue();

function clearInput(){
  let clear = document.getElementById("textarea");
    if(clear.value !="") {
        clear.value = "";
      
    }
}



function browseIncidents(e){
  e.preventDefault();
  let newFullListItem = newIncidents.value;

  localStorage.setItem("new-incident", newFullListItem);

  // let browse = document.getElementById("browse-btn").addEventListener("submit", browseIncidents);
  // window.location.href = "browse.html";

}


// function browseIncidents() {
//    let newFullListItem = document.createElement("LI");


//   let s = document.getElementById("full-crime-list")

//   newFullListItem.textContent = newListItem
   
//   newIncident.appendChild(newListFullItem)

 
// }

// function list(){

// }

// list()





// if (process.browser) {
//     console.log("code is running in a browser environment")
    
//   } else {
//     console.log("code is running in a Node.js environment")
//   }

