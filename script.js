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
            "https://script.google.com/u/2/home/projects/1jOP1QmnxpBEWWodTb-0ZEYdyWwid8lhMyrCT6mpcoilsO1ck9yziYZBa/edit",
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