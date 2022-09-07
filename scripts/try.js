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


          //modal = new PopupModal('mouseleave', 'Заголовок', 'imgs/apache.png', 'текст всплывающего окна', 'текст кнопки', 'imgs/apache.png', 'btn', 'footer');
        //modal.insertdiv();




        class PopupModal {
          constructor(trigger, title, imageUrl, text, btntext, btnUrl, btnId, targetClass) {
              this.trigger = trigger;//триггер
              this.title = title;//заголовок
              this.imageUrl = imageUrl;//урл картинки
              this.text = text;//текст
              this.btntext = btntext;//текст кнопки
              this.btnUrl = btnUrl;//урл кнопки
              this.btnId = btnId;//id кнопки
              this.targetClass = targetClass;//где вставлять (класс)
              document.head.insertAdjacentHTML('afterend', `<style>
                                                              .modal {font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;}
                                                              .modal__overlay {position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,0.6);display: flex;justify-content: center;align-items: center;}
                                                              .modal__container {background-color: #fff;padding: 30px;max-width: 500px;max-height: 100vh;border-radius: 4px;overflow-y: auto;box-sizing: border-box;}
                                                              .modal__header {display: flex;justify-content: space-between;align-items: center;}
                                                              .modal__title {margin-top: 0;margin-bottom: 0;font-weight: 600;font-size: 1.25rem;line-height: 1.25;color: #00449e;box-sizing: border-box;}
                                                              .modal__close {background: transparent;border: 0;}
                                                              .modal__header .modal__close:before { content: "\\2715"; }
                                                              .modal__content {margin-top: 2rem;margin-bottom: 2rem;line-height: 1.5;color: rgba(0,0,0,.8);}
                                                              .modal__btn {font-size: .875rem;padding-left: 1rem;padding-right: 1rem;padding-top: .5rem;padding-bottom: .5rem;background-color: #e6e6e6;color: rgba(0,0,0,.8);border-radius: .25rem;border-style: none;
                                                              border-width: 0;cursor: pointer;-webkit-appearance: button;text-transform: none;overflow: visible;line-height: 1.15;margin: 0;will-change: transform;-moz-osx-font-smoothing: grayscale;
                                                              -webkit-backface-visibility: hidden;backface-visibility: hidden;-webkit-transform: translateZ(0);transform: translateZ(0);transition: -webkit-transform .25s ease-out;transition: transform .25s ease-out;transition: transform .25s ease-out,-webkit-transform .25s ease-out;}
                                                              .modal__btn:focus, .modal__btn:hover {-webkit-transform: scale(1.05);transform: scale(1.05);}
                                                              .modal__btn-primary {background-color: #00449e;color: #fff;}
                                                              @keyframes mmfadeIn {from { opacity: 0; } to { opacity: 1; }}
                                                              @keyframes mmfadeOut {from { opacity: 1; }to { opacity: 0; }}
                                                              @keyframes mmslideIn {from { transform: translateY(15%); }to { transform: translateY(0); }}
                                                              @keyframes mmslideOut {from { transform: translateY(0); }to { transform: translateY(-10%); }}
                                                              .micromodal-slide {display: none;}
                                                              .micromodal-slide.is-open {display: block;}
                                                              .micromodal-slide[aria-hidden="false"] .modal__overlay {animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);}
                                                              .micromodal-slide[aria-hidden="false"] .modal__container {animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);}
                                                              .micromodal-slide[aria-hidden="true"] .modal__overlay {animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);}
                                                              .micromodal-slide[aria-hidden="true"] .modal__container {animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);}
                                                              .micromodal-slide .modal__container, .micromodal-slide .modal__overlay {will-change: transform;}
                                                            </style>`);
              this.wasopened = false;//открывалось ли окно
              this.isindocument = false;//для проверки состояния
              document.addEventListener('mouseover', function() {
                this.isindocument = true;
              })
      
              document.addEventListener(this.trigger, function() {
                this.isindocument = false;
                setTimeout(function () {
                    if (!this.wasopened && !this.isindocument){
                      this.wasopened = true;
                        MicroModal.show('modal-1');
                    }        
                  }, 700);  
              })
          }
      
            makdiv() {
              return document.createElement('div').innerHTML =  `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
                                                                    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                                                                    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                                                                        <header class="modal__header">
                                                                          <h2 class="modal__title" id="modal-1-title">` + this.title + `</h2>
                                                                          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                                                                        </header>
                                                                        <main class="modal__content" id="modal-1-content">
                                                                          <p>` + this.text + `</p>
                                                                          <img src="` + this.imageUrl + `" alt="">
                                                                        </main>
                                                                        <footer class="modal__footer">
                                                                          <a href="`+ this.btnUrl +`">
                                                                            <button id="`+ this.btnId +`" class="modal__btn modal__btn-primary">` + this.btntext + `</button>
                                                                          </a>
                                                                        </footer>
                                                                    </div>
                                                                    </div>
                                                                </div>`;
          }
          insertdiv() {
            return document.getElementsByClassName(this.targetClass)[0].innerHTML += this.makdiv();
          }
      }
      
      /*-----------------------------------------------------------------------------------*/
      
      !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).MicroModal=t()}(this,(function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,g=void 0===v?"is-open":v,m=e.disableScroll,b=void 0!==m&&m,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,A=e.debugMode,C=void 0!==A&&A;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:C,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:g,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:M,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});return"undefined"!=typeof window&&(window.MicroModal=l),l}));
      