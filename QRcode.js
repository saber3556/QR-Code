const woramp=document.querySelector('.wrapper'),
qrinput=document.querySelector('.form input'),
qriimg=document.querySelector('.qr-code img'),
generatbtn=document.querySelector('.form button');


generatbtn.addEventListener("click",()=>{
    let qrvalue=qrinput.value;
    if(!qrvalue) return;
    generatbtn.innerText="Generating QR Code....";
    qriimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qriimg.addEventListener("load",()=>{
        woramp.classList.add("active");
        generatbtn.innerText="Generate QR Code";
    })
   
})
qrinput.addEventListener("keyup",()=>{
    woramp.classList.remove("active");
})