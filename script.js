document.addEventListener('DOMContentLoaded', (event) => {
    tsParticles.load("particles-container", {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Partículas fogem do mouse
                },
                onClick: {
                    enable: false,
                    mode: "push", // Adiciona partículas ao clicar
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            // Cor das partículas (combinando com seu --primary-text-color)
            color: {
                value: "#ffffff",
            },
            // Linhas que conectam as partículas (combinando com seu --secondary-text-color)
            links: {
                color: "#a1a1a1",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1, // Velocidade
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80, // Quantidade de partículas
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    });
});

//projects slider

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let projectsBox = document.getElementById("projects-box");
let pageNumbers = document.getElementById("page-numbers");
let slideIndex = 0;

const projects = [
    [
        "https://thaua23.github.io/THaua23-Starbucks-landing-page/",
        "https://thaua23.github.io/car/",
        "https://thaua23.github.io/THaua23-THaua23-Landing-page-Newslatter/",
        "https://thaua23.github.io/starbucks/",
        "https://thaua23.github.io/SCM/",
        "https://thaua23.github.io/refri/"
    ],
    [
        "https://thaua23.github.io/Sistema-Mercado/",
        "https://thaua23.github.io/todolist/",
        "https://thaua23.github.io/calculator/",
        "https://thaua23.github.io/jump/",
        "https://thaua23.github.io/form/"
    ]
];

function updateProjects() {
    projectsBox.innerHTML = "";

    projects[slideIndex].forEach(url => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.className = "project-link";

        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.frameBorder = "0";

        link.appendChild(iframe);
        projectsBox.appendChild(link);
    });

    updatePageButtons();
}

function updatePageButtons() {
    pageNumbers.innerHTML = "";

    projects.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.textContent = index + 1;
        btn.className = index === slideIndex ? "active" : "";
        btn.addEventListener("click", () => {
            slideIndex = index;
            updateProjects();
        });
        pageNumbers.appendChild(btn);
    });
}

nextBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % projects.length;
    updateProjects();
});

prevBtn.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + projects.length) % projects.length;
    updateProjects();
});

// Inicializa
updateProjects();


//* contato

let nome = document.getElementById("name");
let email = document.getElementById("email");
let mensagem = document.getElementById("message");
let botao = document.getElementById("send-button");

function formatarMensagem() {
  return `Nome: ${nome.value}%0AEmail: ${email.value}%0AMensagem: ${mensagem.value}`;
}

botao.addEventListener("click", function () {
  let linkEmail = "mailto:thaua23sl@gmail.com?subject=Contato%20pelo%20site&body=" + formatarMensagem();
  window.location.href = linkEmail;

  nome.value = "";
  email.value = "";
  mensagem.value = "";
});

//Scroll animations
const animaItens = document.querySelectorAll('[data-anima]')

function animaScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
  
  animaItens.forEach((item) => {
    if (windowTop > item.offsetTop) {
      item.classList.add('animar')
    } else {
      item.classList.remove('animar')
    }
  })
}

window.addEventListener("scroll", animaScroll)

