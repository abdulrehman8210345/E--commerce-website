let products = [
    { id: 0, name: "Cube 1", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980.", price: 20, image: "Assets\\Products\\Cube\\cube1.png", is_featured: true },
    { id: 1, name: "Cube 2", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980. ", price: 20, image: "Assets\\Products\\Cube\\cube2.png", is_featured: true },
    { id: 2, name: "Cube 3", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980. ", price: 20, image: "Assets\\Products\\Cube\\cube3.png", is_featured: true },
    { id: 3, name: "Cube 4", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980.", price: 20, image: "Assets\\Products\\Cube\\cube4.png", is_featured: true },
    { id: 4, name: "Cube 5", description: "Hungarian design teacher and serious puzzler Erno Rubik assembled his first cube puzzle in 1974 and called it the Magic Cube. After a toy agent pitched the puzzle to Ideal Toy & Novelty Company, it renamed the puzzle Rubik's Cube and began putting it in stores in 1980.", price: 20, image: "Assets\\Products\\Cube\\cube5.png", is_featured: true },
    { id: 5, name: "Camera 1", description: "Google Camera is an excellent app for Android devices. It&#8217;s the grail of Google Pixel smartphones and it is easy to install the Google Camera app. While other companies count on multiple cameras to deliver high-quality shots ", price: 20, image: "Assets\\Products\\Camera\\camera1.png", is_featured: false },
    { id: 6, name: "Camera 2", description: "Google Camera is an excellent app for Android devices. It&#8217;s the grail of Google Pixel smartphones and it is easy to install the Google Camera app. While other companies count on multiple cameras to deliver high-quality shots", price: 20, image: "Assets\\Products\\Camera\\camera2.png", is_featured: false },
    { id: 7, name: "Camera 3", description: "Google Camera is an excellent app for Android devices. It&#8217;s the grail of Google Pixel smartphones and it is easy to install the Google Camera app. While other companies count on multiple cameras to deliver high-quality shots", price: 20, image: "Assets\\Products\\Camera\\camera3.png", is_featured: false },
]



//taking index
let cart = localStorage.getItem('cart')
// console.log(cartBodyWrapper)
let cartArray = cart.split(",")

for (i = 0; i < cartArray.length; i++) {

    let cartIndex = cartArray[i][1]


    // creating cart wrapper div
    let cartWrapper = document.createElement('DiV')

    cartWrapper.className = 'cart-wrapper'


    // creating cart body div
    let cartBody = document.createElement('DIV')

    cartBody.className = 'cart-body'

    // appending cartbody to cart wrapper as child
    cartWrapper.appendChild(cartBody)

    // creating img element
    let imagePath = document.createElement('IMG')

    // giving src attribute
    imagePath.setAttribute('src', products[cartIndex].image)

    // appending imagePath to cart body as child
    cartBody.appendChild(imagePath)

    //creating heading of cart product with h3 element
    let heading = document.createElement('H3')

    // creating headingText
    let headingText = document.createTextNode(products[cartIndex].name)

    // appending heading text to heading
    heading.appendChild(headingText)

    // appending heading to cart body as child
    cartBody.appendChild(heading)





    // creating cart quantity div
    let cartQuantityDiv = document.createElement('DIV')

    // giving class of cart-quantity to cartQuantity
    cartQuantityDiv.className = 'cart-quantity'



    // // creating increment div
    // let incrementDiv = document.createElement('DIV')

    // // giving class name
    // incrementDiv.className = 'increment'

    // // giving text node to incrementDiv
    // let incrementDivText = document.createTextNode('+')

    // // appending incrementDivText to incrementDiv
    // incrementDiv.appendChild(incrementDivText)

    // // appending increment div to cart quantity div
    // cartQuantityDiv.appendChild(incrementDiv)



    // creating cart quantity P
    let cartQuantityP = document.createElement('P')

    // creating cart quantity text
    let cartQuantitytext = document.createTextNode(1)

    // giving cartQuantityP a class
    cartQuantityP.className = 'quantityValue'

    // appending cartQuantityText to cartQuantityP as child
    cartQuantityP.appendChild(cartQuantitytext)

    // appending cartQuantityP to cartQuantityDiv
    cartQuantityDiv.appendChild(cartQuantityP)

    // appending cartQuantity to CartWrapper as child
    cartWrapper.appendChild(cartQuantityDiv)



    // // creating increment div
    // let decrementDiv = document.createElement('DIV')

    // // giving class name
    // decrementDiv.className = 'decrement'

    // // giving text node to incrementDiv
    // let decrementDivText = document.createTextNode('-')

    // // appending incrementDivText to incrementDiv
    // decrementDiv.appendChild(decrementDivText)

    // // appending increment div to cart quantity div
    // cartQuantityDiv.appendChild(decrementDiv)





    //creating cartPriceDiv
    let cartPriceDiv = document.createElement('DIV')

    // giving classname to cartPriceDiv
    cartPriceDiv.className = 'cart-price'

    // creating a p element
    let cartPriceP = document.createElement('P')

    // creating cart price text
    let cartPricetext = document.createTextNode("$" + products[cartIndex].price)

    // appendind cartPricetext to cartPrice
    cartPriceP.appendChild(cartPricetext)

    // appending cartPrice to cartPriceDiv
    cartPriceDiv.appendChild(cartPriceP)

    cartWrapper.appendChild(cartPriceDiv)





    // creating subtotalDiv
    let subtotalDiv = document.createElement('DIV')

    // giving classname to subtotalDIv
    subtotalDiv.className = 'subtotal'

    //creating subotalp
    let subtotalP = document.createElement('P')

    // giving classname to subtotalP
    subtotalP.className = 'subtotal-p'

    // saving subtotal price to variable
    let subtotalprice = products[cartIndex].price * cartQuantityP.innerText

    // creating subtotal text
    let subTotalText = document.createTextNode('$' + subtotalprice)

    // appending subTotalText to subtotalDiv
    subtotalP.appendChild(subTotalText)

    // appending subtotalp to  subtotal DIv
    subtotalDiv.appendChild(subtotalP)

    // appending subtotalDiv to cart quantity div
    cartWrapper.appendChild(subtotalDiv)



    // getting previous subtotal
    let previousSubTotal = document.getElementsByClassName('subtotal-p')





    // appending cartwrapper to document
    let cartDiv = document.getElementById('cart-body-wrapper')

    cartDiv.appendChild(cartWrapper)

    document.getElementById('total-price').innerText = Number(document.getElementById('total-price').innerText) + Number(subtotalprice)
}

let totalWithout$ = document.getElementById('total-price').innerText

document.getElementById('total-price').innerText = "$" + totalWithout$





let isCartEmpty = localStorage.getItem('cartValue') == null
document.getElementById("cart-value").innerText = isCartEmpty ? 'Cart:0' : localStorage.getItem('cartValue')

function checkout() {
    localStorage.removeItem('cart')
    localStorage.removeItem('cartValue')
    // if cart is empty
    if (localStorage.getItem('isLoggedin') == false || localStorage.getItem('isLoggedin') == null) {
        let loginDiv = document.getElementById('login-page')
        loginDiv.style.display = 'flex'
    } else {
        window.location = 'index.html'
    }
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

function loginAnchor() {
    let loginDiv = document.getElementById('login-page')
    loginDiv.style.display = 'flex'
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