function filtrarProjetos() {
    const statusSelecionado = document.getElementById("status").value;
    const projetos = document.querySelectorAll(".card");
    projetos.forEach(p => {
      const status = p.getAttribute("data-status");
      p.style.display = (statusSelecionado === "todos" || status === statusSelecionado) ? "block" : "none";
    });
  }