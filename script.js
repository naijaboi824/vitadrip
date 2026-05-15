const services = [
  {
    id: "hydration-drip",
    category: "IV Therapy",
    name: "Hydration Drip",
    price: 30,
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    description:
      "Delivers fluids, vitamins, and minerals directly into the bloodstream to support rapid absorption, rehydration, energy, skin, and recovery.",
    tags: ["Hydration", "Recovery", "Energy"]
  },
  {
    id: "vitamin-c-multi-vits",
    category: "IV Therapy",
    name: "Vitamin C / Multi Vits",
    price: 30,
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
    description:
      "Essential vitamins including vitamin C, B vitamins, magnesium, and calcium for immune support, energy, nutrient replenishment, and hydration.",
    tags: ["Immune support", "Nutrients", "Hydration"]
  },
  {
    id: "hangover-drip",
    category: "IV Therapy",
    name: "Hangover Drip",
    price: 30,
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1576765607924-749547a0e5a5?auto=format&fit=crop&w=900&q=80",
    description:
      "Fluids, electrolytes, vitamins, magnesium, and nausea support designed to help relieve dehydration, nausea, and headache symptoms.",
    tags: ["Electrolytes", "Relief", "Recovery"]
  },
  {
    id: "detox-shots",
    category: "IV Therapy",
    name: "Detox Shots",
    price: 30,
    duration: "25 min",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    description:
      "A detox support appointment for clients seeking energy, clearer skin, better digestion, circulation, sleep, nutrient absorption, and overall wellbeing.",
    tags: ["Detox", "Wellbeing", "Shots"]
  },
  {
    id: "collagen-shots",
    category: "Glow Drips",
    name: "Collagen Shots",
    price: 30,
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
    description:
      "Pure protein support for skin elasticity, fine lines, joint health, hair and nail strength, and a healthier beauty routine.",
    tags: ["Collagen", "Skin support", "Shots"]
  },
  {
    id: "pure-radiance",
    category: "Glow Drips",
    name: "Pure Radiance",
    price: 50,
    duration: "35 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    description:
      "A brightening skincare formula created to target dullness and dark spots while supporting a smoother, even-toned, luminous appearance.",
    tags: ["Brightening", "Even tone", "Radiance"]
  },
  {
    id: "glow-getter",
    category: "Glow Drips",
    name: "Glow Getter",
    price: 60,
    duration: "40 min",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight brightening formula for daily-use glow goals, created to fade dark marks, even skin tone, and boost natural radiance.",
    tags: ["Glow", "Daily care", "All skin types"]
  },
  {
    id: "glutathione-ultra",
    category: "Glow Drips",
    name: "Glutathione Ultra",
    price: 80,
    duration: "50 min",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    description:
      "Helps refresh dull skin and support a smoother, clearer, naturally lighter-looking complexion with a lightweight, fast-absorbing formula.",
    tags: ["Glutathione", "Complexion", "Brightening"]
  },
  {
    id: "beauty-juice",
    category: "Glow Drips",
    name: "Beauty Juice",
    price: 100,
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80",
    description:
      "A daily glow booster that helps brighten and lighten dull-looking skin for a smoother, more even-toned look from the inside out.",
    tags: ["Glow booster", "Even tone", "Beauty drip"]
  },
  {
    id: "glutathione-supreme",
    category: "Glow Drips",
    name: "Glutathione Supreme",
    price: 110,
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    description:
      "A powerful brightening and lightening formula that helps fade dark marks, even out skin tone, and leave skin looking fresh and radiant.",
    tags: ["Gentle", "Glow boosting", "Brightening"]
  },
  {
    id: "glutathione-maxi-white",
    category: "Glow Drips",
    name: "Glutathione Maxi White",
    price: 120,
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1620917669809-1af0497965de?auto=format&fit=crop&w=900&q=80",
    description:
      "An ultimate glow booster made to visibly brighten the look of skin for a smoother, clearer, more even-toned appearance.",
    tags: ["Maxi glow", "Bright look", "Even tone"]
  },
  {
    id: "white-doll-supplement",
    category: "Supplements",
    name: "White Doll Supplement",
    price: 65,
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium beauty blend supporting a brighter, clearer-looking complexion while keeping skin smooth, hydrated, and youthful.",
    tags: ["Supplement", "Hydration", "Glow care"]
  },
  {
    id: "youth-quake-set",
    category: "Skincare",
    name: "Youth Quake Set",
    price: 70,
    duration: "20 min pickup",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80",
    description:
      "A skincare set for a smoother, clearer, radiant look. Includes body scrub for a full glow routine.",
    tags: ["Set", "Body scrub", "Radiance"]
  },
  {
    id: "lotion-500ml",
    category: "Skincare",
    name: "Lotion 500ml",
    price: 30,
    duration: "15 min pickup",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    description:
      "A soft daily body lotion from the Youth Quake line, ideal for a smooth and hydrated skincare routine.",
    tags: ["Lotion", "500ml", "Daily care"]
  },
  {
    id: "face-cream-50ml",
    category: "Skincare",
    name: "Face Cream 50ml",
    price: 20,
    duration: "15 min pickup",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=80",
    description:
      "Targets dark marks and uneven tone for a soft finish. Lightweight, fast absorbing, and gentle.",
    tags: ["Face cream", "Dark spots", "Gentle"]
  },
  {
    id: "knuckle-set",
    category: "Skincare",
    name: "Knuckle Set",
    price: 50,
    duration: "20 min pickup",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80",
    description:
      "A targeted care set for dark knuckles. Exfoliates, brightens, and smooths with consistent use.",
    tags: ["Knuckle care", "Exfoliating", "Brightening"]
  }
];

const categories = ["All", "IV Therapy", "Glow Drips", "Supplements", "Skincare"];
const fallbackImage = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80";
const dateFormatter = new Intl.DateTimeFormat(undefined, { weekday: "short" });
const dayFormatter = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" });
const businessEmail = "bookings@vitadriplounge.com";
const adminWhatsAppNumber = "263771828667";

let activeCategory = "All";
let searchQuery = "";
let activeStep = 0;
let selectedServiceId = "hydration-drip";
let selectedDate = "";
let selectedTime = "";

const categoryTabs = document.querySelector("#categoryTabs");
const serviceList = document.querySelector("#serviceList");
const serviceSearch = document.querySelector("#serviceSearch");
const selectedService = document.querySelector("#selectedService");
const dateGrid = document.querySelector("#dateGrid");
const timeGrid = document.querySelector("#timeGrid");
const bookingForm = document.querySelector("#bookingForm");
const bookingSuccess = document.querySelector("#bookingSuccess");
const successSummary = document.querySelector("#successSummary");
const bookingSummary = document.querySelector("#bookingSummary");
const whatsappBookingLink = document.querySelector("#whatsappBookingLink");
const emailBookingLink = document.querySelector("#emailBookingLink");
const nextStep = document.querySelector("#nextStep");
const backStep = document.querySelector("#backStep");
const formMessage = document.querySelector("#formMessage");
const newBooking = document.querySelector("#newBooking");

function money(value) {
  return `$${value.toFixed(2)}`;
}

function getService(id = selectedServiceId) {
  return services.find((service) => service.id === id) || services[0];
}

function renderCategories() {
  categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="tab ${category === activeCategory ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${category === activeCategory}"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");
}

function renderServices() {
  const query = searchQuery.trim().toLowerCase();
  const visibleServices = services.filter((service) => {
    const categoryMatch = activeCategory === "All" || service.category === activeCategory;
    const queryMatch = [service.name, service.category, service.description, ...service.tags]
      .join(" ")
      .toLowerCase()
      .includes(query);

    return categoryMatch && queryMatch;
  });

  if (!visibleServices.length) {
    serviceList.innerHTML = `<div class="empty-state">No services match that search.</div>`;
    return;
  }

  serviceList.innerHTML = visibleServices
    .map(
      (service) => `
        <article class="service-card" id="${service.id}">
          <div class="service-image">
            <img src="${service.image}" alt="${service.name}" loading="lazy">
          </div>
          <div class="service-body">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-tags" aria-label="${service.name} tags">
              ${service.tags.map((tag) => `<span class="service-tag">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="service-side">
            <div>
              <span class="service-price">${money(service.price)}</span>
              <span class="service-duration">${service.duration}</span>
            </div>
            <button class="button button-primary select-service" type="button" data-service-id="${service.id}">
              Select
            </button>
          </div>
        </article>
      `
    )
    .join("");

  serviceList.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = fallbackImage;
    });
  });
}

function renderSelectedService() {
  const service = getService();

  selectedService.innerHTML = `
    <strong>${service.name}</strong>
    <span>${service.category}</span>
    <p>${service.description}</p>
    <div class="selected-meta">
      <span>${money(service.price)}</span>
      <span>${service.duration}</span>
    </div>
  `;
}

function generateDates() {
  const dates = [];
  const today = new Date();

  for (let offset = 0; dates.length < 9 && offset < 18; offset += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);

    if (date.getDay() !== 0) {
      dates.push(date);
    }
  }

  return dates;
}

function dateId(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function renderDates() {
  const dates = generateDates();

  if (!selectedDate) {
    selectedDate = dateId(dates[0]);
  }

  dateGrid.innerHTML = dates
    .map((date) => {
      const id = dateId(date);

      return `
        <button
          class="option-chip ${id === selectedDate ? "is-selected" : ""}"
          type="button"
          data-date="${id}"
          aria-pressed="${id === selectedDate}"
        >
          ${dateFormatter.format(date)}
          <small>${dayFormatter.format(date)}</small>
        </button>
      `;
    })
    .join("");
}

function getTimeSlots() {
  const service = getService();

  if (service.category === "Skincare" || service.category === "Supplements") {
    return ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  }

  if (service.price >= 100) {
    return ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM"];
  }

  return ["9:00 AM", "10:15 AM", "11:30 AM", "1:00 PM", "2:15 PM", "3:30 PM", "4:45 PM"];
}

function renderTimes() {
  const slots = getTimeSlots();

  if (!selectedTime || !slots.includes(selectedTime)) {
    selectedTime = slots[0];
  }

  timeGrid.innerHTML = slots
    .map(
      (slot) => `
        <button
          class="option-chip ${slot === selectedTime ? "is-selected" : ""}"
          type="button"
          data-time="${slot}"
          aria-pressed="${slot === selectedTime}"
        >
          ${slot}
        </button>
      `
    )
    .join("");
}

function syncStep() {
  const stages = document.querySelectorAll(".booking-stage");
  const steps = document.querySelectorAll(".step");

  stages.forEach((stage) => {
    stage.classList.toggle("is-active", Number(stage.dataset.stage) === activeStep);
  });

  steps.forEach((step) => {
    step.classList.toggle("is-active", Number(step.dataset.step) === activeStep);
  });

  backStep.disabled = activeStep === 0;
  nextStep.textContent = activeStep === 2 ? "Request appointment" : "Continue";
  formMessage.textContent = "";
}

function canAdvance() {
  if (activeStep === 0) {
    return Boolean(selectedServiceId);
  }

  if (activeStep === 1) {
    return Boolean(selectedDate && selectedTime);
  }

  return true;
}

function showMessage(message) {
  formMessage.textContent = message;
}

function getBookingLines(data) {
  return [
    "New Vita-Drip Lounge booking request",
    "",
    `Service: ${data.service.name}`,
    `Price: ${money(data.service.price)}`,
    `Duration: ${data.service.duration}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Notes: ${data.notes || "None"}`
  ];
}

function buildEmailHref(data) {
  const body = getBookingLines(data).join("\n");

  const subject = encodeURIComponent(`Appointment request: ${data.service.name}`);

  return `mailto:${businessEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

function buildWhatsAppHref(data) {
  const message = getBookingLines(data).join("\n");

  return `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}

function renderBookingSummary(data) {
  const rows = [
    ["Service", data.service.name],
    ["Slot", `${data.date} at ${data.time}`],
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Notes", data.notes || "None"]
  ];

  const fragment = document.createDocumentFragment();

  rows.forEach(([label, value]) => {
    const term = document.createElement("dt");
    const detail = document.createElement("dd");

    term.textContent = label;
    detail.textContent = value;

    fragment.append(term, detail);
  });

  bookingSummary.replaceChildren(fragment);
}

function submitBooking() {
  if (!bookingForm.reportValidity()) {
    showMessage("Please complete the required fields.");
    return;
  }

  const data = {
    service: getService(),
    date: selectedDate,
    time: selectedTime,
    name: document.querySelector("#clientName").value.trim(),
    phone: document.querySelector("#clientPhone").value.trim(),
    email: document.querySelector("#clientEmail").value.trim(),
    notes: document.querySelector("#bookingNotes").value.trim()
  };

  const bookingRecord = {
    serviceId: data.service.id,
    date: data.date,
    time: data.time,
    name: data.name,
    phone: data.phone,
    email: data.email,
    notes: data.notes,
    adminWhatsAppNumber,
    requestedAt: new Date().toISOString()
  };

  localStorage.setItem("vitaDripLastBooking", JSON.stringify(bookingRecord));

  successSummary.textContent = `${data.name}, your ${data.service.name} request is ready for ${data.date} at ${data.time}. Send it to admin on WhatsApp so the lounge can confirm availability.`;
  renderBookingSummary(data);
  whatsappBookingLink.href = buildWhatsAppHref(data);
  emailBookingLink.href = buildEmailHref(data);
  bookingForm.hidden = true;
  bookingSuccess.hidden = false;
}

function resetBooking() {
  bookingForm.reset();
  bookingForm.hidden = false;
  bookingSuccess.hidden = true;
  bookingSummary.replaceChildren();
  activeStep = 0;
  selectedDate = "";
  selectedTime = "";
  renderDates();
  renderTimes();
  syncStep();
}

function selectService(serviceId) {
  selectedServiceId = serviceId;
  selectedTime = "";
  renderSelectedService();
  renderTimes();
  activeStep = 1;
  syncStep();
  document.querySelector("#booking").scrollIntoView({ behavior: "smooth", block: "center" });
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategories();
  renderServices();
});

serviceList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-service-id]");
  if (!button) return;

  selectService(button.dataset.serviceId);
});

serviceSearch.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderServices();
});

dateGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-date]");
  if (!button) return;

  selectedDate = button.dataset.date;
  renderDates();
});

timeGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-time]");
  if (!button) return;

  selectedTime = button.dataset.time;
  renderTimes();
});

document.querySelectorAll(".step").forEach((step) => {
  step.addEventListener("click", () => {
    const requestedStep = Number(step.dataset.step);

    if (requestedStep > activeStep && !canAdvance()) {
      showMessage("Please complete this step first.");
      return;
    }

    activeStep = requestedStep;
    syncStep();
  });
});

backStep.addEventListener("click", () => {
  activeStep = Math.max(0, activeStep - 1);
  syncStep();
});

nextStep.addEventListener("click", () => {
  if (!canAdvance()) {
    showMessage("Please complete this step first.");
    return;
  }

  if (activeStep < 2) {
    activeStep += 1;
    syncStep();
    return;
  }

  submitBooking();
});

newBooking.addEventListener("click", resetBooking);

renderCategories();
renderServices();
renderSelectedService();
renderDates();
renderTimes();
syncStep();
