
k = true;
$(document).mouseleave(function(e){
    // popup
    if (k){
        alert("1");
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