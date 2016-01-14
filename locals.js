command: "networksetup -getinfo Wi-Fi",

refreshFrequency: 60000,

render: function(output) {
  return "<div id='locals'><ul></ul></div>";
},

update: function(output) {
  var i, lines = output.split("\n");
  lines.pop();
  var html = "";
  for(i = 0; i < lines.length; i++){
    html += "<li>" + lines[i] + "</li>";
  }
  $("#locals ul").empty();
  $("#locals ul").html(html);
},

style: "        \n\
  top: 60px     \n\
  left: 0px     \n\
  color: #fff     \n\
"
