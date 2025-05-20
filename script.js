// Avtomobillar ro‘yxati
const cars = [
    { name: "Tesla Model S Plaid", price: 129990, color: "qara", image: "images/888.jpg", year: 2023, motor: "Dual Motor", range: "637 km", available: true },
    { name: "Tesla Model 3 Performance", price: 54990, color: "oq", image: "images/888.jpg", year: 2022, motor: "Dual Motor", range: "547 km", available: true },
    { name: "Tesla Model X Plaid", price: 139990, color: "kulrang", image: "images/888.jpg", year: 2023, motor: "Tri Motor", range: "547 km", available: false },
    { name: "Tesla Model Y Long Range", price: 64990, color: "qizil", image: "images/888.jpg", year: 2022, motor: "Dual Motor", range: "533 km", available: true },
    { name: "Tesla Cybertruck Tri Motor", price: 139900, color: "metalik", image: "images/tesla_cybertruck_tri_motor.jpg", year: 2024, motor: "Tri Motor", range: "800 km", available: false },
    { name: "Tesla Model S Long Range", price: 99990, color: "ko‘k", image: "images/tesla_model_s_long_range.jpg", year: 2023, motor: "Dual Motor", range: "652 km", available: true },
    { name: "Tesla Model 3 Standard Range", price: 39990, color: "oq", image: "images/tesla_model_3_standard.jpg", year: 2021, motor: "Single Motor", range: "438 km", available: true },
    { name: "Tesla Model X Long Range", price: 109990, color: "qora", image: "images/tesla_model_x_long_range.jpg", year: 2022, motor: "Dual Motor", range: "580 km", available: true },
    { name: "Tesla Model Y Performance", price: 69990, color: "qizil", image: "images/tesla_model_y_performance.jpg", year: 2023, motor: "Dual Motor", range: "514 km", available: false },
    { name: "Tesla Roadster", price: 200000, color: "qizil", image: "images/tesla_roadster.jpg", year: 2023, motor: "Tri Motor", range: "1000 km", available: false },
    { name: "Toyota Camry XLE", price: 32990, color: "oq", image: "images/toyota_camry_xle.jpg", year: 2022, motor: "2.5L 4-Cylinder", range: "600 km", available: true },
    { name: "Toyota Corolla SE", price: 23990, color: "kulrang", image: "images/toyota_corolla_se.jpg", year: 2023, motor: "2.0L 4-Cylinder", range: "550 km", available: true },
    { name: "Hyundai Sonata Limited", price: 34990, color: "qora", image: "images/hyundai_sonata_limited.jpg", year: 2022, motor: "2.5L 4-Cylinder", range: "580 km", available: false },
    { name: "Hyundai Tucson", price: 28990, color: "ko‘k", image: "images/hyundai_tucson.jpg", year: 2023, motor: "2.5L 4-Cylinder", range: "600 km", available: true },
    { name: "Kia Optima EX", price: 29990, color: "qizil", image: "images/kia_optima_ex.jpg", year: 2022, motor: "2.4L 4-Cylinder", range: "570 km", available: true },
    { name: "Kia Sorento", price: 34980, color: "metalik", image: "images/kia_sorento.jpg", year: 2023, motor: "2.5L 4-Cylinder", range: "590 km", available: false },
    { name: "BMW X5 xDrive40i", price: 65990, color: "oq", image: "images/bmw_x5_xdrive40i.jpg", year: 2023, motor: "3.0L 6-Cylinder", range: "650 km", available: true },
    { name: "BMW 3 Series", price: 45990, color: "qora", image: "images/bmw_3_series.jpg", year: 2022, motor: "2.0L 4-Cylinder", range: "600 km", available: true },
    { name: "Mercedes-Benz C-Class", price: 49990, color: "kulrang", image: "images/mercedes_c_class.jpg", year: 2023, motor: "2.0L 4-Cylinder", range: "620 km", available: false },
    { name: "Audi Q7", price: 69990, color: "ko‘k", image: "images/audi_q7.jpg", year: 2022, motor: "3.0L 6-Cylinder", range: "670 km", available: true }
];

// Elementlarni tanlash
const elements = {
    carList: document.getElementById("carList"),
    searchInput: document.getElementById("searchInput"),
    colorFilter: document.getElementById("colorFilter"),
    priceFilter: document.getElementById("priceFilter"),
    yearFilter: document.getElementById("yearFilter"),
    rangeFilter: document.getElementById("rangeFilter"),
    modal: document.getElementById("carModal"),
    modalImage: document.getElementById("modalImage"),
    modalTitle: document.getElementById("modalTitle"),
    modalDetails: document.getElementById("modalDetails"),
    modalContent: document.getElementById("modal-content"),
    closeModal: document.getElementById("close-modal"),
    loading: document.getElementById("loading"),
    hamburger: document.querySelector(".hamburger"),
    nav: document.getElementById("nav"),
    form: document.getElementById("contact-form"),
    successMessage: document.getElementById("success-message"),
    errorMessage: document.getElementById("error-message"),
    header: document.getElementById("header"),
    logoImg: document.getElementById("logo-img"),
    footer: document.getElementById("footer"),
    socialLinks: document.getElementById("social-links")
};

// Modal ochish funksiyasi
function openModal(data) {
    if (!elements.modal || !elements.modalContent) return;
    elements.modal.style.display = "block";
    elements.modalContent.innerHTML = `
        <span id="close-modal" class="close">×</span>
        <img id="modalImage" src="${data.image}" alt="${data.name}" onerror="this.onerror=null; this.src='images/default_car.jpg';">
        <h3 id="modalTitle">${data.name}</h3>
        <p id="modalDetails">
            Narxi: $${data.price.toLocaleString()} <br>
            Rang: ${data.color} <br>
            Yil: ${data.year} <br>
            Motor: ${data.motor || 'Noma\'lum'} <br>
            Masofa: ${data.range} <br>
            Hozirda mavjud: ${data.available ? "Ha" : "Yo‘q"} <br>
            Kredit imkoniyati: Ha
        </p>
        <button id="modal-action-button" class="buy-button">Xarid qilish</button>
    `;

    elements.closeModal = document.getElementById("close-modal");
    elements.modalImage = document.getElementById("modalImage");
    elements.modalTitle = document.getElementById("modalTitle");
    elements.modalDetails = document.getElementById("modalDetails");

    if (elements.closeModal) elements.closeModal.onclick = closeModal;
    const actionButton = document.getElementById("modal-action-button");
    if (actionButton) actionButton.onclick = () => alert("Xarid qilish uchun biz bilan bog‘laning: nuraddinovsarvarbek05@gmail.com, +99897 607 34 77");
}

// Modalni yopish
function closeModal() {
    if (elements.modal) {
        elements.modal.style.display = "none";
    }
}

// Avtomobillarni ko‘rsatish
function displayCars(carArray) {
    if (!elements.carList) return;
    elements.carList.innerHTML = "";
    carArray.forEach(car => {
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}" onerror="this.onerror=null; this.src='images/default_car.jpg';">
            <h3>${car.name}</h3>
            <p>Narxi: $${car.price.toLocaleString()}</p>
            <p>Rang: ${car.color}</p>
            <button class="details-button">Batafsil</button>
            <button class="buy-now-button">Xarid qilish</button>
        `;

        const detailsButton = carItem.querySelector(".details-button");
        detailsButton.onclick = () => openModal(car);

        const buyButton = carItem.querySelector(".buy-now-button");
        buyButton.onclick = () => alert("Xarid qilish uchun biz bilan bog‘laning: nuraddinovsarvarbek05@gmail.com, +99897 607 34 77");

        elements.carList.appendChild(carItem);
    });
}

// Filtrlash funksiyasi
function filterCars() {
    if (!elements.searchInput || !elements.colorFilter || !elements.priceFilter) return;

    let filteredCars = [...cars];
    const search = elements.searchInput.value.toLowerCase();
    const color = elements.colorFilter.value;
    const priceSort = elements.priceFilter.value;
    const year = elements.yearFilter.value;
    const range = elements.rangeFilter.value;

    if (search) {
        filteredCars = filteredCars.filter(car => car.name.toLowerCase().includes(search));
    }
    if (color) {
        filteredCars = filteredCars.filter(car => car.color === color);
    }
    if (priceSort) {
        filteredCars.sort((a, b) => priceSort === "low" ? a.price - b.price : b.price - a.price);
    }
    if (year) {
        filteredCars = filteredCars.filter(car => car.year == year);
    }
    if (range) {
        filteredCars = filteredCars.filter(car => {
            const rangeNum = parseInt(car.range.split(" ")[0]); // "637 km" → 637
            if (isNaN(rangeNum)) return false; // Agar range noto‘g‘ri bo‘lsa, false qaytar
            if (range === "short") return rangeNum >= 400 && rangeNum <= 500;
            if (range === "medium") return rangeNum > 500 && rangeNum <= 700;
            if (range === "long") return rangeNum > 700;
            return true;
        });
    }

    displayCars(filteredCars);
}

// Sahifa yuklanganda ishga tushirish
document.addEventListener("DOMContentLoaded", () => {
    // Avtomobillarni ko‘rsatish
    if (elements.carList) {
        displayCars(cars);
    }

    // Dinamik rang filtri
    if (elements.colorFilter) {
        const colors = [...new Set(cars.map(car => car.color))];
        elements.colorFilter.innerHTML = '<option value="">Barcha ranglar</option>' + 
            colors.map(color => `<option value="${color}">${color.charAt(0).toUpperCase() + color.slice(1)}</option>`).join('');
    }

    // Dinamik yil filtri
    if (elements.yearFilter) {
        const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
        elements.yearFilter.innerHTML = '<option value="">Barcha yillar</option>' + 
            years.map(year => `<option value="${year}">${year}</option>`).join('');
    }

    // Filtrlarni ishga tushirish
    if (elements.searchInput) elements.searchInput.addEventListener("input", filterCars);
    if (elements.colorFilter) elements.colorFilter.addEventListener("change", filterCars);
    if (elements.priceFilter) elements.priceFilter.addEventListener("change", filterCars);
    if (elements.yearFilter) elements.yearFilter.addEventListener("change", filterCars);
    if (elements.rangeFilter) elements.rangeFilter.addEventListener("change", filterCars);

    // Loading elementi
    if (elements.loading) {
        window.addEventListener("load", () => {
            elements.loading.style.display = "none";
        });
    }

    // Hamburger menyusi
    if (elements.hamburger && elements.nav) {
        elements.hamburger.addEventListener("click", () => {
            elements.nav.classList.toggle("active");
            elements.nav.style.display = elements.nav.classList.contains("active") ? "block" : "none";
        });

        document.addEventListener("click", (e) => {
            if (!elements.hamburger.contains(e.target) && !elements.nav.contains(e.target)) {
                elements.nav.classList.remove("active");
                elements.nav.style.display = "none";
            }
        });
    }

    // Modalni yopish hodisasi
    if (elements.closeModal) {
        elements.closeModal.onclick = closeModal;
    }
    window.onclick = (event) => {
        if (event.target === elements.modal) {
            closeModal();
        }
    };
});