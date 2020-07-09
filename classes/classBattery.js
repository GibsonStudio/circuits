

function Battery (args) {

  var args = args || {};


  this.id = args.id || "battery-" + Math.floor(Math.random() * 100000);
  this.x = args.x || 300;
  this.y = args.y || 300;

  this.output = typeof(args.output) !== 'undefined' ? args.output : 1.5;



  this.update = function () {

    if ($("#" + this.id).length == 0) {
      document.body.appendChild(this.el());
    }

    var myV = Math.round(this.output * 10) / 10;
    var el = document.getElementById(this.id + "-text");
    el.innerHTML = myV + "V";

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
    el.style.setProperty("background-image", "url('img/battery.png')");

    var textEl = document.createElement("div");
    textEl.id = this.id + "-text";
    textEl.style.setProperty("position", "absolute");
    textEl.style.setProperty("left", "5px");
    textEl.style.setProperty("top", "25px");
    textEl.style.setProperty("width", "40px");
    textEl.style.setProperty("font-family", "Arial");
    textEl.style.setProperty("font-size", "10px");
    textEl.style.setProperty("text-align", "center");
    textEl.style.setProperty("color", "#666666");
    textEl.style.setProperty("overflow", "hidden");
    el.appendChild(textEl);

    return el;

  }







}
