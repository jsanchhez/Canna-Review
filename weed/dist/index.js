"use strict";

// javascript.js
var $ = require('jquery');
require('owl.carousel');
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    // Number of items to display per slide
    loop: true,
    // Enable looping
    autoplayTimeout: 2000,
    // Duration of each slide in milliseconds
    dots: false,
    // Enable/disable navigation dots
    animateOut: 'fadeOut',
    // Animation for the slide out transition
    animateIn: 'fadeIn',
    // Animation for the slide in transition
    classActive: '.slideshow-img',
    // Class applied to the active slide
    classContainer: '#my-slideshow',
    // Class applied to the slideshow container
    autoplay: true // Enable auto-play
  });
});

module.exports = {};