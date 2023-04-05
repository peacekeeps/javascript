const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      wpp: "buttermilk%20pancakes%20",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      wpp: "diner%20double%20",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      wpp: "godzilla%20milkshake%20",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      wpp: "country%20delight%20",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      wpp: "egg%20attack%20",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      wpp: "oreo%20dream%20",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      wpp: "bacon%20overflow%20",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      wpp: "american%20classic%20",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      wpp: "quarantine%20buddy%20",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        wpp: "quarantine%20buddy%20",
        category: "dinner",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];

  const menuBox = document.querySelector(".menu-box")
  const menuItem = document.querySelector(".menu-item")
  const btnBox = document.querySelector(".btn-box")
  const imgBox = document.querySelector(".img-box")

//   btn.forEach(function(btn) {
//     btn.addEventListener("click", function() {
        
//     })
//   })

  console.log(menuBox)

  document.addEventListener("DOMContentLoaded", function() {

    let btns = []
    

    for (i = 0; i < menu.length; i++) {

        if (!btns.includes(menu[i].category)) {
            btns.push(menu[i].category)
            btnBox.innerHTML += `
            <button class="${menu[i].category} btn">${menu[i].category}</button>
            `
            
        }

        // for (i = 0; i < btns.length; i++) {
        //     btnBox.innerHTML += btns[i]
        // }

        let link = `https://api.whatsapp.com/send?phone=5519971697154&text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20${menu[i].wpp}!%20`

        menuBox.innerHTML += `
        <article class="menu-item">
            <div class="img-box"><img src=${menu[i].img} alt=${menu[i].title}></div>
            <div class="text-box">
                <div class="text-header">
                    <h2>${menu[i].title}</h2>
                    <h3>${menu[i].price}</h3>
                    <hr>
                </div>
                <div class="text-body">
                    <p>${menu[i].desc}</p>
                </div>
                <div class="text-footer"><button class="whats"><a href=${link}>Order now!</a></button></div>
            </div>
        </article>
        `
    }
    const btn = document.querySelectorAll(".btn")
    
    btn.forEach(function(e) {
        e.addEventListener("click", function() {
            let newArray = []
            menuBox.innerHTML = ""

            for (i = 0; i < menu.length; i++) {
                if (menu[i].category == e.textContent) {
                    let link = `https://api.whatsapp.com/send?phone=5519971697154&text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20${menu[i].wpp}!%20`

                    menuBox.innerHTML += `
                    <article class="menu-item">
                        <div class="img-box"><img src=${menu[i].img} alt=${menu[i].title}></div>
                        <div class="text-box">
                            <div class="text-header">
                                <h2>${menu[i].title}</h2>
                                <h3>${menu[i].price}</h3>
                                <hr>
                            </div>
                            <div class="text-body">
                                <p>${menu[i].desc}</p>
                            </div>
                            <div class="text-footer"><button class="whats"><a href=${link}>Order now!</a></button></div>
                        </div>
                    </article>
                    `

                } else if (e.textContent == "All") {
                    let link = `https://api.whatsapp.com/send?phone=5519971697154&text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20${menu[i].wpp}!%20`
                    menuBox.innerHTML += `
                    <article class="menu-item">
                        <div class="img-box"><img src=${menu[i].img} alt=${menu[i].title}></div>
                        <div class="text-box">
                            <div class="text-header">
                                <h2>${menu[i].title}</h2>
                                <h3>${menu[i].price}</h3>
                                <hr>
                            </div>
                            <div class="text-body">
                                <p>${menu[i].desc}</p>
                            </div>
                            <div class="text-footer"><button class="whats"><a href=${link}>Order now!</a></button></div>
                        </div>
                    </article>
                    `
                }
            }
        })
    })
  })

 