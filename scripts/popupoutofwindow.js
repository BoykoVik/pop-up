k = true;
const curentPopupToOpen = document.getElementById('popup');
$(document).mouseleave(function(e){
    // popup
    if (k){
        popupOpen(curentPopupToOpen);
        k = false;
    }
  });
