const dataTabs = Array.from(document.querySelectorAll(".info-tab"));
const tabPanels = Array.from(document.querySelectorAll(".data-info"));

function removeActiveFromTabs() {
  dataTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

dataTabs.forEach((dataTab) => {
  dataTab.addEventListener("click", (e) => {
    removeActiveFromTabs();
    const tabName = e.target.id;
    e.target.classList.add("active");

    tabPanels.forEach((panel) => {
      if (panel.dataset.name === tabName) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  });
});
