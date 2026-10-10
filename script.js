const formulario = document.getElementById("formulario-extensao");

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    const profissaoSelecionada = document.querySelector(
        'input[name="profissao"]:checked'
    );
    const avaliacaoSelecionada = document.querySelector(
        'input[name="avaliacao"]:checked'
    );

    if (!profissaoSelecionada || !avaliacaoSelecionada) {
        alert("Selecione uma opção de profissão e uma avaliação antes de enviar.");
        return;
    }

    const dados = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        profissao: profissaoSelecionada.value,
        avaliacao: avaliacaoSelecionada.value,
        comentario: document.getElementById("comentario").value
    };

    try {
        const resposta = await fetch(
            "https://script.google.com/macros/s/AKfycbydJEIDeTm9O1ChvYPdhZfkwshMhO6LlaRvmtwOcYWYuxS-Wja-A0s1f7YnJ93pn-9u0w/exec",
            {
                method: "POST",
                body: JSON.stringify(dados)
            }
        );

        if (!resposta.ok) {
            throw new Error(`Falha HTTP ao enviar formulário: ${resposta.status}`);
        }

        alert("Resposta enviada com sucesso!");
        formulario.reset();
    } catch (erro) {
        console.error("Erro ao enviar formulário:", erro);
        alert("Erro ao enviar. Tente novamente.");
    }
});
