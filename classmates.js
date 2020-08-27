
let getBtn= document.querySelector('.get')
getBtn.onclick=getData


function getData(){
    axios.get('https://ironrest.herokuapp.com/mia-aug2020-webdevs').then(response =>{
       console.log(response); 
       let random= Math.floor(Math.random()* response.data.length)
       console.log(random)
      document.querySelector('h1').innerHTML=response.data[random].first_name
      document.querySelector('h3').innerHTML=response.data[random].last_name
      document.querySelector('.port-links').href=response.data[random].website
      
    })
  }

  