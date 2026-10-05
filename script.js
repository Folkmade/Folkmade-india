/*const products = [
{id:'p1',title:'Hand-Painted Blue Pottery Flower Vase',category:'Handmade Decor',subCategory:'Pottery & Ceramics',price:1299,originalPrice:1699,rating:4.8,reviewsCount:34,artisanName:'Ramesh Kumhar',artisanRegion:'Jaipur, Rajasthan',image:'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=600',description:'Authentic quartz-sand pottery handcrafted by master craftsmen in Jaipur. Traditional cobalt blue geometric motifs with floral borders.',materials:'Quartz stone powder, glass, natural oxides',inStock:12,isFeatured:true,isBestseller:true},
{id:'p2',title:'Grandma’s Traditional Mango Avakaya Pickle (500g)',category:'Traditional Edibles',subCategory:'Pickles & Spices',price:349,originalPrice:420,rating:4.9,reviewsCount:88,artisanName:'Saraswathi Amma',artisanRegion:'Guntur, Andhra Pradesh',image:'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600',description:'Sun-dried raw mangoes marinated in cold-pressed sesame oil, freshly ground mustard, and fragrant Andhra spices. 100% natural and preservative-free.',materials:'Raw Mango, Cold-Pressed Sesame Oil, Ground Spices, Sea Salt',inStock:25,isFeatured:true,isBestseller:true},
{id:'p3',title:'Carved Teakwood Wall Hanging Jharokha',category:'Handmade Decor',subCategory:'Wood Carvings',price:2499,originalPrice:3100,rating:4.7,reviewsCount:19,artisanName:'Gurpreet Singh & Sons',artisanRegion:'Saharanpur, Uttar Pradesh',image:'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=600',description:'Intricately hand-carved solid teakwood wall jharokha with subtle brass filigree work. Brings rustic vintage royalty to any home corner.',materials:'Reclaimed Teak Wood, Brass Accents, Antique Stain Finish',inStock:6,isFeatured:false,isBestseller:false},
{id:'p4',title:'Artisanal Himalayan Organic CTC & Orthodox Tea Blend',category:'Traditional Edibles',subCategory:'Teas & Brews',price:499,originalPrice:599,rating:4.9,reviewsCount:42,artisanName:'Sonam Norbu',artisanRegion:'Darjeeling, West Bengal',image:'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',description:'Single-origin high-altitude tea leaves hand-plucked from pesticide-free mountain gardens. Rich golden liquor with naturally subtle Muscatel notes.',materials:'100% Whole Tea Leaves, Cardamom, Dried Rose Petals',inStock:30,isFeatured:true,isBestseller:false},
{id:'p5',title:'Handwoven Dhurrie Floor Mat - Terracotta Motif',category:'Handmade Decor',subCategory:'Textiles & Rugs',price:1850,originalPrice:2200,rating:4.6,reviewsCount:15,artisanName:'Devika Devi',artisanRegion:'Mirzapur, Uttar Pradesh',image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=600',description:'100% organic cotton handloom rug woven on pit looms. Features earth-tone tribal geometric patterns dyed with natural plant extracts.',materials:'Organic Raw Cotton, Plant-based Vegetable Dyes',inStock:8,isFeatured:false,isBestseller:true},
{id:'p6',title:'Pure Handmade Desi Cow Ghee Soan Papdi & Sweets',category:'Traditional Edibles',subCategory:'Sweets & Snacks',price:399,originalPrice:480,rating:4.8,reviewsCount:51,artisanName:'Lala Shivdayal Sweet Makers',artisanRegion:'Mathura, Uttar Pradesh',image:'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=600',description:'Traditional flaky melt-in-mouth sweet prepared in pure Bilona Ghee with crushed pistachios and green cardamom. Zero artificial colors.',materials:'Desi Cow Ghee, Gram Flour, Pistachios, Almonds, Cardamom',inStock:18,isFeatured:false,isBestseller:true}
];

const artisans=[
{id:'a1',name:'Ramesh Kumhar',region:'Jaipur, Rajasthan',specialty:'Blue Pottery & Ceramics',experience:'22 Years',status:'Verified',productsCount:4,bio:'3rd generation artisan preserving the endangered royal blue pottery legacy of Rajasthan.'},
{id:'a2',name:'Saraswathi Amma',region:'Guntur, Andhra Pradesh',specialty:'Traditional Pickles & Podi',experience:'35 Years',status:'Verified',productsCount:6,bio:'Hand-grinding traditional spices using stone pestles following heirloom family recipes.'},
{id:'a3',name:'Gurpreet Singh',region:'Saharanpur, UP',specialty:'Hand Carved Woodcraft',experience:'18 Years',status:'Verified',productsCount:3,bio:'Crafting sustainable teakwood architectural artifacts and decor with skilled local wood carvers.'},
{id:'a4',name:'Sonam Norbu',region:'Darjeeling, WB',specialty:'Organic Herbal Teas',experience:'15 Years',status:'Verified',productsCount:5,bio:'Nurturing small tea growers in high Himalayas for ethical and sustainable tea production.'}
];

let state={
view:'shop',category:'All',search:'',sort:'featured',price:3000,
cart:[],wishlist:[],adminTab:'products',
orders:[
{id:'ORD-8821',customer:'Aarav Sharma',amount:1648,items:2,status:'Shipped',date:'2026-03-30',paymentMethod:'UPI'},
{id:'ORD-8822',customer:'Priya Nair',amount:2499,items:1,status:'Pending',date:'2026-04-01',paymentMethod:'Card'}
]
};

const $=id=>document.getElementById(id);
function money(n){return '₹'+Number(n).toLocaleString('en-IN')}
function toast(msg){$('toast').textContent=msg;$('toast').classList.remove('hidden');setTimeout(()=>$('toast').classList.add('hidden'),2500)}
function showView(v){state.view=v;render();window.scrollTo({top:0,behavior:'smooth'})}
function toggleAdmin(){
  if(currentUser && currentUser.role==='admin') showView('admin');
  else openAuth();
}
function clearSearch(){state.search='';$('searchInput').value='';renderShop()}
function setCategory(c){state.category=c;renderShop()}
function filtered(){
let arr=products.filter(p=>(state.category==='All'||p.category===state.category)&&
(p.title.toLowerCase().includes(state.search.toLowerCase())||p.artisanName.toLowerCase().includes(state.search.toLowerCase())||p.artisanRegion.toLowerCase().includes(state.search.toLowerCase()))&&p.price<=state.price);
return arr.sort((a,b)=>state.sort==='price-low'?a.price-b.price:state.sort==='price-high'?b.price-a.price:state.sort==='rating'?b.rating-a.rating:(b.isFeatured?1:0)-(a.isFeatured?1:0))
}
function productCard(p){
let wished=state.wishlist.includes(p.id);
return `<article class="product">
<img class="product-img" src="${p.image}" alt="">
<div class="product-body">
<div class="product-cat">${p.subCategory}</div>
<h3>${p.title}</h3>
<div class="artisan">By ${p.artisanName} · ${p.artisanRegion}</div>
<div class="stars">★ ${p.rating} <span style="color:#a8a29e">(${p.reviewsCount})</span></div>
<div class="price">${money(p.price)} <span class="old">${money(p.originalPrice)}</span></div>
<div class="product-actions">
<button class="add" onclick="addCart('${p.id}')">Add to Cart</button>
<button class="wish" onclick="toggleWish('${p.id}')">${wished?'♥ Saved':'♡ Save'}</button>
</div>
<button class="small-btn" style="width:100%;margin-top:8px" onclick="openProduct('${p.id}')">View Details</button>
</div></article>`
}
function renderShop(){
state.search=$('searchInput')?.value||state.search;
let arr=filtered();
$('app').innerHTML=`<div class="container">
<section class="hero">
<span class="pill">Directly from Rural Craft Hubs</span>
<h1>Empowering India's Heritage Craftsmen & Cooks</h1>
<p>Discover authentic stone-ground spices, sun-dried home pickles, Jaipur hand pottery, and handcrafted woodcraft directly from master artisans.</p>
<div class="hero-actions"><button class="primary" onclick="setCategory('Handmade Decor')">Explore Home Decor →</button><button class="secondary" onclick="setCategory('Traditional Edibles')">Explore Local Delights →</button></div>
</section>
<div class="section-title"><div><h2>Shop by Tradition</h2><p>Discover handcrafted products made by skilled Indian artisans.</p></div></div>
<div class="categories">
<div class="category ${state.category==='Handmade Decor'?'active':''}" onclick="setCategory('Handmade Decor')"><div><h3>🏺 Handmade Decor</h3><p>Pottery, woodcraft, textiles & rugs</p></div><b>→</b></div>
<div class="category ${state.category==='Traditional Edibles'?'active':''}" onclick="setCategory('Traditional Edibles')"><div><h3>🌶 Traditional Edibles</h3><p>Pickles, teas, sweets & spices</p></div><b>→</b></div>
</div>
<div class="section-title"><div><h2>${state.category==='All'?'Featured Marketplace':state.category}</h2><p>${arr.length} products found</p></div></div>
<div class="controls">
<button class="tab ${state.category==='All'?'active':''}" onclick="setCategory('All')">All</button>
<select class="select" onchange="state.sort=this.value;renderShop()"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Top Rated</option></select>
<label class="select">Max Price ₹${state.price}<input class="range" type="range" min="300" max="3000" step="50" value="${state.price}" oninput="state.price=+this.value;renderShop()"></label>
</div>
<div class="products">${arr.length?arr.map(productCard).join(''):`<div class="empty" style="grid-column:1/-1">No products found for these filters.</div>`}</div>
<div class="footer">FolkMade · Handcrafted Traditions from India</div>
</div>`
}
function renderWishlist(){
let arr=products.filter(p=>state.wishlist.includes(p.id));
$('app').innerHTML=`<div class="container"><div class="section-title"><div><h2>Saved Wishlist</h2><p>Your favourite FolkMade products.</p></div></div><div class="products">${arr.length?arr.map(productCard).join(''):`<div class="empty" style="grid-column:1/-1">Your wishlist is empty.</div>`}</div></div>`
}
function renderAbout(){
$('app').innerHTML=`<div class="container">
<div class="section-title"><div><h2>About FolkMade</h2><p>A marketplace connecting customers with India's rural craft and food traditions.</p></div></div>
<div class="about-grid"><div class="info-card"><h3>Our Mission</h3><p>FolkMade brings authentic handcrafted decor and traditional edibles closer to customers while giving rural artisans a digital marketplace.</p></div><div class="info-card"><h3>What We Offer</h3><p>From Jaipur blue pottery and Saharanpur woodcraft to Andhra pickles and Himalayan tea, every product carries a story of its maker.</p></div></div>
<div class="section-title"><div><h2>Meet the Artisans</h2></div></div>
<div class="artisan-list">${artisans.map(a=>`<div class="artisan-card"><span class="verified">✓ ${a.status}</span><h3>${a.name}</h3><p><b>${a.specialty}</b></p><p>${a.region} · ${a.experience}</p><p style="color:#78716c;font-size:13px">${a.bio}</p><small>${a.productsCount} products</small></div>`).join('')}</div></div>`
}
function renderAdmin(){
let productRows=products.map(p=>`<tr><td>${p.title}</td><td>${p.category}</td><td>${money(p.price)}</td><td>${p.inStock}</td><td><button class="small-btn" onclick="openEdit('${p.id}')">Edit</button> <button class="small-btn danger" onclick="deleteProduct('${p.id}')">Delete</button></td></tr>`).join('');
let orderRows=state.orders.map(o=>`<tr><td>${o.id}</td><td>${o.customer}</td><td>${money(o.amount)}</td><td>${o.items}</td><td>${o.status}</td><td>${o.date}</td><td>${o.paymentMethod}</td></tr>`).join('');
$('app').innerHTML=`<div class="container">
<div class="section-title"><div><h2>Admin Portal</h2><p>Manage FolkMade marketplace data.</p></div><button class="primary" onclick="openAdd()">+ Add Product</button></div>
<div class="stat-grid"><div class="stat"><small>Products</small><strong>${products.length}</strong></div><div class="stat"><small>Artisans</small><strong>${artisans.length}</strong></div><div class="stat"><small>Orders</small><strong>${state.orders.length}</strong></div><div class="stat"><small>Revenue</small><strong>${money(state.orders.reduce((a,o)=>a+o.amount,0))}</strong></div></div>
<div class="admin-tabs"><button class="tab ${state.adminTab==='products'?'active':''}" onclick="state.adminTab='products';renderAdmin()">Products</button><button class="tab ${state.adminTab==='orders'?'active':''}" onclick="state.adminTab='orders';renderAdmin()">Orders</button><button class="tab ${state.adminTab==='artisans'?'active':''}" onclick="state.adminTab='artisans';renderAdmin()">Artisans</button></div>
${state.adminTab==='products'?`<div class="table-wrap"><table class="table"><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead><tbody>${productRows}</tbody></table></div>`:state.adminTab==='orders'?`<div class="table-wrap"><table class="table"><thead><tr><th>Order</th><th>Customer</th><th>Amount</th><th>Items</th><th>Status</th><th>Date</th><th>Payment</th></tr></thead><tbody>${orderRows}</tbody></table></div>`:`<div class="artisan-list">${artisans.map(a=>`<div class="artisan-card"><span class="verified">✓ ${a.status}</span><h3>${a.name}</h3><p>${a.specialty}</p><p>${a.region} · ${a.experience}</p><p>${a.bio}</p></div>`).join('')}</div>`}
</div>`
}

/* =========================
   FolkMade Authentication
   ========================= */
/*let currentUser = null;
try {
  currentUser = JSON.parse(localStorage.getItem('folkmade_current_user') || 'null');
} catch(e) {
  currentUser = null;
}

const ADMIN_ACCOUNT = {
  name: 'FolkMade Admin',
  email: 'admin@folkmade.in',
  password: 'admin123',
  role: 'admin'
};

function getRegisteredUsers(){
  try {
    return JSON.parse(localStorage.getItem('folkmade_users') || '[]');
  } catch(e) {
    return [];
  }
}

function saveRegisteredUsers(users){
  localStorage.setItem('folkmade_users', JSON.stringify(users));
}

function openAuth(){
  showLoginForm();
  $('authModal').classList.remove('hidden');
}

function closeAuth(e){
  if(!e || e.target.id === 'authModal') $('authModal').classList.add('hidden');
}

function showLoginForm(message=''){
  $('authContent').innerHTML = `
    <h2>Welcome to FolkMade</h2>
    <p class="auth-sub">Login to continue to your FolkMade account.</p>
    ${message ? `<div class="auth-success">${message}</div>` : ''}
    <form onsubmit="loginAccount(event)">
      <div class="field">
        <label>Login as</label>
        <select id="login-role" required>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Email</label>
        <input id="login-email" type="email" placeholder="Enter your email" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Password</label>
        <input id="login-password" type="password" placeholder="Enter your password" required>
      </div>
      <div id="login-error"></div>
      <button class="primary full" type="submit">Login</button>
    </form>
    <p class="auth-note">New to FolkMade? <button class="auth-link" type="button" onclick="showRegisterForm()">Create a new account</button></p>
  `;
}

function showRegisterForm(){
  $('authContent').innerHTML = `
    <h2>Create FolkMade Account</h2>
    <p class="auth-sub">Register as a customer or seller.</p>
    <form onsubmit="registerAccount(event)">
      <div class="field">
        <label>Register as</label>
        <select id="reg-role" required>
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Full Name</label>
        <input id="reg-name" placeholder="Enter your full name" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Email</label>
        <input id="reg-email" type="email" placeholder="Enter your email" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Phone</label>
        <input id="reg-phone" type="tel" placeholder="Enter phone number" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Password</label>
        <input id="reg-password" type="password" placeholder="Create a password" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Confirm Password</label>
        <input id="reg-confirm" type="password" placeholder="Confirm password" required>
      </div>
      <div id="register-error"></div>
      <button class="primary full" type="submit">Create Account</button>
    </form>
    <p class="auth-note">Already registered? <button class="auth-link" type="button" onclick="showLoginForm()">Login here</button></p>
  `;
}

function loginAccount(e){
  e.preventDefault();

  const role = $('login-role').value;
  const email = $('login-email').value.trim().toLowerCase();
  const password = $('login-password').value;

  let account = null;

  if(role === 'admin'){
    if(email === ADMIN_ACCOUNT.email && password === ADMIN_ACCOUNT.password){
      account = {...ADMIN_ACCOUNT};
    }
  } else {
    account = getRegisteredUsers().find(u =>
      u.email === email &&
      u.password === password &&
      u.role === role
    );
  }

  if(!account){
    $('login-error').innerHTML = '<div class="auth-error">Invalid email, password, or account type.</div>';
    return;
  }

  currentUser = {
    name: account.name,
    email: account.email,
    role: account.role
  };

  localStorage.setItem('folkmade_current_user', JSON.stringify(currentUser));
  $('authModal').classList.add('hidden');

  if(currentUser.role === 'admin'){
    state.view = 'admin';
    render();
    toast('Welcome Admin!');
  } else if(currentUser.role === 'seller'){
    state.view = 'seller';
    render();
    toast('Seller login successful!');
  } else {
    state.view = 'shop';
    render();
    toast('Login successful!');
  }
}

function registerAccount(e){
  e.preventDefault();

  const role = $('reg-role').value;
  const name = $('reg-name').value.trim();
  const email = $('reg-email').value.trim().toLowerCase();
  const phone = $('reg-phone').value.trim();
  const password = $('reg-password').value;
  const confirm = $('reg-confirm').value;

  const error = $('register-error');

  if(password !== confirm){
    error.innerHTML = '<div class="auth-error">Passwords do not match.</div>';
    return;
  }

  if(password.length < 6){
    error.innerHTML = '<div class="auth-error">Password must be at least 6 characters.</div>';
    return;
  }

  if(email === ADMIN_ACCOUNT.email){
    error.innerHTML = '<div class="auth-error">This email is reserved for the administrator.</div>';
    return;
  }

  fetch('register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },

    body:
      'name=' + encodeURIComponent(name) +
      '&email=' + encodeURIComponent(email) +
      '&phone=' + encodeURIComponent(phone) +
      '&password=' + encodeURIComponent(password) +
      '&role=' + encodeURIComponent(role)
  })

  .then(response => response.text())

  .then(result => {

    if(result.includes('Registration successful')){

      showLoginForm('Account created successfully. Please login.');

    }else{

      error.innerHTML =
        '<div class="auth-error">' + result + '</div>';

    }

  })

  .catch(() => {

    error.innerHTML =
      '<div class="auth-error">Registration failed. Please try again.</div>';

  });
}

function logoutAccount(){
  currentUser = null;
  localStorage.removeItem('folkmade_current_user');
  state.view = 'shop';
  render();
  toast('Logged out successfully.');
}

function renderAccountButton(){
  const btn = $('accountBtn');
  if(!btn) return;

  if(currentUser){
    btn.textContent = `👤 ${currentUser.name} · Logout`;
    btn.onclick = logoutAccount;
  } else {
    btn.textContent = '👤 Login / Register';
    btn.onclick = openAuth;
  }
}

function renderSeller(){
  $('app').innerHTML = `
    <div class="container">
      <div class="section-title">
        <div>
          <h2>Seller Dashboard</h2>
          <p>Welcome, ${currentUser ? currentUser.name : 'Seller'}.</p>
        </div>
      </div>
      <div class="info-card">
        <h3>Sell Your Product</h3>
        <p>Your seller account is ready. Product listing and order management can be connected to the database in the next step.</p>
        <button class="primary" onclick="showView('shop')">Back to Marketplace</button>
      </div>
    </div>`;
}

function render(){
renderAccountButton();

if(state.view==='admin' && (!currentUser || currentUser.role!=='admin')){
  state.view='shop';
}
if(state.view==='seller' && (!currentUser || currentUser.role!=='seller')){
  state.view='shop';
}

$('shopBtn').classList.toggle('active',state.view==='shop');
$('desktopSearch').classList.toggle('hidden',state.view!=='shop');
$('wishCount').textContent=state.wishlist.length||'';
$('cartCount').textContent=state.cart.reduce((a,c)=>a+c.qty,0)||'';

if(state.view==='shop') renderShop();
else if(state.view==='wishlist') renderWishlist();
else if(state.view==='about') renderAbout();
else if(state.view==='admin') renderAdmin();
else if(state.view==='seller') renderSeller();
else renderShop();
}
function toggleWish(id){if(state.wishlist.includes(id)){state.wishlist=state.wishlist.filter(x=>x!==id);toast('Removed from Wishlist')}else{state.wishlist.push(id);toast('Saved to Wishlist!')}render()}
function addCart(id){let p=products.find(x=>x.id===id),x=state.cart.find(x=>x.id===id);if(x)x.qty++;else state.cart.push({id,qty:1});toast(`Added "${p.title}" to your cart!`);render()}
function changeQty(id,d){let x=state.cart.find(x=>x.id===id);if(x){x.qty+=d;if(x.qty<=0)state.cart=state.cart.filter(y=>y.id!==id)}updateCart()}
function removeCart(id){state.cart=state.cart.filter(x=>x.id!==id);updateCart()}
function openCart(){updateCart();$('overlay').classList.remove('hidden');$('cartPanel').classList.add('open')}
function closeCart(){$('overlay').classList.add('hidden');$('cartPanel').classList.remove('open')}
function updateCart(){
let subtotal=state.cart.reduce((s,x)=>{let p=products.find(p=>p.id===x.id);return s+p.price*x.qty},0);
$('cartSubtotal').textContent=money(subtotal);$('shipping').textContent=subtotal>999||subtotal===0?'Free':money(99);$('grandTotal').textContent=money(subtotal+(subtotal>999||subtotal===0?0:99));
$('cartItems').innerHTML=state.cart.length?state.cart.map(x=>{let p=products.find(p=>p.id===x.id);return `<div class="cart-item"><img src="${p.image}"><div><h4>${p.title}</h4><small>${money(p.price)}</small><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><b>${x.qty}</b><button onclick="changeQty('${p.id}',1)">+</button></div></div><button class="small-btn danger" onclick="removeCart('${p.id}')">×</button></div>`}).join(''):`<div class="empty">Your shopping bag is empty.</div>`;
render()
}
function checkout(){if(!state.cart.length)return toast('Your cart is empty');alert('Checkout demo: order placed successfully!');state.cart=[];closeCart();toast('Order placed successfully!')}
function openProduct(id){let p=products.find(x=>x.id===id);$('modalContent').innerHTML=`<div class="detail-grid"><img class="detail-img" src="${p.image}"><div class="detail"><div class="product-cat">${p.subCategory}</div><h2>${p.title}</h2><div class="stars">★ ${p.rating} (${p.reviewsCount} reviews)</div><p>${p.description}</p><p><b>Materials:</b> ${p.materials}</p><p><b>Artisan:</b> ${p.artisanName}<br>${p.artisanRegion}</p><div class="price">${money(p.price)} <span class="old">${money(p.originalPrice)}</span></div><button class="primary full" onclick="addCart('${p.id}');hideModal()">Add to Cart</button></div></div>`;$('modal').classList.remove('hidden')}
function hideModal(){$('modal').classList.add('hidden')}
function closeModal(e){if(e.target.id==='modal')hideModal()}
function resetForm(){return {title:'',category:'Handmade Decor',subCategory:'Decor Items',price:'',originalPrice:'',artisanName:'',artisanRegion:'',image:'',description:'',materials:'',inStock:10,isFeatured:false}}
function openAdd(){showForm(null)}
function openEdit(id){showForm(products.find(p=>p.id===id))}
function showForm(p){
p=p||resetForm();
$('modalContent').innerHTML=`<h2 style="font-family:Playfair Display">${p.id?'Edit Product':'Add Product'}</h2><form onsubmit="saveProduct(event,'${p.id||''}')"><div class="form-grid">
<div class="field"><label>Title *</label><input id="f-title" value="${p.title||''}" required></div>
<div class="field"><label>Category</label><select id="f-cat"><option ${p.category==='Handmade Decor'?'selected':''}>Handmade Decor</option><option ${p.category==='Traditional Edibles'?'selected':''}>Traditional Edibles</option></select></div>
<div class="field"><label>Sub Category</label><input id="f-sub" value="${p.subCategory||''}"></div>
<div class="field"><label>Price *</label><input id="f-price" type="number" value="${p.price||''}" required></div>
<div class="field"><label>Original Price</label><input id="f-original" type="number" value="${p.originalPrice||''}"></div>
<div class="field"><label>Stock</label><input id="f-stock" type="number" value="${p.inStock??10}"></div>
<div class="field"><label>Artisan Name *</label><input id="f-artisan" value="${p.artisanName||''}" required></div>
<div class="field"><label>Artisan Region</label><input id="f-region" value="${p.artisanRegion||''}"></div>
<div class="field full-field"><label>Image URL</label><input id="f-image" value="${p.image||''}"></div>
<div class="field full-field"><label>Description</label><textarea id="f-desc">${p.description||''}</textarea></div>
<div class="field full-field"><label>Materials</label><input id="f-materials" value="${p.materials||''}"></div>
</div><button class="primary full" type="submit">Save Product</button></form>`;
$('modal').classList.remove('hidden')
}
function saveProduct(e,id){e.preventDefault();let p={id:id||'p_'+Date.now(),title:$('f-title').value,category:$('f-cat').value,subCategory:$('f-sub').value||'General',price:+$('f-price').value,originalPrice:+$('f-original').value||Math.round(+$('f-price').value*1.2),rating:id?(products.find(x=>x.id===id)?.rating||5):5,reviewsCount:id?(products.find(x=>x.id===id)?.reviewsCount||1):1,artisanName:$('f-artisan').value,artisanRegion:$('f-region').value,image:$('f-image').value||'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',description:$('f-desc').value,materials:$('f-materials').value,inStock:+$('f-stock').value||10,isFeatured:false,isBestseller:false};if(id){let i=products.findIndex(x=>x.id===id);products[i]=p;toast('Product details updated successfully!')}else{products.unshift(p);toast('New handcrafted product added to store!')}hideModal();render()}
function deleteProduct(id){if(confirm('Are you sure you want to delete this product from the marketplace?')){let i=products.findIndex(x=>x.id===id);products.splice(i,1);toast('Product removed from FolkMade catalog');renderAdmin()}}

$('searchInput').addEventListener('input',()=>{state.search=$('searchInput').value;renderShop()});
render();*/
const products = [
  {
    id: 'p1',
    title: 'Hand-Painted Blue Pottery Flower Vase',
    category: 'Handmade Decor',
    subCategory: 'Pottery & Ceramics',
    price: 1299,
    originalPrice: 1699,
    rating: 4.8,
    reviewsCount: 34,
    artisanName: 'Ramesh Kumhar',
    artisanRegion: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=600',
    description: 'Authentic quartz-sand pottery handcrafted by master craftsmen in Jaipur. Traditional cobalt blue geometric motifs with floral borders.',
    materials: 'Quartz stone powder, glass, natural oxides',
    inStock: 12,
    isFeatured: true,
    isBestseller: true
  },
  {
    id: 'p3',
    title: 'Carved Teakwood Wall Hanging Jharokha',
    category: 'Handmade Decor',
    subCategory: 'Wood Carvings',
    price: 2499,
    originalPrice: 3100,
    rating: 4.7,
    reviewsCount: 19,
    artisanName: 'Gurpreet Singh & Sons',
    artisanRegion: 'Saharanpur, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=600',
    description: 'Intricately hand-carved solid teakwood wall jharokha with subtle brass filigree work. Brings rustic vintage royalty to any home corner.',
    materials: 'Reclaimed Teak Wood, Brass Accents, Antique Stain Finish',
    inStock: 6,
    isFeatured: false,
    isBestseller: false
  },
  {
    id: 'p5',
    title: 'Handwoven Dhurrie Floor Mat - Terracotta Motif',
    category: 'Handmade Decor',
    subCategory: 'Textiles & Rugs',
    price: 1850,
    originalPrice: 2200,
    rating: 4.6,
    reviewsCount: 15,
    artisanName: 'Devika Devi',
    artisanRegion: 'Mirzapur, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=600',
    description: '100% organic cotton handloom rug woven on pit looms. Features earth-tone tribal geometric patterns dyed with natural plant extracts.',
    materials: 'Organic Raw Cotton, Plant-based Vegetable Dyes',
    inStock: 8,
    isFeatured: false,
    isBestseller: true
  }
];

const artisans = [
  {
    id: 'a1',
    name: 'Ramesh Kumhar',
    region: 'Jaipur, Rajasthan',
    specialty: 'Blue Pottery & Ceramics',
    experience: '22 Years',
    status: 'Verified',
    productsCount: 4,
    bio: '3rd generation artisan preserving the endangered royal blue pottery legacy of Rajasthan.'
  },
  {
    id: 'a3',
    name: 'Gurpreet Singh',
    region: 'Saharanpur, UP',
    specialty: 'Hand Carved Woodcraft',
    experience: '18 Years',
    status: 'Verified',
    productsCount: 3,
    bio: 'Crafting sustainable teakwood architectural artifacts and decor with skilled local wood carvers.'
  }
];

let state = {
  view: 'shop',
  category: 'All',
  search: '',
  sort: 'featured',
  price: 3000,
  cart: [],
  wishlist: [],
  adminTab: 'products',
  sellerTab: 'inventory',
  orders: [
    { id: 'ORD-8821', customer: 'Aarav Sharma', amount: 1648, items: 2, status: 'Shipped', date: '2026-03-30', paymentMethod: 'UPI' },
    { id: 'ORD-8822', customer: 'Priya Nair', amount: 2499, items: 1, status: 'Pending', date: '2026-04-01', paymentMethod: 'Card' }
  ]
};

const $ = id => document.getElementById(id);
function money(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
function toast(msg) { $('toast').textContent = msg; $('toast').classList.remove('hidden'); setTimeout(() =>$('toast').classList.add('hidden'), 2500); }
function showView(v) { state.view = v; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

function clearSearch() { state.search = ''; $('searchInput').value = ''; renderShop(); }
function setCategory(c) { state.category = c; renderShop(); }

function filtered() {
  let arr = products.filter(p =>
    (state.category === 'All' || p.category === state.category) &&
    (p.title.toLowerCase().includes(state.search.toLowerCase()) ||
     p.artisanName.toLowerCase().includes(state.search.toLowerCase()) ||
     p.artisanRegion.toLowerCase().includes(state.search.toLowerCase())) &&
    p.price <= state.price
  );
  return arr.sort((a, b) =>
    state.sort === 'price-low' ? a.price - b.price :
    state.sort === 'price-high' ? b.price - a.price :
    state.sort === 'rating' ? b.rating - a.rating :
    (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
  );
}

function productCard(p) {
  let wished = state.wishlist.includes(p.id);
  return `<article class="product">
<img class="product-img" src="${p.image}" alt="${p.title}">
<div class="product-body">
<div class="product-cat">${p.subCategory}</div>
<h3>${p.title}</h3>
<div class="artisan">By ${p.artisanName} · ${p.artisanRegion}</div>
<div class="stars">★ ${p.rating} <span style="color:#a8a29e">(${p.reviewsCount})</span></div>
<div class="price">${money(p.price)} <span class="old">${money(p.originalPrice)}</span></div>
<div class="product-actions">
<button class="add" onclick="addCart('${p.id}')">Add to Cart</button>
<button class="wish" onclick="toggleWish('${p.id}')">${wished ? '♥ Saved' : '♡ Save'}</button>
</div>
<button class="small-btn" style="width:100%;margin-top:8px" onclick="openProduct('${p.id}')">View Details</button>
</div></article>`;
}

function renderShop() {
  state.search = $('searchInput')?.value || state.search;
  let arr = filtered();
  $('app').innerHTML = `<div class="container">
<section class="hero">
<span class="pill">Directly from Rural Craft Hubs</span>
<h1>Empowering India's Heritage Craftsmen & Artisans</h1>
<p>Discover authentic Jaipur hand pottery, hand-woven dhurries, and handcrafted wooden decor directly from master artisans.</p>
<div class="hero-actions"><button class="primary" onclick="setCategory('Handmade Decor')">Explore Home Decor →</button></div>
</section>
<div class="section-title"><div><h2>Shop by Tradition</h2><p>Discover handcrafted products made by skilled Indian artisans.</p></div></div>
<div class="categories">
<div class="category ${state.category === 'Handmade Decor' ? 'active' : ''}" onclick="setCategory('Handmade Decor')"><div><h3>🏺 Handmade Decor</h3><p>Pottery, woodcraft, textiles & rugs</p></div><b>→</b></div>
</div>
<div class="section-title"><div><h2>${state.category === 'All' ? 'Featured Marketplace' : state.category}</h2><p>${arr.length} products found</p></div></div>
<div class="controls">
<button class="tab ${state.category === 'All' ? 'active' : ''}" onclick="setCategory('All')">All</button>
<select class="select" onchange="state.sort=this.value;renderShop()"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Top Rated</option></select>
<label class="select">Max Price ₹${state.price}<input class="range" type="range" min="300" max="3000" step="50" value="${state.price}" oninput="state.price=+this.value;renderShop()"></label>
</div>
<div class="products">${arr.length ? arr.map(productCard).join('') : `<div class="empty" style="grid-column:1/-1">No products found for these filters.</div>`}</div>
<div class="footer">FolkMade · Handcrafted Decor & Heritage Art from India</div>
</div>`;
}

function renderWishlist() {
  let arr = products.filter(p => state.wishlist.includes(p.id));
  $('app').innerHTML = `<div class="container"><div class="section-title"><div><h2>Saved Wishlist</h2><p>Your favourite FolkMade products.</p></div></div><div class="products">${arr.length ? arr.map(productCard).join('') : `<div class="empty" style="grid-column:1/-1">Your wishlist is empty.</div>`}</div></div>`;
}

function renderAbout() {
  $('app').innerHTML = `<div class="container">
<div class="section-title"><div><h2>About FolkMade</h2><p>A marketplace connecting customers with India's rural craft traditions.</p></div></div>
<div class="about-grid"><div class="info-card"><h3>Our Mission</h3><p>FolkMade brings authentic handcrafted decor closer to customers while giving rural artisans a digital marketplace.</p></div><div class="info-card"><h3>What We Offer</h3><p>From Jaipur blue pottery and Saharanpur woodcraft to handwoven floor mats, every product carries a story of its maker.</p></div></div>
<div class="section-title"><div><h2>Meet the Artisans</h2></div></div>
<div class="artisan-list">${artisans.map(a => `<div class="artisan-card"><span class="verified">✓ ${a.status}</span><h3>${a.name}</h3><p><b>${a.specialty}</b></p><p>${a.region} ·${a.experience}</p><p style="color:#78716c;font-size:13px">${a.bio}</p><small>${a.productsCount} products</small></div>`).join('')}</div></div>`;
}

function renderAdmin() {
  let productRows = products.map(p => `<tr><td>${p.title}</td><td>${p.category}</td><td>${money(p.price)}</td><td>${p.inStock}</td><td><button class="small-btn" onclick="openEdit('${p.id}')">Edit</button> <button class="small-btn danger" onclick="deleteProduct('${p.id}')">Delete</button></td></tr>`).join('');
  let orderRows = state.orders.map(o => `<tr><td>${o.id}</td><td>${o.customer}</td><td>${money(o.amount)}</td><td>${o.items}</td><td>${o.status}</td><td>${o.date}</td><td>${o.paymentMethod}</td></tr>`).join('');
  $('app').innerHTML = `<div class="container">
<div class="section-title"><div><h2>Admin Portal</h2><p>Manage FolkMade marketplace data.</p></div><button class="primary" onclick="openAdd()">+ Add Product</button></div>
<div class="stat-grid"><div class="stat"><small>Products</small><strong>${products.length}</strong></div><div class="stat"><small>Artisans</small><strong>${artisans.length}</strong></div><div class="stat"><small>Orders</small><strong>${state.orders.length}</strong></div><div class="stat"><small>Revenue</small><strong>${money(state.orders.reduce((a, o) => a + o.amount, 0))}</strong></div></div>
<div class="admin-tabs"><button class="tab ${state.adminTab === 'products' ? 'active' : ''}" onclick="state.adminTab='products';renderAdmin()">Products</button><button class="tab ${state.adminTab === 'orders' ? 'active' : ''}" onclick="state.adminTab='orders';renderAdmin()">Orders</button><button class="tab ${state.adminTab === 'artisans' ? 'active' : ''}" onclick="state.adminTab='artisans';renderAdmin()">Artisans</button></div>
${state.adminTab === 'products' ? `<div class="table-wrap"><table class="table"><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead><tbody>${productRows}</tbody></table></div>` : state.adminTab === 'orders' ? `<div class="table-wrap"><table class="table"><thead><tr><th>Order</th><th>Customer</th><th>Amount</th><th>Items</th><th>Status</th><th>Date</th><th>Payment</th></tr></thead><tbody>${orderRows}</tbody></table></div>` : `<div class="artisan-list">${artisans.map(a => `<div class="artisan-card"><span class="verified">✓ ${a.status}</span><h3>${a.name}</h3><p>${a.specialty}</p><p>${a.region} · ${a.experience}</p><p>${a.bio}</p></div>`).join('')}</div>`}
</div>`;
}

/* ========================================================
   SELLER PORTAL DASHBOARD (SEPARATE SELLER INTERFACE)
   ======================================================== */
function renderSeller() {
  const sellerName = currentUser ? currentUser.name : 'Seller';
  
  // Filter seller's own products and orders
  const sellerProducts = products.filter(p => p.artisanName.toLowerCase() === sellerName.toLowerCase() || p.isSellerItem);
  const totalStock = sellerProducts.reduce((sum, p) => sum + p.inStock, 0);
  const sellerOrders = state.orders;

  let inventoryRows = sellerProducts.map(p => `
    <tr>
      <td><img src="${p.image}" style="width:40px;height:40px;object-fit:cover;border-radius:6px"> <b>${p.title}</b></td>
      <td>${p.subCategory}</td>
      <td>${money(p.price)}</td>
      <td><b>${p.inStock} pcs</b></td>
      <td>
        <button class="small-btn" onclick="openEdit('${p.id}')">Edit</button>
        <button class="small-btn danger" onclick="deleteProduct('${p.id}')">Delete</button>
      </td>
    </tr>
  `).join('');

  let orderRows = sellerOrders.map(o => `
    <tr>
      <td><b>${o.id}</b></td>
      <td>${o.customer}</td>
      <td>${money(o.amount)}</td>
      <td><span class="verified">${o.status}</span></td>
      <td>${o.date}</td>
      <td>
        <button class="small-btn" onclick="updateOrderStatus('${o.id}')">Update Status</button>
      </td>
    </tr>
  `).join('');

  $('app').innerHTML = `
    <div class="container">
      <div class="section-title">
        <div>
          <h2>Seller Workspace</h2>
          <p>Welcome back, <b>${sellerName}</b>! Manage your craft store and incoming orders.</p>
        </div>
        <button class="primary" onclick="openAddSellerProduct()">+ Add New Craft Item</button>
      </div>

      <div class="stat-grid">
        <div class="stat"><small>Active Products</small><strong>${sellerProducts.length}</strong></div>
        <div class="stat"><small>Total Units in Stock</small><strong>${totalStock}</strong></div>
        <div class="stat"><small>Pending Orders</small><strong>${sellerOrders.length}</strong></div>
        <div class="stat"><small>Est. Revenue</small><strong>${money(sellerOrders.reduce((a, o) => a + o.amount, 0))}</strong></div>
      </div>

      <div class="admin-tabs" style="margin-top:25px">
        <button class="tab ${state.sellerTab === 'inventory' ? 'active' : ''}" onclick="state.sellerTab='inventory';renderSeller()">My Products</button>
        <button class="tab ${state.sellerTab === 'orders' ? 'active' : ''}" onclick="state.sellerTab='orders';renderSeller()">Customer Orders</button>
        <button class="tab ${state.sellerTab === 'profile' ? 'active' : ''}" onclick="state.sellerTab='profile';renderSeller()">Craft Profile</button>
      </div>

      ${state.sellerTab === 'inventory' ? `
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${inventoryRows.length ? inventoryRows : '<tr><td colspan="5" style="text-align:center;padding:20px">No products listed yet. Click "+ Add New Craft Item" to get started!</td></tr>'}
            </tbody>
          </table>
        </div>
      ` : state.sellerTab === 'orders' ? `
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr><th>Order ID</th><th>Customer Name</th><th>Amount</th><th>Status</th><th>Date</th><th>Actions</th></tr>
            </thead>
            <tbody>${orderRows}</tbody>
          </table>
        </div>
      ` : `
        <div class="info-card">
          <h3>Artisan Details & Craft Bio</h3>
          <form onsubmit="saveSellerProfile(event)">
            <div class="form-grid">
              <div class="field"><label>Artisan Name</label><input id="s-name" value="${sellerName}" disabled></div>
              <div class="field"><label>Craft Region / State</label><input id="s-region" value="Jaipur, Rajasthan"></div>
              <div class="field"><label>Specialty Craft</label><input id="s-spec" value="Handmade Decor & Woodcraft"></div>
              <div class="field"><label>Experience</label><input id="s-exp" value="10 Years"></div>
              <div class="field full-field"><label>Artisan Bio / Story</label><textarea id="s-bio">Crafting handmade artifacts preserving Indian heritage.</textarea></div>
            </div>
            <button class="primary" type="submit" style="margin-top:12px">Update Seller Profile</button>
          </form>
        </div>
      `}
    </div>
  `;
}

function openAddSellerProduct() {
  showForm(null);
}

function updateOrderStatus(orderId) {
  let order = state.orders.find(o => o.id === orderId);
  if (order) {
    let newStatus = prompt("Update order status (Pending / Shipped / Delivered / Cancelled):", order.status);
    if (newStatus) {
      order.status = newStatus;
      toast(`Order ${orderId} updated to ${newStatus}`);
      renderSeller();
    }
  }
}

function saveSellerProfile(e) {
  e.preventDefault();
  toast('Seller profile updated successfully!');
}

/* =========================
   FolkMade Authentication
   ========================= */
let currentUser = null;
try {
  currentUser = JSON.parse(localStorage.getItem('folkmade_current_user') || 'null');
} catch (e) {
  currentUser = null;
}

const ADMIN_ACCOUNT = {
  name: 'FolkMade Admin',
  email: 'admin@folkmade.in',
  password: 'admin123',
  role: 'admin'
};

function getRegisteredUsers() {
  try { return JSON.parse(localStorage.getItem('folkmade_users') || '[]'); } catch (e) { return []; }
}

function openAuth() { showLoginForm(); $('authModal').classList.remove('hidden'); }
function closeAuth(e) { if (!e || e.target.id === 'authModal') $('authModal').classList.add('hidden'); }

function showLoginForm(message = '') {
  $('authContent').innerHTML = `
    <h2>Welcome to FolkMade</h2>
    <p class="auth-sub">Login to access your FolkMade account.</p>
    ${message ? `<div class="auth-success">${message}</div>` : ''}
    <form onsubmit="loginAccount(event)">
      <div class="field">
        <label>Login as</label>
        <select id="login-role" required>
          <option value="user">Buyer / Customer</option>
          <option value="seller">Artisan Seller</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Email</label>
        <input id="login-email" type="email" placeholder="Enter your email" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Password</label>
        <input id="login-password" type="password" placeholder="Enter your password" required>
      </div>
      <div id="login-error"></div>
      <button class="primary full" type="submit">Login</button>
    </form>
    <p class="auth-note">New to FolkMade? <button class="auth-link" type="button" onclick="showRegisterForm()">Create account</button></p>
  `;
}

function showRegisterForm() {
  $('authContent').innerHTML = `
    <h2>Create FolkMade Account</h2>
    <p class="auth-sub">Register as a buyer or an artisan seller.</p>
    <form onsubmit="registerAccount(event)">
      <div class="field">
        <label>I want to join as</label>
        <select id="reg-role" required>
          <option value="user">Buyer (Purchase Items)</option>
          <option value="seller">Seller (Sell Handcrafted Items)</option>
        </select>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Full Name / Business Name</label>
        <input id="reg-name" placeholder="Enter full name" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Email</label>
        <input id="reg-email" type="email" placeholder="Enter email" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Phone Number</label>
        <input id="reg-phone" type="tel" placeholder="Enter phone number" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Password</label>
        <input id="reg-password" type="password" placeholder="Create password" required>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Confirm Password</label>
        <input id="reg-confirm" type="password" placeholder="Confirm password" required>
      </div>
      <div id="register-error"></div>
      <button class="primary full" type="submit">Create Account</button>
    </form>
    <p class="auth-note">Already registered? <button class="auth-link" type="button" onclick="showLoginForm()">Login here</button></p>
  `;
}

function loginAccount(e) {
  e.preventDefault();
  const role = $('login-role').value;
  const email = $('login-email').value.trim().toLowerCase();
  const password = $('login-password').value;
  let account = null;

  if (role === 'admin') {
    if (email === ADMIN_ACCOUNT.email && password === ADMIN_ACCOUNT.password) {
      account = { ...ADMIN_ACCOUNT };
    }
  } else {
    account = getRegisteredUsers().find(u => u.email === email && u.password === password && u.role === role);
  }

  if (!account) {
    $('login-error').innerHTML = '<div class="auth-error">Invalid email, password, or account type.</div>';
    return;
  }

  currentUser = { name: account.name, email: account.email, role: account.role };
  localStorage.setItem('folkmade_current_user', JSON.stringify(currentUser));
  $('authModal').classList.add('hidden');

  if (currentUser.role === 'admin') {
    state.view = 'admin';
    render();
    toast('Welcome Admin!');
  } else if (currentUser.role === 'seller') {
    state.view = 'seller';
    render();
    toast(`Welcome to Seller Portal, ${currentUser.name}!`);
  } else {
    state.view = 'shop';
    render();
    toast('Login successful!');
  }
}

function registerAccount(e) {
  e.preventDefault();
  const role = $('reg-role').value;
  const name = $('reg-name').value.trim();
  const email = $('reg-email').value.trim().toLowerCase();
  const phone = $('reg-phone').value.trim();
  const password = $('reg-password').value;
  const confirm = $('reg-confirm').value;
  const error = $('register-error');

  if (password !== confirm) { error.innerHTML = '<div class="auth-error">Passwords do not match.</div>'; return; }
  if (password.length < 6) { error.innerHTML = '<div class="auth-error">Password must be at least 6 characters.</div>'; return; }

  // Save to local storage mock
  let users = getRegisteredUsers();
  users.push({ name, email, phone, password, role });
  localStorage.setItem('folkmade_users', JSON.stringify(users));

  fetch('register.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&phone=' + encodeURIComponent(phone) + '&password=' + encodeURIComponent(password) + '&role=' + encodeURIComponent(role)
  }).catch(() => {});

  showLoginForm('Account created successfully. Please log in.');
}

function logoutAccount() {
  currentUser = null;
  localStorage.removeItem('folkmade_current_user');
  state.view = 'shop';
  render();
  toast('Logged out successfully.');
}

function renderAccountButton() {
  const btn = $('accountBtn');
  if (!btn) return;
  if (currentUser) {
    btn.textContent = `👤 ${currentUser.name} (${currentUser.role.toUpperCase()}) · Logout`;
    btn.onclick = logoutAccount;
  } else {
    btn.textContent = '👤 Login / Register';
    btn.onclick = openAuth;
  }
}

function render() {
  renderAccountButton();

  // Route control: default view is 'shop' unless seller/admin logs in
  if (state.view === 'admin' && (!currentUser || currentUser.role !== 'admin')) state.view = 'shop';
  if (state.view === 'seller' && (!currentUser || currentUser.role !== 'seller')) state.view = 'shop';

  $('shopBtn').classList.toggle('active', state.view === 'shop');$('desktopSearch').classList.toggle('hidden', state.view !== 'shop');
  $('wishCount').textContent = state.wishlist.length \vert{}\vert{} '';$('cartCount').textContent = state.cart.reduce((a, c) => a + c.qty, 0) || '';

  if (state.view === 'shop') renderShop();
  else if (state.view === 'wishlist') renderWishlist();
  else if (state.view === 'about') renderAbout();
  else if (state.view === 'admin') renderAdmin();
  else if (state.view === 'seller') renderSeller();
  else renderShop();
}

function toggleWish(id) { if (state.wishlist.includes(id)) { state.wishlist = state.wishlist.filter(x => x !== id); toast('Removed from Wishlist'); } else { state.wishlist.push(id); toast('Saved to Wishlist!'); } render(); }
function addCart(id) { let p = products.find(x => x.id === id), x = state.cart.find(x => x.id === id); if (x) x.qty++; else state.cart.push({ id, qty: 1 }); toast(`Added "${p.title}" to your cart!`); render(); }
function changeQty(id, d) { let x = state.cart.find(x => x.id === id); if (x) { x.qty += d; if (x.qty <= 0) state.cart = state.cart.filter(y => y.id !== id); } updateCart(); }
function removeCart(id) { state.cart = state.cart.filter(x => x.id !== id); updateCart(); }
function openCart() { updateCart(); $('overlay').classList.remove('hidden');$('cartPanel').classList.add('open'); }
function closeCart() { $('overlay').classList.add('hidden');$('cartPanel').classList.remove('open'); }

function updateCart() {
  let subtotal = state.cart.reduce((s, x) => { let p = products.find(p => p.id === x.id); return s + p.price * x.qty; }, 0);
  $('cartSubtotal').textContent = money(subtotal);$('shipping').textContent = subtotal > 999 || subtotal === 0 ? 'Free' : money(99); $('grandTotal').textContent = money(subtotal + (subtotal > 999 \vert{}\vert{} subtotal === 0 ? 0 : 99));$('cartItems').innerHTML = state.cart.length ? state.cart.map(x => { let p = products.find(p => p.id === x.id); return `<div class="cart-item"><img src="${p.image}" alt=""><div><h4>${p.title}</h4><small>${money(p.price)}</small><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><b>${x.qty}</b><button onclick="changeQty('${p.id}',1)">+</button></div></div><button class="small-btn danger" onclick="removeCart('${p.id}')">×</button></div>`; }).join('') : `<div class="empty">Your shopping bag is empty.</div>`;
  render();
}

function checkout() { if (!state.cart.length) return toast('Your cart is empty'); alert('Checkout demo: order placed successfully!'); state.cart = []; closeCart(); toast('Order placed successfully!'); }
function openProduct(id) { let p = products.find(x => x.id === id); $('modalContent').innerHTML = `<div class="detail-grid"><img class="detail-img" src="${p.image}" alt=""><div class="detail"><div class="product-cat">${p.subCategory}</div><h2>${p.title}</h2><div class="stars">★ ${p.rating} (${p.reviewsCount} reviews)</div><p>${p.description}</p><p><b>Materials:</b> ${p.materials}</p><p><b>Artisan:</b> ${p.artisanName}<br>${p.artisanRegion}</p><div class="price">${money(p.price)} <span class="old">${money(p.originalPrice)}</span></div><button class="primary full" onclick="addCart('${p.id}');hideModal()">Add to Cart</button></div></div>`; $('modal').classList.remove('hidden'); }
function hideModal() { $('modal').classList.add('hidden'); }
function closeModal(e) { if (e.target.id === 'modal') hideModal(); }
function resetForm() { return { title: '', category: 'Handmade Decor', subCategory: 'Decor Items', price: '', originalPrice: '', artisanName: currentUser ? currentUser.name : '', artisanRegion: 'India', image: '', description: '', materials: '', inStock: 10, isFeatured: false }; }
function openAdd() { showForm(null); }
function openEdit(id) { showForm(products.find(p => p.id === id)); }

function showForm(p) {
  p = p || resetForm();
  $('modalContent').innerHTML = `<h2 style="font-family:Playfair Display">${p.id ? 'Edit Product' : 'Add Product'}</h2><form onsubmit="saveProduct(event,'${p.id || ''}')"><div class="form-grid">
<div class="field"><label>Title *</label><input id="f-title" value="${p.title || ''}" required></div>
<div class="field"><label>Category</label><select id="f-cat"><option selected>Handmade Decor</option></select></div>
<div class="field"><label>Sub Category</label><input id="f-sub" value="${p.subCategory || ''}"></div>
<div class="field"><label>Price *</label><input id="f-price" type="number" value="${p.price || ''}" required></div>
<div class="field"><label>Original Price</label><input id="f-original" type="number" value="${p.originalPrice || ''}"></div>
<div class="field"><label>Stock Quantity</label><input id="f-stock" type="number" value="${p.inStock ?? 10}"></div>
<div class="field"><label>Artisan / Business Name *</label><input id="f-artisan" value="${p.artisanName || (currentUser ? currentUser.name : '')}" required></div>
<div class="field"><label>Region / City</label><input id="f-region" value="${p.artisanRegion || ''}"></div>
<div class="field full-field"><label>Image URL</label><input id="f-image" value="${p.image || ''}"></div>
<div class="field full-field"><label>Description</label><textarea id="f-desc">${p.description || ''}</textarea></div>
<div class="field full-field"><label>Materials Used</label><input id="f-materials" value="${p.materials || ''}"></div>
</div><button class="primary full" type="submit">Save Product</button></form>`;
  $('modal').classList.remove('hidden');
}

function saveProduct(e, id) {
  e.preventDefault();
  let p = {
    id: id || 'p_' + Date.now(),
    title: $('f-title').value,
    category: $('f-cat').value,
    subCategory: $('f-sub').value || 'General',
    price: +$('f-price').value,
    originalPrice: +$('f-original').value \vert{}\vert{} Math.round(+$('f-price').value * 1.2),
    rating: id ? (products.find(x => x.id === id)?.rating || 5) : 5,
    reviewsCount: id ? (products.find(x => x.id === id)?.reviewsCount || 1) : 1,
    artisanName: $('f-artisan').value,
    artisanRegion: $('f-region').value,
    image: $('f-image').value || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    description: $('f-desc').value,
    materials: $('f-materials').value,
    inStock: +$('f-stock').value || 10,
    isFeatured: false,
    isBestseller: false,
    isSellerItem: true
  };
  
  if (id) {
    let i = products.findIndex(x => x.id === id);
    products[i] = p;
    toast('Product details updated!');
  } else {
    products.unshift(p);
    toast('New product listed successfully!');
  }
  
  hideModal();
  if (currentUser && currentUser.role === 'seller') renderSeller();
  else render();
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product from the marketplace?')) {
    let i = products.findIndex(x => x.id === id);
    products.splice(i, 1);
    toast('Product removed from catalog');
    if (currentUser && currentUser.role === 'seller') renderSeller();
    else if (currentUser && currentUser.role === 'admin') renderAdmin();
  }
}

$('searchInput').addEventListener('input', () => { state.search =$('searchInput').value; renderShop(); });
render();
