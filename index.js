// let portfolioItems = document.querySelector('.portfolio-item-wrapper')
//
//
//
//
// function hover(){
//
// }
//
// portfolioItems.addEventListener('mouseover',hover)
//
//
// document.querySelector("form").onsubmit = function (e){
// e.preventDefault()
// let comment = document.querySelector("#comments input").value
//
// console.log(comment)
// axios.post("http://ironrest.herokuapp.com/angelcomments",{comment:comment})
// .then(function(res){
// console.log(res.data)
// window.location.reload()
// })
// }
//
//
//
// axios.get("http://ironrest.herokuapp.com/angelcomments").then(function(res){
// console.log(res.data)
// })
//
//
//
//

let firstToggle = document.querySelector("#submit-button");

firstToggle.addEventListener("click", switchit);

function switchit() {
  alert("Thanks for the feedback!")

}

let name = document.querySelector("#name-text");

let email = document.querySelector("#email");

// let submit= document.querySelector("#submit-button")

let form = document.querySelector("#form")

let message = document.querySelector("#message")



// submit.addEventListener('click', cancelout)
// 
// function cancelout(){
// 
// 
// }

// // // function inspo(){axios.get('https://ironrest.herokuapp.com/mia-aug2020-webdevs')
        // .then(res =>{
          // console.log(res.data)
        // })}
// 
// 
// 
// inspo()



let getBtn= document.querySelector('.get')

let postBtn= document.querySelector('.post')


const getData = ()=>{
  axios.get('https://ironrest.herokuapp.com/mia-aug2020-webdevs').then(response =>{
     console.log(response); 
    let feedback= document.querySelector('.feedback-text')
    feedback.innerHTML=response.data[0].website
    document.querySelector('h1').innerHTML=response.data[0].first_name
    document.querySelector('h3')
    document.querySelector('a')
  })
}


// getBtn.addEventListener('click',getData)