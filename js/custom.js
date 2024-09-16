(function ($) {
    "use strict"; // Start of use strict
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    /*Loader Javascript
    -------------------*/
    var window_var = $(window);
    window_var.on('load', function () {
        $(".loading").fadeOut("fast");
        $("#snackbar").addClass("show");
    });
    // scroll to top
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').on('click',function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // scroll to top End

    // fullscreen function
    $(".fullscreen").on('click', function(){
        if(document.webkitCurrentFullScreenElement==null){
            document.documentElement.webkitRequestFullScreen();
        }else{
            document.webkitCancelFullScreen();   
        }
    }); 
     // fullscreen function End

})(jQuery);

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sample credentials check (you can replace this with your logic)
    if (username === 'DW-007' && password === 'Digitalwave@12#') { 
        localStorage.setItem('loggedIn', 'true');
      // Redirect to index.html if credentials are correct
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password!');
    }
  }
