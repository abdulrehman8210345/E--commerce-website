let products = [
    { id: 0, name: "Cube 1", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980.", image: "Assets\\Products\\Cube\\cube1.png", is_featured: true },
    { id: 1, name: "Cube 2", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980. ", image: "Assets\\Products\\Cube\\cube2.png", is_featured: true },
    { id: 2, name: "Cube 3", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980. ", image: "Assets\\Products\\Cube\\cube3.png", is_featured: true },
    { id: 3, name: "Cube 4", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980.", image: "Assets\\Products\\Cube\\cube4.png", is_featured: true },
    { id: 4, name: "Cube 5", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980.", image: "Assets\\Products\\Cube\\cube5.png", is_featured: true },
    { id: 5, name: "Camera 1", description: "Google Camera is an excellent app for Android devices. It&#8217;s the grail of Google Pixel smartphones and it is easy to install the Google Camera app. While other companies count on multiple cameras to deliver high-quality shots ", image: "Assets\\Products\\Camera\\camera1.png", is_featured: false },
    { id: 6, name: "Camera 2", description: "Google Camera is an excellent app for Android devices. It&#8217;s the grail of Google Pixel smartphones and it is easy to install the Google Camera app. While other companies count on multiple cameras to deliver high-quality shots", image: "Assets\\Products\\Camera\\camera2.png", is_featured: false },
    { id: 7, name: "Camera 3", description: "Google Camera is an excellent app for Android devices. It&#8217;s the grail of Google Pixel smartphones and it is easy to install the Google Camera app. While other companies count on multiple cameras to deliver high-quality shots", image: "Assets\\Products\\Camera\\camera3.png", is_featured: false },
]

for (let product of products) {
    if (product.is_featured == true) {

        let mainDiv = document.getElementById('feature_card_wrapper')

        let card = document.createElement('DIV')
        card.className = 'feature-card'
        mainDiv.appendChild(card)

        let heading = document.createElement('H3')
        card.appendChild(heading)

        let heading_text = document.createTextNode(product.name)
        heading.appendChild(heading_text)

        let photo = document.createElement('IMG')
        photo.src = product.image
        card.appendChild(photo)

        let description = document.createElement('P')
        let description_text = document.createTextNode(product.description)
        description.appendChild(description_text)
        card.appendChild(description)

        let add_to_cart_button = document.createElement("BUTTON")
        let add_to_cart_button_text = document.createTextNode('add to cart')
        add_to_cart_button.appendChild(add_to_cart_button_text)
        add_to_cart_button.addEventListener('click', addToCart)
        add_to_cart_button.id = product.id
        card.appendChild(add_to_cart_button)

    } {
        let ourProductsDiv = document.getElementById('our_product_wrapper')

        let ourProductCard = document.createElement('DIV')
        ourProductsDiv.appendChild(ourProductCard)
        ourProductCard.className = 'our-product-card'

        let heading = document.createElement('H3')
        let headingText = document.createTextNode(product.name)
        heading.appendChild(headingText)
        ourProductCard.appendChild(heading)

        let photo = document.createElement('IMG')
        photo.src = product.image
        ourProductCard.appendChild(photo)

        let description = document.createElement('P')
        let descriptionText = document.createTextNode(product.description)
        description.appendChild(descriptionText)
        ourProductCard.appendChild(description)

        let readMoreButton = document.createElement("BUTTON")
        let readMoreButtonText = document.createTextNode('see more')
        readMoreButton.appendChild(readMoreButtonText)
        ourProductCard.appendChild(readMoreButton)
        readMoreButton.id = product.id
        readMoreButton.addEventListener('click', readMore)

        let hidden_description = document.createElement('P')
        let hidden_description_text = document.createTextNode(document.hidden_description)
        hidden_description.appendChild(hidden_description_text)
        ourProductCard.appendChild(hidden_description)
        hidden_description.style.display = 'none'
        hidden_description.className = 'hidden_description'
        hidden_description.id = Number(this.id) - 2


    }
}

function addToCart() {

    // Getting the element with id cart as a string
    cart = document.getElementById("cart").innerText

    // splitting it to convert it in an array
    let cartArray = cart.split("")

    //Taking last item of cartArray using .pop() and storing it in lastItemCart
    let lastItemCart = cartArray.pop()

    // declaring variable updatedCart and storing value of cart
    const updatedCartvalue = Number(lastItemCart) + 1

    // Taking the remaining array and continating it with updated cart and storing it in the element with id cart
    let updatedCart = cartArray.join("") + updatedCartvalue

    document.getElementById("cart").innerText = updatedCart
    localStorage.setItem('cartValue', updatedCart)



    //                                 giving value of product to local storage

    var existing = localStorage.getItem('cart');

    // // If no existing data, use the value by itself
    // // Otherwise, add the new value to it
    var data = (existing) ? existing + ',' + JSON.stringify(this.id) : JSON.stringify(this.id);

    // // Save back to localStorage
    localStorage.setItem('cart', data);
    // let objectId = products[this.id]
    // localStorage.setItem('cart',Object.entries(objectId))


    // alerting "article added tocart"
    alert("Article added to cart")
}

function readMore() {
    if (this.id) {
        // let seeMoreButton = document.getElementsByTagName('button')[this.id]
        // let hiddenDescription = document.getElementsByClassName('hidden_description')
        // console.log(seeMoreButton)
        // console.log(hiddenDescription)
        // console.log(typeof())
        console.log('working')
    }
    else {

    }



}

function gotoCart() {
    location.href = "login.html"
}

function loginAnchor() {
    let loginDiv = document.getElementById('login-page')
    loginDiv.style.display = 'flex'
}

function saveLogintolocal() {
    let fields = document.getElementById('login-page').getElementsByClassName('input')
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value !== '') {
            localStorage.setItem("isLoggedin", true)
            let loginDiv = document.getElementById('login-page')
            loginDiv.style.display = 'none'
        }
    }
}

function checkRequired() {
    let fields = document.getElementById('login-page').getElementsByClassName('input')
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value == '') {
            let alertBlock = document.getElementById('login-page').getElementsByTagName('p')
            alertBlock[0].style.display = 'flex'
        }
    }
}

let isCartEmpty = localStorage.getItem('cartValue') == null
document.getElementById("cart").innerText = isCartEmpty ? 'Cart:0' : localStorage.getItem('cartValue')

let messageDiv = document.getElementById('message')
messageDiv.addEventListener('click', () => {
    window.location = 'https://github.com/abdulrehman8210345/E-commerce'
})