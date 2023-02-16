// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const userPic = document.getElementById("user-pic")
const userName = document.querySelector("#user-name")
const userJob = document.getElementById("user-job")
const userReview = document.getElementById("user-review")

const btns = document.querySelectorAll(".btn")

console.log(btns)

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    target = e.currentTarget.classList
    if (target.contains("surprise")) {
      currentItem = Math.floor(Math.random() * 4)
      showPerson(currentItem)
    } else if (target.contains("right")) {
      if (currentItem < reviews.length - 1) {
        currentItem++
      } else {
        currentItem = 0
      }
    } else {
      if (currentItem == 0) {
        currentItem = 3
      } else {
        currentItem--
      } 
    }
    showPerson(currentItem)
  })
})

console.log(userPic, userName, userJob, userReview)

// set starting item
let currentItem = 0

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem)
})

function showPerson(person) {
  const item = reviews[currentItem]
  userPic.src = item.img
  userName.textContent = item.name
  userJob.textContent = item.job
  userReview.textContent = item.text
}

