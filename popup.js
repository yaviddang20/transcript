let videojs = require("video.js");

let inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  let fileList = this.files;
  let file = fileList[fileList.length - 1];
  let newWindow = window.open("test.html");
  newWindow.onload = function () {
    let fileURL = newWindow.URL.createObjectURL(file);
    let source = document.createElement("source");
    source.setAttribute("src", fileURL);
    source.setAttribute("type", "video/mp4");
    newWindow.document.querySelector("title").innerHTML = file.name;
    let fileVid = newWindow.document.querySelector("video");
    fileVid.appendChild(source)
    fileVid.removeChild(fileVid.firstChild)
    let player = videojs(fileVid);
    player.ready(function () {
      player.src({ src: fileURL, type: "video/mp4" });
      player.load()
    });
    // newWindow.document.querySelector("title").innerHTML = JSON.stringify(player)
  };
}
