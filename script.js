
const push = document.querySelector('#push')
const AddTasks = document.querySelector('#tasks')
const tasks = document.querySelector('#mytext')
// const cointainer = document.querySelector('#container')


const object = {
    name: "My Task",
    data: []
};
// console.log(object.data)
function itemDelete() {

    let curtDel = document.querySelectorAll(".delete");
    // console.log(curtDel);

    for (var i = 0; i < curtDel.length; i++) {
        curtDel[i].addEventListener('click', function () {
            // console.log(curtDel[i])

            let meBtn = this;
            let arr = object.data.filter(function (item) {
                return Number(object.data.indexOf(item)) !== Number(meBtn.dataset.value);
            })

            object.data = arr;
            // console.log(arr);
            this.parentNode.remove();

        })
    }
}

function itemEdit() {
    let curEdit = document.querySelectorAll(".editBtn")
    for (let i = 0; i < curEdit.length; i++) {
        curEdit[i].addEventListener('click', function () {
            // console.log(curEdit[i])
         
            let meBtn1 = this;
            console.log(object.data)
            // object.data.filter((item)=>{
            let arr1 = new Promise((resolve, reject)=>{
               resolve(object.data.value)
                    // resolve(Number(object.data.indexOf(item)) === Number(meBtn1.dataset.value))
                })
                .then((value)=>{
                    tasks.value=value
                    // console.log(value)
                })
                // (function (item) {
                //  return Number(object.data.indexOf(item)) === Number(meBtn1.dataset.value)
                // })

                // console.log(arr1)
            // })
            
            //  let p1 = new Promise((resolve, reject)=>{
            //     resolve(object.data.pop(tasks.value))
            //   }).then((value)=>{
            //     console.log(value)
            //   }) 
            //   console.log(p1)
        })
    }
}


push.addEventListener('click', (event) => {
    event.preventDefault();

    if (tasks.value == 0) {
        alert("Please enter a Task")
        return;
    }

    object.data.unshift(tasks.value);
    AddTasks.innerHTML = "";
    // console.log(object)
    for (i = 0; i < object.data.length; i++) {
        AddTasks.innerHTML += `
       <div class="task " id="newtask${i}">
           <span>
           ${object.data[i]}
           </span>
           <button id="dlt" class="delete" data-value="${i}">
               <i class="far fa-trash-alt"></i>
           </button>
           <button class="editBtn" data-value"${i}">
           <i class="fa-solid fa-pen-to-square"></i>
           </button>
       </div>`
    }

    tasks.value = "";
    itemDelete();
    itemEdit();
})





    // AddTasks.innerHTML += `
    // <div class="task">
    //     <span id="newtask">
    //     ${tasks.value}
    //     </span>
    //     <button class="delete">
    //         <i class="far fa-trash-alt"></i>
    //     </button>
    // </div>`




// var array;
// window.onload = ()=>{
//     const val = JSON.parse(localStorage.getItem("myitem"));
//     console.log(val);
//     // const val = JSON.parse(localStorage.getItem("myitem"));
//     if(val?.length <= 0){
//         array = [];
//     }else{
//         array = [...val];
//     }
//     for (let index = 0; index < val.length; index++) {
//         const element = val[index];
//         console.log(element)
//         const el = document.createElement("div");
//         el.innerText = element;
//         document.body.appendChild(el);
//     }
// }

// array.push(tasks.value);
// localStorage.setItem("myitem", JSON.stringify(array));