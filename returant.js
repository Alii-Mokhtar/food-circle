let foods = [
    { type: 'فرنگی', src: 'imges/farangi/beefstraganof.jpg', name: 'بیف استراگانوف', price: 610000, },
    { type: 'فرنگی', src: 'imges/farangi/chinesschiken.jpg', name: 'مرغ چینی', price: 400000, },
    { type: 'فرنگی', src: 'imges/farangi/fingerspicy.jpg', name: 'مرغ انگشتی', price: 365000, },
    { type: 'فرنگی', src: 'imges/farangi/ketfsokhari.jpg', name: 'کتف سوخاری', price: 480000, },
    { type: 'فرنگی', src: 'imges/farangi/shincel.jpg', name: 'شینسل مرغ', price: 435000, },
    { type: 'فرنگی', src: './imges/farangi/چاینیز میکس.jpg', name: 'چاینیز میکس', price: 455000, },
    { type: 'فرنگی', src: 'imges/farangi/پارمژان مرغ.jpg', name: 'پارمژان مرغ', price: 415000, },
    { type: 'فرنگی', src: 'imges/farangi/چیکن رول.jpg', name: 'چیکن رول', price: 400000, },
    { type: 'فرنگی', src: 'imges/farangi/اسکالپ مرغ.jpg', name: 'اسکالپ مرغ', price: 397000, },
    { type: 'گریل', src: 'imges/grill/1gcva1hh.nz1_560x350.jpg', name: 'استیک مرغ', price: 590000, },
    { type: 'گریل', src: 'imges/grill/payar.jpg', name: 'استیک پایار', price: 750000, },
    { type: 'گریل', src: 'imges/grill/meat.jpg', name: 'استیک گوشت', price: 800000, },
    { type: 'گریل', src: 'imges/grill/گریل میکس.jpg', name: 'گریل میکس', price: 700000, },
    { type: 'فست فود', src: './imges/pitza/makhlut pitza.jpg', name: 'پیتزا مخلوط', price: 365000, },
    { type: 'فست فود', src: 'imges/pitza/mecsikanpizza.jpg', name: 'پیتزا مخصوص', price: 360000, },
    { type: 'فست فود', src: 'imges/pitza/pitza.jpg', name: 'پیتزا استیک', price: 410000, },
    { type: 'فست فود', src: 'imges/pitza/vegtebalepizza.jpg', name: 'پیتزا سبزیجات', price: 390000, },
    { type: 'پاستا', src: 'imges/pasta/penee2.jpg', name: 'پنه مرغ', price: 345000, },
    { type: 'پاستا', src: 'imges/pasta/penee.jpg', name: 'پنه سبزیجات', price: 320000, },
    { type: 'پاستا', src: 'imges/pasta/penee3.jpg', name: 'پنه کوشت', price: 400000, },
    { type: 'نوشیدنی', src: 'imges/drinks/coca.jpg', name: 'نوشابه کوکا', price: 20000, },
    { type: 'نوشیدنی', src: 'imges/drinks/sprite.jpg', name: 'اسپرایت', price: 20000, },
    { type: 'نوشیدنی', src: 'imges/drinks/water.jpg', name: 'اب معدنی', price: 7000, },
    { type: 'نوشیدنی', src: 'imges/drinks/fanat.jpg', name: 'فانتا', price: 20000, },
    { type: 'نوشیدنی', src: 'imges/drinks/dogh.jpg', name: 'دوغ', price: 25000, },
    { type: 'نوشیدنی', src: './imges/drinks/دوغ لیوانی.jpg', name: 'دوغ لیوانی', price: 40000, },
    { type: 'نوشیدنی', src: 'imges/drinks/اب میوه طبیعی.jpg', name: 'اب میوه طبیعی', price: 80000, },
    { type: 'نوشیدنی', src: './imges/drinks/دلستر.jpg', name: 'دلستر', price: 25000, },
]



let root = document.getElementById('root')
let basketroot = document.getElementById('basketroot')
let input = document.getElementById('input')
let tax = document.getElementById('tax')
let total = document.getElementById('total')
let count = document.getElementById('count')
let choose = document.getElementById('choose')
let mybasket = []




function render(list) {
    let mylist = list.map(function (food) {
        return `<div class="border cartcont col-sm-5 col-md-5 col-lg-3 cartBack d-flex flex-column rounded m-2">
        <img class="foodimg rounded"
            src="${food.src}"
            alt="">
        <div class="d-flex flex-column align-items-center mt-3">
            <div class="foodname">${food.name}</div>
            <div class="foodprice" dir="rtl">${food.price.toLocaleString("en-US")}<span> تومان</span></div>
        </div>
        <div class="d-flex justify-content-center m-3">
            <buttn onclick='addfood("${food.name}")'  class="plusbtn d-flex justify-content-center btn btn-sm btn-dark border w-25">+</button>
            
            </div>

    </div>`
    })
    root.innerHTML = mylist.join('')
}


function addfood(food) {
    let allfoods = foods.find(function (fod) { return fod.name == food })
    mybasket.push(allfoods)
    console.log(mybasket)
    let aux = 0
    for (i = 0; i < mybasket.length; i++) {
        aux += mybasket[i].price
        let a = aux * 0.1
        let alltax = tax.textContent = a.toLocaleString("en-US")
        let t = aux + a
        total.textContent = t.toLocaleString("en-US")
    }
    count.textContent = +count.textContent + 1
    setlocals(mybasket)
    setprice()
    setcount()
    renderbasket(mybasket)
}



function setlocals(addmy) {
    localStorage.setItem('foods', JSON.stringify(addmy))
}


function setprice() {
    localStorage.setItem('price', total.textContent)
    localStorage.setItem('tax', tax.textContent)
}

window.addEventListener("load", getprice)
function getprice() {
    let local = localStorage.getItem("price")
    total.textContent = local
    let localtax = localStorage.getItem("tax")
    tax.textContent = localtax
}


window.addEventListener("load", getlocal)
function getlocal() {
    let local = JSON.parse(localStorage.getItem("foods"))
    if (local) {
        mybasket = local
    }
    else {
        mybasket = []
    }
    renderbasket(mybasket)
}
function setcount() {
    localStorage.setItem("count", count.textContent)
}
window.addEventListener("load", getcount)
function getcount() {
    let local = localStorage.getItem("count")
    count.textContent = mybasket.length
}



function renderbasket(mylist) {

    let mybasket = mylist.map(function (basket) {
        return `<div class='d-flex justify-content-around'>
        <div class="border-bottom col-6">
            <div class="basketname mt-3 h5 mb-2"><span class='font2'>${basket.name}</span></div>
            <div class="basketprice mb-2"><span class='font'>${basket.price.toLocaleString("en-US")} تومان</span></div>
            <button id='why' onclick='removefood("${basket.name}")' class="basketbtn why btn btn-danger btn-sm mb-3 mt-2">حذف از سبد</button>
        </div>
        <div class="basketimg align-self-start pt-2 col-6"><img class='rounded' width="110px" src="${basket.src}" alt=""></div>
    </div>`
    })
    basketroot.innerHTML = mybasket.join('')
}


function removefood(basket) {
    let index = mybasket.findIndex(function (food) { return food.name == basket })
    mybasket.splice(index, 1)
    setlocals(mybasket)
    let aux = 0
    for (i = 0; i < mybasket.length; i++) {
        aux += mybasket[i].price
        let a = aux * 0.1
        let alltax = tax.textContent = a.toLocaleString("en-US")
        let t = aux + a
        total.textContent = t.toLocaleString("en-US")
    }
    if (mybasket.length == 0) {
        total.textContent = ''
        tax.textContent = ''
    }
    setprice()

    count.textContent = +count.textContent - 1
    renderbasket(mybasket)
}


function allfoods() {
    let val = event.target.innerText
    choose.textContent = val

    render(foods)
}

function search() {
    let value = event.target.value
    let search = foods.filter(function (food) {
        return food.name.search(value) > -1
    })
    render(search)
}


function filter(event) {
    let val = event.target.innerText
    let res = foods.filter(function (food) { return food.type == val })
    render(res)
    choose.textContent = val
}

render(foods)