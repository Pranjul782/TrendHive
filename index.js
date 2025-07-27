let moto = document.getElementById("moto");
let text =["Welcome To TrendHive" , "Elevate Your Style with TrendHive!","Join the Hive, Set the Trend!"];
let i=0;

function addtext(){
    moto.textContent=text[i];
    i= i+1;
    if(i===text.length)
    {
        i=0;
    }
}
    setInterval(addtext,4000); 
   addtext();

let fcart = document.getElementById("fcart");
let cartbtn = document.getElementById("cartbtn");
let flag = 0;
cartbtn.addEventListener("click" , function(){
    if(flag==0){
        fcart.style.transform ="translateX(0%)";
        flag = 1;
        console.log(flag);

    }
    else{
        fcart.style.transform="translateX(-100%)";
        flag = 0;
    }
    

})  

let cart = [];
let total = 0;
let Counter = 0;

// Select all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let name = this.getAttribute("data-name");
        let price = parseInt(this.getAttribute("data-price"));

        // Check if the item is already in the cart
        let existingItem = cart.find(item => item.name === name);
        if(existingItem) {
            existingItem.quantity += 1; // Increase quantity
        } else {
            cart.push({ name, price, quantity: 1 });
            Counter += 1;
            console.log(Counter) // Add new item
        }

        total += price; // Increase total price
        updateCart();
    });
});

// Function to update the cart display
function updateCart() {
    let cartList = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let counter = document.getElementById("counter");

    cartList.innerHTML = ""; // Clear the cart list

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} x ${item.quantity}Rs 
                        <button class="remove-item" data-index="${index}">X</button>`;
        cartList.appendChild(li);
    });
    counter.textContent = Counter;
    cartTotal.textContent = `Total: ${total}Rs`; // Update total price

    // Attach event listener to remove buttons
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            let index = parseInt(this.getAttribute("data-index"));
            
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1; // Reduce quantity
                total -= cart[index].price; // Reduce total price
            } else {
                total -= cart[index].price; // Reduce total price
                cart.splice(index, 1);
                Counter -= 1; 
                console.log(Counter);// Remove item if quantity is 1
            }

            updateCart(); // Refresh cart
        });
    });
}


// function validate()
// {
//     let name= document.getElementById("name").value;
//     let Password= document.getElementById("Password").value;
//     let cover = document.getElementById("cover");

//     if(name=="" || Password=="")
// {
//     alert("All the fields must be filled");
// }
// else if (name === "Pranjul" && Password === "123") {
//         alert("Login Successful");
//         cover.style.display = "none";
// }
// else{
//     alert("Incorrect Login");
// }
// }


