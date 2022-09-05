var objbody = document.body;



objbody.onmouseout = function() { 
    alert('left');
}

console.log(objRef)

/*
objbody.onmouseout = function(){
  console.log('a');
  setTimeout(function () {
    oppp();
  }, 700);
  
  };

function oppp() {
  if (objbody.onmouseout) {
    if (k){
        MicroModal.show('modal-1');
      k = false;
  }
  }
}
*/
setTimeout(function (event2) {
        
    if (!event2.target) {
        if (k){
            MicroModal.show('modal-1');
          k = false;
      }
      }
  }, 700);