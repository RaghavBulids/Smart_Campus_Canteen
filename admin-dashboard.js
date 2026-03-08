const STORAGE_KEY = "canteenOrders";

function loadDashboard() {
  const orders = loadOrdersFromStorage();
  updateStatsCards(orders);
  renderOrdersTable(orders);
  renderTopItems(orders);
}

function loadOrdersFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function updateStatsCards(orders) {
  let totalRevenue = 0, pendingCount = 0, completedCount = 0;

  orders.forEach(order => {
    if (order.status !== "Cancelled") totalRevenue += order.total;
    if (order.status === "Pending") pendingCount++;
    if (order.status === "Completed") completedCount++;
  });

  document.getElementById("statTotalOrders").textContent = orders.length;
  document.getElementById("statRevenue").textContent = "₹" + totalRevenue;
  document.getElementById("statPending").textContent = pendingCount;
  document.getElementById("statCompleted").textContent = completedCount;
}

function renderOrdersTable(orders) {
  const emptyState = document.getElementById("emptyState");
  const tableWrapper = document.getElementById("tableWrapper");
  const tableBody = document.getElementById("ordersTableBody");
  const filter = document.getElementById("statusFilter").value;
  const searchTerm = document.getElementById("orderSearch").value.toLowerCase();

  let filteredOrders = orders.filter(order => {
    const matchesStatus = filter === "all" || order.status === filter;
    const matchesSearch = String(order.id).toLowerCase().includes(searchTerm) || 
                          order.items.some(item => item.name.toLowerCase().includes(searchTerm));
    return matchesStatus && matchesSearch;
  });

  if (filteredOrders.length === 0) {
    emptyState.style.display = "block";
    tableWrapper.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  tableWrapper.style.display = "block";

  tableBody.innerHTML = filteredOrders.slice().reverse().map(order => buildOrderRow(order)).join('');
}

function buildOrderRow(order) {
  const shortId = "#" + String(order.id).slice(-6);
  const itemCount = order.items.reduce((acc, item) => acc + item.qty, 0);
  const badgeClass = order.status.toLowerCase();

  let actionBtns = `<button class="action-btn btn-view" onclick="openDetailModal(${order.id})">View</button>`;
  if (order.status === "Pending") {
    actionBtns += `<button class="action-btn btn-complete" onclick="updateStatus(${order.id}, 'Completed')">✓ Done</button>`;
    actionBtns += `<button class="action-btn btn-cancel" onclick="updateStatus(${order.id}, 'Cancelled')">✕ Cancel</button>`;
  }

  return `
    <tr>
      <td class="order-id-cell">${shortId}</td>
      <td>${order.time}</td>
      <td><span class="items-badge">${itemCount} items</span></td>
      <td>₹${order.subtotal}</td>
      <td style="color:#5cb87a;">– ₹${order.discount}</td>
      <td class="total-cell">₹${order.total}</td>
      <td>${order.pickupTime}</td>
      <td><span class="status-badge ${badgeClass}">${order.status}</span></td>
      <td>${actionBtns}</td>
    </tr>`;
}

function filterOrders() {
  renderOrdersTable(loadOrdersFromStorage());
}

function updateStatus(orderId, newStatus) {
  const orders = loadOrdersFromStorage();
  const index = orders.findIndex(o => o.id === orderId);
  if (index !== -1) {
    orders[index].status = newStatus;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    loadDashboard();
    showToast(`Order ${newStatus}`);
  }
}

function openDetailModal(orderId) {
  const orders = loadOrdersFromStorage();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  document.getElementById("modalContent").innerHTML = buildModalContent(order);
  document.getElementById("detailModal").classList.add("open");
}

function closeDetailModal() {
  document.getElementById("detailModal").classList.remove("open");
}

function buildModalContent(order) {
  const itemsHtml = order.items.map(item => `
    <div class="modal-item-row">
      <img src="${item.image}" alt="${item.name}" class="modal-item-img" onerror="this.src='https://via.placeholder.com/40?text=Food'">
      <span>${item.name}</span>
      <span class="modal-item-qty">× ${item.qty}</span>
      <span class="modal-item-price">₹${item.price * item.qty}</span>
    </div>
  `).join('');

  return `
    <div class="modal-row"><span>Order ID</span><span>#${String(order.id).slice(-6)}</span></div>
    <div class="modal-row"><span>Status</span><span>${order.status}</span></div>
    <div class="modal-items-list">${itemsHtml}</div>
    <div class="modal-row"><span>Subtotal</span><span>₹${order.subtotal}</span></div>
    <div class="modal-row"><span>Discount</span><span>– ₹${order.discount}</span></div>
    <div class="modal-row total-row"><span>Total</span><span>₹${order.total}</span></div>
  `;
}

function renderTopItems(orders) {
  const container = document.getElementById("topItemsList");
  const emptyMsg = document.getElementById("topItemsEmpty");

  if (!orders.length) {
    emptyMsg.style.display = "block";
    container.innerHTML = "";
    return;
  }

  const counts = {};
  orders.filter(o => o.status !== "Cancelled").forEach(order => {
    order.items.forEach(item => {
      if (!counts[item.name]) counts[item.name] = { count: 0, image: item.image };
      counts[item.name].count += item.qty;
    });
  });

  const sorted = Object.entries(counts)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  if (!sorted.length) {
    emptyMsg.style.display = "block";
    container.innerHTML = "";
    return;
  }

  emptyMsg.style.display = "none";
  const max = sorted[0].count;

  container.innerHTML = sorted.map((item, i) => `
    <div class="top-item-row">
      <div class="top-item-rank">${i + 1}</div>
      <img src="${item.image}" class="top-item-img-circle" onerror="this.src='https://via.placeholder.com/50?text=Food'">
      <div class="top-item-info">
        <p class="top-item-name">${item.name}</p>
        <p class="top-item-count">${item.count} ordered</p>
      </div>
      <div class="top-item-bar-wrap">
        <div class="top-item-bar" style="width:${(item.count / max) * 100}%"></div>
      </div>
    </div>
  `).join('');
}

function confirmClearOrders() {
  if (confirm("Delete ALL orders permanently?")) {
    localStorage.removeItem(STORAGE_KEY);
    loadDashboard();
    showToast("Data Cleared", true);
  }
}

function showToast(msg, isErr) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = `toast show ${isErr ? 'error-toast' : ''}`;
  setTimeout(() => toast.className = "toast", 2500);
}

function goToLogin() {
  window.location.href = "../index.html";
}

document.getElementById("detailModal").addEventListener("click", function(e) {
  if (e.target === this) closeDetailModal();
});

loadDashboard();