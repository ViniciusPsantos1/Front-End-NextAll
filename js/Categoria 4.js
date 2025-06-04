document.getElementById("formProjeto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Projeto publicado com sucesso!");
    this.reset();
  });