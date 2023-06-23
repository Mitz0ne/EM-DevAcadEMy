// Show/hide the language dropdown
var dropdown = document.querySelector('.languageDropdown');
var button = document.querySelector('.language__button');

button.addEventListener('click', function() {
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

// Handle language selection
var languageLinks = document.querySelectorAll('.languageDropdown a');
for (var i = 0; i < languageLinks.length; i++) {
  languageLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var selectedLang = this.getAttribute('data-lang');
    var languageCode = this.querySelector('img').alt;
    document.querySelector('.language__code').textContent = languageCode;

    // Remove selected class from all links
    for (var j = 0; j < languageLinks.length; j++) {
      languageLinks[j].classList.remove('selected');
    }

    // Add selected class to the clicked link
    this.classList.add('selected');

    // Hide the dropdown
    dropdown.style.display = 'none';

    // Perform any language change action here
    console.log('Selected Language:', selectedLang);
  });
}


//-----------------------CAROUSEL
// JavaScript code for carousel navigation
const carouselItems = document.querySelectorAll('.carousel-item');
const navButtons = document.querySelectorAll('.nav-btn');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Show the initial carousel item
carouselItems[currentIndex].style.display = 'block';
navButtons[currentIndex].classList.add('active');

// Handle navigation button click
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetIndex = parseInt(button.getAttribute('data-index'));

    // Hide all carousel items
    carouselItems.forEach(item => {
      item.style.display = 'none';
    });

    // Show the selected carousel item
    carouselItems[targetIndex].style.display = 'block';

    // Update active navigation button
    navButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    currentIndex = targetIndex;
  });
});

// Handle previous button click
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;

  // Show the previous carousel item
  carouselItems[currentIndex].style.display = 'block';

  // Update active navigation button
  navButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  navButtons[currentIndex].classList.add('active');
});

// Handle next button click
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;

  // Show the next carousel item
  carouselItems[currentIndex].style.display = 'block';

  // Update active navigation button
  navButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  navButtons[currentIndex].classList.add('active');
});