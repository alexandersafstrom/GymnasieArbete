var password="5f4dcc3b5aa765d61d8327deb882cf99";
        var userInput = "";
    
    jQuery(document).ready(function($) {
            console.log("Document loaded!");
            if (userInput==password){
                  $(".main").css("display:all; z-index:20;");
                        console.log("userInput is equal to password");
        } else {
         $(".main").css("display:none; z-index:-20;");
                                        console.log("userInput is not equal to password");

        }
            
      $('#md5').click(function(){
        userInput= $.MD5($('#input').val());
        
        if (userInput==password){
                  $(".main").css("display:all; z-index:20;");

        } else {
         $(".main").css("display:none; z-index:-20;");
        }
      });
      
      
    });
