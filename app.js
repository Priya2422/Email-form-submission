const firstName=document.querySelector("#fName");
const lastName=document.querySelector("#lName");
const email=document.querySelector("#email");
const num=document.querySelector("#num");
const abt=document.querySelector("#about");

const form=document.querySelector("#form1");
form.addEventListener("submit",(e)=>{
e.preventDefault();
console.log("Name: "+firstName.value+" "+lastName.value);
console.log("Email: "+email.value);
console.log("Phone Number: "+num.value);
console.log("About: "+abt.value);
})
