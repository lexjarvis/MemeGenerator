function update_image(){
    var img = document.querySelector('img'); // Returns the first img element
    var file = document.querySelector('input[type=file]').files[0]; // Returns the first file element found
    img.src =  window.URL.createObjectURL(file);
  
  }
  
  
function update_top_text(){
    document.getElementById("top_message").innerHTML = document.getElementById("top_meme_text").value;
}
function update_bottom_text(){
    document.getElementById("bottom_message").innerHTML = document.getElementById("bottom_meme_text").value;
}

  
