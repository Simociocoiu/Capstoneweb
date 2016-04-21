function scrollBanner() {
  $(document).scroll(function(){
    console.log("scrolling");
    var scrollPos = $(this).scrollTop();
    $('#banner-text').css({
      //'top' : (scrollPos/3)+'px',
      'opacity' : 1-(scrollPos/310)
    });

    if(scrollPos>500){
    $('.information1 h2, .information1 p, .information1 p1').css({
      'opacity' : 1-((scrollPos-500)/310)
    }); } 

    if(scrollPos>800){
    $('.information2 h2, .information2 p, .information2 p1').css({
      'opacity' : 1-((scrollPos-1000)/310)
    }); } 

    if(scrollPos>1600){
    $('.information3 h2, .information3 p, .information3 p1').css({
      'opacity' : 1-((scrollPos-1600)/310)
    }); } 

    if(scrollPos>2100){
    $('.information4 h2, .information4 p, .information4 p1').css({
      'opacity' : 1-((scrollPos-2100)/310)
    }); } 

    if(scrollPos>2600){
    $('.information5 h2, .information5 p, .information5 p1').css({
      'opacity' : 1-((scrollPos-2600)/310)
    }); } 

    if(scrollPos>3200){
    $('.information6 h2, .information6 p, .information6 p1').css({
      'opacity' : 1-((scrollPos-3200)/310)
    }); } 

    if(scrollPos>3500){
    $('.information7 h2, .information7 p, .information7 p1').css({
      'opacity' : 1-((scrollPos-3500)/310)
    }); } 

    if(scrollPos>4000){
    $('.information8 h2, .information8 p, .information8 p1').css({
      'opacity' : 1-((scrollPos-4000)/310)
    }); } 

    //$('#banner').css({
    //  'background-position' : 'center ' + (-scrollPos/2)+'px'
    //});
  });    
}
scrollBanner(); 

