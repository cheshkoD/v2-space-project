// ------------------------------------------------------------------------
// Функция для отображения меню бургера
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});



// ------------------------------------------------------------------------
// Функция для отображения русского контента
function showRussianContent() {
    const englishContent = document.getElementById('english-content');
    const russianContent = document.getElementById('russian-content');

    // Скрыть английский контент
    englishContent.style.display = 'none';
    // Показать русский контент
    russianContent.style.display = 'block';

    // Сохранить выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', 'russian');

  }

// Функция для отображения английского контента
function showEnglishContent() {
    const englishContent = document.getElementById('english-content');
    const russianContent = document.getElementById('russian-content');

    // Показать английский контент  
    englishContent.style.display = 'block';
    // Скрыть русский контент
    russianContent.style.display = 'none';

    // Сохранить выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', 'english');
}

// Восстановить выбранный язык при загрузке страницы
window.addEventListener("load", function() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
  
    if (selectedLanguage === 'russian') {
      showRussianContent();
    } else {
      showEnglishContent();
    }
  });



// ------------------------------------------------------------------------
// Функция для прокрутки наверх страницы 
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
// Показывать кнопку, когда прокручена определенная часть страницы
window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});



// ------------------------------------------------------------------------
// Adaptive text --- GALLARY PAGE
// Функция для изменения размера текста 
function updateText() {
    var windowWidth = window.innerWidth;
    var prideTextEn = document.getElementById("pride-text-en");
    var galleryTextEn = document.getElementById("gallery-text-en");
    var prideTextRu = document.getElementById("pride-text-ru");
    var galleryTextRu = document.getElementById("gallery-text-ru");
    
    if (windowWidth >= 1500) {
        // Смена текста для ENG 
        prideTextEn.innerHTML = 'OUR <span>PRIDE</span> OUR <span>PRIDE</span> OUR <span>PRIDE</span> OUR <span>PRIDE</span>';
        galleryTextEn.innerHTML = 'GALERY <span>GALERY</span> GALERY <span>GALERY</span> GALERY';
        // Смена текста для RUS   
        prideTextRu.innerHTML = 'НАША <span>ГОРДОСТЬ</span> НАША <span>ГОРДОСТЬ</span> ';
        galleryTextRu.innerHTML = 'ГАЛЕРЕЯ <span>ГАЛЕРЕЯ</span> ГАЛЕРЕЯ <span>ГАЛЕРЕЯ</span>';
    
    } else if (windowWidth >= 1300) {
        // Смена текста для ENG
        prideTextEn.innerHTML = 'OUR <span>PRIDE</span> OUR <span>PRIDE</span> OUR <span>PRIDE</span>';
        galleryTextEn.innerHTML = 'GALERY <span>GALERY</span> GALERY <span>GALERY</span> ';
        // Смена текста для RUS  
        prideTextRu.innerHTML = 'НАША <span>ГОРДОСТЬ</span> НАША <span>ГОРДОСТЬ</span> НАША <span>ГОРДОСТЬ</span>';
        galleryTextRu.innerHTML = 'ГАЛЕРЕЯ <span>ГАЛЕРЕЯ</span> ГАЛЕРЕЯ <span>ГАЛЕРЕЯ</span>';
    
    } else if (windowWidth >= 1185) {
        // Смена текста для ENG
        prideTextEn.innerHTML = 'OUR <span>PRIDE</span> OUR <span>PRIDE</span>';
        galleryTextEn.innerHTML = 'GALERY <span>GALERY</span> GALERY ';
        // Смена текста для RUS  
        prideTextRu.innerHTML = 'НАША <span>ГОРДОСТЬ</span> НАША <span>ГОРДОСТЬ</span>';
        galleryTextRu.innerHTML = 'ГАЛЕРЕЯ <span>ГАЛЕРЕЯ</span> ГАЛЕРЕЯ ';
    
    } else if (windowWidth >= 800) {
        // Смена текста для ENG
        prideTextEn.innerHTML = 'OUR <span>PRIDE</span> ';
        galleryTextEn.innerHTML = 'GALERY <span>GALERY</span>';
        // Смена текста для RUS
        prideTextRu.innerHTML = 'НАША <span>ГОРДОСТЬ</span>';
        galleryTextRu.innerHTML = 'ГАЛЕРЕЯ <span>ГАЛЕРЕЯ</span>';
    
    } else if (windowWidth >= 300) {
        // Смена текста для ENG
        prideTextEn.innerHTML = 'OUR <span>PRIDE</span>';
        galleryTextEn.innerHTML = '<span>GALERY</span>';
        // Смена текста для RUS
        prideTextRu.innerHTML = 'НАША <span>ГОРДОСТЬ</span>';
        galleryTextRu.innerHTML = '<span>ГАЛЕРЕЯ</span>';

    } else {
        prideTextEn.innerHTML = '';
        galleryTextEn.innerHTML = '';
        prideTextRu.innerHTML = '';
        galleryTextRu.innerHTML = '';
    }

    // Сохраняем выбранное состояние в localStorage
        // Сохранение для английского контента    
    localStorage.setItem('prideTextStateEn', prideTextEn.innerHTML); // pride-text-en     
    localStorage.setItem('galleryTextStateEn', galleryTextEn.innerHTML); // gallery-text-en
        // Сохранение для русского контента
    localStorage.setItem('prideTextStateRu', prideTextRu.innerHTML); // pride-text-ru
    localStorage.setItem('galleryTextStateRu', galleryTextRu.innerHTML); // gallery-text-ru
  }
  
  window.addEventListener("resize", updateText);


// Восстанавливаем состояние при загрузке страницы
window.addEventListener("load", function() { 
    // Восстановление для ENG контента
        // pride-text-en
    var prideTextStateEn = localStorage.getItem('prideTextStateEn');
    if (prideTextStateEn) {
      var prideTextEn = document.getElementById("pride-text-en");
      prideTextEn.innerHTML = prideTextStateEn;
    }
        // gallery-text-en
    var galleryTextStateEn = localStorage.getItem('galleryTextStateEn');
    if (galleryTextStateEn) {
      var galleryTextEn = document.getElementById("gallery-text-en");
      galleryTextEn.innerHTML = galleryTextStateEn;
    }

    // Восстановление для RU контента
        // pride-text-ru 
    var prideTextStateRu = localStorage.getItem('prideTextStateRu');
    if (prideTextStateRu) {
      var prideTextRu = document.getElementById("pride-text-ru");
      prideTextRu.innerHTML = prideTextStateRu;
    }
        // gallery-text-ru 
    var galleryTextStateRu = localStorage.getItem('galleryTextStateRu');
    if (galleryTextStateRu) {
      var galleryTextRu = document.getElementById("gallery-text-ru");
      galleryTextRu.innerHTML = galleryTextStateRu;
    }

  });




// ------------------------------------------------------------------------
// NEW SLIDER
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("parag");
  var dots = document.getElementsByClassName("noguma-pomoki-kadra");
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace("deystvuyus", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " deystvuyus";
}











