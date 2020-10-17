function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
// Start the download of yournewfile.txt file with the content from the text area
    var text = document.getElementById("text-val").value;
    var filename = "nagasri_muvva_resume.txt";
    
    download(filename, text);
}, false);