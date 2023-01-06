var tab = document.createElement("table");
tab.className="jsontable";
var headingrow=document.createElement("tr");


var heading1=document.createElement("th");
var headingname1=document.createTextNode("S.No");
heading1.appendChild(headingname1);
headingrow.appendChild(heading1);
tab.appendChild(headingrow);tab.appendChild(headingrow);

var heading2=document.createElement("th");
var headingname2=document.createTextNode("Person Name");
heading2.appendChild(headingname2);
headingrow.appendChild(heading2);
tab.appendChild(headingrow);tab.appendChild(headingrow);

var heading3=document.createElement("th");
var headingname3=document.createTextNode("Phone");
heading3.appendChild(headingname3);
headingrow.appendChild(heading3);
tab.appendChild(headingrow);tab.appendChild(headingrow);

var heading4=document.createElement("th");
var headingname4=document.createTextNode("email");
heading4.appendChild(headingname4);
headingrow.appendChild(heading4);
tab.appendChild(headingrow);tab.appendChild(headingrow);

var heading5=document.createElement("th");
var headingname5=document.createTextNode("address");
heading5.appendChild(headingname5);
headingrow.appendChild(heading5);
tab.appendChild(headingrow);tab.appendChild(headingrow);


function showlist()
{


fetch("https://jsonplaceholder.typicode.com/users")
.then(responce=>responce.json())
.then(data=>{console.log(data)
    createlist(data);});
}
function createlist(data) 
{
const mainUL=document.createElement('ul');
//unorderedlist
for(let i=0;i<data.length;i++){
// const userLI=document.createElement('li');//firstlistitem
// const userCityLI=document.createElement('li');
// const userphonenumber=document.createElement('li');//thirdlistitem
// userLI.innerHTML=data[i].id+data[i].name;//x.id+X.name//x->data[i]
// userCityLI.innerHTML=data[i].address.city;
// userphonenumber.innerHTML=data[i].phone;//appending data to listitem
//mainUL.appendChild
// mainUL.appendChild(userLI);
// mainUL.appendChild(userCityLI);
// mainUL.appendChild(userphonenumber)//appending listitem to mainUL

var tablerow= document.createElement("tr");

var serielno=document.createElement("td");
var sno=document.createTextNode(i+1);
serielno.appendChild(sno);
tablerow.appendChild(serielno); 

var namedata=document.createElement("td");
var namedataa=document.createTextNode(data[i].name);
namedata.appendChild(namedataa);
tablerow.appendChild(namedata);

var phonedata=document.createElement("td");
var phonedataa=document.createTextNode(data[i].phone);
phonedata.appendChild(phonedataa);
tablerow.appendChild(phonedata);

var emaildata=document.createElement("td");
var emailtext=document.createTextNode(data[i].email);
emaildata.appendChild(emailtext);
tablerow.appendChild(emaildata);

var addressdata=document.createElement("td");
var addresstext=document.createTextNode(data[i].address);
addressdata.appendChild(addresstext);
tablerow.appendChild(addressdata); 



tab.appendChild(tablerow);

} 

//append mainUL to body

document.body.appendChild(tab);
}

//
showlist();
//console.log(userdata);
 function tryTableList(data)
 {

    //doccument.write('<table><tr>id</tr></table>')
 }
