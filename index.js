let cart = document.getElementById('cart');
let body = document.querySelector('body')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let num = document.getElementById('num')

let add2 = document.getElementById('add2')
let empty2 = document.querySelector('.empty2')
let price = document.getElementById('price')
let total = document.getElementById('total')

let smallshoes = document.querySelectorAll('.smallshoes img')
let shoeimages = document.querySelectorAll('.shoeimage img')
let smalltwo = document.getElementById('smalltwo')
let smallthree = document.getElementById('smallthree')
let smallfour = document.getElementById('smallfour')

let smallone = document.getElementById('smallone')
let images = document.querySelector('.images') 
let imagess = document.querySelector('.shoeimage')
let shoe1 = document.getElementById('shoe1')
let smallies = document.querySelectorAll('.smallie')

let delet = document.getElementById('delete')
let empt = document.querySelector('.empty2')

let bigone = './images/image-product-1.jpg'
let bigtwo = './images/image-product-2.jpg'
let bigthree = './images/image-product-3.jpg'
let bigfour = './images/image-product-4.jpg'

let BigImages =[
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
]

let prev = document.getElementById('prev')
let next = document.getElementById('next')
let close = document.getElementById('close')

lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

cartnum = document.createElement('div')
cartnum.classList = 'cartnum';

cnum = document.createElement('div')
cnum.id = 'cnum'


empty = document.createElement('div')
empty.id = 'empty'

cart.onclick=()=>{
    if(cart){
        cart = false;
        document.body.appendChild(empty)
        empty.style.display = 'inline-block'
        empty.innerHTML = `
            <div class= "cart2">Cart</div>
            <hr class="hr">
            <div class="empty2">Your cart is empty</div>` 
    }
    else{
        cart = true;
        empty.style.display = 'none'
    }
}

let numm = 0;
minus.onclick=()=>{
    numm-=1
    num.innerText = numm ;
}
plus.onclick=()=>{
    numm+=1
    num.innerText = numm 
}

add2.onclick=()=>{

    if (add2){
        add2 = false;
        total = price.innerHTML * num.innerHTML 
        total.innerHTML = total
        document.body.appendChild(cartnum);
        document.body.appendChild(cnum)
        cnum.innerText = num.innerText
        document.body.appendChild(empty)
        empty.style.display = 'inline-block'
        empty.innerHTML =`
            <div class= "cart2">Cart</div>
            <hr class="hr">
            <div class="empty2">
            <img id="cart-shoe" width="40px" height="40px" src="./images/image-product-1.jpg" alt="">
            <div id="fill">Fall Limited Edition Sneakers</div>
            <div id="cart-amount">${price.innerHTML}</div>
            <div id="x">X</div>
            <div id="carttimes">${num.innerHTML}</div>
            <div id="total">${total.innerHTML}</div>
            <div id ="delete">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>        
            </div>
            <button id="check">Checkout</button>
            </div> `
    }
    else{
        add2 = true;
        empty.style.display = 'none'
    }
}

        let divv = document.createElement('div')
        let img = document.createElement('img')
        let shoess = document.createElement('div')

        let imgshoe1 = document.createElement('img')
        let imgshoe2 = document.createElement('img')
        let imgshoe3 = document.createElement('img')
        let imgshoe4 = document.createElement('img')

        divv.id ='divv'
        img.id = 'img1'
        shoess.id = 'shoess'

        let prevv = document.createElement('div')
        let nextt = document.createElement('div')
        let closee = document.createElement('div')
        nextt.id = 'nextt'
        prevv.id = 'prevv'
        closee.id = 'closee'

shoeimages.forEach(shoeimage =>{
    shoeimage.addEventListener('click', e=>{
        lightbox.classList.add('active')    

       

        img.src = shoeimage.src

        imgshoe1.src = smallone.src
        imgshoe2.src = smalltwo.src
        imgshoe3.src = smallthree.src
        imgshoe4.src = smallfour.src
        
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        prev.style.display = 'inline-block'
        next.style.display = 'inline-block'
        close.style.display = 'inline-block'

        lightbox.appendChild(divv)
        lightbox.appendChild(closee)
        closee.appendChild(close)

        divv.appendChild(nextt)
        nextt.appendChild(next)
        divv.appendChild(prevv)
        prevv.appendChild(prev)

        divv.appendChild(img)
        divv.appendChild(shoess)

        shoess.appendChild(imgshoe1)
        shoess.appendChild(imgshoe2)
        shoess.appendChild(imgshoe3)
        shoess.appendChild(imgshoe4)
    })
})

lightbox.addEventListener('click', e=>{
    if(e.target !== e.currentTarget) return
        lightbox.classList.remove('active')  
})

smallies.forEach(smallie=>{
    smallie.addEventListener('click', e=>{
            
            if(smallie.src == smallone.src){
                shoe1.src = bigone
            }
            else if (smallie.src == smalltwo.src){
                shoe1.src = bigtwo;
            }
            else if (smallie.src == smallthree.src){
                shoe1.src = bigthree;
            }
            else if (smallie.src == smallfour.src){
                shoe1.src = bigfour;
            }
    })

})

imgshoe1.addEventListener('click', e=>{
    img.src = bigone
})
imgshoe2.addEventListener('click', e=>{
    img.src =bigtwo;
})

imgshoe3.addEventListener('click', e=>{
    img.src = bigthree
})
imgshoe4.addEventListener('click', e=>{
    img.src = bigfour
})

let firstImage = 0;
let lastImage = BigImages.length - 1;
let currentImage = 0;

nextt.addEventListener('click', e=>{
    currentImage++;
    if(currentImage >= lastImage){
        currentImage = 3;
    }
    img.src =BigImages[currentImage]

})

prevv.addEventListener('click', e=>{
    currentImage--;
    if(currentImage<=firstImage){
        currentImage = 0;
    }
    img.src = BigImages[currentImage]
})

 close.addEventListener('click', e=>{
    lightbox.classList.remove('active')  
 })

img.addEventListener('click', e=>{

})

delet.addEventListener('click', e=>{
    empt.innerHTML =`
    <div class="empty2">Your cart is empty</div>
    `

})