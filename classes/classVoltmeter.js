

function Voltmeter (args) {

  var args = args || {};

  this.id = args.id || "voltmeter-" + Math.floor(Math.random() * 100000);
  this.x = args.x || 600;
  this.y = args.y || 600;
  this.container = args.container || document.body;

  this.inputs = args.inputs || [];
  this.inputMax = args.inputMax || 6;
  this.dialMin = -1.5;
  this.dialMax = 1.5;
  this.needleAng = 0;





  this.update = function () {

    if ($("#" + this.id).length == 0) {
      this.container.appendChild(this.el());
    }

    var inV = 0;
    for (var i = 0; i < this.inputs.length; i++) {
      inV += Objects.Get(this.inputs[i]).output;
    }

    // number
    var v = Math.round(inV * 10) / 10;
    document.getElementById(this.id + "-text").innerHTML = v;

    // needle
    var angMax = 80;
    var angRange = angMax * 2;
    var angRatio = inV / (this.dialMax - this.dialMin);
    var tAng = angRange * angRatio;
    var angDiff = tAng - this.needleAng;
    this.needleAng += (angDiff * 0.1);
    this.needleAng = Math.max(-angMax, Math.min(angMax, this.needleAng));
    $('#' + this.id + "-needle").rotate(this.needleAng);


  }


  this.AddInput = function (inputName) {

    this.inputs.push(inputName);

  }



  this.die = function () {
    var el = document.getElementById(this.id);
    document.body.removeChild(el);
    Objects.delete(this);
  }


  this.el = function () {

    var el = document.createElement("div");
    el.id = this.id;
    el.style.setProperty("position", "absolute");
    el.style.setProperty("left", this.x + "px");
    el.style.setProperty("top", this.y + "px");
    el.style.setProperty("width", "60px");
    el.style.setProperty("height", "60px");
    el.style.setProperty("background-image", "url('img/voltmeter.png')");

    var needle = document.createElement("div");
    needle.id = this.id + "-needle";
    needle.style.setProperty("position", "absolute");
    needle.style.setProperty("left", "0px");
    needle.style.setProperty("bottom", "0px");
    needle.style.setProperty("width", "60px");
    needle.style.setProperty("height", "60px");
    needle.style.setProperty("background-image", "url('img/voltmeter-needle.png')");
    el.appendChild(needle);

    var mask = document.createElement("div");
    mask.style.setProperty("position", "absolute");
    mask.style.setProperty("left", "0px");
    mask.style.setProperty("bottom", "0px");
    mask.style.setProperty("width", "60px");
    mask.style.setProperty("height", "60px");
    mask.style.setProperty("background-image", "url('img/voltmeter-mask.png')");
    el.appendChild(mask);

    var textEl = document.createElement("div");
    textEl.id = this.id + "-text";
    textEl.style.setProperty("position", "absolute");
    textEl.style.setProperty("left", "0px");
    textEl.style.setProperty("bottom", "10px");
    textEl.style.setProperty("width", "60px");
    textEl.style.setProperty("font-family", "Arial");
    textEl.style.setProperty("font-size", "10px");
    textEl.style.setProperty("text-align", "center");
    textEl.style.setProperty("color", "#666666");
    textEl.style.setProperty("overflow", "hidden");
    el.appendChild(textEl);

    return el;

  }







}
