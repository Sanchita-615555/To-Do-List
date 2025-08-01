function addtask() {
  const input = document.querySelector(".taskinput");                         
  const taskText = input.value.trim();
  if (taskText === "") {                     /*for no input */
    alert("Please Enter Your Task!");       /*show alert message*/
    return;
  }


  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;



  const deleteBtn = document.createElement("span");         /*Delete button*/
  deleteBtn.innerHTML = "🗑️"; 
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.marginLeft = "10px";

  
  deleteBtn.onclick = function () {      /*click delete button and remove li*/
    taskList.removeChild(li);            
  };
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";                  /*empty input box*/
}


function clearAllTasks() {             /*click clear button and tasks delete */
  document.getElementById("taskList").innerHTML = "";
}
function toggleTheme() {                /*changes in theme */
  document.body.classList.toggle("dark-theme");
}










