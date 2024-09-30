// document.addEventListener("click", (event) =>{
// const width = document.getElementById("width").value;
// const height = document.getElementById('height').value;
// const color = document.getElementById('color').value;
// console.log(color);
// const div = document.createElement('div');
// div.style.width=width+'px';
// div.style.height=height+'px';
// div.style.left=event.pageX+'px';
// div.style.top=event.pageY+'px';
// div.style.backgroundColor=`${color}`;
// div.style.position="absolute";
// document.body.appendChild(div);
// })
// let phone = ["samsung", "apple", "nokia", "asus", "lenovo", "general mobile", "infinix"];
// let pc = ["asus", "toshiba", "msi", "samsung", "apple", "lenovo"];
// let search = document.getElementById("search");
// let write = document.getElementById("write");
// search.addEventListener("click", () =>{
//     let div1 = document.getElementsByClassName("div1");
//     let div2 = document.getElementsByClassName("div2");
//     let text = write.value 
//     if(phone.includes(text)) {
        
//     }
// })

// fetch("https://acb-api.algoritmika.org/api/transaction", {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         from:"Mohammadsumbul",
//         to:"aytenxanim",
//         amount:9999
//     })
// })
// const url ='https://content.guardianapis.com/search';
// const key ='3e87dafb-de20-4690-9960-6d08d92672ad';
// document.querySelector('button').addEventListener('click', function(){
//     const query = encodeURI(document.querySelector('.search').value)
//     fetch(`${url}?q=${query}&api-key=${key}`)
//     .then(res => res.json())
//     .then(data => data.response.results.forEach(e => {
//         document.body.innerHTML +=e.webTitle;
//     }))
// })
// let time = 0;
// let div=document.querySelector('div')
// setInterval(() => {
//   time += 1;
//   div.innerHTML=time
// }, 1000);


// let con = document.querySelector(".con");
// let basket = [];

// async function getData() {
//     let res = await fetch('https://fakestoreapi.com/products');
//     let data = await res.json();
//     let cardsHTML = '';

//     data.forEach(e => {
//         cardsHTML += `
//             <div class="cards" id="${e.id}">
//                 <img src="${e.image}" alt="${e.title}">
//                 <h2>${e.title}</h2>
//                 <button class="add">Elave et</button>
//             </div>
//         `;
//     });

//     con.innerHTML = cardsHTML;

//     let addButtons = document.querySelectorAll(".add");
//     addButtons.forEach(button => {
//         button.addEventListener("click", (e) => {
//             let id = e.target.parentElement.id;
//             let product = data.find(item => item.id == id);
//             if (!basket.find(item => item.id == id)) {
//                 basket.push(product);
//                 alert(`${product.title}`);
//             9    displayBasket(); 
//             } else {
//                 alert(`${product.title}`);
//             }
//         });
//     });
// }



// getData();
// removechild

// document.querySelector('button').addEventListener("click", () =>{
// const input = document.querySelector('.search').value;
// let div = document.querySelector('.yazilar');
// let text = document.createElement('p');
// let button = document.createElement('button');
// button.addEventListener("click", () =>{
//  text.classList.add("baba");
// })
// text.textContent = input
// div.appendChild(text)
// div.appendChild(button)
// })
const button = document.getElementsByClassName('add')[0];
if(button) {
    button.addEventListener("click", () => {
        const input = document.querySelector('.search');
        const value = input.value.trim();
        if(value){
            const yazilar=document.querySelector('.yazilar');
            const text = document.createElement('p');
            text.innerHTML=value;
            const button2= document.createElement('button')
            button2.classList.toggle('button2')
            button2.addEventListener("click", () =>{
                text.classList.toggle('tamamlandi')
            })
            const del = document.createElement('button');
            del.addEventListener("click", () =>{
                yazilar.removeChild(text);
            })
            yazilar.appendChild(text);
            text.appendChild(button2);
            text.appendChild(del);
        }
    })}