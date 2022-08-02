function update(){
    //document.getElementById("test").innerHTML = "YOU CLICKED ME!";
    var table = document.getElementById("todot").tBodies[0];
            var rowCount = table.rows.length;
        // var i=1 to start after header
            for(var i=1; i<rowCount; i++) {
                var row = table.rows[i];
            // index of td contain checkbox is 8
                var chkbox = row.cells[3].getElementsByTagName('input')[0];
            if('checkbox' == chkbox.type && true == chkbox.checked) {
                table.deleteRow(i);
                var newtable = document.getElementById("donet");
                var newrow = newtable.insertRow(-1);
                var newcell0 = newrow.insertCell(0);
                var newcell1 = newrow.insertCell(1);
                var newcell2 = newrow.insertCell(2);
                
                newcell0.innerHTML = row.cells[0].innerHTML;
                newcell1.innerHTML = row.cells[1].innerHTML;
                newcell2.innerHTML = row.cells[2].innerHTML;

             }
        }
}

function myFunction() {
    var table = document.getElementById("todot");
    var taskv= document.getElementById("task").value;
    var namev = document.getElementById("name").value;
    var dd = document.getElementById('due date').value;
    if (taskv==null || taskv==""){
        alert("Task required to be filled");
        return false;
    }
    else if(namev==null || namev==""){
        alert("Must enter name");
        return false;
    }
    var chkbox = document.createElement("INPUT");
    chkbox.type = "checkbox";
    chkbox.id = "chkdone";
    //document.getElementById("chkdone").onclick = update();
    chkbox.addEventListener("click", update);
    //chkbox.onclick = update();

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = taskv;
    cell2.innerHTML =namev;
    cell3.innerHTML = dd;
    cell4.appendChild(chkbox);
    document.getElementById("task").value = "";
    document.getElementById("name").value = "";
    document.getElementById("due date").value = "";
}