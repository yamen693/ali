function myFunctionP() {
    
    var copyText = document.getElementById("P_num");
  
    
    copyText.select( );
    copyText.setSelectionRange(0,999999); 
  
    
    navigator.clipboard.writeText(copyText.value);
    
    
    alert("Copied the phone: " + copyText.value);
  }

    function myFunctionH(){
      
      var copyText = document.getElementById("H_num");
    
      
      copyText.select();
      copyText.setSelectionRange(0,999999); 
    
      
      navigator.clipboard.writeText(copyText.value);
      
      
      alert("Copied the home: " + copyText.value);
    }
   
        function myFunction() {
          
          var copyText = document.getElementById("hotline");
        
          
          copyText.select();
          copyText.setSelectionRange(0,999999); 
        
          
          navigator.clipboard.writeText(copyText.value);
          
          
          alert("Copied the hotline: " + copyText.value);}