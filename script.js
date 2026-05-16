function pexelsImage(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop`;
}

const services = [
  {
    id: "hydration-drip",
    category: "IV Therapy",
    name: "Hydration Drip",
    price: 30,
    duration: "45 min",
    image: pexelsImage(23532633),
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
    image: pexelsImage(4663898),
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
    image: pexelsImage(11091976),
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
    image: pexelsImage(10048151),
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
    image: pexelsImage(6475101),
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
    image: pexelsImage(34939756),
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
    image: pexelsImage(35101526),
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
    image: pexelsImage(5240657),
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
    image: pexelsImage(8181550),
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
    image: pexelsImage(16675161),
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
    image: pexelsImage(11081177),
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
    image: pexelsImage(7883496),
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
    image: pexelsImage(9126914),
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
    image: pexelsImage(18996279),
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
    image: pexelsImage(6690857),
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
    image: pexelsImage(3762875),
    description:
      "A targeted care set for dark knuckles. Exfoliates, brightens, and smooths with consistent use.",
    tags: ["Knuckle care", "Exfoliating", "Brightening"]
  }
];

const categories = ["All", "IV Therapy", "Glow Drips", "Supplements", "Skincare"];
const fallbackImage = pexelsImage(34939756);
const monthFormatter = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" });
const weekdayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "short" });
const shortDayFormatter = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" });
const businessEmail = "bookings@vitadriplounge.com";
const adminWhatsAppNumber = "263771828667";

let activeCategory = "All";
let searchQuery = "";
let activeStep = 0;
let selectedServiceId = "hydration-drip";
let selectedDate = "";
let selectedTime = "";
let availableDateIds = [];
let viewMonth = startOfMonth(new Date());

const categoryTabs = document.querySelector("#categoryTabs");
const serviceList = document.querySelector("#serviceList");
const serviceSearch = document.querySelector("#serviceSearch");
const selectedService = document.querySelector("#selectedService");
const monthLabel = document.querySelector("#monthLabel");
const prevMonth = document.querySelector("#prevMonth");
const nextMonth = document.querySelector("#nextMonth");
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
const bookingFeePanel = document.querySelector("#bookingFeePanel");
const ecocashButton = document.querySelector("#ecocashButton");
const bookingFeePaid = document.querySelector("#bookingFeePaid");
const transactionIdLabel = document.querySelector("#transactionIdLabel");
const transactionIdInput = document.querySelector("#transactionId");
const confirmationModal = document.querySelector("#confirmationModal");
const confirmationOkButton = document.querySelector("#confirmationOkButton");
const hasCalendarChrome = Boolean(monthLabel && prevMonth && nextMonth);

function money(value) {
  return `$${value.toFixed(2)}`;
}

function getService(id) {
  const targetId = id || selectedServiceId;

  for (let index = 0; index < services.length; index += 1) {
    if (services[index].id === targetId) {
      return services[index];
    }
  }

  return services[0];
}

function forEachNode(nodeList, callback) {
  Array.prototype.forEach.call(nodeList, callback);
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function hasCompletedClientDetails() {
  const name = document.querySelector("#clientName").value.trim();
  const phone = document.querySelector("#clientPhone").value.trim();
  const email = document.querySelector("#clientEmail").value.trim();
  const consentGiven = document.querySelector("#bookingConsent").checked;

  return Boolean(name && phone && email && consentGiven);
}

function syncBookingFeePanel() {
  if (!bookingFeePanel) return;

  bookingFeePanel.hidden = !hasCompletedClientDetails();
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

  forEachNode(serviceList.querySelectorAll("img"), (image) => {
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

function dateId(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function dateFromId(id) {
  const [year, month, day] = id.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function shiftMonth(date, delta) {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

function generateAvailableDates() {
  const dates = [];
  const today = new Date();
  const totalDays = 60;

  for (let offset = 0; offset < totalDays; offset += 1) {
    const date = new Date(today);
    date.setHours(0, 0, 0, 0);
    date.setDate(today.getDate() + offset);

    if (date.getDay() !== 0) {
      dates.push(date);
    }
  }

  return dates;
}

function syncAvailableDates() {
  const dates = generateAvailableDates();
  availableDateIds = dates.map((date) => dateId(date));

  if (!selectedDate || !availableDateIds.includes(selectedDate)) {
    selectedDate = availableDateIds[0] || "";
  }

  if (selectedDate) {
    viewMonth = startOfMonth(dateFromId(selectedDate));
  }
}

function renderDates() {
  if (!hasCalendarChrome) {
    renderDateChips();
    return;
  }

  const currentMonth = viewMonth.getMonth();
  const currentYear = viewMonth.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const cells = [];

  monthLabel.textContent = monthFormatter.format(viewMonth);

  for (let index = 0; index < firstDay; index += 1) {
    cells.push('<span class="calendar-pad" aria-hidden="true"></span>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(currentYear, currentMonth, day);
    const id = dateId(date);
    const isAvailable = availableDateIds.indexOf(id) !== -1;
    const isSelected = id === selectedDate;

    cells.push(`
      <button
        class="calendar-date ${isAvailable ? "" : "is-unavailable"} ${isSelected ? "is-selected" : ""}"
        type="button"
        data-date="${isAvailable ? id : ""}"
        aria-pressed="${isSelected}"
        ${isAvailable ? "" : "disabled"}
      >
        ${day}
      </button>
    `);
  }

  dateGrid.innerHTML = cells.join("");
}

function renderDateChips() {
  const dates = generateAvailableDates().slice(0, 9);

  dateGrid.innerHTML = dates
    .map((date) => {
      const id = dateId(date);
      const isSelected = id === selectedDate;

      return `
        <button
          class="option-chip ${isSelected ? "is-selected" : ""}"
          type="button"
          data-date="${id}"
          aria-pressed="${isSelected}"
        >
          ${weekdayFormatter.format(date)}
          <small>${shortDayFormatter.format(date)}</small>
        </button>
      `;
    })
    .join("");
}

function updateMonthNavigation() {
  if (!hasCalendarChrome) {
    return;
  }

  const availableMonths = availableDateIds.map((id) => {
    const date = dateFromId(id);
    return date.getFullYear() * 12 + date.getMonth();
  });

  if (!availableMonths.length) {
    prevMonth.disabled = true;
    nextMonth.disabled = true;
    return;
  }

  const minMonth = Math.min(...availableMonths);
  const maxMonth = Math.max(...availableMonths);
  const currentMonth = viewMonth.getFullYear() * 12 + viewMonth.getMonth();

  prevMonth.disabled = currentMonth <= minMonth;
  nextMonth.disabled = currentMonth >= maxMonth;
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

  if (activeStep === 2) {
    return hasCompletedClientDetails() && bookingFeePaid && bookingFeePaid.checked;
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
    `Notes: ${data.notes || "None"}`,
    `EcoCash Transaction ID: ${data.transactionId || "Not provided"}`,
    "Booking fee: $10.00 paid via EcoCash to Guidance Granger (non-refundable; deducted from service amount)"
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
    ["Booking fee", "$10.00 paid via EcoCash (Guidance Granger)"],
    ["EcoCash Transaction ID", data.transactionId || "Not provided"],
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

  clearElement(bookingSummary);
  bookingSummary.appendChild(fragment);
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
    notes: document.querySelector("#bookingNotes").value.trim(),
    transactionId: transactionIdInput.value.trim()
  };

  const bookingRecord = {
    serviceId: data.service.id,
    date: data.date,
    time: data.time,
    name: data.name,
    phone: data.phone,
    email: data.email,
    notes: data.notes,
    transactionId: data.transactionId,
    adminWhatsAppNumber,
    requestedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem("vitaDripLastBooking", JSON.stringify(bookingRecord));
  } catch (error) {
    // Ignore storage failures in restricted mobile browsers.
  }

  successSummary.textContent = `${data.name}, your ${data.service.name} request is ready for ${data.date} at ${data.time}. Your $10.00 EcoCash booking fee is non-refundable and will be deducted from your service amount.`;
  renderBookingSummary(data);
  whatsappBookingLink.href = buildWhatsAppHref(data);
  emailBookingLink.href = buildEmailHref(data);
  bookingForm.hidden = true;
  bookingSuccess.hidden = false;
  
  // Show confirmation modal
  setTimeout(() => {
    confirmationModal.hidden = false;
  }, 500);
}

function resetBooking() {
  bookingForm.reset();
  bookingForm.hidden = false;
  bookingSuccess.hidden = true;
  confirmationModal.hidden = true;
  transactionIdInput.value = "";
  transactionIdLabel.hidden = true;
  clearElement(bookingSummary);
  activeStep = 0;
  selectedDate = "";
  selectedTime = "";
  syncBookingFeePanel();
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

forEachNode(
  bookingForm.querySelectorAll("#clientName, #clientPhone, #clientEmail, #bookingConsent"),
  (field) => {
    field.addEventListener("input", syncBookingFeePanel);
    field.addEventListener("change", syncBookingFeePanel);
  }
);

if (ecocashButton) {
  ecocashButton.addEventListener("click", () => {
    window.location.href = "tel:*153*1*1*0777882429*10%23";
  });
}

dateGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-date]");
  if (!button) return;
  if (!button.dataset.date) return;

  selectedDate = button.dataset.date;
  viewMonth = startOfMonth(dateFromId(selectedDate));
  renderDates();
  updateMonthNavigation();
});

if (hasCalendarChrome) {
  prevMonth.addEventListener("click", () => {
    if (prevMonth.disabled) return;

    viewMonth = shiftMonth(viewMonth, -1);
    renderDates();
    updateMonthNavigation();
  });

  nextMonth.addEventListener("click", () => {
    if (nextMonth.disabled) return;

    viewMonth = shiftMonth(viewMonth, 1);
    renderDates();
    updateMonthNavigation();
  });
}

timeGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-time]");
  if (!button) return;

  selectedTime = button.dataset.time;
  renderTimes();
});

forEachNode(document.querySelectorAll(".step"), (step) => {
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

// Handle EcoCash transaction ID input visibility
bookingFeePaid.addEventListener("change", () => {
  transactionIdLabel.hidden = !bookingFeePaid.checked;
  if (!bookingFeePaid.checked) {
    transactionIdInput.value = "";
  }
});

// Handle confirmation modal close button
confirmationOkButton.addEventListener("click", () => {
  confirmationModal.hidden = true;
});

renderCategories();
renderServices();
renderSelectedService();
syncAvailableDates();
renderDates();
updateMonthNavigation();
renderTimes();
syncBookingFeePanel();
syncStep();
