const appritiation = document.getElementById("appritiation");
const ordernum = document.getElementById("ordernum");
document.getElementById("myOrder").addEventListener("click", function() {
    let order = {
        breakfast: [],
        drinks: [],
        starters: [],
        mainDishes: [],
        desserts: []
    };

    document.querySelectorAll('input[name="breakfast[]"]:checked').forEach(function(checkbox) {
        order.breakfast.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="drink[]"]:checked').forEach(function(checkbox) {
        order.drinks.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="starter[]"]:checked').forEach(function(checkbox) {
        order.starters.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="main_dish[]"]:checked').forEach(function(checkbox) {
        order.mainDishes.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="dessert[]"]:checked').forEach(function(checkbox) {
        order.desserts.push(checkbox.nextSibling.textContent.trim());
    });

    let msg = "You ordered: ";
    if (order.breakfast.length > 0) {
        msg += " " + order.breakfast ; 
    } else {
        msg += "";
    }

    if (order.drinks.length > 0) {
        msg += " ," + order.drinks ;
    } else {
        msg += "";
    }

    if (order.starters.length > 0) {
        msg += " ," + order.starters ;
    } else {
        msg += "";
    }

    if (order.mainDishes.length > 0) {
        msg += " ," + order.mainDishes ;
    } else {
        msg += "";
    }

    if (order.desserts.length > 0) {
        msg += " " + order.desserts ;
    } else {
        msg += "";
    }
     
    
    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);
    
    let orderCount = localStorage.getItem(dateString) ? parseInt(localStorage.getItem(dateString)) : 0;
    orderCount++;
    
    localStorage.setItem(dateString, orderCount);

    const orderNumber = String(orderCount).padStart(4, '0');

    ordernum.textContent = `Your Order Number is: ${orderNumber}`;


    document.getElementById("msg").textContent = msg;
    appritiation.textContent = "Thank You For Choosing Iviwe Restuarant, your order will be ready soon.";
});