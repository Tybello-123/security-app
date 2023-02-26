// let incident = document.getElementById("textarea").value
// let case2 = document.getElementById("case2")


// function enterIssue(){
//     case2.textContent = incident
    
// }
// enterIssue();

if (process.browser) {
    console.log("code is running in a browser environment")
    
  } else {
    console.log("code is running in a Node.js environment")
  }