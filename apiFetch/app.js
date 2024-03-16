const url = "https://cat-fact.herokuapp.com/facts"
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getCatfact = async() => {
    let responce = await fetch(url);
    console.log(responce.status);
    console.log(responce); // JSON format data 
    let data = await responce.json();
    fact.innerText = data[1].text;
}

btn.addEventListener("click", getCatfact);