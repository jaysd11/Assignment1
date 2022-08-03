function update(){
    var table = (document.getElementById("todo_table")! as HTMLTableElement).tBodies[0];
            var rowCount = table.rows.length;
        // var i=1 to start after header
            for(var i=1; i<rowCount; i++) {
                var row = table.rows[i];
            // index of td contain checkbox is 8
                var chkbox = row.cells[3].getElementsByTagName('input')[0];
            if('checkbox' == chkbox.type && true == chkbox.checked) {
                table.deleteRow(i);
                var newtable = document.getElementById("completed_table");
                var newrow = (newtable! as HTMLTableElement).insertRow(-1);
                var newcell0 = newrow.insertCell(0);
                var newcell1 = newrow.insertCell(1);
                var newcell2 = newrow.insertCell(2);
                
                newcell0.innerHTML = row.cells[0].innerHTML;
                newcell1.innerHTML = row.cells[1].innerHTML;
                newcell2.innerHTML = row.cells[2].innerHTML;

             }
        }
}

function validation(task,name,due_date)
{
    if (task==null || task==""){
        //alert("Task required to be filled");
        document.getElementById("textinvalid")!.innerHTML="Please insert the task";
        return false;
    }
    else if(name==null || name==""){
        //alert("Must enter name");
        document.getElementById("nameinvalid")!.innerHTML= "Please insert the name";
        return false;
    }
    else if(due_date=="")
    {
        document.getElementById("dateinvalid")!.innerHTML= "Please insert the date";
        return false;
    }
    return true;
}

function clearFields(){
    (document.getElementById("task")! as HTMLInputElement).value = "";
    (document.getElementById("name")! as HTMLInputElement).value = "";
    (document.getElementById("due date")! as HTMLInputElement).value = "";
    (document.getElementById("textinvalid")! as HTMLInputElement).innerHTML="";
    (document.getElementById("nameinvalid")! as HTMLInputElement).innerHTML= "";
    (document.getElementById("dateinvalid")! as HTMLInputElement).innerHTML= "";
}

function addTask() {
    var table = document.getElementById("todo_table");
    var task= (document.getElementById("task")! as HTMLInputElement).value;
    var name = (document.getElementById("name")! as HTMLInputElement).value;
    var due_date = (document.getElementById('due date')! as HTMLInputElement).value;

    if(!validation(task,name,due_date))
    { 
        return false;
    }

    var chkbox = document.createElement("INPUT");
    (chkbox as HTMLInputElement).type = "checkbox";
    chkbox.id = "chkdone";
    //document.getElementById("chkdone").onclick = update();
    chkbox.addEventListener("click", update);
    //chkbox.onclick = update();

    var row = (table! as HTMLTableElement).insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = task;
    cell2.innerHTML =name;
    cell3.innerHTML = due_date;
    cell4.appendChild(chkbox);

    clearFields()
  
}