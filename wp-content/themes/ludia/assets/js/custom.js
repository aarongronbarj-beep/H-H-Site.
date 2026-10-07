jQuery(document).ready(function() {

jQuery("body:not(.logged-in) .linkkilohko").click(function() {
  window.location = jQuery(this).find("a").attr("href"); 
  return false;
});

jQuery("body:not(.logged-in) .linkkilohko-blank").click(function() {
    var productLink = jQuery(this).find("a");

    productLink.attr("target", "_blank");
    window.open(productLink.attr("href"));

    return false;
});



//jQuery('.bg-img-parallax').stellar();

/*
jQuery('.dropdown-toggle').click(function() {
    var location = jQuery(this).attr('href');
    window.location.href = location;
    return false;
});



jQuery('#edit-field-hinta-value-1').attr('placeholder','Hinnan yläraja');

jQuery(".supiproducts").click(function() {
  window.location = jQuery(this).find("a").attr("href"); 
  return false;
});


jQuery('#slider .headerbg').each(function() {
var src = jQuery('img', jQuery(this)).attr('src');
jQuery(this).css('background-image', 'url(' + src + ')');
});


jQuery( '.usemap' ).click(function() {
  jQuery( this ).hide( 50, function() {
    jQuery( this ).remove();
  });
});

jQuery( "#views-exposed-form-vaihtoautot-page-mefibs-form-etusivu" ).addClass( "container" );


jQuery('#top-fullmenu a').click(function(){
    jQuery('html, body').animate({
        scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
    }, 500);
    return false;
});

jQuery('#mobile-menu a').click(function(){
    jQuery('html, body').animate({
        scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
    }, 500);
    jQuery(".mobilenavi").hide();
    return false;
});

*/

});