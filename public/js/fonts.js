function GenerateFont(){
    let input = document.getElementById('textInput').value;
  
    // check the input if it is empty then set the default value examples: Poppins
    if(input.trim() === ""){
      document.getElementById('roboto-slab').innerHTML = "Roboto Slab";
      document.getElementById('playfair-display').innerHTML = "Playfair Display";
      document.getElementById('meriweather').innerHTML = "Meriweather";
      document.getElementById('bitter').innerHTML = "Bitter";
      document.getElementById('roboto').innerHTML = "Roboto";
      document.getElementById('open-sans').innerHTML = "Open Sans";
      document.getElementById('montserrat').innerHTML = "Montserrat";
      document.getElementById('nunito-sans').innerHTML = "Nunito San";
      document.getElementById('oswald').innerHTML = "Oswald";
      document.getElementById('cormorant').innerHTML = "Cormorant";
      document.getElementById('eczar').innerHTML = "Eczar";
      document.getElementById('source-sans').innerHTML = "Source Sans";
      document.getElementById('fraunces').innerHTML = "Fraunces";
      document.getElementById('archivo').innerHTML = "Archivo";
      document.getElementById('libre-baskerville').innerHTML = "Libre Baskerville";
      
    } else {

      // get the font value from the input textbox
      document.getElementById('roboto-slab').innerHTML = input;
      document.getElementById('playfair-display').innerHTML = input;
      document.getElementById('meriweather').innerHTML = input;
      document.getElementById('bitter').innerHTML = input;
      document.getElementById('roboto').innerHTML = input;
      document.getElementById('open-sans').innerHTML = input;
      document.getElementById('montserrat').innerHTML = input;
      document.getElementById('nunito-sans').innerHTML = input;
      document.getElementById('oswald').innerHTML = input;
      document.getElementById('cormorant').innerHTML = input;
      document.getElementById('eczar').innerHTML = input;
      document.getElementById('source-sans').innerHTML = input;
      document.getElementById('fraunces').innerHTML = input;
      document.getElementById('archivo').innerHTML = input;
      document.getElementById('libre-baskerville').innerHTML = input;
    }
  };