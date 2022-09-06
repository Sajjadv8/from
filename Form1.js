let tbody = document.getElementsByTagName("tbody")[0];
let Fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let number = document.getElementById("cnumber");
let fbname = document.getElementById("fbname");
let work = document.getElementById("job");
let addclick = document.getElementById('addclick');
let removeclick = document.getElementById('removeclick');

// button submit

addclick.addEventListener('click', addItem);

// delete event 
//table.addEventListener('click', removeItem);

//addItem
function addItem(e) {

    //alert();
    console.log(tbody);
    e.preventDefault();

    // get value
    let newItem = document.getElementById('fname').value;
    let newItem2 = document.getElementById('lname').value;
    let newItem3 = document.getElementById('cnumber').value;
    let newItem4 = document.getElementById('fbname').value;
    //let newItem5 = document.getElementById('job').value;

    // create new td element

    //1

    let tdName = document.createElement('td');
    tdName.className = 'list-table';
    tdName.appendChild(document.createTextNode(newItem));
    //1

    //2
    let tdLastName = document.createElement('td');
    tdLastName.className = 'list-table';
    tdLastName.appendChild(document.createTextNode(newItem2));
    //2

    //3
    let tdNatinalCode = document.createElement('td');
    tdNatinalCode.className = 'list-table';
    tdNatinalCode.appendChild(document.createTextNode(newItem3));
    //3

    //4
    let tdFatherName = document.createElement('td');
    tdFatherName.className = 'list-table';
    tdFatherName.appendChild(document.createTextNode(newItem4));
    //4

    //5
   // let tdJob = document.createElement('td');
   // tdJob.className = 'list-table';
   // tdJob.appendChild(document.createTextNode(newItem5));
    //5


    //Bottoms
    let tdButtoms = document.createElement('td');
    tdButtoms.className = 'list-table';
    let deletebtn = document.createElement('button');
    deletebtn.className = 'close';
    deletebtn.appendChild(document.createTextNode('X'));
    tdButtoms.appendChild(deletebtn);
    //Bottoms


    // tr
    let trNewRecord = document.createElement("tr");
    trNewRecord.append(tdName);
    trNewRecord.append(tdLastName);
    trNewRecord.append(tdNatinalCode);
    trNewRecord.append(tdFatherName);
    //trNewRecord.append(tdJob);
    trNewRecord.append(tdButtoms);
    //tr

    // add td to table
    tbody.appendChild(trNewRecord);

    
}


// Remove item
function removeItem(e) {
    if (e.target.classlist.contains('delete')) {
        if (confirm('آیا شمال مطمئن هستید؟')) {
            let td = e.target.preventElement;
            list.removeChild(td);
        }

    }

}


