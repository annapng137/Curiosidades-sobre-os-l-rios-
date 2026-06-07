const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botaoTema.innerHTML = "☀️ Modo claro";
    } else {
        botaoTema.innerHTML = "🌙 Modo escuro";
    }
});



// BOTÃO VER MAIS
const botaoVerMais = document.getElementById("botaoVerMais");
const conteudoExtra = document.getElementById("conteudoExtra");

botaoVerMais.addEventListener("click", function () {
  conteudoExtra.classList.toggle("mostrar");

  if (conteudoExtra.classList.contains("mostrar")) {
    botaoVerMais.textContent = "Ver menos";
  } else {
    botaoVerMais.textContent = "Ver mais";
  }
});