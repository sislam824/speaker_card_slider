let profile = document.querySelector(".modal");
let slider_container = document.querySelector(".slider-container");

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,

        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});

const speakersData = [
  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./assets/Ellipse2.png",
  },
  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    company: "Acquia",
    image: "./assets/Ellipse1.png",
  },
  {
    name: "John Doe",
    role: "Chief Technical Developer",
    company: "Pantheon",
    image: "./assets/Ellipse4.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse3.png",
  },
  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./assets/Ellipse2.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse1.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse4.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse3.png",
  },
  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./assets/Ellipse2.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse1.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse4.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse3.png",
  },
  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./assets/Ellipse2.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse1.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse4.png",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Solutions",
    image: "./assets/Ellipse3.png",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");

  speakersData.forEach((speaker) => {
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker-card");
    speakerCard.addEventListener("click", () => {
      openProfile();
    });
    speakerCard.classList.add("speaker-card2");
    speakerCard.dataset.name = speaker.name;
    speakerCard.dataset.role = speaker.role;
    speakerCard.dataset.company = speaker.company;

    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}, ${speaker.role} at ${speaker.company}" class="speaker-card__image" />
      <h3 class="speaker-card__name">${speaker.name}</h3>
      <div class="role_div">
      <p class="speaker-card__role">${speaker.role}</p>
      <p class="speaker-card__company">${speaker.company}</p>
       </div>
    `;

    slider.appendChild(speakerCard);
  });
});

function hide() {
  let cross = document.querySelector(".cross");
  let profile = document.querySelector(".modal");
  cross.addEventListener("click", () => {
    profile.classList.remove("open");
    slider_container.classList.add("close");
  });
}
hide();

function openProfile() {
  profile.classList.add("open");
  modal.classList.add("show");
}

const profileModal = document.querySelector(".modal");
const modalName = document.querySelector(".speaker-card__name");
const modalRole = document.querySelector(".speaker-card__role");
const modalCompany = document.querySelector(".speaker-card__company");
const modalImage = document.querySelector(".speaker-card__image2");
const closeBtn = document.querySelector(".cross");

document.addEventListener("DOMContentLoaded", () => {
  const speakerCards = document.querySelectorAll(".speaker-card");

  speakerCards.forEach((card) => {
    card.addEventListener("click", () => {
      modalName.textContent = card.dataset.name;
      modalRole.textContent = card.dataset.role;
      modalCompany.textContent = card.dataset.company;
      modalImage.src = card.querySelector(".speaker-card__image").src;

      openProfile();
    });
  });
});
