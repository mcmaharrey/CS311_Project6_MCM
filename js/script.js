function showTextBoxes(containerId, labels) {
  var container=document.getElementById(containerId);

  container.innerHTML="";

  var content=document.createElement("div");

  container.appendChild(content);

  for (var i=0; i<labels.length; i++) {
      var label=document.createElement("label");
      label.textContent=labels[i] + ": ";

      var textBox=document.createElement("input");
      textBox.type="text";
      textBox.name="textBox" + i;

      container.appendChild(label);
      container.appendChild(textBox);
      container.appendChild(document.createElement("br"));
  }
}

function calculatePosition() {
  var totalAssets=calculateTotal('textBoxContainer1') + calculateTotal('textBoxContainer2') + calculateTotal('textBoxContainer3');
  var totalLiabilities=calculateTotal('textBoxContainer4') + calculateTotal('textBoxContainer5');

  document.getElementById('totalAssets').textContent='Total Assets: $' + totalAssets.toFixed(2);
  document.getElementById('totalLiabilities').textContent='Total Liabilities: $' + totalLiabilities.toFixed(2);
  var position=totalAssets - totalLiabilities;
  document.getElementById('position').textContent='Position: $' + position.toFixed(2);
}

function calculateTotal(containerId) {
  var container=document.getElementById(containerId);
  var textBoxes=container.querySelectorAll('input');

  var subtotal=0;
  for (var i=0; i < textBoxes.length; i++) {
      subtotal+=parseFloat(textBoxes[i].value) || 0;
  }

  return subtotal;
}