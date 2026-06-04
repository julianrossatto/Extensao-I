const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async function(event){

    event.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,

        profissao: document.querySelector(
            'input[name="profissao"]:checked'
        ).value,

        avaliacao: document.querySelector(
            'input[name="avaliacao"]:checked'
        ).value,

        comentario: document.getElementById("comentario").value
    };

    try {

        await fetch(
            "https://script.google.com/a/macros/edu.unipar.br/s/AKfycbz042MYDbXYwFgZEF0ZU9KkoeeQ9Wlx1k4Vge5TOyE4VgWJ6Emvo_MVnU44IN-IsJGZNA/exec",
            {
                method: "POST",
                body: JSON.stringify(dados)
            }
        );

        alert("Resposta enviada com sucesso!");

        formulario.reset();

    } catch (erro) {

        alert("Erro ao enviar. Tente novamente.");

    }

})