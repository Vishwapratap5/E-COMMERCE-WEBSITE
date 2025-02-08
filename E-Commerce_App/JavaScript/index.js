const URL = "https://dummyjson.com/products?limit=4";
const URL2="https://dummyjson.com/products?limit=4&skip=100";
const URL3="https://dummyjson.com/products/category/mens-shirts?limit=4";
const section=document.getElementById("section");
const section2=document.getElementById("section2")
const section3=document.getElementById("section3");
window.addEventListener("load",async ()=>{


    const req1=await fetch(URL);
    const data=await req1.json();

    const req2=await fetch(URL2);
    const data2=await req2.json();

    const req3=await fetch(URL3);
    const data3=await req3.json();

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
     //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    

     const select_category = document.createElement("div");
     select_category.className = "Select_Category";
 
     for (let i = 0; i < data3.products.length; i++) {
         const DataBox = document.createElement("div");
         const imgBox = document.createElement("img");
        const preview_img_link=document.createElement("a");
        const product_Preview_name=document.createElement("h1");
        product_Preview_name.innerHTML=data3.products[i].title;
        product_Preview_name.className="name";
        preview_img_link.setAttribute("href", `Product.html?Id=${data3.products[i].id}`);
         imgBox.setAttribute("src", data3.products[i].thumbnail);
         preview_img_link.appendChild(imgBox);
         imgBox.className = "images";
        DataBox.className="DataBox";
         DataBox.append(preview_img_link,product_Preview_name);
         DataBox.className = "boxes";
         select_category.appendChild(DataBox);
     }
 
     // Append select_category to section3
     section3.appendChild(select_category);



    //  ====================================================================================================================

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


});

async function display(){
    const URL5="https://dummyjson.com/products?limit=15";

    const req5=await fetch(URL5);
    const data5=await req5.json();
    console.log(data5);
}