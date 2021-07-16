let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers')

btnUsers.addEventListener('click', displayData);

// btnUsers.addEventListener('click', () => {
//     let getUsers = fetch('https://jsonplaceholder.typicode.com/users');

//     getUsers
//         .then(resp => resp.json())
//         .then(data => {
//             data.forEach(user => {
//                 let parr = document.createElement('p');
//                 parr.textContent = user.name;
//                 divUsers.appendChild(parr);
//             })
//         }).catch(e => console.log(e));
// })

async function displayData() {
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(getUsers.ok);

    let data = await getUsers.json();
    // console.log(data)
        data.forEach(user => {
            let parr = document.createElement('p');
            // parr.textContent = user.name;
            parr.textContent = `Nombre de usuario ${user.name}. Email: ${user.email}. Ciudad: ${user.address.city} `;
            divUsers.appendChild(parr);
        });
        console.log(data);

    // return data;
}

// async function otraFuncion(){
//     console.log(await displayData());
// }

// otraFuncion();


// displayData();