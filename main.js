// ATIVAR MENU

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-ativo a");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove a classe 'active' de todos os links
      menuItems.forEach((link) => link.classList.remove("active"));
      // Adiciona a classe 'active' ao link clicado
      item.classList.add("active");
    });
  });
});

// MENU HAMBURGER

const button = document.getElementById("btn-mobile");

const buttonPressed = (e) => {
  e.target.classList.toggle("is-active");

  if (e.target.classList.contains("is-active")) {
    const menuCategorias = document.getElementById("menu-spande");
    menuCategorias.classList.remove("hidden");
  } else {
    const menuCategorias = document.getElementById("menu-spande");
    menuCategorias.classList.add("hidden");
  }
};

button.addEventListener("click", buttonPressed);
