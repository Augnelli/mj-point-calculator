/* MJ point calculator */

/*  Goals
 * 0.0.1
 *    - basic skills listed and 
 *
 */

$(document).ready(function(){

  // finds your name

  // finds your race
  $('.race').change(function(){

    if($('.race').val() == 'dwarf' ) {

      $('.description').text('Dwarf');
    
    } else if ($('.race').val() == 'elf-grue') {
    
      $('.description').text('Grue Elf');
    
    } else if ($('.race').val() == 'elf-imperial') {
    
      $('.description').text('Imperial Elf');
    
    } else if ($('.race').val() == 'famori') {
    
      $('.description').text('Famori');
    
    } else if ($('.race').val() == 'human') {
    
      $('.description').text('Human');
    
    } else if ($('.race').val() == 'rakash') {
    
      $('.description').text('Ra\'kash');
    
    } else if ($('.race').val() == 'warg') {
    
      $('.description').text('Warg');
    
    } else {
    
      $('.description').text('Your race here!');
    
    }

  });

  $('.classes').change(function(){

    if ($('input[name="finesse"]').is(':checked')) {
    
      $('.finesse.skills').show();      

    } else if (!$('input[name="finesse"]').is(':checked')) {

      $('.finesse.skills').hide();      

    }

    if ($('input[name="might"]').is(':checked')) {
    
      $('.might.skills').show();      

    } else if (!$('input[name="might"]').is(':checked')) {

      $('.might.skills').hide();      

    }

    if ($('input[name="precision"]').is(':checked')) {
    
      $('.precision.skills').show();      

    } else if (!$('input[name="precision"]').is(':checked')) {

      $('.precision.skills').hide();      

    }

    if ($('input[name="subtlety"]').is(':checked')) {
    
      $('.subtlety.skills').show();      

    } else if (!$('input[name="subtlety"]').is(':checked')) {

      $('.subtlety.skills').hide();      

    }


    if ($('input[name="power"]').is(':checked')) {
    
      $('.power.skills').show();      

    } else if (!$('input[name="power"]').is(':checked')) {

      $('.power.skills').hide();      

    }

    if ($('input[name="sight"]').is(':checked')) {
    
      $('.sight.skills').show();      

    } else if (!$('input[name="sight"]').is(':checked')) {

      $('.sight.skills').hide();      

    }

    if ($('input[name="devotion"]').is(':checked')) {
    
      $('.devotion.skills').show();      

    } else if (!$('input[name="devotion"]').is(':checked')) {

      $('.devotion.skills').hide();      

    }

    if ($('input[name="sanctity"]').is(':checked')) {
    
      $('.sanctity.skills').show();      

    } else if (!$('input[name="sanctity"]').is(':checked')) {

      $('.sanctity.skills').hide();      

    }
  });

});