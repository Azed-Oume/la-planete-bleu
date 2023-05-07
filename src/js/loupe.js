// $(document).ready(function() {
//     $('.element-survole').hover(function() {
//       // Créez un nouvel élément de loupe
//       var loupe = document.createElement('div');
//       loupe.className = 'loupe';
//       loupe.style.position = 'absolute';
//       loupe.style.top = $(this).offset().top + 'px';
//       loupe.style.left = $(this).offset().left + $(this).outerWidth() + 10 + 'px';
      
//       // Ajoutez le nouvel élément de loupe au DOM
//       document.body.appendChild(loupe);
      
//       // Déplacez la loupe en fonction du mouvement de la souris
//       $(this).mousemove(function(event) {
//         loupe.style.backgroundImage = 'url(' + $(this).attr('src') + ')';
//         loupe.style.backgroundSize = ($(this).width() * 2) + 'px ' + ($(this).height() * 2) + 'px';
//         loupe.style.backgroundPosition = (-event.pageX + $(this).offset().left) * 2 + 'px ' + (-event.pageY + $(this).offset().top) * 2 + 'px';
//       });
//     }, function() {
//       // Supprimez la loupe lorsque l'événement de survol se termine
//       $('.loupe').remove();
//     });
//   });
  