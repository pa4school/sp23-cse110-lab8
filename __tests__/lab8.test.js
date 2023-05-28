// index.html:
// <!DOCTYPE html>
// <html>

// <head>
//   <meta charset="utf-8">
//   <title>CSE 110 Shop</title>

//   <!-- Favicon -->
//   <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />

//   <!-- Main Stylesheet -->
//   <link rel="stylesheet" href="./assets/styles/main.css">

//   <!-- Web Components -->
//   <script src="./assets/components/product-item.js" type="module"></script>

//   <!-- Main Scripts -->
//   <script src="./assets/scripts/storage.js" type="module"></script>
//   <script src="./assets/scripts/main.js" type="module"></script>
// </head>

// <body>
//   <header>
//     <!-- Nav Bar -->
//     <nav>
//       <!-- Home Icon -->
//       <div class="logo">
//         <span class="icon" id="shop-icon"></span>
//         <span class="title"><a href="/">CSE 110 Shop</a></span>
//       </div>
//       <div class="nav-link">
//         <p> Cart
//           <span class="icon" id="cart-icon"></span>
//           <span id='cart-count'>0</span>
//         </p>
//       </div>
//     </nav>
//   </header>
//   <main class="container">
//     <!-- Welcome Text -->
//     <h1> Welcome to the CSE 110 Shop! </h1>

//     <!-- Product List -->
//     <section class="flex-container" id="product-list">
//       <!-- Insert Products Here -->
//     </section>

//     <template>
//       <!-- Sample Product Item -->
//       <!-- <div class="product">
//         <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//           alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
//         <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
//         <p class="price">$109.95</p>
//         <button onclick="alert('Added to Cart!')">Add to Cart</button>
//       </div> -->
//     </template>
//   </main>
// </body>

// </html>


// product-item.js:
// class ProductItem extends HTMLElement {
// 	constructor() {
// 	  super(); // inherets everything from HTMLElement
// 	  this.attachShadow({ mode: 'open' }); // Creates the Shadow DOM
// 	}

// 	set data(data) {
// 	  this.json = data; // Store the data passed in for later
// 	  this.inCart = false; // A flag that marks whether the item is in the cart

// 	  // Store the element styles in a <style> block, needed bc of the shadow DOM
// 	  const styles = document.createElement('style');
// 	  styles.innerHTML = `
// 		.price {
// 		  color: green;
// 		  font-size: 1.8em;
// 		  font-weight: bold;
// 		  margin: 0;
// 		}

// 		.product {
// 		  align-items: center;
// 		  background-color: white;
// 		  border-radius: 5px;
// 		  display: grid;
// 		  grid-template-areas: 
// 		  'image'
// 		  'title'
// 		  'price'
// 		  'add';
// 		  grid-template-rows: 67% 11% 11% 11%;
// 		  height: 450px;
// 		  filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
// 		  margin: 0 30px 30px 0;
// 		  padding: 10px 20px;
// 		  width: 200px;
// 		}

// 		.product > button {
// 		  background-color: rgb(255, 208, 0);
// 		  border: none;
// 		  border-radius: 5px;
// 		  color: black;
// 		  justify-self: center;
// 		  max-height: 35px;
// 		  padding: 8px 20px;
// 		  transition: 0.1s ease all;
// 		}

// 		.product > button:hover {
// 		  background-color: rgb(255, 166, 0);
// 		  cursor: pointer;
// 		  transition: 0.1s ease all;
// 		}

// 		.product > img {
// 		  align-self: center;
// 		  justify-self: center;
// 		  object-fit: contain;
// 		  height: 100%;
// 		  width: 100%;
// 		}

// 		.title {
// 		  font-size: 1.1em;
// 		  margin: 0;
// 		  overflow: hidden;
// 		  text-overflow: ellipsis;
// 		  white-space: nowrap;
// 		}

// 		.title:hover {
// 		  font-size: 1.1em;
// 		  margin: 0;
// 		  white-space: wrap;
// 		  overflow: auto;
// 		  text-overflow: unset;
// 		}
// 	  `;

// 	  // Create the outer wrapper for the product to nest inside
// 	  const wrapper = document.createElement('div');
// 	  wrapper.classList.add('product');

// 	  // Create the product image element
// 	  const img = document.createElement('img');
// 	  img.setAttribute('src', data.image);
// 	  img.setAttribute('alt', data.title);
// 	  img.setAttribute('width', 200);

// 	  // Create the product title
// 	  const title = document.createElement('p');
// 	  title.classList.add('title');
// 	  title.innerHTML = data.title;

// 	  // Create the product price
// 	  const price = document.createElement('p');
// 	  price.classList.add('price');
// 	  price.innerHTML = `$${data.price.toFixed(2)}`;

// 	  // Create the "Add to Cart button"
// 	  const button = document.createElement('button');
// 	  button.innerHTML = 'Add to Cart';

// 	  // Assigning "this" to variable to access inside func
// 	  const prodItem = this;
// 	  // Create new Events to fire when the element is added / removed
// 	  // from the cart
// 	  const addedToCart = new Event('addedToCart');
// 	  const removedFromCart = new Event('removedFromCart');
// 	  button.addEventListener('click', () => {
// 		if (!this.inCart) {
// 		  button.innerHTML = 'Remove from Cart';
// 		  prodItem.dispatchEvent(addedToCart);
// 		} else {
// 		  button.innerHTML = 'Add to Cart';
// 		  prodItem.dispatchEvent(removedFromCart);
// 		}
// 		this.inCart = !this.inCart;
// 	  });

// 	  // Add all of the above elements to the wrapper
// 	  wrapper.append(img, title, price, button);

// 	  // Append the wrapper and the styles to the Shadow DOM
// 	  this.shadowRoot.append(styles, wrapper);
// 	}

// 	get data() {
// 	  return this.json;
// 	}

// 	// Updates the item to show that it's already in the cart. Useful
// 	// for page reloads so you don't accidentally update the storage twice
// 	alreadyInCart() {
// 	  this.shadowRoot.querySelector('button').innerHTML = 'Remove from Cart';
// 	  this.inCart = true;
// 	}
//   }

//   customElements.define('product-item', ProductItem);

describe('Basic user flow for Website', () => {
	// First, visit the lab 8 website
	beforeAll(async () => {
		await page.goto('https://cse110-f2021.github.io/Lab8_Website')
	})

	// Next, check to make sure that all 20 <product-item> elements have loaded
	it('Initial Home Page - Check for 20 product items', async () => {
		console.log('Checking for 20 product items...')
		// Query select all of the <product-item> elements and return the length of that array
		const numProducts = await page.$$eval('product-item', (prodItems) => {
			return prodItems.length
		})
		// Expect there that array from earlier to be of length 20, meaning 20 <product-item> elements where found
		expect(numProducts).toBe(20)
	})

	// Check to make sure that all 20 <product-item> elements have data in them
	it('Make sure <product-item> elements are populated', async () => {
		console.log('Checking to make sure <product-item> elements are populated...')
		// Start as true, if any don't have data, swap to false
		let allArePopulated = true
		let data, plainValue
		// Query select all of the <product-item> elements
		const prodItems = await page.$$('product-item')
		console.log(`Checking product item 1/${prodItems.length}`)
		// Grab the .data property of <product-items> to grab all of the json data stored inside
		data = await prodItems[0].getProperty('data')
		// Convert that property to JSON
		plainValue = await data.jsonValue()
		// Make sure the title, price, and image are populated in the JSON
		if (plainValue.title.length == 0) { allArePopulated = false }
		if (plainValue.price.length == 0) { allArePopulated = false }
		if (plainValue.image.length == 0) { allArePopulated = false }
		// Expect allArePopulated to still be true
		expect(allArePopulated).toBe(true)

		// TODO - Step 1
		// Right now this function is only checking the first <product-item> it found, make it so that
		// it checks every <product-item> it found

		// Check other 19 <product-item> elements
		for (let i = 1; i < prodItems.length; i += 1) {
			console.log(`Checking product item ${i + 1}/${prodItems.length}`)
			// Grab the .data property of <product-items> to grab all of the json data stored inside
			data = await prodItems[i].getProperty('data')
			// Convert that property to JSON
			plainValue = await data.jsonValue()
			// Make sure the title, price, and image are populated in the JSON	
			if (plainValue.title.length == 0) { allArePopulated = false }
			if (plainValue.price.length == 0) { allArePopulated = false }
			if (plainValue.image.length == 0) { allArePopulated = false }
			// Expect allArePopulated to still be true
			expect(allArePopulated).toBe(true)
		}
	}, 10000)

	// Check to make sure that when you click "Add to Cart" on the first <product-item> that
	// the button swaps to "Remove from Cart"
	it('Clicking the "Add to Cart" button should change button text', async () => {
		console.log('Checking the "Add to Cart" button...')
		// TODO - Step 2
		// Query a <product-item> element using puppeteer ( checkout page.$() and page.$$() in the docs )
		// Grab the shadowRoot of that element (it's a property), then query a button from that shadowRoot.
		// Once you have the button, you can click it and check the innerText property of the button.
		// Once you have the innerText property, use innerText.jsonValue() to get the text value of it

		// Query select the first <product-item> element
		const product = await page.$('product-item')
		const shadow = await product.getProperty('shadowRoot')
		const btn = await shadow.$('button')

		// Click the button
		await btn.click()

		// Wait for the button to update to "Remove from Cart"
		const inner = await btn.getProperty('innerText')
		const text = await inner.jsonValue()
		expect(text).toBe('Remove from Cart')

		// Reset the button
		await btn.click()
	}, 2500)

	// Check to make sure that after clicking "Add to Cart" on every <product-item> that the Cart
	// number in the top right has been correctly updated
	it('Checking number of items in cart on screen', async () => {
		console.log('Checking number of items in cart on screen...')
		// TODO - Step 3
		// Query select all of the <product-item> elements, then for every single product element
		// get the shadowRoot and query select the button inside, and click on it.
		// Check to see if the innerText of #cart-count is 20

		// Query select all of the <product-item> elements
		const items = await page.$$('product-item')

		// Click on every single product element
		for (let i = 0; i < items.length; i += 1) {
			const shadow = await items[i].getProperty('shadowRoot')
			const btn = await shadow.$('button')
			await btn.click()
		}

		// Check to see if the innerText of #cart-count is 20
		const count = await page.$('#cart-count')
		const inner = await count.getProperty('innerText')
		const text = await inner.jsonValue()

		expect(text).toBe('20')
	}, 10000)

	// Check to make sure that after you reload the page it remembers all of the items in your cart
	it('Checking number of items in cart on screen after reload', async () => {
		console.log('Checking number of items in cart on screen after reload...')
		// TODO - Step 4
		// Reload the page, then select all of the <product-item> elements, and check every
		// element to make sure that all of their buttons say "Remove from Cart".
		// Also check to make sure that #cart-count is still 20

		// Reload the page
		await page.reload()

		// Select all of the <product-item> elements
		const items = await page.$$('product-item')

		// Check every element to make sure that all of their buttons say "Remove from Cart"
		for (let i = 0; i < items.length; i += 1) {
			const shadow = await items[i].getProperty('shadowRoot')
			const btn = await shadow.$('button')
			const inner = await btn.getProperty('innerText')
			const text = await inner.jsonValue()

			expect(text).toBe('Remove from Cart')
		}

		// Check to make sure that #cart-count is still 20
		const count = await page.$('#cart-count')
		const inner = await count.getProperty('innerText')
		const text = await inner.jsonValue()

		expect(text).toBe('20')
	}, 10000)

	// Check to make sure that the cart in localStorage is what you expect
	it('Checking the localStorage to make sure cart is correct', async () => {
		// TODO - Step 5
		// At this point he item 'cart' in localStorage should be 
		// '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]', check to make sure it is

		// Get the localStorage
		const cart = await page.evaluate(() => localStorage.getItem('cart'))

		// [1..20]
		const expectedcart = Array.from(Array(20).keys()).map(x => x + 1)

		expect(cart).toBe(JSON.stringify(expectedcart))
	})

	// Checking to make sure that if you remove all of the items from the cart that the cart
	// number in the top right of the screen is 0
	it('Checking number of items in cart on screen after removing from cart', async () => {
		console.log('Checking number of items in cart on screen...')
		// TODO - Step 6
		// Go through and click "Remove from Cart" on every single <product-item>, just like above.
		// Once you have, check to make sure that #cart-count is now 0

		// Select all of the <product-item> elements
		const items = await page.$$('product-item')

		// Click on every single product element
		for (let i = 0; i < items.length; i += 1) {
			const shadow = await items[i].getProperty('shadowRoot')
			const btn = await shadow.$('button')
			await btn.click()
		}

		// Check to make sure that #cart-count is now 0
		const count = await page.$('#cart-count')
		const inner = await count.getProperty('innerText')
		const text = await inner.jsonValue()

		expect(text).toBe('0')
	}, 10000)

	// Checking to make sure that it remembers us removing everything from the cart
	// after we refresh the page
	it('Checking number of items in cart on screen after reload', async () => {
		console.log('Checking number of items in cart on screen after reload...')
		// TODO - Step 7
		// Reload the page once more, then go through each <product-item> to make sure that it has remembered nothing
		// is in the cart - do this by checking the text on the buttons so that they should say "Add to Cart".
		// Also check to make sure that #cart-count is still 0

		// Reload the page
		await page.reload()

		// Select all of the <product-item> elements
		const items = await page.$$('product-item')

		// Check every element to make sure that all of their buttons say "Add to Cart"
		for (let i = 0; i < items.length; i += 1) {
			const shadow = await items[i].getProperty('shadowRoot')
			const btn = await shadow.$('button')
			const inner = await btn.getProperty('innerText')
			const text = await inner.jsonValue()

			expect(text).toBe('Add to Cart')
		}

		// Check to make sure that #cart-count is still 0
		const count = await page.$('#cart-count')
		const inner = await count.getProperty('innerText')
		const text = await inner.jsonValue()

		expect(text).toBe('0')
	}, 10000)

	// Checking to make sure that localStorage for the cart is as we'd expect for the
	// cart being empty
	it('Checking the localStorage to make sure cart is correct', async () => {
		console.log('Checking the localStorage...')
		// TODO - Step 8
		// At this point he item 'cart' in localStorage should be '[]', check to make sure it is

		// Get the localStorage
		const cart = await page.evaluate(() => localStorage.getItem('cart'))
		expect(cart).toBe('[]')
	})
})
