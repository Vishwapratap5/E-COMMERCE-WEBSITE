const URL="https://dummyjson.com/products?limit=4";
const ProductImage=document.getElementById("product_img");
const Name=document.getElementById("name");
const rating=document.getElementById("rating");
const price=document.getElementById("price");
const section=document.getElementById("section");

window.addEventListener("load",async ()=>{


    const req=await fetch(URL);
    const data=await req.json();

    console.log(data);
    // console.log(section);
    // console.log(data.procucts);
    
    
    
    for (let i = 0; i < data.products.length; i++) {
        const new_arrivals=document.createElement("div")
        const product_img=document.createElement("img");
    const product_name=document.createElement("h2");
    const product_rating=document.createElement("p");
    const product_price=document.createElement("h2");
    //-----------------------------------------------------------------------
    const link=(data.products[i].images[0]);
     product_img.setAttribute("src",link);
     product_img.style.width="300px";
     product_img.style.height="300px";
     //----------------------------------------------------------------------
    const name=(data.products[i].title);
    product_name.innerHTML=name;
    //----------------------------------------------------------------------
    const rating=(data.products[i].rating);
    product_rating.innerHTML=`Rating :${rating}`;
    //----------------------------------------------------------------------
    const price=(data.products[i].price);
    product_price.innerHTML=`$ ${price}`;
    //----------------------------------------------------------------------
    new_arrivals.style.display="flex";
    new_arrivals.style.flexDirection="column";
    new_arrivals.style.alignItems="center";
    new_arrivals.style.border="1px solid black";
    new_arrivals.style.borderRadius="25px";
    new_arrivals.style.height="40vh";
    new_arrivals.style.width="20%"
    new_arrivals.style.backgroundImage="url('https://img.freepik.com/free-photo/aesthetic-plant-shadow-product-backdrop_53876-129922.jpg?semt=ais_hybrid')";
    //----------------------------------------------------------------------
   new_arrivals.append(product_img,product_name,product_rating,product_price);
   section.appendChild(new_arrivals);
    }
});