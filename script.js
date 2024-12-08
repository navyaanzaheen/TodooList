let d1 = document.createElement('div');

function addTask(){
  const newTask = document.createElement('li');
  const taskList = document.getElementById('taskList');
  taskList.appendChild(newTask);
  newTask.textContent = document.getElementById('inputTask').value;
  document.getElementById('inputTask').value="";

  deleteTask(newTask)
  editTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent="Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function(){

        d1.style.display = "none";     
        newTask.remove();
    }
}


function editTask(newTask){
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  newTask.appendChild(editBtn);

  editBtn.onclick = function(){
      
      let d1 = document.getElementById("div1");
      if (d1) {
          d1.innerHTML = "";
      } else {
          d1 = document.createElement("div");
          d1.id = "div1";
      }

      d1.style.display = "block";
      var h3 = document.createElement("h3");
      h3.textContent = "Update Task";
      h3.style.textAlign = "center";
      d1.appendChild(h3);
      const newEdit = document.createElement('input');
      newEdit.style.width = "72%";
        d1.appendChild(newEdit);

      var b1 = document.createElement("button");
      b1.textContent = "Update";
      b1.id = "button1";
      newEdit.value = newTask.textContent.replace("DeleteEdit", "");
      d1.appendChild(b1);
      document.body.appendChild(d1);

      b1.onclick = function(){
          newTask.firstChild.textContent = newEdit.value;
          d1.style.display = "none";
      }
  }
}
