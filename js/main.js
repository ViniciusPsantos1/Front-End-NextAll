function toggleSearchBar() {
  const searchBar = document.getElementById('searchBar');
  if (searchBar.style.display === 'block') {
      searchBar.style.display = 'none'; // Oculta a barra de pesquisa
  } else {
      searchBar.style.display = 'block'; // Exibe a barra de pesquisa
  }
}

function toggleUserMenu() {
  const userMenu = document.getElementById('userMenu');
  if (userMenu.style.display === 'block') {
      userMenu.style.display = 'none'; // Oculta o menu do usuário
  } else {
      userMenu.style.display = 'block'; // Exibe o menu do usuário
  }
}