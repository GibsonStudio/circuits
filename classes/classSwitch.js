

function Switch (args) {

  var args = args || {};


  this.id = args.id || "switch-" + Math.floor(Math.random() * 100000);
  this.x = args.x || 100;
  this.y = args.y || 300;
  this.container = args.container || document.body;

  this.on = typeof(args.on) !== 'undefined' ? args.on : false;
  this.inputs = args.inputs || [];
  this.output = 0;






  this.update = function () {

    if ($("#" + this.id).length == 0) {
      this.container.appendChild(this.el());
    }

    var inV = 0;
    for (var i = 0; i < this.inputs.length; i++) {
      inV += Objects.Get(this.inputs[i]).output;
    }

    if (this.on) {
      this.output = inV;
    } else {
      this.output = 0;
    }

  }



  this.AddInput = function (inputName) {
    this.inputs.push(inputName);
  }



  this.die = function () {
    var el = document.getElementById(this.id);
    document.body.removeChild(el);
    Objects.delete(this);
  }


  this.toggle = function () {

    this.on = !this.on

    var el = document.getElementById(this.id);
    var im = this.on ? 'toggle-ON.png' : 'toggle-OFF.png';
    el.style.setProperty("background-image", "url('img/" + im + "')");

  }


  this.el = function () {

    var im = this.on ? 'toggle-ON.png' : 'toggle-OFF.png';

    var el = document.createElement("div");
    el.id = this.id;
    el.style.setProperty("position", "absolute");
    el.style.setProperty("left", this.x + "px");
    el.style.setProperty("top", this.y + "px");
    el.style.setProperty("width", "60px");
    el.style.setProperty("height", "60px");
    el.style.setProperty("background-image", "url('img/" + im + "')");
    el.style.setProperty("cursor", "pointer");

    var myThis = this;
    el.onmousedown = function (event) { myThis.toggle(event); }

    return el;

  }







}
