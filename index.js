let portfolioItems = document.querySelector('.portfolio-item-wrapper')




function hover(){

}

portfolioItems.addEventListener('mouseover',hover)


document.querySelector("form").onsubmit = function (e){
    e.preventDefault()
    let comment = document.querySelector("#comments input").value
    
    console.log(comment)
    axios.post("http://ironrest.herokuapp.com/angelcomments",{comment:comment})
    .then(function(res){
        console.log(res.data)
        window.location.reload()
    })
}



axios.get("http://ironrest.herokuapp.com/angelcomments").then(function(res){
    console.log(res.data)
})