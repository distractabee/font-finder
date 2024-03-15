function GenerateFont(){
    let input = document.getElementById('textInput').value;
  
    // check the input if it is empty then set the default value examples: Poppins
    if(input.trim() === ""){
      document.getElementById('bitter').innerHTML = "Bitter";
      document.getElementById('oswald').innerHTML = "Oswald";
      document.getElementById('playfair-display').innerHTML = "Playfair Display";
      document.getElementById('meriweather').innerHTML = "Meriweather";
      document.getElementById('roboto').innerHTML = "Roboto";
      document.getElementById('open-sans').innerHTML = "Open Sans";
  
    } else {
      // get the font value from the input textbox
      document.getElementById('bitter').innerHTML = input;
      document.getElementById('oswald').innerHTML = input;
      document.getElementById('playfair-display').innerHTML = input;
      document.getElementById('meriweather').innerHTML = input;
      document.getElementById('roboto').innerHTML = input;
      document.getElementById('open-sans').innerHTML = input;
    }
  };