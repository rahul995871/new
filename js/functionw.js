$('.noword').keypress(function(event) {
	console.log(event.which);
	if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
		  event.preventDefault();
	}
});

$('input[type="tel"]').bind('input', function() {
  var c = this.selectionStart,
      r = /[^a-z0-9 .]/gi,
      v = $(this).val();
  if(r.test(v)) {
    $(this).val(v.replace(r, ''));
    c--;
  }
  this.setSelectionRange(c, c);
});

var swiper = new Swiper(".kitchen_one", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".kitch01", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	thumbs: {
	  swiper: swiper,
	},
  });
  var swiper = new Swiper(".kitchen_two", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".kitch02", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	thumbs: {
	  swiper: swiper,
	},
  });
var swiper = new Swiper(".kitchen_three", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".kitch03", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	thumbs: {
	  swiper: swiper,
	},
  });
  var swiper = new Swiper(".kitchen_four", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".kitch04", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	thumbs: {
	  swiper: swiper,
	},
  });
  var swiper = new Swiper(".kitchen_five", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".kitch05", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	thumbs: {
	  swiper: swiper,
	},
  }); 
  var swiper = new Swiper(".bathroom_one", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".bathroom01", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
	pagination: {
        el: ".swiper-pagination",
      },
	thumbs: {
	  swiper: swiper,
	},
  });
  var swiper = new Swiper(".bedroom_one", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".bedroom01", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	thumbs: {
	  swiper: swiper,
	},
  }); 
  var swiper = new Swiper(".drawingroom_one", {
	loop: true,
	spaceBetween: 3,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".drawingroom01", {
	slidesPerView: 1.1,
	loop: true,
	spaceBetween: 5,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
	pagination: {
        el: ".swiper-pagination",
      },
	thumbs: {
	  swiper: swiper,
	},
  }); 
  
function topmore() {
  var x = document.getElementById("topshow");
  if (x.style.display === "none") {
    x.style.display = "block";
	document.getElementById("topmoreshow").innerHTML="Show Less";
  } else {
    x.style.display = "none";
	document.getElementById("topmoreshow").innerHTML="Show More";
  }
  
}
  function delhimore() {
	var x = document.getElementById("delhishow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("delhimore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("delhimore").innerHTML="Show More";
	}
  }
  function noidamore() {
	var x = document.getElementById("noidashow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("noidamore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("noidamore").innerHTML="Show More";
	}
  }
  function gurugrammore() {
	var x = document.getElementById("gurugramshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("gurugrammore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("gurugrammore").innerHTML="Show More";
	}
  }
  function mumbaimore() {
	var x = document.getElementById("mumbaishow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("mumbaimore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("mumbaimore").innerHTML="Show More";
	}
  }
  function bangaloremore() {
	var x = document.getElementById("bangaloreshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("bangaloremore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("bangaloremore").innerHTML="Show More";
	}
  }
  function chennaimore() {
	var x = document.getElementById("chennaishow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("chennaimore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("chennaimore").innerHTML="Show More";
	}
  }
  function kolkatamore() {
	var x = document.getElementById("kolkatashow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("kolkatamore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("kolkatamore").innerHTML="Show More";
	}
  }
  function hyderabadmore() {
	var x = document.getElementById("hyderabadshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("hyderabadmore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("hyderabadmore").innerHTML="Show More";
	}
  }
  function ahmedabadmore() {
	var x = document.getElementById("ahmedabadshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("ahmedabadmore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("ahmedabadmore").innerHTML="Show More";
	}
  }
  function punemore() {
	var x = document.getElementById("puneshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("punemore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("punemore").innerHTML="Show More";
	}
  }  

  var swiper = new Swiper(".project_one", {
	loop: true,
	spaceBetween: 1,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".project1", {
	// slidesPerView: 1.1,
	loop: true,
	allowTouchMove: false,
	spaceBetween: 1,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });

  var swiper = new Swiper(".bathroomone01,.bathroomone02,.bathroomone03,.bathroomone04,.bathroomone05,.bathroomone06,.bathroomone07,.bathroomone08,.bathroomone09,.bathroomone10,.bathroomone11", {
	slidesPerView: 1.1,
	spaceBetween: 5,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });   
$(".clickenquiry").click(function() {
  $(".enquirynow").slideToggle();
});
$("#gallerypopup").click(function(){
	$("#reviewone").addClass("showreview");
$(".close").click(function(){
	$("#reviewone").removeClass("showreview");
});
});
$("#projectpopup").click(function(){
	$("#reviewtwo").addClass("showreview");
$(".close").click(function(){
	$("#reviewtwo").removeClass("showreview");
});
}); 
$("#getrequestquote").click(function(){
	$(".requestform").addClass("showreview");
$("#requestclose").click(function(){
	$(".requestform").removeClass("showreview");
});
}); 

$('.topnav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
         var target = this.hash,
         menu = target;
        $target = $(target);
              
       $('html, body').stop().animate({
            'scrollTop': $target.offset().top-50
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });