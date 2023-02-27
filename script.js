document.getElementById("submit").addEventListener("click",enterIssue);


function enterIssue() {

    let listItem = document.createElement("LI");  
    //create a list item using document.createElement

    let incident = document.getElementById("textarea").value;
    //get the value of the textarea element input

    listItem.innerHTML = incident;
    //assign the value of the list item to the incident

  
    document.getElementById("crime-list").appendChild(listItem);
    //get the id of the parent element and append the child

 clearInput()
}
enterIssue();

function clearInput(){
  let clear = document.getElementById("textarea");
    if(clear.value !="") {
        clear.value = "";
      
    }
}

// if (process.browser) {
//     console.log("code is running in a browser environment")
    
//   } else {
//     console.log("code is running in a Node.js environment")
//   }

