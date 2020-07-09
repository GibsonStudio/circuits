

function Pot (args) {

  var args = args || {};


  this.id = args.id || "pot-" + Math.floor(Math.random() * 100000);
  this.x = args.x || 500;
  this.y = args.y || 300;

  this.val = typeof(args.val) !== 'undefined' ? args.val : 1;
  this.inputs = args.inputs || [];
  this.output = 0;

  this.clickedX = 0;
  this.clickedVal = this.val;
  this.adjust = false;

  var myThis = this;
  window.addEventListener("mousemove", function (event) { myThis.moveMe(event); });
  //window.addEventListener("mousedown", function (event) { myThis.startAdjust(event); });
  window.addEventListener("mouseup", function (event) { myThis.stopAdjust(event); });




  this.update = function () {

    if ($("#" + this.id).length == 0) {
      document.body.appendChild(this.el());
    }

    var inV = 0;
    for (var i = 0; i < this.inputs.length; i++) {
      inV += Objects.Get(this.inputs[i]).output;
    }

    this.output = inV * this.val;

    var bar = document.getElementById(this.id + "-bar");
    var barW = Math.max(0, (Math.min(44, (44 * this.val))));
    bar.style.setProperty("width", barW + "px");

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
    el.style.setProperty("position", "fixed");
    el.style.setProperty("left", this.x + "px");
    el.style.setProperty("top", this.y + "px");
    el.style.setProperty("width", "60px");
    el.style.setProperty("height", "60px");
    el.style.setProperty("cursor", "pointer");

    var bar = document.createElement("div");
    bar.id = this.id + "-bar";
    bar.style.setProperty("position", "absolute");
    bar.style.setProperty("left", "8px");
    bar.style.setProperty("top", "0px");
    bar.style.setProperty("width", "44px");
    bar.style.setProperty("height", "60px");
    bar.style.setProperty("background-color", "#00c389");
    el.appendChild(bar);

    var mask = document.createElement("div");
    mask.style.setProperty("position", "absolute");
    mask.style.setProperty("left", "0px");
    mask.style.setProperty("top", "0px");
    mask.style.setProperty("width", "60px");
    mask.style.setProperty("height", "60px");
    mask.style.setProperty("background-image", "url('img/pot.png')");
    el.appendChild(mask);

    var myThis = this;
    el.onmousedown = function (event) { myThis.startAdjust(event); }
    return el;

  }



  this.startAdjust = function (e) {

    this.clickedX = e.pageX;
    this.clickedVal = this.val;
    this.adjust = true;

  }


  this.stopAdjust = function (e) {

    this.adjust = false;

  }



  this.moveMe = function (e) {

    if (this.adjust == true) {

      var inc = (e.pageX - this.clickedX) * 0.02;
      var newVal = Math.max(0, Math.min(this.clickedVal + inc, 1));
      this.val = newVal;

    }

  }






}
