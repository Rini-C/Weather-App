var cont=document.getElementById("cont");
addstuff();
function addstuff(){
   
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>(res.json()))
    .then ((data)=>{data.map((x)=>{
        
        var imgdiv=document.createElement("div");
        var img=document.createElement("img")
        img.src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        imgdiv.appendChild(img)

        var namep = document.createElement("p");
        var namedata = document.createTextNode(x.name);
        var emailp = document.createElement("p");
        var emaildata = document.createTextNode(x.email);
        var phonep = document.createElement("p");
        var phonedata = document.createTextNode(x.phone);
        var addressp = document.createElement("p");
        var addressdata = document.createTextNode(x.address.city);

        namep.appendChild(namedata);
        emailp.appendChild(emaildata);
        phonep.appendChild(phonedata);
        addressp.appendChild(addressdata);
        
        var profilebox=document.createElement("div");
        profilebox.className="profilebox";
        profilebox.appendChild(imgdiv);
        profilebox.appendChild(namep);
        profilebox.appendChild(emailp);
        profilebox.appendChild(phonep);
        profilebox.appendChild(addressp);

        cont.appendChild(profilebox);

      })

    }
)}


