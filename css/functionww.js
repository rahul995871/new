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

function companyshow() {
	var x = document.getElementById("comapnymore");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("companyshow").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("companyshow").innerHTML="Show More";
	}
  }
function delhincrshow() {
	var x = document.getElementById("delhincr");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("delhincrshow").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("delhincrshow").innerHTML="Show More";
	}
 }
function aboutusmore() {
	var x = document.getElementById("aboutus");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("aboutusmore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("aboutusmore").innerHTML="Show More";
	}
 }
 function visionmore() {
	var x = document.getElementById("visionshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("visionmore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("visionmore").innerHTML="Show More";
	}
 }
 function missionmore() {
	var x = document.getElementById("missionbtn");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("missionmore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("missionmore").innerHTML="Show More";
	}
 }
 function extravaluemore() {
	var x = document.getElementById("extravalue");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("extravaluemore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("extravaluemore").innerHTML="Show More";
	}
 }
 function workmore() {
	var x = document.getElementById("workshow");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("workmore").innerHTML="Show Less";
	} else {
	  x.style.display = "none";
	  document.getElementById("workmore").innerHTML="Show More";
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

  $("#more").click(function(){
	$("#reviewone").addClass("showreview");
	$("#closeone").click(function(){
		$("#reviewone").removeClass("showreview");
	});
	});
	$("#moreone").click(function(){
		$("#reviewtwo").addClass("showreview");
	$("#closetwo").click(function(){
		$("#reviewtwo").removeClass("showreview");
	});
	});	
	$("#morethree").click(function(){
		$("#reviewthree").addClass("showreview");
	$("#closethree").click(function(){
		$("#reviewthree").removeClass("showreview");
	});
	});	
	$("#checkcourse").click(function(){
		$("#dreamone").addClass("showlist");
		$("#checkcourse").hide();
		$("#listone").hide();
	});	
	$("#checklist").click(function(){
		$("#dreamtwo").addClass("showlist");
		$("#checklist").hide();
		$("#listtwo").hide();
	});
	$("#checkpopular").click(function(){
		$("#dreamthree").addClass("showlist");
		$("#checkpopular").hide();
		$("#listthree").hide();
	});	

  $('#grouploop-1').grouploop({
	velocity: 0.1,
	forward: true,
	pauseOnHover: true,
	childNode: ".item",
	childWrapper: ".item-wrap"
  });
  $('#grouploop-2').grouploop({
	velocity: 0.1,
	forward: false,
	pauseOnHover: true,
	childNode: ".item",
	childWrapper: ".item-wrap"
  });
