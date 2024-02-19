
var arr = [
    {
        name:"Peatls of roses",
        img:"https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ,
    {
        name:"Animals of town",
        img:"https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ,
    {
        name:"CN Tower",
        img:"https://images.unsplash.com/photo-1503505129851-abaf7f6140b4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ,
    {
        name:"Love of heart",
        img:"https://images.unsplash.com/photo-1532932371123-928bc0091ec0?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Plane in sky",
        img:"https://images.unsplash.com/photo-1517429128955-67ff5c1e29da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Eiffel Tower",
        img:"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

function showthecards(){
    var clutter = "";
    arr.forEach(function(obj) {
        clutter+= `<div class="box">
        <img class="cursor-pointer" src="${obj.img}"  alt="image">
        <div class="caption">${obj.name}</div>
    </div>`;
    })
    document.querySelector(".container")
    .innerHTML = clutter;
}
showthecards();

function handlesearchFunctionality() {
    var input = document.querySelector("#searchinput");
    input.addEventListener("focus",function() {
        document.querySelector(".overlay")
        .style.display = "block";
    })
    input.addEventListener("blur",function() {
        document.querySelector(".overlay")
        .style.display = "none";
    })
    input.addEventListener("input",function() {
       console.log(input.value);
       const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
       var clutter = "";
       filteredArray.forEach(function(obj){
        clutter+=`<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>`
       })
       document.querySelector(".searchdata").style.display = "block";
       document.querySelector(".searchdata").innerHTML = clutter;
    })

}
handlesearchFunctionality();

var arr1 = [12,45,676,4,6]
arr1.forEach((element,index,arr1) =>{
    console.log(element,index,arr1)
})
function linkfunctionality() {
    document.querySelectorAll(".links1").forEach((ele)=>{
        ele.addEventListener('mouseover',()=>{
            ele.style.color = "red";
        })
        ele.addEventListener('mouseout',()=>{
            ele.style.color = "black";
        })
    });
}
linkfunctionality();

function imghover() {
    var ele = document.querySelector(".img");
    ele.addEventListener('mouseover',()=>{
        ele.style.cursor = "pointer";
    })
    ele.addEventListener('mouseout',()=>{
        ele.style.cursor = "context-menu";
    })
}
imghover();

function iconsfunctionality() {
    document.querySelectorAll(".icons").forEach((element)=>{
        element.addEventListener("mouseover",()=>{
            element.style.cursor = "pointer";
            element.style.color = "red";
        })
        element.addEventListener("mouseout",()=>{
            element.style.cursor = "context-menu";
            element.style.color = "silver";
        })
    });
    
}
iconsfunctionality();

let newarr = [
                {name:"harsh"},
                {name:"maitry"},
                {name:"Krishna"},
                {name:"Geetaben"},
                {name:"Vedant"},
                {name:"Mansi"}
             ]

let res = newarr.filter(obj => obj.name.toLowerCase().startsWith("m"));

console.log(res);