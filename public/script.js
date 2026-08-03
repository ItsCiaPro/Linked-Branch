//Header partial
const mainHeader = document.getElementById('main-header');

const buttonQuantity = 10;

//Checks if is in user page before creating specified linked buttons
document.addEventListener('DOMContentLoaded', () => {
  const linkedButtonlist = document.getElementById('linked-button-list');

  //Returns if not in users page
  if (!linkedButtonlist) return;

  for (let i = 1; i <= buttonQuantity; i++) {
    const button = document.createElement('button');
    const label = document.createElement('p');

    button.className = 'linked-button';

    label.textContent = `Link ${i}`;

    button.appendChild(label);
    linkedButtonlist.appendChild(button);
  }
});


// HEADER
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Ignore minor accidental scrolls or bounces past the top boundary
  if (currentScrollY <= 0) {
    mainHeader.classList.remove("hidden");
    return;
  }

  if (currentScrollY > lastScrollY) {
    mainHeader.classList.add("hidden");
  } else {
    mainHeader.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});

console.log('Script initiated correctly')