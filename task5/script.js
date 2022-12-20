let a = document.querySelector('.vvod')
a.addEventListener('keyup', function(event) {
  let p = document.querySelector('#duplicateField')
  p.textContent = event.target.value
})
document.querySelector('button').addEventListener("click", event => {
    console.log(a.value);
    event.preventDefault()
    document.querySelector("input").value = "";
    document.querySelector("#duplicateField").innerHTML = "";
    
})          