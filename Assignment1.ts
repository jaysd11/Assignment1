let assigneeName = ["Jayesh", "Rahul", "Prabhjot", "Sibho", "Anubhav", "Hari", "Sarthu bro", "Rakesh", "Abdul", "Chetan", "Rishab"]
let selectHandler = document.getElementById("selectName");

for(let i=0;i<assigneeName.length ; i++){
    let name = assigneeName[i];
    var optionEle = document.createElement("option");
    optionEle.textContent = name;
    optionEle.value = name;

    selectHandler.appendChild(optionEle)
}

enum taskStatus{
    inProgress, completed,
}

type data = { taskName : string;
    assignee : string;
    dueDate : Date;
    status : taskStatus;
    id : number;
}
let taskIdCounter : number = 0;
let taskData : Array<data> = [];

function appendTaskToCompletedTable(cell : NodeListOf<ChildNode>){
    let completedTable = document.getElementById("completed_table") as HTMLTableElement;
    let completedTableRow = document.createElement("tr");
    let rowData1 = document.createElement('td');
    if(cell && cell[0] && (cell[0] as HTMLElement).innerText){
        rowData1.appendChild(document.createTextNode((cell[0] as HTMLElement).innerText));
    }
    let rowData2 = document.createElement('td');
    if(cell && cell[1] && (cell[1] as HTMLElement).innerText){
        rowData2.appendChild(document.createTextNode((cell[1] as HTMLElement).innerText));
    }
    let rowData3 = document.createElement('td');
    if(cell && cell[2] && (cell[2] as HTMLElement).innerText){
        rowData3.appendChild(document.createTextNode((cell[2] as HTMLElement).innerText));
    }
    completedTableRow.appendChild(rowData1);
    completedTableRow.appendChild(rowData2);
    completedTableRow.appendChild(rowData3);
    completedTable.appendChild(completedTableRow);
}

function update(event : any){

let taskId = +event.currentTarget.id;
console.log(taskId)
taskData[taskId-1].status= taskStatus.completed;
let currentRow = document.getElementById(`row${taskId}`);
document.getElementById(`row${taskId}`)?.remove();

let cell = currentRow?.childNodes
    if (cell){
        appendTaskToCompletedTable(cell);
    }

}

function validation(task: string,name :string ,due_date :string)
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
    (document.getElementById("selectName")! as HTMLInputElement).value = "";
    (document.getElementById("due date")! as HTMLInputElement).value = "";
    (document.getElementById("textinvalid")! as HTMLInputElement).innerHTML="";
    (document.getElementById("nameinvalid")! as HTMLInputElement).innerHTML= "";
    (document.getElementById("dateinvalid")! as HTMLInputElement).innerHTML= "";
}

function insertTodoTable(task : string,name:string,due_date:string,row: HTMLTableRowElement,chkbox: HTMLElement)
{
    row.id= `row${taskIdCounter}`;
    console.log(taskIdCounter)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    const tasknode = document.createTextNode(task);
    cell1.appendChild(tasknode)
    const namenode = document.createTextNode(name);
    cell2.appendChild(namenode);
    const due_dateNode = document.createTextNode(due_date);
    cell3.appendChild(due_dateNode)
    cell4.appendChild(chkbox);
}

function addTask() {
    var table = document.getElementById("todo_table");
    var task= (document.getElementById("task")! as HTMLInputElement).value;
    var name = (document.getElementById("selectName")! as HTMLInputElement).value;
    var due_date = (document.getElementById('due date')! as HTMLInputElement).value;

    taskIdCounter+=1;

    if(!validation(task.trim(),name.trim(),due_date.trim()))
    { 
        return false;
    }

    var chkbox = document.createElement("INPUT");
    (chkbox as HTMLInputElement).type = "checkbox";
    chkbox.id = `${taskIdCounter}`;

    chkbox.addEventListener("click", update);

    var row = (table! as HTMLTableElement).insertRow(-1);

    taskData.push({taskName : task, assignee : name , dueDate:new Date(due_date) , status : taskStatus.inProgress , id : taskIdCounter});
    insertTodoTable(task,name,due_date,row,chkbox)

    clearFields()
  
}


function insertCompletedTable(task: string, name: string, due_date: string, row: HTMLTableRowElement) {
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    const tasknode = document.createTextNode(task);
    cell0.appendChild(tasknode)
    const namenode = document.createTextNode(name);
    cell1.appendChild(namenode);
    const due_dateNode = document.createTextNode(due_date);
    cell2.appendChild(due_dateNode)
}

