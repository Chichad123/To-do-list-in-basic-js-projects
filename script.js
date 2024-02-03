let task_name=document.getElementById("task");
let task_desc=document.getElementById("taskdescription");
let btn=document.querySelector("button");
let task_area=document.getElementsByClassName("tasks");
// let body=document.querySelector("body");

document.addEventListener("DOMContentLoaded", (event) => {
    // alert("Hii avantika");
    let x;
    let keys=Object.keys(localStorage);
    for(let key of keys){
        if(key!="loglevel")
        {
            let newTask=`<div class="ticket">
        <div class="ticket_name">
            ${key}
        </div>
        <div class="ticket_desc">
            ${localStorage.getItem(key)}
        </div>
        <div class="ticket_delete">
          <i class="fa-solid fa-xmark"></i>
        </div>
    </div>`
        // console.log(newTask);
        task_area[0].innerHTML += newTask;
        x=key;
        }
        
        
    }
    

    deletefunc();
});



btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(task_name.value!="" && task_desc.value!=""){
        // alert(`add Task`);
        let newTask=`<div class="ticket">
        <div class="ticket_name">
            ${task_name.value}
        </div>
        <div class="ticket_desc">
            ${task_desc.value}
        </div>
        <div class="ticket_delete">
          <i class="fa-solid fa-xmark"></i>
        </div>
    </div>`
        // console.log(newTask);
        task_area[0].innerHTML += newTask;
        
        localStorage.setItem(task_name.value,task_desc.value);
    }


    deletefunc();

});
function deletefunc(){
    let del_btns = document.querySelectorAll("i");
    console.log(del_btns);
    for (let i = 0; i < del_btns.length; i++) {
  del_btns[i].addEventListener('click', (event) => {
    console.log("hi");
    let task = event.target.parentElement.parentElement;
    task.remove();
    let key=task.children[0].innerText.replaceAll(' ','');
    let ans='';
    for(let i=0;i<key.length;i++)
    {
        if((key[i]>='a' && key[i]<='z') || (key[i]>='A' && key[i]<='Z'))
        ans+=key[i];
    }
    // console.log(x===ans);
    console.log(ans);
    localStorage.removeItem(ans);
  });
}
}


// let del_btns = document.getElementsByClassName("ticket_delete");
// console.log(typeof del_btns);
// let arr=Object.keys(del_btns);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     arr[i].addEventListener('click', (event) => {
//         // let parent = event.currentTarget.parentElement;
//         // console.log(parent);
//         console.log("Hii");
//     });
// }

