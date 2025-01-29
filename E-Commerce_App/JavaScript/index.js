const URL="https://dummyjson.com/products?limit=4";
const section=document.getElementsByTagName("section");
const ProductImage=document.getElementById("product_img");
const Name=document.getElementById("name");
const rating=document.getElementById("rating");
const price=document.getElementById("price");

window.addEventListener("load",async ()=>{

    const product_img=document.createElement("img");
    const product_name=document.createElement("h2");
    const product_rating=document.createElement("p");
    const product_price=document.createElement("h2");

    const req=await fetch(URL);
    const data=await req.json();

    console.log(data);
    console.log(section);
    
    
    for (let i = 0; i < data.products.length; i++) {
        console.log(data.products[i].title);
    }
})