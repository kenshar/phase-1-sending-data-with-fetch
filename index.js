// Add your code here
// Add your code here
function submitData(){
return fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
    },
    body: JSON.stringify({
        name:"Steve",
        email:"steve@steve.com",

    }),
})
.then(resp => resp.json()) 
    .then(data => {
        const p = document.createElement("p")
        p.textContent = data.id
        document.body.appendChild(p);
    })
    .catch(error => {
        const p = document.createElement("p")
        p.textContent = error.message
        document.body.appendChild(p);
    })
};