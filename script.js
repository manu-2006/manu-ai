// ==========================
// PREMIUM PORTFOLIO SCRIPT
// ==========================


// ==========================
// TYPING EFFECT
// ==========================

const roles = [
  "Cybersecurity Enthusiast",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const typingElement = document.querySelector(".typing");

  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typingElement.textContent = currentRole.substring(0, charIndex);

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {
    charIndex--;
    typingElement.textContent = currentRole.substring(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();



// ==========================
// SMOOTH SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 200;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});



// ==========================
// GITHUB PROJECTS
// ==========================

const projectsContainer = document.getElementById("projects-container");

async function loadProjects() {

  if (!projectsContainer) return;

  projectsContainer.innerHTML = `
    <div class="loading-projects">
      Loading Projects...
    </div>
  `;

  try {

    const response = await fetch(
      "https://api.github.com/users/manu-2006/repos?sort=updated"
    );

    const data = await response.json();

    projectsContainer.innerHTML = "";

    const filteredRepos = data
      .filter(repo => !repo.fork)
      .slice(0, 6);

    filteredRepos.forEach(repo => {

      const card = document.createElement("div");

      card.className = "project-card reveal";

      card.innerHTML = `

        <div class="project-top">

          <div class="project-icon">
            <i class="fas fa-shield-alt"></i>
          </div>

          <div class="project-links">

            <a href="${repo.html_url}" target="_blank">
              <i class="fab fa-github"></i>
            </a>

            ${repo.homepage ? `
            <a href="${repo.homepage}" target="_blank">
              <i class="fas fa-external-link-alt"></i>
            </a>` : ""}

          </div>

        </div>

        <h3>${repo.name}</h3>

        <p>
          ${repo.description || "Advanced AI and cybersecurity related project."}
        </p>

        <div class="project-stats">

          <span>
            ⭐ ${repo.stargazers_count}
          </span>

          <span>
            🍴 ${repo.forks_count}
          </span>

        </div>

      `;

      projectsContainer.appendChild(card);

    });

  } catch (error) {

    projectsContainer.innerHTML = `
      <div class="error-projects">
        Failed to load GitHub projects.
      </div>
    `;

    console.error(error);

  }

}

loadProjects();



// ==========================
// PARTICLE MOUSE GLOW
// ==========================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});



// ==========================
// PARALLAX EFFECT
// ==========================

window.addEventListener("scroll", () => {

  const scrolled = window.pageYOffset;

  document.querySelectorAll(".parallax").forEach(layer => {

    const speed = layer.dataset.speed || 0.3;

    layer.style.transform = `
      translateY(${scrolled * speed}px)
    `;

  });

});



// ==========================
// CONTACT FORM
// ==========================

emailjs.init("dA8wxfUZxcpBV3vRB");

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const submitBtn =
            contactForm.querySelector("button");

            submitBtn.innerText =
            "Sending...";

            emailjs.sendForm(

                "service_vvvasik",
                "template_fndq8bt",

                this

            )

            .then(function(){

                alert(
                    "Message Sent Successfully!"
                );

                submitBtn.innerText =
                "Message Sent ✓";

                contactForm.reset();

                setTimeout(()=>{

                    submitBtn.innerText =
                    "Send Message";

                },3000);

            })

            .catch(function(error){

                console.log(error);

                alert(
                    "Failed to send message."
                );

                submitBtn.innerText =
                "Send Message";

            });

        }
    );

}



// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});



// ==========================
// SMOOTH SECTION SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});



// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  if (loader) {

    loader.classList.add("loader-hidden");

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);

  }

});



// CONSOLE MESSAGE
// ==========================

console.log(`
========================================
 MANU AI PORTFOLIO
 AI + CYBERSECURITY ENGINEER
========================================
`);