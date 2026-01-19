document.addEventListener('DOMContentLoaded', (event) => {
   // Detecta se a tela é 4K ou maior
   const is4K = window.innerWidth >= 3840;

   tsParticles.load("particles-container", {
      fpsLimit: 60,
      interactivity: {
         events: {
            onHover: {
               enable: true,
               mode: "repulse",
            },
            onClick: {
               enable: false,
               mode: "push",
            },
            resize: true,
         },
         modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
         },
      },
      particles: {
         color: { value: "#ffffff" },
         links: {
            color: "#a1a1a1",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
         },
         collisions: { enable: true },
         move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
         },
         number: {
            density: { enable: true, area: 800 },
            value: is4K ? 40 : 80, // menos partículas em 4K
         },
         opacity: { value: 0.5 },
         shape: { type: "circle" },
         size: {
            value: is4K ? { min: 1, max: 3 } : { min: 1, max: 5 }, // partículas menores em 4K
         },
      },
      detectRetina: true,
   });
});


//* projects slider

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let projectsBox = document.getElementById("projects-box");
let pageNumbers = document.getElementById("page-numbers");
let slideIndex = 0;

const projects = [
   [
      { title: 'Starbucks', url: "https://thaua23.github.io/THaua23-Starbucks-landing-page/", tags: ['html', 'css', 'js'] },
      { title: 'FP Sellection', url: "https://thaua23.github.io/car/", tags: ['html', 'css', 'js'] },
      { title: 'CRUD register', thumbnail: 'components/thumbnails/crud.png', url: "https://registrodeempresa.great-site.net/", tags: ['php', 'Sql', 'Bootstrap'] },
      { title: 'SCM', url: "https://thaua23.github.io/SCM/", tags: ['html', 'css', 'js'] },
      { title: 'Starbucks', url: "https://thaua23.github.io/starbucks/", tags: ['html', 'css', 'js'] },
      { title: 'Refri', url: "https://thaua23.github.io/refri/", tags: ['html', 'css', 'js'] }
   ],
   [
      { title: 'Mall System', url: "https://thaua23.github.io/Sistema-Mercado/", tags: ['html', 'css', 'js'] },
      { title: 'NewsLatter', url: "https://thaua23.github.io/THaua23-THaua23-Landing-page-Newslatter/", tags: ['html', 'css', 'js'] },
      { title: 'TaskBoard', url: "https://thaua23.github.io/TaskBoard/", tags: ['html', 'css', 'js'] },
      { title: 'calculator', url: "https://thaua23.github.io/calculator/", tags: ['html', 'css', 'js'] },
      { title: 'CommentVue', url: "https://thaua23.github.io/commentVue/", tags: ['html', 'Vue', 'Bootstrap'] },
      { title: 'form', url: "https://thaua23.github.io/form/", tags: ['html', 'css'] }
   ],
   [
      { title: 'voice', url: "https://thaua23.github.io/voice/", tags: ['html', 'css', 'js'] },
      { title: 'ToDoList', url: "https://thaua23.github.io/todolist/", tags: ['html', 'css', 'js'] },
      { title: 'penJS', url: "https://thaua23.github.io/penJS/", tags: ['html', 'css', 'js'] }
   ]
];

function updateProjects() {
   projectsBox.innerHTML = ""

   projects[slideIndex].forEach(project => {
      const link = document.createElement("a")
      link.href = project.url
      link.target = "_blank"
      link.className = "project-link"
      link.setAttribute("translate", "no")

      if (project.thumbnail) link.style.backgroundImage = `url('${project.thumbnail}')`
      else {
         const iframe = document.createElement("iframe")
         iframe.src = project.url
         link.appendChild(iframe)
      }



      const dataBoard = document.createElement("div")
      dataBoard.classList.add("data-board")

      const title = document.createElement("h4")
      title.innerText = project.title
      dataBoard.appendChild(title)

      const tagBox = document.createElement("div")
      tagBox.classList.add("tag-box")
      project.tags.forEach(item => {
         const tag = document.createElement("span")
         tag.innerText = item

         tagBox.appendChild(tag)
      })
      dataBoard.appendChild(tagBox)

      link.appendChild(dataBoard)
      projectsBox.appendChild(link)

      link.addEventListener('mouseover', () => { dataBoard.classList.add('show-data-board') })
      link.addEventListener('mouseout', () => { dataBoard.classList.remove('show-data-board') })
   });

   updatePageButtons();
}

function updatePageButtons() {
   pageNumbers.innerHTML = ""

   projects.forEach((_, index) => {
      const btn = document.createElement("button")
      btn.textContent = index + 1
      btn.className = index === slideIndex ? "active" : ""
      btn.addEventListener("click", () => {
         slideIndex = index
         updateProjects()
      })
      pageNumbers.appendChild(btn)
   })
}

nextBtn.addEventListener("click", () => {
   slideIndex = (slideIndex + 1) % projects.length;
   updateProjects();
})

prevBtn.addEventListener("click", () => {
   slideIndex = (slideIndex - 1 + projects.length) % projects.length
   updateProjects()
})

// Inicializa
updateProjects()

//* contact

let nome = document.getElementById("name");
let email = document.getElementById("email");
let mensagem = document.getElementById("message");
let botao = document.getElementById("send-button");

function formatarMensagem() {
   return `Nome: ${nome.value}%0AEmail: ${email.value}%0AMensagem: ${mensagem.value}`;
}

botao.addEventListener("click", function () {
   let linkEmail = "mailto:thaua23sl@gmail.com?subject=Contato%20pelo%20site&body=" + formatarMensagem();

   const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)

   if (nome.value.trim() !== '' && email.value.trim() !== '' && emailValido) {
      window.location.href = linkEmail;
      [nome, email, mensagem].forEach(campo => campo.value = "")
   } else {
      [nome, email, mensagem].forEach(campo => campo.style.boxShadow = "inset 0px 0px 5px rgb(226, 10, 10)")
      setTimeout(() => {
         [nome, email, mensagem].forEach(campo => campo.style.boxShadow = "")
      }, 1000)
   }
});

//* Skills generator

const skillList = document.getElementById('skill-list')

const skills = [
   //name, background, color
   ['JavaScript', '#f7df1e', '#111111'],
   ['HTML', '#e34c26', '#ffffff'],
   ['CSS', '#9535d4ff', '#300949ff'],
   ['PHP', '#777BB3', '#393d79'],
   ['SQL', '#336791', '#ffffff'],
   ['React.js', '#106aa7', '#61dafb'],
   ['Vue.js', '#42b883', '#35495e'],
   ['Angular.js', '#dd1b16', '#ffffff'],
   ['Node.js', '#68a063', '#ffffff'],
   ['Tailwind', '#38bdf8', '#0f172a'],
   ['Python', '#3776ab', '#ffd43b'],
   ['Git & GitHub', '#e32c26', '#ffffff'],
   ['Gsap', '#0ae448', '#111111'],
   ['Bootstrap', '#9561fb', '#ffffffff']
]

//mostra duas vezes pro efeito de carrosel infinito
for (let i = 1; i <= 2; i++) {
   //mostra as skills na tela
   skills.forEach(skill => {
      skillList.innerHTML += `<li style="--this-bg-color: ${skill[1]}; --this-text-color: ${skill[2]}">${skill[0]}</li>`
   })
}

//* gsap scroll animations

const imgProfile = document.getElementById("img-profile")
const aboutContent = document.getElementById("about-content")

gsap.registerPlugin(ScrollTrigger)

function animate(local, item, x, start, end) {
   gsap.from(item, {
      opacity: 0,
      x: x,
      scrollTrigger: {
         trigger: local,
         start: start,
         end: end,
         scrub: true,
         // markers: true
      }
   })
}
animate("#about-section", imgProfile, -50, "top 60%", "top 30%")
animate("#about-section", aboutContent, 50, "top 40%", "top 10%")