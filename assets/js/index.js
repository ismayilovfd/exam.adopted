const adoptednames = document.getElementById('adoptednames')


function fuad(){
    axios.get('https://655c31ddab37729791aa077d.mockapi.io/products')
    .then((res) => {
        db = res.data
        db.map((item) => {
            let cart = document.createElement('div')
            cart.className = "cartBox"
            cart.innerHTML = `
            <p>${item.name}</p>
            <img src="${item.image}" alt="">
            <button onclick ="addToBasket(${item.id})">addtoCart</button>
         `
         adoptednames.appendChild(cart);
        })
    })

}
fuad();

function addToBasket (id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}