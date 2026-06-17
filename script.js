const searchInput = document.querySelector("#commandSearch");
const tabs = document.querySelectorAll(".tab");
const commandCards = document.querySelectorAll(".command-card");

let activeFilter = "all";

function updateCommands() {
  const query = searchInput.value.trim().toLowerCase();

  commandCards.forEach((card) => {
    const categoryMatches = activeFilter === "all" || card.dataset.category === activeFilter;
    const textMatches = card.textContent.toLowerCase().includes(query);
    card.classList.toggle("hidden", !(categoryMatches && textMatches));
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeFilter = tab.dataset.filter;
    updateCommands();
  });
});

searchInput.addEventListener("input", updateCommands);
