var assigneeName = ["Jayesh", "Rahul", "Prabhjot", "Sibho", "Anubhav", "Hari", "Sarthu bro", "Rakesh", "Abdul", "Chetan", "Rishab"];
var selectHandler = document.getElementById("selectName");
for (var i = 0; i < assigneeName.length; i++) {
    var name_1 = assigneeName[i];
    var optionEle = document.createElement("option");
    optionEle.textContent = name_1;
    optionEle.value = name_1;
    selectHandler.appendChild(optionEle);
}
var taskStatus;
(function (taskStatus) {
    taskStatus[taskStatus["inProgress"] = 0] = "inProgress";
    taskStatus[taskStatus["completed"] = 1] = "completed";
})(taskStatus || (taskStatus = {}));
var taskIdCounter = 0;
var taskData = [];
function appendTaskToCompletedTable(cell) {
    var completedTable = document.getElementById("completed_table");
    var completedTableRow = document.createElement("tr");
    var rowData1 = document.createElement('td');
    if (cell && cell[0] && cell[0].innerText) {
        rowData1.appendChild(document.createTextNode(cell[0].innerText));
    }
    var rowData2 = document.createElement('td');
    if (cell && cell[1] && cell[1].innerText) {
        rowData2.appendChild(document.createTextNode(cell[1].innerText));
    }
    var rowData3 = document.createElement('td');
    if (cell && cell[2] && cell[2].innerText) {
        rowData3.appendChild(document.createTextNode(cell[2].innerText));
    }
    completedTableRow.appendChild(rowData1);
    completedTableRow.appendChild(rowData2);
    completedTableRow.appendChild(rowData3);
    completedTable.appendChild(completedTableRow);
}
function update(event) {
    //     var table = (document.getElementById("todo_table")! as HTMLTableElement).tBodies[0];
    //             var rowCount = table.rows.length;
    //         // var i=1 to start after header
    //             for(var i=1; i<rowCount; i++) {
    //                 var row = table.rows[i];
    //             // index of td contain checkbox is 8
    //                 var chkbox = row.cells[3].getElementsByTagName('input')[0];
    //             if('checkbox' == chkbox.type && true == chkbox.checked) {
    //                 table.deleteRow(i);
    //                 var newtable = document.getElementById("completed_table");
    //                 var newrow = (newtable! as HTMLTableElement).insertRow(-1);
    //                 let task = row.cells[0].innerHTML;
    //                 let name = row.cells[1].innerHTML;
    //                 let due_date = row.cells[2].innerHTML;
    var _a;
    //                 insertCompletedTable(task,name,due_date,newrow)
    //              }
    //         }
    var taskId = +event.currentTarget.id;
    console.log(taskId);
    taskData[taskId - 1].status = taskStatus.completed;
    var currentRow = document.getElementById("row".concat(taskId));
    (_a = document.getElementById("row".concat(taskId))) === null || _a === void 0 ? void 0 : _a.remove();
    var cell = currentRow === null || currentRow === void 0 ? void 0 : currentRow.childNodes;
    if (cell) {
        appendTaskToCompletedTable(cell);
    }
}
function validation(task, name, due_date) {
    if (task == null || task == "") {
        //alert("Task required to be filled");
        document.getElementById("textinvalid").innerHTML = "Please insert the task";
        return false;
    }
    else if (name == null || name == "") {
        //alert("Must enter name");
        document.getElementById("nameinvalid").innerHTML = "Please insert the name";
        return false;
    }
    else if (due_date == "") {
        document.getElementById("dateinvalid").innerHTML = "Please insert the date";
        return false;
    }
    return true;
}
function clearFields() {
    document.getElementById("task").value = "";
    document.getElementById("selectName").value = "";
    document.getElementById("due date").value = "";
    document.getElementById("textinvalid").innerHTML = "";
    document.getElementById("nameinvalid").innerHTML = "";
    document.getElementById("dateinvalid").innerHTML = "";
}
function insertTodoTable(task, name, due_date, row, chkbox) {
    row.id = "row".concat(taskIdCounter);
    console.log(taskIdCounter);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var tasknode = document.createTextNode(task);
    cell1.appendChild(tasknode);
    var namenode = document.createTextNode(name);
    cell2.appendChild(namenode);
    var due_dateNode = document.createTextNode(due_date);
    cell3.appendChild(due_dateNode);
    cell4.appendChild(chkbox);
}
function addTask() {
    var table = document.getElementById("todo_table");
    var task = document.getElementById("task").value;
    var name = document.getElementById("selectName").value;
    var due_date = document.getElementById('due date').value;
    taskIdCounter += 1;
    if (!validation(task.trim(), name.trim(), due_date.trim())) {
        return false;
    }
    var chkbox = document.createElement("INPUT");
    chkbox.type = "checkbox";
    chkbox.id = "".concat(taskIdCounter);
    chkbox.addEventListener("click", update);
    var row = table.insertRow(-1);
    taskData.push({ taskName: task, assignee: name, dueDate: new Date(due_date), status: taskStatus.inProgress, id: taskIdCounter });
    insertTodoTable(task, name, due_date, row, chkbox);
    clearFields();
}
function insertCompletedTable(task, name, due_date, row) {
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var tasknode = document.createTextNode(task);
    cell0.appendChild(tasknode);
    var namenode = document.createTextNode(name);
    cell1.appendChild(namenode);
    var due_dateNode = document.createTextNode(due_date);
    cell2.appendChild(due_dateNode);
}
