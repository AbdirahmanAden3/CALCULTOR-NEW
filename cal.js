const AddBtn = document.getElementById('Add');
const  userTextField = document.getElementById('user');

AddBtn.onclick=()=>{
   const name =  userTextField.value;
   alert(name)
}



let loggedNtUser = "ggg";
if(loggedNtUser<=5){
  console.log('not login')
}else if(loggedNtUser.length>=3){
  console.log('user ayaa badan')
}else if(loggedNtUser<=2){
  console.log('numberk user 2 ayaa yar')
}else{
   console.log('use4')
}