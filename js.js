
  //FARBE
function f(x){
  var box=document.getElementById("box"+x);

  if(box.style.color!="red"){
    box.style.color="red";
  }
  else{
    box.style.color="white";
  }
}

  //HIHAT
  function hihat(){
    var box1=document.getElementById("box1");

    if(box1.style.color!="red"){
      var hh=["4tel","Offbeat","8tel"];
      var xhh=Math.round(Math.random()*(hh.length-1));

      box1.innerHTML=hh[xhh];
    }
  }

  //BASSDRUM
  function bassdrum(){
    var box2=document.getElementById("box2");

    if(box2.style.color!="red"){
      var bd=[
        "4tel",
        "Offbeat",
        "Baião",
        "Tumbao",
        "Samba",
        "2:3 Son",
        "3:2 Son",
        "2:3 Rumba",
        "3:2 Rumba",
        "3er",
        "5er",
        "7er",
        "Second Line"
        ];
      var xbd=Math.round(Math.random()*(bd.length-1));

      box2.innerHTML=bd[xbd];
    }
  }

var snc=1; //snaredrum-choose

  //SNAREDRUM
  function snaredrum(){
    var box3=document.getElementById("box3");

    var sn;

    if(box3.style.color!="red"){
      //VARIANTE OHNE RIDE
      if(snc==1){ //snaredrum-choose
        sn=[
          "4tel",
          "Offbeat",
          "Baião",
          "Tumbao",
          "Samba",
          "2:3 Son",
          "3:2 Son",
          "2:3 Rumba",
          "3:2 Rumba",
          "3er",
          "5er",
          "7er",
          "Cascara",
          "Double Cascara",
          "Paradiddle 1",
          "Paradiddle 2",
          "Paradiddle 3",
          "Paradiddle 4",
          "Six Stroke Roll",
          "Mosambique",
          "Songo",
          "Shaker + Backbeat",
          "Double Stroke Roll"
          ];
      }
      //VARIANTE MIT RIDE
      else{
          sn=[
          "4tel",
          "Offbeat",
          "Baião",
          "Tumbao",
          "Samba",
          "2:3 Son",
          "3:2 Son",
          "2:3 Rumba",
          "3:2 Rumba",
          "3er",
          "5er",
          "7er",
          "Cascara",
          "Backbeat",
          ];
      }

      var xsn=Math.round(Math.random()*(sn.length-1));

      box3.innerHTML=sn[xsn];
    }
  }



  //RIDE CHECKER
var ridebox=document.getElementById("ridebox");
var rideknopf=document.getElementById("rideknopf");

ridebox.style.display="none";

function ridehide(){
  if(rideknopf.style.color!="white"){
    rideknopf.style.color="white";rideknopf.style.border="5px solid white";
    ridebox.style.display="inline";
    snc=2;
    snaredrum();
  }
  else{
    rideknopf.style.color="grey";rideknopf.style.border="5px solid grey";
    ridebox.style.display="none";
    snc=1;
  }
}


  //RIDE
  function ride(){
    var box4=document.getElementById("box4");

    if(box4.style.color!="red"){
      var rd=[
        "4tel",
        "8tel",
        "Offbeat",
        "♪♬♪♬",
        "♬♪♬♪",
        "Baião",
        "Tumbao",
      ];
      var xrd=Math.round(Math.random()*(rd.length-1));

      box4.innerHTML=rd[xrd];
    }
  }



reload();
function reload(){
  hihat();
  bassdrum();
  snaredrum();
  ride();
}
