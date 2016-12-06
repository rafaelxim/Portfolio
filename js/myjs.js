function reverseString(str) {

  var sepString= str.split('');
  var reversedString = sepString.reverse();
  var joinedString = reversedString.join('');
  return joinedString;
}

function factorialize(num) {
  var acumulator = 1;
  if(num===1 || num ===0){
    return 1;
  }
  else{
    for(var i=num; i>0 ; i--){

      acumulator = acumulator*i;      
    }    
    return acumulator;
  }
}


function palindrome(str) {
 var noSpecial = str.replace(/[\W\b_]/g,'');
 noSpecial = noSpecial.toLowerCase();
 var reverted = noSpecial.split('').reverse().join('');
 console.log(noSpecial);
 console.log(reverted);

 if(noSpecial ===reverted){
   return true;
 }
 else{
  return false;
}

}

function confirmEnding(str, target) {
  //pegar o lenght do target
  targetLength =target.length*(-1);  
  if (str.substr(targetLength)===target){
    return true;
  }    
  else {
    return false;
  }
}

function repeatStringNumTimes(str, num) {
  var totalStr='';
  for(var i=0; i<num; i++){
    totalStr = totalStr+str;
  }
  return totalStr;
  
}

function findLongestWord(str) {
  var counter=1;
  var splited = str.split(" ");
  for(var i=0; i<splited.length; i++){
    if(counter<splited[i].length){
      counter=splited[i].length;
    }      
  }
  return counter;
}

function titleCase(str) {
  var separateLetters= [];
  var separateWords = str.split(" ");
  for(var i =0; i<separateWords.length; i++){
     separateLetters.push(separateWords[i].split(''));        
  }
  
  for(var j =0; j<separateWords.length; j++){
  separateLetters[j][0] = separateLetters[j][0].toUpperCase();    
  }
  
  for(var z =0; z<separateLetters.length; z++){
     for(var t =1; t<separateLetters[z].length; t++){         
        separateLetters[z][t] = separateLetters[z][t].toLowerCase();
     }   
  }
  var newString='';
  for(var x =0; x<separateLetters.length; x++){
    if(x>0){
      newString= newString+ " ";
    }    
    for(var y =0; y<separateLetters[x].length; y++){
      newString= newString+ separateLetters[x][y];
    }
  }  
  
  return newString;
}

$(document).ready(function(){             
  $('#fade-in-1').fadeIn('slow', function(){
    $('#anim2').addClass('animated bounceInLeft').css('opacity','1');
    $('#anim2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#anim3').addClass('animated flipInX').css('opacity','1');                                            
    });
  }); 
  $('#anim3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#anim3').removeClass('animated flipInX'); 
    $('#anim4').addClass('animated slideInRight').css('opacity','1');
  });      
  $('#anim4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#anim5').addClass('animated zoomIn').css('opacity','1');
  })   
  $('#anim5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#anim6').addClass('animated fadeInUp').css('opacity','1');
  }) 
  $('.btn').hover(function(){
    $(this).addClass('animated flash');
  },function(){
    $(this).removeClass('animated flash');
  })  

  $('.prj').hover(function(){
    $(this).find('.view_project').addClass('animated flash infinite');
    $(this).find('.img_com_bordas').addClass('animated pulse infinite');
  },function(){
    $(this).find('.view_project').removeClass('animated flash infinite');
    $(this).find('.img_com_bordas').removeClass('animated pulse infinite');
  })
  $("#skillmenu").click(function() {
    $('html, body').animate({
      scrollTop: $("#skillslink").offset().top-70
    }, 2000);
  });   
  $("#portfoliomenu").click(function() {
    $('html, body').animate({
      scrollTop: $("#portfoliolink").offset().top-70
    }, 2000);
  });
  $("#jsmenu").click(function() {
    $('html, body').animate({
      scrollTop: $("#jslink").offset().top-70
    }, 2000);
  });     

  $("#buttonInvert").click(function(){
    $("#buttonInvert").parent().siblings().append("<h2>The reverse of "+$("#invertString").val()+" is: "+reverseString($("#invertString").val()) +"</h2>"); 
  })  

  $("#buttonFactorialize").click(function(){
    $("#buttonFactorialize").parent().siblings().append("<h2>The factorial of "+$("#factorializeNumber").val()+" is: "+factorialize($("#factorializeNumber").val()) +"</h2>"); 
  })     

  $("#palindromeButton").click(function(){
    if (palindrome($("#palindromeInput").val())) {
      $("#palindromeButton").parent().siblings().append("<h2>"+$("#palindromeInput").val()+" is a palindrome."); 
    }
    else{
      $("#palindromeButton").parent().siblings().append("<h2>"+$("#palindromeInput").val()+" it's NOT a palindrome."); 
    }
  })   

  $("#endingButton").click(function(){
    if (confirmEnding($("#endingInput").val(), $("#endingInput2").val())) {
      $("#endingButton").parent().siblings().append("<h2>The first string has the same end as the second string</h2>"); 
    }
    else{
      $("#endingButton").parent().siblings().append("<h2>The first string HAS NOT the same end as the second string</h2>");                     }
    })

  $("#repeatButton").click(function(){
    var result = repeatStringNumTimes($("#repeatInput").val(), $("#repeatInput2").val()); 
    $("#repeatButton").parent().siblings().append("<h2>"+result+"</h2>");                                      
  })    

  $("#longestButton").click(function(){
    var result = findLongestWord($("#longestInput").val()); 
    $("#longestButton").parent().siblings().append("<h2>"+result+"</h2>");                                      
  })    
  $("#titleButton").click(function(){
    var result = titleCase($("#titleInput").val()); 
    $("#titleButton").parent().siblings().append("<h2>"+result+"</h2>");                                      
  })                     
})