let deferredPrompt;
const addBtn = document.querySelector('.add-button'); // تأكد من وجود زر بهذا الكلاس في HTML

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block'; // إظهار الزر عند جاهزية التطبيق للتثبيت

  addBtn.addEventListener('click', (e) => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      deferredPrompt = null;
    });
  });
});
