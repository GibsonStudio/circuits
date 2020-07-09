

function Bulb (args) {

  var args = args || {};

  this.id = args.id || "bulb-" + Math.floor(Math.random() * 100000);
  this.x = args.x || 100;
  this.y = args.y || 100;

  this.inputs = args.inputs || [];
  this.inputMax = args.inputMax || 1.5;





  this.update = function () {

    if ($("#" + this.id).length == 0) {
      document.body.appendChild(this.el());
    }

    //TODO - blow bulb if myV is too high
    var inV = 0;
    for (var i = 0; i < this.inputs.length; i++) {
      inV += Objects.Get(this.inputs[i]).output;
    }

    var opacity = Math.abs(inV) / this.inputMax;
    var fillament = document.getElementById(this.id + "-fillament");
    fillament.style.setProperty("opacity", opacity);

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
    el.style.setProperty("background-image", "url('img/bulb.png')");

    var bulb = document.createElement("div");
    bulb.id = this.id + "-fillament";
    bulb.style.setProperty("position", "absolute");
    bulb.style.setProperty("left", "0px");
    bulb.style.setProperty("top", "0px");
    bulb.style.setProperty("width", "60px");
    bulb.style.setProperty("height", "60px");
    bulb.style.setProperty("background-image", "url('img/bulb-ON.png')");
    bulb.style.setProperty("opacity", "0");
    el.appendChild(bulb);

    return el;

  }







}
