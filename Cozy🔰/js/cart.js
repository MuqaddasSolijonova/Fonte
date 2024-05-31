const blocks = document.querySelector(".blocks")
const totalPrice = document.querySelector(".totalPrice")

var cartProdact=[
    {
        id: 0,
        count: 1,
        name: "Meryl Lounge Chair",
        narxi: 200,
        img: "./imgs/kichik_rasm_1.svg",
      },
      {
        id: 1,
        count: 2,
        name: "Meryl Lounge Chair[2]",
        narxi: 300,
        img: "https://www.imgcomfort.com/nz/-/media/imgsite/category/relaxer/diecut/rm395_brando_l655_img1948.png?la=en-NZ&h=550&w=451&mw=790&hash=BBB66676C5A449EFAA1672408DFC5EEF",
      },
]
 const WriteCart =()=>{
    cartProdact.forEach((item)=>{
        blocks.innerHTML+=`
        <div class="osmond">
        <div class="bitta">
            <img src="${item.img}" alt="">
            <div class="color">
                <h2>${item.name}</h2>
                <h3><span>Color</span>Gunnared biege</h3>
                <div class="ado_car">
                    <div class="car_div">
                        <span class="minus">-</span>
                        <h3 class="son">${item.count}</h3>
                        <span class="plus">+</span>
                    </div>
                    <span class="rem">Remove</span>
                </div>
            </div>
        </div>
        <h1>$${item.narxi*item.count}</h1>
    </div>
        `
    })

 }
 WriteCart()