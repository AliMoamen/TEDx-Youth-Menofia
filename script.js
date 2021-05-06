var x = window.matchMedia("(max-width: 768px)")
if (x.matches) {
  $("nav, #abstract, img, .slick-slider, .article-head").removeClass("no-opacity")
  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  })
}
else{
  $('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  })
  anime({
    targets: ".navbar",
    translateY: 20,
    opacity: 1,
    easing: 'easeInOutExpo'
  })
  anime({
    targets: "#abstract",
    translateY: -30,
    opacity: 1,
    duration: 1000,
    easing: 'easeInOutExpo'
  })
  anime({
    targets: ".vector",
    translateX: -20,
    opacity: 1,
    easing: 'easeInOutExpo',
    duration: 1000,
  })

  anime({
    targets:".article-head",
    translateY:-30,
    opacity:1,
    easing: 'easeInOutExpo',
    duration: 1500
  })
  anime({
    targets: ".slick-slider",
    translateY: -30,
    opacity: 1,
    easing: 'easeInOutExpo',
    duration: 1500
  })
}
