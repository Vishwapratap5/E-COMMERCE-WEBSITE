const URL = "https://dummyjson.com/products?limit=4";
const URL2="https://dummyjson.com/products?limit=4&skip=100";
const section=document.getElementById("section");
const section2=document.getElementById("section2")
window.addEventListener("load",async ()=>{


    const req1=await fetch(URL);
    const data=await req1.json();

    const req2=await fetch(URL2);
    const data2=await req2.json();

    console.log(data);
    // console.log(section);
    // console.log(data.procucts);
    
    
    
    for (let i = 0; i < data.products.length; i++) {
        const new_arrivals=document.createElement("div")
        const product_img=document.createElement("img");
    const product_name=document.createElement("h2");
    const product_rating=document.createElement("p");
    const product_price=document.createElement("h2");
    const product_link=document.createElement("a");
    product_link.setAttribute("href",`Product.html?Id=${i+1}`);
    product_link.appendChild(product_img);
    //-----------------------------------------------------------------------
    const link=(data.products[i].images[0]);
     product_img.setAttribute("src",link);
     product_img.className="images"
     product_img.classList.add("images"); // Ensuring the class is applied
     //----------------------------------------------------------------------
    const name=(data.products[i].title);
    product_name.innerHTML=name;
    product_name.className="name";
    //----------------------------------------------------------------------
    const rating=(data.products[i].rating); 
    for(let j=1;j<=rating;j++)
    {
        product_rating.innerHTML +="⭐";
    }
    product_rating.className="rating";
    //----------------------------------------------------------------------
    const price=(data.products[i].price);
    product_price.innerHTML=`$ ${price}`;
    product_price.className="price";
    //----------------------------------------------------------------------
        new_arrivals.className="boxes";
     //----------------------------------------------------------------------
   new_arrivals.append(product_link,product_name,product_rating,product_price);
   section.appendChild(new_arrivals);
    }

    //------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-------------------------------------------------------
      
    for (let i = 0; i < data2.products.length; i++) {
        const top_arrivals=document.createElement("div")
        const top_product_img=document.createElement("img");
    const top_product_name=document.createElement("h2");
    const top_product_rating=document.createElement("p");
    const top_product_price=document.createElement("h2");
    const top_product_link=document.createElement("a");
    top_product_link.setAttribute("href",`Product.html?Id=${data2.products[i].id}`);
top_product_link.appendChild(top_product_img);
    //-----------------------------------------------------------------------
    const link=(data2.products[i].images[0]);
     top_product_img.setAttribute("src",link);
     top_product_img.className="images"
     top_product_img.classList.add("images"); // Ensuring the class is applied
     //----------------------------------------------------------------------
    const name=(data2.products[i].title);
    top_product_name.innerHTML=name;
    top_product_name.className="name";
    //----------------------------------------------------------------------
    const rating=(data2.products[i].rating);
    for(let j=1;j<=rating;j++)
        {
            top_product_rating.innerHTML +="⭐";
        }
    top_product_rating.className="rating";
    //----------------------------------------------------------------------
    const price=(data2.products[i].price);
   top_product_price.innerHTML=`$ ${price}`;
    top_product_price.className="price";
    //----------------------------------------------------------------------
        top_arrivals.className="boxes";
     //----------------------------------------------------------------------
   top_arrivals.append(top_product_link,top_product_name,top_product_rating,top_product_price);
   section2.appendChild(top_arrivals);
    }
});



