function scrollBanner() {
  $(document).scroll(function(){
    console.log("scrolling");
    var scrollPos = $(this).scrollTop();
    $('#banner-text').css({
      //'top' : (scrollPos/3)+'px',
      'opacity' : 1-(scrollPos/310)
    });

    if(scrollPos>600){
    $('.information1 h2, .information1 p, .information1 p1').css({
      'opacity' : 1-((scrollPos-600)/210)
    }); } 

    if(scrollPos>1200){
    $('.information2 h2, .information2 p, .information2 p1').css({
      'opacity' : 1-((scrollPos-1200)/210)
    }); } 

    if(scrollPos>1800){
    $('.information3 h2, .information3 p, .information3 p1').css({
      'opacity' : 1-((scrollPos-1800)/210)
    }); } 

    if(scrollPos>2350){
    $('.information4 h2, .information4 p, .information4 p1').css({
      'opacity' : 1-((scrollPos-2350)/210)
    }); } 

    if(scrollPos>2850){
    $('.information5 h2, .information5 p, .information5 p1').css({
      'opacity' : 1-((scrollPos-2850)/210)
    }); } 

    if(scrollPos>3380){
    $('.information6 h2, .information6 p, .information6 p1').css({
      'opacity' : 1-((scrollPos-3380)/210)
    }); } 

    if(scrollPos>3830){
    $('.information7 h2, .information7 p, .information7 p1').css({
      'opacity' : 1-((scrollPos-3830)/210)
    }); } 

    if(scrollPos>4200){
    $('.information8 h2, .information8 p, .information8 p1').css({
      'opacity' : 1-((scrollPos-4200)/210)
    }); } 

    if(scrollPos>4650){
    $('.information9 h2, .information9 p, .information9 p1').css({
      'opacity' : 1-((scrollPos-4650)/210)
    }); } 

    if(scrollPos>5300){
    $('.information10 h2, .information10 p, .information10 p1').css({
      'opacity' : 1-((scrollPos-5300)/210)
    }); } 

    //$('#banner').css({
    //  'background-position' : 'center ' + (-scrollPos/2)+'px'
    //});
  });    
}
scrollBanner(); 

