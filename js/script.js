function openModal(project, gitHubLink = true) {
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const githubLink = document.getElementById("githubLink");
  const onlineLink = document.getElementById("onlineLink");

  if (gitHubLink) {
    githubLink.style.display = "block";
  } else {
    githubLink.style.display = "none";
  }

  const projects = {
    laisa: {
      title: "Studio Laisa Novais Hair Concept",
      description: "Site com informações de contato, promoções e serviços",
      image: "img/projects/laisa.webp",
      github: "#",
      online: "https://laisa-novais-hair-concept.web.app/",
    },
    barbearia: {
      title: "BARBEARIA ALURA",
      description:
        "Site com informações sobre o estabelecimento e formulário de contato",
      image: "img/projects/barbearia.webp",
      github: "https://github.com/wendell95araujo/barbeariaalura.io",
      online: "https://wendell95araujo.github.io/barbeariaalura.io/",
    },
    beatriz: {
      title: "BEATRIZ STORE",
      description: "Loja virtual de roupas femininas",
      image: "img/projects/beatriz.webp",
      github: "https://github.com/wendell95araujo/beatriz-store",
      online: "https://wendell95araujo.github.io/beatriz-store/",
    },
    dino: {
      title: "GAME - DINO DANCER",
      description: "Jogo de plataforma (jump 'n' run)",
      image: "img/projects/dino.webp",
      github: "https://github.com/wendell95araujo/dinogame.io",
      online: "games/dino-dancer-game",
    },
    velha: {
      title: "GAME - JOGO DA VELHA",
      description: "Jogo da velha para dois jogadores",
      image: "img/projects/velha.webp",
      github: "https://github.com/wendell95araujo/jogodavelha.io",
      online: "https://wendell95araujo.github.io/jogodavelha.io/",
    },
    aluraMidi: {
      title: "ALURA MIDI",
      description: "Teclado musical de percussão",
      image: "img/projects/aluraMidi.webp",
      github: "https://github.com/wendell95araujo/aluramidi",
      online: "https://wendell95araujo.github.io/aluramidi/",
    },

    forca: {
      title: "GAME - JOGO DA FORCA",
      description: "Jogo da forca",
      image: "img/projects/forca.webp",
      github: "https://github.com/Wendell95Araujo/jogo-da-forca",
      online: "games/jogo-da-forca",
    },
  };

  const data = projects[project];
  if (data) {
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalImage.src = data.image;
    githubLink.href = data.github;
    onlineLink.href = data.online;

    modal.style.display = "flex";
  }
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

const menuIcon = document.getElementById("menu-icon");
const menuButtons = document.querySelectorAll(".menu a");

menuIcon.addEventListener("click", () => {
  toggleMenu();
});

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleMenu();
  });
});
