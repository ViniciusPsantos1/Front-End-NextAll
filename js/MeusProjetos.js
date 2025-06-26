function filtrarProjetos() {
  const statusSelecionado = document.getElementById("status").value;
  const projetos = document.querySelectorAll(".card");

  projetos.forEach((projeto) => {
      const statusProjeto = projeto.getAttribute("data-status");

      if (statusSelecionado === "todos" || statusProjeto === statusSelecionado) {
          projeto.style.display = "block"; // Mostra o projeto
      } else {
          projeto.style.display = "none"; // Oculta o projeto
      }
  });
}