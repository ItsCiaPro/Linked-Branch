const linkedButtonlist = document.getElementById('linked-button-list');

const buttonQuantity = 10;

for (let i = 1; i <= buttonQuantity; i++) {
   const button = document.createElement('button');
   const label = document.createElement('p');

   button.className = 'linked-button';

   label.textContent = `Link ${i}`;

   button.appendChild(label);
   linkedButtonlist.appendChild(button);
}