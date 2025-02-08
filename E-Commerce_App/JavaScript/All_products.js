// const URL4 = "https://dummyjson.com/products/category-list"; // Correct API URL
const URL = "https://dummyjson.com/products";
const section=document.getElementById("section");
window.addEventListener("load",async ()=>{
    const URL4 = "https://dummyjson.com/products/category-list"; // Correct API URL

    const req4 = await fetch(URL4);
    const data4 = await req4.json();  // Fetch categories array
    const drop_down_list = document.getElementById("dropdown");
    
    drop_down_list.className = "list";  // Assign class to dropdown
    
    // Loop through categories and create options
    for (let i = 0; i < data4.length; i++) {
        const option = document.createElement("option");
        option.className = "option";
        option.value = data4[i];  // Set option value
        option.textContent = data4[i];  // Set displayed text
        drop_down_list.appendChild(option);  // Append to dropdown
    }
    // ===============================================================================================================
    const req1=await fetch(URL);
    const data=await req1.json();

    
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

    
    });