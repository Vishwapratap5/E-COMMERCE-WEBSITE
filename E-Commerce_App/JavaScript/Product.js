const product_section=document.getElementById("Product-section");
const user_reviwes=document.getElementById("User_reviews");
window.addEventListener("load",async ()=>{

    const splitted_array=window.location.href.split("?");
    const split_id=splitted_array[1].split("=");
   const id=split_id[1];
    const req = await fetch(`https://dummyjson.com/products/${id}`);
    const product=await req.json();
    console.log(product);

    const product_div=document.createElement("div");
    product_div.className="Product_img";
    const product_description_div=document.createElement("div");
    product_description_div.className="Description";
    // ------------------------------------------------------------------------------------------------------------
  

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
product_description.className="Description_para";
product_description.innerHTML=product.description;
product_description_div.appendChild(product_description);
// -------------------------------------------------------------------------------------------------------------------------------
const product_rating = document.createElement("h1");
for (let i = 0; i < Math.floor(product.rating); i++) {  // Use product.rating to show full stars
    product_rating.innerHTML += "⭐";
}
product_description_div.appendChild(product_rating);
// ------------------------------------------------------------------------------------------------------------------------------
const product_price=document.createElement("h1");
product_price.innerHTML=`Price : $${product.price}`;
product_description_div.appendChild(product_price);

// ----------------------------------------------------------------------------------------------------------------------------
const product_discount=document.createElement("h1");
product_discount.innerHTML=`Discount : ${product.discountPercentage} %`;
product_description_div.appendChild(product_discount);
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
const buybtn = document.createElement("button");
    buybtn.className = "buybtn";
    buybtn.innerHTML = "Buy";

    const Addbtn = document.createElement("button");
    Addbtn.className = "Addbtn";
    Addbtn.innerHTML = "Add to Cart";

    // Create a container for the buttons
    const btndiv = document.createElement("div");
    btndiv.className = "btndiv";
    btndiv.appendChild(buybtn);
    btndiv.appendChild(Addbtn);
    product_description_div.appendChild(btndiv);

// ------------------------------------------------------------------------------------------------------------------------------
product_section.appendChild(product_description_div);
// ------------------------------------------------------------------------------------------------------------------------------
const review_div = document.createElement("div");

for (let m = 0; m < product.reviews.length; m++) {
    const review = product.reviews[m]; // Access the current review object

    const reviewElement = document.createElement("div");
    reviewElement.innerHTML = `
        <h3>${review.reviewerName}</h3>
        <p><strong>Rating:</strong> ${review.rating}</p>
        <p><strong>Comment:</strong> ${review.comment}</p>
        <p><strong>Date:</strong> ${review.date}</p>
    `;

    review_div.appendChild(reviewElement); // Append each review to the container
}

user_reviwes.appendChild(review_div); // Append the container to the user reviews sectionr_reviwes.appendChild(review_div);
    user_reviwes.className="user_reviews";
    review_div.className="user_div";
}
);

