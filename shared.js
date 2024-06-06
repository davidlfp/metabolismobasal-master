function Inicializar(){
  const dropdownList = document.querySelector('.dropdown-list');
  const customDropdown = document.querySelector('.custom-dropdown');
  const dropdownHeader = document.querySelector('.dropdown-header');
  const lanBarTop = document.querySelector('.lan-bar-top');
  const overlay = document.querySelector('.overlay');

  document.addEventListener("click", function (event) {
    if (dropdownList.style.display === 'block' && !dropdownHeader.contains(event.target)) {
      toggleDropdown(dropdownList, overlay, lanBarTop, customDropdown);
    }
  });

  dropdownHeader.addEventListener("click", () => toggleDropdown(dropdownList, overlay, lanBarTop, customDropdown));
}

function toggleDropdown(dropdownList, overlay, lanBarTop, customDropdown) {
  if (dropdownList.style.display === 'block') {
    dropdownList.style.display = 'none';
    overlay.style.display = 'none';
    lanBarTop.classList.remove('open');
    customDropdown.classList.remove('open');
  } else {
    dropdownList.style.display = 'block';
    overlay.style.display = 'block';
    lanBarTop.classList.add('open');
    customDropdown.classList.add('open');
  }
}