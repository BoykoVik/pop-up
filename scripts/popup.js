const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));//поиск наиверхнего в dom элемента с этим классом
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup_content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}







k = true;
$(document).mouseleave(function(e){
    // popup
    if (k){
        //alert("1");
        k = false;
    }
  });


/* алерт при закрытии (не меняется)
№1 вариант
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "Текст в раздражающем пользователя окне";
    (e || window.event).returnValue = confirmationMessage;
    return false;
});
№2 вариант
window.onbeforeunload = function (evt) {
    var message = "Document 'foo' is not saved. You will lost the changes if you leave the page.";
    if (typeof evt == "undefined") {
      evt = window.event;
    }
    if (evt) {
      evt.returnValue = message;
    }
    return message;
  }
*/

