
const neme = document.querySelector(".neme")
const narx = document.querySelector(".narx")
const textP = document.querySelector(".textP")
const nomerr = document.querySelector(".nomerr")
const katta_img = document.querySelector(".katta_img")
const chapka = document.querySelector(".chapka")
const omga = document.querySelector(".omga")
const nomer2 = document.querySelector(".nomer2")
const kichik_imgslar = document.querySelector(".kichik_imgslar")
const products = [
  {
    id: 0,
    raiting: 4,
    count: 1,
    imgs: [
      "./imgs/kichik_rasm_1.svg",
      "./imgs/kichik_rasm_2.svg",
      "./imgs/kichik_rasm_3.svg",
      "./imgs/kichik_rasm_4.svg",
      "./imgs/kichik_rasm_5.svg",
    ],
    name: "Meryl Lounge Chair",
    narxi: "$149.99",
    text: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
    img: "./imgs/kichik_rasm_1.svg",
  },
  {
    id: 1,
    raiting: 5,
    count: 1,
    imgs: [
      "https://infinger.com/wp-content/uploads/2020/09/img-usa-relaxers-and-power-relaxers-verona_1-500x500.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-rocking.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/dovre-ash-2.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-swivel.webp",
    ],
    name: "Meryl Lounge Chair[2]",
    narxi: "$149.99[2]",
    text: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.[2]",
    img: "https://www.imgcomfort.com/nz/-/media/imgsite/category/relaxer/diecut/rm395_brando_l655_img1948.png?la=en-NZ&h=550&w=451&mw=790&hash=BBB66676C5A449EFAA1672408DFC5EEF",
  },
  {
    id: 2,
    raiting: 5,
    count: 1,
    imgs: [
      "https://infinger.com/wp-content/uploads/2020/09/img-usa-relaxers-and-power-relaxers-verona_1-500x500.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-rocking.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/dovre-ash-2.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-swivel.webp",
    ],
    name: "Meryl Lounge Chair[3]",
    narxi: "$149.99[3]",
    text: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.[3]",
    img: "./imgs/kichik_rasm_3.svg",
  },
  {
    id: 3,
    raiting: 5,
    count: 1,
    imgs: [
      "https://infinger.com/wp-content/uploads/2020/09/img-usa-relaxers-and-power-relaxers-verona_1-500x500.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-rocking.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/dovre-ash-2.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-swivel.webp",
    ],
    name: "Meryl Lounge Chair[4]",
    narxi: "$149.99[4]",
    text: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.[4]",
    img: "./imgs/kichik_rasm_4.svg",
  },
  {
    id: 4,
    raiting: 5,
    count: 1,
    imgs: [
      "https://infinger.com/wp-content/uploads/2020/09/img-usa-relaxers-and-power-relaxers-verona_1-500x500.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-rocking.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/dovre-ash-2.jpg",
      "https://ormesfurniture.ca/wp-content/uploads/2023/03/h2-feature-swivel.webp",
    ],
    name: "Meryl Lounge Chair[5]",
    narxi: "$149.99[5]",
    text: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.[5]",
    img: "./imgs/kichik_rasm_5.svg",
  },
];

var index = 0

const WriteData = (num) => {
  kichik_imgslar.innerHTML=""
  nomerr.textContent = num < 10 ? `
    0${num + 1}` : num + 1
  nomer2.textContent = products.length < 10 ? `
   /0${products.length}` : `/${products.length}`
  neme.textContent = products[num].name
  narx.textContent = products[num].narxi
  textP.textContent = products[num].text
  katta_img.setAttribute("src", products[num].img)
    products[num].imgs.forEach((item, i)=>{
     
      kichik_imgslar.innerHTML+=`
      <div class="divs">
      <img onclick="getImg(${i})" class="kicImg" src="${item}" alt="">
  </div>
      `
    })
}

const getImg = (i)=>{
  katta_img.setAttribute("src" , products[index].imgs[i]) 
}
WriteData(index)
chapka.addEventListener("click", () => {
  if (index == 0) {
    index = products.length - 1
  } else {
    index--
  }
  WriteData(index)
})


omga.addEventListener("click", () => {
  if (index == products.length - 1) {
    index = 0
  } else {
    index++
  }
  WriteData(index)
})
