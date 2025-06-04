function buscarFreelancers() {
    const termo = document.getElementById("busca").value.toLowerCase();
    const cards = document.querySelectorAll(".freelancer-card");
    cards.forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(termo) ? "block" : "none";
    });
  }