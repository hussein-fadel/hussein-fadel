
function get_todoList() {
  var toDoList = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
      toDoList = JSON.parse(todos_str); 
  }
  return toDoList;
}

//check input not more than 30 letter per word     
function checkInput() {
  var title = document.getElementById('task').value;
  var msg = document.getElementById('do').value;
  var counter = 0;

  for (var i = 0; i < msg.length; i++) {
    if(msg.charAt(i) != " " && counter == 30) {
      alert("WoW Very Big Input !!");
      return false;
    }
    else if (msg.charAt(i) == " ") {
      counter = 0;
    }
    else {
      counter++;
    }
  }
  return true;
}

//take input and make sure not empty
function input() {
  var title = document.getElementById('task').value;
  var msg = document.getElementById('do').value;

  var titleTrimmed = title.trim(" ");
  var msgTrimmed = msg.trim(" ");

  if (titleTrimmed && msgTrimmed) {
    var date = new Date().toString();
    var dateFormated = "added: " + date.substr(0, 21);
    var task = "<strong>" + title + "</strong></br><small>" + dateFormated + "</small></br></br>" + msg;
    return task;
  }
  else
  {
    alert("Please Insert Somthing !");
    return false;
  }
}     

//add item to local storage
function add() {
  var task = input();
  var checker = checkInput();
  var toDoList = get_todoList();

  if (task !== false && checker == true) {
    toDoList.push(task);
  
    try {
      localStorage.setItem('todo', JSON.stringify(toDoList));
      alert("Item Is Added"); 
      resetForm();
      show();
    }
    catch(e) {
      if (e.code == 22) {
        alert("Memory is Full !!");
      }
    }
  }
}

//reset form after submit
function resetForm() {
  this.form.reset();
}

//remove one item     
function remove() {
  var id = this.getAttribute('id');
  var toDoList = get_todoList();
  toDoList.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(toDoList));
     
  show();
     
  alert("Item Deleted !");
}
     
// show all the items      
function show() {
  var toDoList = get_todoList();
     
  var html = '<div>';
  for (var i = 0; i < toDoList.length; i++) {
      html += '<table class="note"><tr><td id="left"><p>' + toDoList[i] 
            + '</p></td><td><span class="separate"></span></td><td><button class="remove" id="' + i  
            + '">X</button></td></tr></table>';
  };
  html += '</div>';
     
  document.getElementById('todos').innerHTML = html;
     
  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', remove);
  };

  var buttons = document.getElementsByClassName('edit');
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', edit);
  };
}

//clear all data
function clearAll()
{
  var confirmClear = confirm("Are You Sure !!");
  if (confirmClear == true) {
    localStorage.removeItem('todo'); 
    alert("All Data Are Deleted");
    show();
  } 
}

// localStorage detection
function supportsLocalStorage() {
  return typeof(Storage) !== 'undefined';
}

// Run the the program
if (!supportsLocalStorage()) {
  alert("Sorry Your Browser Doesn't Support localStorage :(");
} 
else {
  document.getElementById('add').addEventListener('click', add);
  document.getElementById('clear').addEventListener('click', clearAll);
  show();
}