// // «Prevent Page Scrolling When a Modal is Open»

// // When the modal is shown, we want a fixed body
// document.body.style.position = 'fixed';
// document.body.style.top = `-${window.scrollY}px`;

// // When the modal is hidden, we want to remain at the top of the scroll position
// document.body.style.position = '';
// document.body.style.top = '';

// // Когда модальное окно скрыто...
// const scrollY = document.body.style.top;
// document.body.style.position = '';
// document.body.style.top = '';
// window.scrollTo(0, parseInt(scrollY || '0') * -1);


// const showDialog = () => {
//   document.getElementById('dialog').classList.add('show');
//   const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
//   const body = document.body;
//   body.style.position = 'fixed';
//   body.style.top = `-${scrollY}`;
// };
// const closeDialog = () => {
//   const body = document.body;
//   const scrollY = body.style.top;
//   body.style.position = '';
//   body.style.top = '';
//   window.scrollTo(0, parseInt(scrollY || '0') * -1);
//   document.getElementById('dialog').classList.remove('show');
// };
// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty(
//     '--scroll-y',
//     `${window.scrollY}px`
//   );
// });