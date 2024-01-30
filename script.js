document.querySelector("#cart").addEventListener('click', function(){
    window.location.href = 'index2.html'
})

document.querySelector("#booking").addEventListener('click', function(){
    window.location.href = 'index3.html'
})

document.querySelector("#button").addEventListener('click', function(){
    fetch('http://localhost:3000/trips')
    .then(response => response.json)
    .then(data =>document.querySelector("#right-content").innerHTML = data)
})