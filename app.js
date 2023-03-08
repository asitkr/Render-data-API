// function myFunction(fun){
//     return fun();
// }

// myFunction(() => {
//     console.log("Callback Function");
// });

//closer

// var x = 10;

// function a() {
//     var y = 2;
//     function b(){
//         console.log(x + y);
//     }

//     b();
// }

// a();

// sum(2)(3)

// function sum(a){
//     return (b) => {
//         console.log(a+b);
//     }
// }

// sum(2)(3);

// https://jsonplaceholder.typicode.com/comments


// let showData = document.getElementById("showData");
// let getBtn = document.getElementById("getData");

// getBtn.addEventListener("click", async () => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     let data = await response.json();
//     let output = "";
//     // data.forEach((element) => {
//     //     output += `
//     //                     <tr>
//     //                         <td>${element.postId}</td>
//     //                         <td>${element.id}</td>
//     //                         <td>${element.name}</td>
//     //                         <td>${element.email}</td>
//     //                         <td>${element.body}</td>
//     //                     </tr>
//     //                 `;
//     // });


//     data.map((element) => {
//         output += `
//                         <tr>
//                             <td>${element.postId}</td>
//                             <td>${element.id}</td>
//                             <td>${element.name}</td>
//                             <td>${element.email}</td>
//                             <td>${element.body}</td>
//                         </tr>
//                     `;
//     });

//     showData.innerHTML = output;
// })







// let showData = document.getElementById("showData");
//let getBtn = document.getElementById("getData");

const getData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = response.json();
        return data;
    }
    catch(error) {
        document.getElementById("getData").textContent = error;
    }
}

document.getElementById("getData").addEventListener("click", async () => {
    const data = await getData();
    let output = '';

    data.sort((a, b) => {
        return (a.id > b.id) ? -1 : (a.id < b.id) ? 1 : 0;
    });

    data.forEach((element) => {
        output += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.address.street}</td>
                <td>${element.address.suite}</td>
                <td>${element.address.city}</td>
                <td>${element.address.geo.lat}</td>
                <td>${element.address.geo.lng}</td>
                <td>${element.website}</td>
                <td>${element.company.name}</td>
            </tr>
        `
    });

    document.getElementById("showData").innerHTML = output;
})