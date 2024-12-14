// ruleid: detect-jquery
$('div').hide()

// ruleid: detect-jquery
jQuery('div').hide()

// ruleid: detect-jquery
$.ajax({url: 'http://example.com'})

// ruleid: detect-jquery
jQuery.ajax({url: 'http://example.com'})

// ok: detect-jquery
document.querySelector('div').style.display = 'none'

// ok: detect-jquery
$asd = 'foo'
