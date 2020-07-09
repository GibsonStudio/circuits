
var Objects;


function init ()
{

  initVars();

  var el = document.getElementById("my-container");

  // add battery
  var b = new Battery({ id:"battery1", x:40, y:40, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch1", x:120, y:40, container:el });
  Objects.add(s);

  // add an inverter
  var i = new Inverter({ id:"inverter1", x:200, y:40, container:el });
  Objects.add(i);

  // add motor
  var m = new Motor({ id:"motor1", x:280, y:40, container:el });
  Objects.add(m);

  Objects.Get("motor1").AddInput("inverter1");
  Objects.Get("inverter1").AddInput("switch1");
  Objects.Get("switch1").AddInput("battery1");








  // add battery
  var b = new Battery({ id:"battery2", x:40, y:140, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch2", x:120, y:140, container:el });
  Objects.add(s);

  // add motor
  var m = new Motor({ id:"motor2", x:200, y:140, container:el });
  Objects.add(m);

  Objects.Get("motor2").AddInput("switch2");
  Objects.Get("switch2").AddInput("battery2");





  // add battery
  var b = new Battery({ id:"battery3", x:40, y:240, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch3", x:120, y:240, container:el });
  Objects.add(s);

  // add a bulb
  var b = new Bulb({ id:"bulb3", x:200, y:240, container:el });
  Objects.add(b);

  Objects.Get("switch3").AddInput("battery3");
  Objects.Get("bulb3").AddInput("switch3");






  // add battery
  var b = new Battery({ id:"battery4", x:40, y:340, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch4", x:120, y:340, container:el });
  Objects.add(s);

  // add a pot
  var p = new Pot({ id:"pot4", x:200, y:340, val:0.5, container:el });
  Objects.add(p);

  // add a bulb
  var b = new Bulb({ id:"bulb4", x:280, y:340, container:el });
  Objects.add(b);

  Objects.Get("switch4").AddInput("battery4");
  Objects.Get("pot4").AddInput("switch4");
  Objects.Get("bulb4").AddInput("pot4");







  // add battery
  var b = new Battery({ id:"battery5", x:40, y:440, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch5", x:120, y:440, container:el });
  Objects.add(s);

  // add a pot
  var p = new Pot({ id:"pot5", x:200, y:440, val:0.5, container:el });
  Objects.add(p);

  // add motor
  var m = new Motor({ id:"motor5", x:280, y:440, container:el });
  Objects.add(m);

  Objects.Get("motor5").AddInput("pot5");
  Objects.Get("pot5").AddInput("switch5");
  Objects.Get("switch5").AddInput("battery5");






  // add battery
  var b = new Battery({ id:"battery6", x:40, y:540, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch6", x:120, y:540, container:el });
  Objects.add(s);

  // add a pot
  var p = new Pot({ id:"pot6", x:200, y:540, val:0.5, container:el });
  Objects.add(p);

  // add an inverter
  var i = new Inverter({ id:"inverter6", x:280, y:540, container:el });
  Objects.add(i);

  // add voltmeter
  var v = new Voltmeter({ id:"voltmeter6", x:360, y:540, container:el });
  Objects.add(v);

  Objects.Get("voltmeter6").AddInput("inverter6");
  Objects.Get("inverter6").AddInput("pot6");
  Objects.Get("pot6").AddInput("switch6");
  Objects.Get("switch6").AddInput("battery6");





  // add battery
  var b = new Battery({ id:"battery7", x:40, y:640, container:el });
  Objects.add(b);

  // add a switch
  var s = new Switch({ id:"switch7-1", x:120, y:640, container:el });
  Objects.add(s);

  // add a switch
  var s = new Switch({ id:"switch7-2", x:200, y:640, container:el });
  Objects.add(s);

  // add a switch
  var s = new Switch({ id:"switch7-3", x:280, y:640, container:el });
  Objects.add(s);

  // add a switch
  var s = new Switch({ id:"switch7-4", x:360, y:640, container:el });
  Objects.add(s);

  // add a bulb
  var b = new Bulb({ id:"bulb7", x:440, y:640, container:el });
  Objects.add(b);

  Objects.Get("bulb7").AddInput("switch7-4");
  Objects.Get("switch7-4").AddInput("switch7-3");
  Objects.Get("switch7-3").AddInput("switch7-2");
  Objects.Get("switch7-2").AddInput("switch7-1");
  Objects.Get("switch7-1").AddInput("battery7");










  animate();

}



function initVars ()
{

  Objects = new Objects();

}







function animate ()
{

  window.requestAnimationFrame(animate);

  // update objects
  Objects.update();



}
