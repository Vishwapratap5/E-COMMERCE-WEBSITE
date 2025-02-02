const product_section=document.getElementById("Product-section");
window.addEventListener("load",async ()=>{

    const splitted_array=window.location.href.split("?");
    const split_id=splitted_array[1].split("=");
   const id=split_id[1];
    const req = await fetch(`https://dummyjson.com/products/${id}`);
    const product=await req.json();
    console.log(product);

    const product_div=document.createElement("div");
    const product_description_div=document.createElement("div");
    // ------------------------------------------------------------------------------------------------------------
    const product_price=document.createElement("h1");
    const prodct_warranty=document.createElement("h3");
    const product_discount=document.createElement("h1");
// ----------------------------------------------------------------------------------------------------------------------------
const product_image=document.createElement("img");
product_image.className="product_image";
product_image.setAttribute("src",product.images[0]);
   product_div.appendChild(product_image);
   product_section.appendChild(product_div);
   // ----------------------------------------------------------------------------------------------------------------------------
   const product_title=document.createElement("h1");
   const name=product.title;
    product_title.innerHTML=name;
    product_description_div.appendChild(product_title);

// ----------------------------------------------------------------------------------------------------------------------------
const product_description=document.createElement("p");
product_description.innerHTML=product.description;
product_description_div.appendChild(product_description);
// -------------------------------------------------------------------------------------------------------------------------------
const product_rating = document.createElement("h1");
product_rating.innerHTML = ""; // Initialize with empty string
for (let i = 0; i < Math.floor(product.rating); i++) {  // Use product.rating to show full stars
    product_rating.innerHTML += "⭐";
}
product_description_div.appendChild(product_rating);

// ----------------------------------------------------------------------------------------------------------------------------
product_section.appendChild(product_description_div);

});