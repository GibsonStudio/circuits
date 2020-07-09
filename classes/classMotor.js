

function Motor (args) {

  var args = args || {};

  this.id = args.id || "motor-" + Math.floor(Math.random() * 100000);
  this.x = args.x || 400;
  this.y = args.y || 100;
  this.container = args.container || document.body;

  this.inputs = args.inputs || [];
  this.inputMax = args.inputMax || 1.5;

  this.ang = 0;
  this.rSpeed = 0;
  this.rSpeedMax = 20;
  this.rAccel = 0.2;
  this.rDecel = 0.99;





  this.update = function () {

    if ($("#" + this.id).length == 0) {
      this.container.appendChild(this.el());
    }

    var inV = 0;
    for (var i = 0; i < this.inputs.length; i++) {
      inV += Objects.Get(this.inputs[i]).output;
    }

    if (inV != 0) { this.rSpeedMax = (Math.abs(inV) / this.inputMax) * 20; }

    this.rAccel = (inV / this.inputMax) * 0.8;

    if (this.rAccel) {
      this.rSpeed += this.rAccel;
    } else {
      this.rSpeed *= this.rDecel;
    }

    this.rSpeed = Math.min(Math.max(this.rSpeed, -this.rSpeedMax), this.rSpeedMax);

    this.ang += this.rSpeed;
    $('#' + this.id + '-rotor').rotate(this.ang);

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
    el.style.setProperty("background-image", "url('img/motor.png')");

    // add rotor
    var r = document.createElement("div");
    r.id = this.id + "-rotor";
    r.style.setProperty("position", "absolute");
    r.style.setProperty("left", "0px");
    r.style.setProperty("top", "0px");
    r.style.setProperty("width", "60px");
    r.style.setProperty("height", "60px");
    r.style.setProperty("background-image", "url('img/motor-rotor.png')");

    el.appendChild(r);

    return el;

  }







}
