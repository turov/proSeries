const header = document.querySelector('.header');
const button = header.querySelector('.header__menu-btn');

button.onclick = function () {
    header.classList.toggle('active');
}


const navLinks = document.querySelectorAll('.header__nav-link--category');
const subcategoryLists = document.querySelectorAll('.subcategory-list');


// function myFunction(x) {
//     console.log('dddd')
//     if (x.matches) { // If media query matches
//         navLinks.forEach((link, index) => {
//             link.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 if (link.classList.contains('active')) {
//                     link.classList.remove('active');
//                     subcategoryLists[index].classList.remove('active');
//                 } else {
//                     navLinks.forEach(function (item, i) {
//                         item.classList.remove('active');
//                         subcategoryLists[i].classList.remove('active');
//                     });
//
//                     // Добавляем класс "active" только для текущего выбранного пункта меню
//                     link.classList.add('active');
//                     subcategoryLists[index].classList.add('active');
//                 }
//             });
//         })
//     } else {
//         navLinks.forEach((link, index) => {
//             link.addEventListener('click', function (event) {
//                 event.stopPropagation();
//             });
//         })
//     }
// }
//
// // Create a MediaQueryList object
// const x = window.matchMedia("(min-width: 1158px)")
//
// // Call listener function at run time
// myFunction(x);
//
// // Attach listener function on state changes
// x.addEventListener('change', function () {
//     myFunction(x);
// });

navLinks.forEach((link, index) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        if (link.classList.contains('active')) {
            link.classList.remove('active');
            subcategoryLists[index].classList.remove('active');
        } else {
            navLinks.forEach(function (item, i) {
                item.classList.remove('active');
                subcategoryLists[i].classList.remove('active');
            });

            // Добавляем класс "active" только для текущего выбранного пункта меню
            link.classList.add('active');
            subcategoryLists[index].classList.add('active');
        }
    });
})