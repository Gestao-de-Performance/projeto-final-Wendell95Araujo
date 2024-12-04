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
      image: "img/projects/laisa.gif",
      github: "#",
      online: "https://laisa-novais-hair-concept.web.app/",
    },
    barbearia: {
      title: "BARBEARIA ALURA",
      description:
        "Site com informações sobre o estabelecimento e formulário de contato",
      image: "img/projects/barbearia.gif",
      github: "https://github.com/wendell95araujo/barbeariaalura.io",
      online: "https://wendell95araujo.github.io/barbeariaalura.io/",
    },
    beatriz: {
      title: "BEATRIZ STORE",
      description: "Loja virtual de roupas femininas",
      image: "img/projects/beatriz.gif",
      github: "https://github.com/wendell95araujo/beatriz-store",
      online: "https://wendell95araujo.github.io/beatriz-store/",
    },
    dino: {
      title: "GAME - DINO DANCER",
      description: "Jogo de plataforma (jump 'n' run)",
      image: "img/projects/dino.gif",
      github: "https://github.com/wendell95araujo/dinogame.io",
      online: "https://wendell95araujo.github.io/dinogame.io/",
    },
    velha: {
      title: "GAME - JOGO DA VELHA",
      description: "Jogo da velha para dois jogadores",
      image: "img/projects/velha.gif",
      github: "https://github.com/wendell95araujo/jogodavelha.io",
      online: "https://wendell95araujo.github.io/jogodavelha.io/",
    },
    aluraMidi: {
      title: "ALURA MIDI",
      description: "Teclado musical de percussão",
      image: "img/projects/aluraMidi.gif",
      github: "https://github.com/wendell95araujo/aluramidi",
      online: "https://wendell95araujo.github.io/aluramidi/",
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
