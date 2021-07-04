document.getElementById("button1").onclick = function () {
  var r = Math.round(Math.random() * 256);
  var g = Math.round(Math.random() * 256);
  var b = Math.round(Math.random() * 256);
  var colorr = "rgb(" + r + "," + g + "," + b + ")";
  //document.write(r + " " + g + " " + b);
  c = r + " " + g + " " + b;
  //document.getElementById("head").innerHTML = "asdf";
  document.getElementById("head").style.backgroundColor = colorr;
  document.getElementById("span").innerHTML = c;
  document.getElementById("span").style.color = colorr;
};
