const listaMail = document.getElementById('email')

for (let i = 0; i < 10; i++) {
    const risultato = document.getElementById('risultato')


fetch('https://flynn.boolean.careers/exercises/api/random/mail',{method: "GET"})
    .then(response => response.json())
    .then(data => { 
        console.log(data.response);
        listaMail.innerHTML += `<li>${data.response}</li>`

    })

    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })
    
}