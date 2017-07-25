var $ = jQuery.noConflict();
jQuery(document).ready(function() {
  $('.modal').modal({ keyboard: false,
                           show: true
        });
        // Jquery draggable
        $('.modal-dialog').draggable({
            handle: ".modal-content"
        });
 
});


 