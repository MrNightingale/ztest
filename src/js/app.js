import './requirejs-config';

requirejs(['jquery', 'vendor'], ($) => {
 
  $('.header__button--show').click(() => {
    $('.popup, .overlay').show('slow');
  });

  $('.overlay, .popup__close, .popup__button--cancel').click(() => {
    $('.popup, .overlay').hide('slow');
  });

  $('.popup__button--uninstall').click(() => {
    $('.overlay').hide();
    $('.popup').hide('slow', () => {
      alert('DONE');
    });
  });
  
});