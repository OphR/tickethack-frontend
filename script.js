document.querySelector("#cart").addEventListener('click', function(){
    window.location.href = 'index2.html'
})

document.querySelector("#booking").addEventListener('click', function(){
    window.location.href = 'index3.html'
})

let departure = document.querySelector(".departure").textContent
let arrival = document.querySelector(".arrival").textContent
let date = document.querySelector('.date').textContent

document.querySelector("#button").addEventListener('click', function(){
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
    .then(response => response.json)
    .then(data =>document.querySelector("#right-content").innerHTML = data)
})