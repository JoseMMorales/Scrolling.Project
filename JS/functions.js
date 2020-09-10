$(function() {
  PageLoad();  
});

function PageLoad(){  
  EventPage();
};

function EventPage(){
  $("a.scrollLink").on('click', function(event) { 
    event.preventDefault();
    scrollToAnchor(this); 
  });

  $('.navbar-class > li > a').on('click', function() { 
    activeElement(this);
  });
};


function activeElement(obj) {
  $('.navbar-class > li').children().removeClass('active');
  $(obj).addClass('active')  
};

function scrollToAnchor(obj) {        
   $("html,body").animate({ scrollTop: $($(obj).attr("href")).offset().top }, 700);
};


