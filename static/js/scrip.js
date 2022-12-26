let professoresFormulario = document.getElementsByClassName("professor-formulario")

for (let professor of professoresFormulario){
    professor.addEventListener("submit", function(event){
        event.preventDefault()
        
        let preco = professor.preco.value
        let horas = professor.hora.value

        let total = preco * horas
        alert(`O valor total do contrato è R$ ${total}`)
    })
}