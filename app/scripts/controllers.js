'use strict';

angular.module('daverApp', ['ui.router','ngSanitize','ui.bootstrap','ngResource','ngAnimate','ngTouch','duScroll'])

			.controller('MainController', ['$scope', '$location', '$document', function($scope, $location, $document) {

				$scope.contact  = {
					name:"",
					email:"",
					phoneArea:"",
					phoneFirst:"",
					phoneSecond:"",
					currWebsite:"",
					methodOfContact:"",
					message:""
				};

				$(document).ready(function(){
				  $("#switch").click(function(){
				  	if ($("#home").hasClass("visible")) {
					    $("#home").fadeOut();
					    $("#switchHome").fadeIn();
					    $("#home").removeClass("visible");
					    $("#switchHome").addClass("visible");
				  	} else {
					    $("#home").fadeIn();
					    $("#switchHome").fadeOut();
					    $("#home").addClass("visible");
					    $("#switchHome").removeClass("visible");
				  	}

				  });
				});

				//closes the mobile menu after selection is made
				$(".headerThing").click(function () {
          if ($("#btnCollapse").css('display')!='none')
          $("#btnCollapse").click();
        });

				$scope.testSuccess = false;

				$scope.sendContact = function() {
					$scope.testSuccess = true;
			   // Get the first form with the name
			   // Hopefully there is only one, but there are more, select the correct index
			   var frm = document.getElementsByName('contactForm')[0];
			   frm.reset();  // Reset
			   return false; // Prevent page refresh

				};

				$scope.changeChevron = function(input) {
					if ($(input).hasClass("glyphicon-plus-sign")) {
						$(input).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
					} else {
						$(input).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
					}
				}
/*
				document.getElementById('phoneArea').addEventListener('keydown', function(e) {
	    		var key = e.keyCode ? e.keyCode : e.which;
				  if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
				    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
				    (key >= 35 && key <= 40) ||
				    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
				    (key >= 96 && key <= 105)
				  )) e.preventDefault();
				})
				document.getElementById('phoneFirst').addEventListener('keydown', function(e) {
	    		var key = e.keyCode ? e.keyCode : e.which;
				  if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
				    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
				    (key >= 35 && key <= 40) ||
				    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
				    (key >= 96 && key <= 105)
				  )) e.preventDefault();
				})
				document.getElementById('phoneSecond').addEventListener('keydown', function(e) {
	    		var key = e.keyCode ? e.keyCode : e.which;
				  if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
				    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
				    (key >= 35 && key <= 40) ||
				    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
				    (key >= 96 && key <= 105)
				  )) e.preventDefault();
				}) */

				var duration = 0;
		    var offset = 0; //pixels; adjust for floating menu, context etc
		    //Scroll to #some-id with 100 px "padding"
		    //Note: Use this in a directive, not with document.getElementById 
		    var promoSection = angular.element(document.getElementById('superduper'));
		    $document.scrollToElement(promoSection, offset, duration);

				var winHeight = $(window).height();

				$scope.homeExpansion = {
					"padding-top": winHeight / 4,
					"padding-bottom": winHeight / 4
				};

				$scope.homeExpansionSmaller = {
					"padding-top": winHeight / 5,
					"padding-bottom": winHeight / 5
				};

				/* https://jsfiddle.net/tcloninger/e5qaD/ */
				$(document).ready(function() {
    
    			/* Every time the window is scrolled ... */
    			$(window).scroll( function(){
    
        		/* Check the location of each desired element */
        		$('.hideme').each( function(){
            
            	var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 150;
            	var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            	/* If the object is completely visible in the window, fade it it */
            	if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
	            }
		        });

        		$('.hideme2').each( function(){
            	if($(window).width() < 768) {
								var bottom_of_object = $(this).offset().top + $(this).outerHeight()-1500;
            	} else {
								var bottom_of_object = $(this).offset().top + $(this).outerHeight()-1000;
            	}
            	var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            	/* If the object is completely visible in the window, fade it it */
            	if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
	            }
		        });
			    });
				});


				$scope.aboutParPadding = {
					"margin-top" : "50"
				};

				$scope.daverPicPadding = {
					"margin-top" : "50"
				};

				var daverImageHeight = (document.getElementById('daverPic').clientHeight);
				var daverAboutHeight = (document.getElementById('aboutPar').clientHeight);
				console.log(daverImageHeight);
				console.log(daverAboutHeight);

				if (daverImageHeight > daverAboutHeight) {
					$scope.aboutParPadding = {
						"margin-top" : (Math.abs(daverImageHeight - daverAboutHeight)/2)+50
					};
				} else if (daverImageHeight < daverAboutHeight) {
					$scope.daverPicPadding = {
						"margin-top" : Math.abs(daverImageHeight - daverAboutHeight)/2
					};
				} else {
					$scope.aboutParPadding = {
						"margin-top" : "0"
					};
					$scope.daverPicPadding = {
						"margin-top" : "0"
					};
				}
			}])
;

