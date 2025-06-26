function buscarFreelancers() {
  const termoBusca = document.getElementById("busca").value.toLowerCase();
  const freelancers = document.querySelectorAll(".freelancer-card");

  freelancers.forEach((freelancer) => {
      const nome = freelancer.querySelector(".nome").textContent.toLowerCase();
      const habilidades = freelancer.querySelector(".habilidades").textContent.toLowerCase();

      if (nome.includes(termoBusca) || habilidades.includes(termoBusca)) {
          freelancer.style.display = "block"; // Mostra o freelancer
      } else {
          freelancer.style.display = "none"; // Oculta o freelancer
      }
  });
}