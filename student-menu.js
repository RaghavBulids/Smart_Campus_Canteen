var menuData = {

  veg: {
    "Starters": [
      { id: 1,  name: "Paneer Tikka",      price: 180, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&q=80", category: "Starters" },
      { id: 2,  name: "Veg Tawa Pulav",  price: 120, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&q=80", category: "Starters" },
      { id: 3,  name: "Makhani Kebab",  price: 140, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&q=80", category: "Starters" }
    ],
    "Main Course": [
      { id: 4,  name: "Paneer Butter Masala", price: 220, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80", category: "Main Course" },
      { id: 5,  name: "Dal Makhani",           price: 180, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&q=80", category: "Main Course" },
      { id: 6,  name: "Veg Biryani",           price: 200, image: "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg", category: "Main Course" },
      { id: 7,  name: "Dosa",          price: 200, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&q=80", category: "Main Course" }
    ],
    "Desserts": [
      { id: 8,  name: "Tiramisu", price: 180, image: "https://www.micheldumas.com/wp-content/uploads/2025/05/tiramisu1-ezgif.com-jpg-to-webp-converter-1-1.webp", category: "Desserts" },
      { id: 9,  name: "Mango Kulfi", price: 90, image: "https://www.chilitochoc.com/wp-content/uploads/2021/07/mango-kulfi-sq.jpg", category: "Desserts" },
      { id: 10, name: "Rasgulla",    price: 75, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3EerZuChoGLlNXmz5-YZSC4-W-fmFxXSA&s", category: "Desserts" }
    ],
    "Beverages": [
      { id: 11, name: "Mango Lassi",     price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jGkJt4c-HWK04Pu-l-Pk02xAZZ6PxhOFHQ&s", category: "Beverages" },
      { id: 12, name: "Masala Chai",     price: 40, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&q=80", category: "Beverages" },
      { id: 13, name: "Fresh Lime Soda", price: 55, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&q=80", category: "Beverages" }
    ],
    "Snacks": [
      { id: 14, name: "Samosa (2 pcs)", price: 50,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Sg_B5d5_DGTmAQEX6aTmV2zfHLAsW8gAzA&s", category: "Snacks" },
      { id: 15, name: "Pav Bhaji",      price: 100, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&q=80", category: "Snacks" },
      { id: 16, name: "Dawangiri Idli",    price: 120, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&q=80", category: "Snacks" }
    ]
  },

  nonveg: {
    "Starters": [
      { id: 17, name: "Chicken Tikka", price: 220, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&q=80", category: "Starters" },
      { id: 18, name: "Fish Fingers",  price: 200, image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=300&q=80", category: "Starters" },
      { id: 19, name: "Egg Bhurji",    price: 120, image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=300&q=80", category: "Starters" }
    ],
    "Main Course": [
      { id: 20, name: "Butter Chicken", price: 260, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&q=80", category: "Main Course" },
      { id: 21, name: "Mutton Biryani", price: 320, image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&q=80", category: "Main Course" },
      { id: 22, name: "Prawn Masala",   price: 300, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80", category: "Main Course" },
      { id: 23, name: "Egg Curry",      price: 160, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&q=80", category: "Main Course" }
    ],
    "Desserts": [
      { id: 24, name: "Shahi Tukda",      price: 95,  image: "https://images.unsplash.com/photo-1666367522880-7fd2a2b6de37?w=300&q=80", category: "Desserts" },
      { id: 25, name: "Chocolate Mousse", price: 110, image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=300&q=80", category: "Desserts" }
    ],
    "Beverages": [
      { id: 26, name: "Cold Coffee",      price: 80, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80", category: "Beverages" },
      { id: 27, name: "Watermelon Juice", price: 65, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&q=80", category: "Beverages" },
      { id: 28, name: "Buttermilk",       price: 45, image: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=300&q=80", category: "Beverages" }
    ],
    "Snacks": [
      { id: 29, name: "Chicken Rolls",   price: 150, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&q=80", category: "Snacks" },
      { id: 30, name: "Egg Sandwich",    price: 90,  image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=300&q=80", category: "Snacks" },
      { id: 31, name: "Chicken Nuggets", price: 160, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&q=80", category: "Snacks" }
    ]
  }

};

var COUPONS = {
  "WELCOME10": { discount: 10, label: "10% off – Welcome offer" },
  "STUDENT20": { discount: 20, label: "20% off – Student special" },
  "FEAST15":   { discount: 15, label: "15% off – Feast deal" },
  "LUNCH5":    { discount: 5,  label: "5% off – Lunch saver" },
  "CAMPUS30":  { discount: 30, label: "30% off – Campus exclusive" }
};

var currentDiet       = "veg";
var cartItems         = [];
var appliedCoupon     = null;
var couponUsedOnce    = false;

function loadUserName() {
  var name = localStorage.getItem("canteenUserName") || sessionStorage.getItem("canteenUserName") || "Student";
  document.getElementById("userNameDisplay").textContent = name;
  document.getElementById("userAvatar").textContent = name.charAt(0).toUpperCase();
}

function switchDiet(dietType) {
  currentDiet = dietType;
  var vegTab    = document.getElementById("vegTab");
  var nonvegTab = document.getElementById("nonvegTab");
  if (dietType === "veg") {
    vegTab.className    = "tab-btn tab-veg active-veg";
    nonvegTab.className = "tab-btn tab-nonveg";
  } else {
    nonvegTab.className = "tab-btn tab-nonveg active-nonveg";
    vegTab.className    = "tab-btn tab-veg";
  }
  renderMenu();
}

function renderMenu() {
  var container  = document.getElementById("menuContainer");
  var categories = menuData[currentDiet];
  var html       = "";
  for (var categoryName in categories) {
    var items = categories[categoryName];
    html += '<h2 class="category-title">' + categoryName + '</h2>';
    html += '<div class="food-grid">';
    for (var i = 0; i < items.length; i++) {
      html += buildFoodCard(items[i]);
    }
    html += '</div>';
  }
  container.innerHTML = html;
}

function buildFoodCard(item) {
  return (
    '<div class="food-card">' +
      '<div class="food-image"><img src="' + item.image + '" alt="' + item.name + '" onerror="this.style.display=\'none\'" /></div>' +
      '<div class="food-info">' +
        '<p class="food-name">' + item.name + '</p>' +
        '<p class="food-category">' + item.category + '</p>' +
        '<p class="food-price">Rs. ' + item.price + '</p>' +
        '<button class="add-btn" id="addBtn-' + item.id + '" ' +
          'onclick="addToCart(' + item.id + ', \'' + item.name.replace(/'/g, "\\'") + '\', ' + item.price + ', \'' + item.image + '\')">' +
          'Add to Cart' +
        '</button>' +
      '</div>' +
    '</div>'
  );
}

function addToCart(itemId, itemName, itemPrice, itemImage) {
  var existingItem = findCartItem(itemId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cartItems.push({ id: itemId, name: itemName, price: itemPrice, image: itemImage, qty: 1 });
  }
  showAddedFeedback(itemId);
  renderCart();
}

function findCartItem(itemId) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === itemId) return cartItems[i];
  }
  return null;
}

function showAddedFeedback(itemId) {
  var btn = document.getElementById("addBtn-" + itemId);
  if (!btn) return;
  btn.textContent = "Added!";
  btn.classList.add("added");
  setTimeout(function () {
    btn.textContent = "Add to Cart";
    btn.classList.remove("added");
  }, 1000);
}

function increaseQty(itemId) {
  var item = findCartItem(itemId);
  if (item) item.qty += 1;
  renderCart();
}

function decreaseQty(itemId) {
  var item = findCartItem(itemId);
  if (item && item.qty > 1) item.qty -= 1;
  renderCart();
}

function removeItem(itemId) {
  cartItems = cartItems.filter(function (item) { return item.id !== itemId; });
  renderCart();
}

function calculateSubtotal() {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].qty;
  }
  return total;
}

function renderCart() {
  var emptyMsg      = document.getElementById("cartEmptyMsg");
  var itemsList     = document.getElementById("cartItemsList");
  var cartTotals    = document.getElementById("cartTotals");
  var couponSection = document.getElementById("couponSection");
  var pickupSection = document.getElementById("pickupSection");
  var orderSection  = document.getElementById("orderSection");

  updateCartBadge();

  if (cartItems.length === 0) {
    emptyMsg.style.display      = "block";
    itemsList.innerHTML         = "";
    cartTotals.style.display    = "none";
    couponSection.style.display = "none";
    pickupSection.style.display = "none";
    orderSection.style.display  = "none";
    return;
  }

  emptyMsg.style.display      = "none";
  cartTotals.style.display    = "block";
  couponSection.style.display = "block";
  pickupSection.style.display = "block";
  orderSection.style.display  = "block";

  var html = "";
  for (var i = 0; i < cartItems.length; i++) {
    var item      = cartItems[i];
    var lineTotal = item.price * item.qty;
    html += (
      '<div class="cart-item">' +
        '<div class="cart-item-img"><img src="' + item.image + '" alt="' + item.name + '" onerror="this.parentElement.style.background=\'#1a1a2e\'" /></div>' +
        '<div class="cart-item-details">' +
          '<p class="cart-item-name">' + item.name + '</p>' +
          '<p class="cart-item-price">Rs. ' + lineTotal + '</p>' +
          '<div class="qty-controls">' +
            '<button class="qty-btn" onclick="decreaseQty(' + item.id + ')">&#8722;</button>' +
            '<span class="qty-number">' + item.qty + '</span>' +
            '<button class="qty-btn" onclick="increaseQty(' + item.id + ')">+</button>' +
          '</div>' +
        '</div>' +
        '<button class="remove-btn" onclick="removeItem(' + item.id + ')" title="Remove">&#10005;</button>' +
      '</div>'
    );
  }
  itemsList.innerHTML = html;

  var subtotal       = calculateSubtotal();
  var discountRate   = appliedCoupon ? COUPONS[appliedCoupon].discount : 0;
  var discount       = appliedCoupon ? Math.round(subtotal * discountRate / 100) : 0;
  var total          = subtotal - discount;

  document.getElementById("subtotalDisplay").textContent = "Rs. " + subtotal;
  document.getElementById("discountDisplay").textContent = "- Rs. " + discount;
  document.getElementById("totalDisplay").textContent    = "Rs. " + total;

  renderOrderSummary(subtotal, discount, total);
}

function updateCartBadge() {
  var count = 0;
  for (var i = 0; i < cartItems.length; i++) count += cartItems[i].qty;
  document.getElementById("cartBadge").textContent = count;
  document.getElementById("fabCount").textContent  = count;
}

function applyCoupon() {
  var couponInput = document.getElementById("couponInput");
  var couponMsg   = document.getElementById("couponMsg");
  var enteredCode = couponInput.value.trim().toUpperCase();

  if (couponUsedOnce) {
    couponMsg.textContent = "Coupon already applied to this order.";
    couponMsg.className   = "coupon-msg error";
    return;
  }

  if (COUPONS[enteredCode]) {
    appliedCoupon          = enteredCode;
    couponUsedOnce         = true;
    couponInput.disabled   = true;
    couponMsg.textContent  = "Coupon Applied: " + COUPONS[enteredCode].label;
    couponMsg.className    = "coupon-msg success";
    renderCart();
  } else {
    couponMsg.textContent = "Invalid Coupon Code. Try: WELCOME10, STUDENT20, FEAST15, LUNCH5, CAMPUS30";
    couponMsg.className   = "coupon-msg error";
  }
}

function populateTimeDropdown() {
  var selectEl = document.getElementById("pickupTimeSelect");
  for (var totalMins = 480; totalMins <= 1320; totalMins += 30) {
    var hours   = Math.floor(totalMins / 60);
    var minutes = totalMins % 60;
    var ampm    = hours < 12 ? "AM" : "PM";
    var hour12  = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
    var minStr  = minutes === 0 ? "00" : String(minutes);
    var label   = hour12 + ":" + minStr + " " + ampm;
    var value   = (hours < 10 ? "0" + hours : hours) + ":" + minStr;
    var option  = document.createElement("option");
    option.value = value;
    option.text  = label;
    selectEl.appendChild(option);
  }
}

function renderOrderSummary(subtotal, discount, total) {
  var selectedTime = document.getElementById("pickupTimeSelect").value;
  var timeLabel    = selectedTime ? selectedTime : "Not selected yet";
  var html =
    '<div class="summary-row"><span>Items</span><span>' + cartItems.length + ' item(s)</span></div>' +
    '<div class="summary-row"><span>Subtotal</span><span>Rs. ' + subtotal + '</span></div>' +
    '<div class="summary-row"><span>Discount</span><span>- Rs. ' + discount + '</span></div>' +
    '<div class="summary-row bold"><span>Total</span><span>Rs. ' + total + '</span></div>' +
    '<div class="summary-row"><span>Pickup</span><span>' + timeLabel + '</span></div>';
  document.getElementById("orderSummaryRows").innerHTML = html;
}

function placeOrder() {
  var timeError    = document.getElementById("timeError");
  var selectedTime = document.getElementById("pickupTimeSelect").value;

  if (cartItems.length === 0) {
    timeError.textContent = "Your cart is empty. Add items first.";
    return;
  }
  if (!selectedTime) {
    timeError.textContent = "Please select a pickup time before ordering.";
    return;
  }

  timeError.textContent = "";
  var successBox = document.getElementById("successBox");
  successBox.style.display = "block";
  saveOrderToStorage(selectedTime);
  clearCartAfterOrder();
  successBox.scrollIntoView({ behavior: "smooth" });
}

function saveOrderToStorage(pickupTime) {
  var subtotal     = calculateSubtotal();
  var discountRate = appliedCoupon ? COUPONS[appliedCoupon].discount : 0;
  var discount     = appliedCoupon ? Math.round(subtotal * discountRate / 100) : 0;
  var total        = subtotal - discount;

  var newOrder = {
    id:         Date.now(),
    time:       new Date().toLocaleString(),
    pickupTime: pickupTime,
    items:      JSON.parse(JSON.stringify(cartItems)),
    subtotal:   subtotal,
    discount:   discount,
    total:      total,
    status:     "Pending"
  };

  var existing = localStorage.getItem("canteenOrders");
  var orders   = existing ? JSON.parse(existing) : [];
  orders.push(newOrder);
  localStorage.setItem("canteenOrders", JSON.stringify(orders));
}

function clearCartAfterOrder() {
  cartItems      = [];
  appliedCoupon  = null;
  couponUsedOnce = false;

  var couponInput      = document.getElementById("couponInput");
  couponInput.value    = "";
  couponInput.disabled = false;
  document.getElementById("couponMsg").textContent = "";
  document.getElementById("pickupTimeSelect").value = "";

  renderCart();
}

function toggleCartPanel() {
  var cartPanel = document.getElementById("cartPanel");
  cartPanel.classList.toggle("open");
}

loadUserName();
renderMenu();
populateTimeDropdown();