//your code here
let a = document.getElementsByClassName("image");

let arr = [];

for(let i=0;i<6;i++){
    let tmp = document.getElementById(`div${i+1}`)
    arr.push(tmp);
}



console.log(arr);

let pDiv = document.getElementById("parent");

let I,J;

for(let i=0;i<arr.length;i++){
    let cDiv = arr[i];
    cDiv.addEventListener("dragstart",(e)=>{
        console.log(e.target.getAttribute("data-section"),'is being dragged');
        I = parseInt(e.target.getAttribute("data-section"));
    })

    cDiv.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    cDiv.addEventListener("drop",(e)=>{
        e.preventDefault();
        console.log(e.target.getAttribute("data-section"),'is the receiver');
        J = parseInt(e.target.getAttribute("data-section"));

        let tmp = arr[I].id;
        arr[I].id = arr[J].id;
        arr[J].id = tmp;

    })
}

