var version=1.0;

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
        "Quarter",
        "Offbeat",
        "Baião",
        "Tumbao",
        "Samba",
        "2:3 Son",
        "3:2 Son",
        "2:3 Rumba",
        "3:2 Rumba",
        "Groups of 3",
        "Groups of 5",
        "Groups of 7",
        "Second Line",
        "Second sixteenth",
        "Last sixteenth"
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
          "Double Cascara",
          "Paradiddles",
          "Six Stroke Roll",
          "Swiss Triplet",
          "Mosambique",
          "Songo",
          "Shaker + Backbeat",
          "Double Stroke Roll",
          "2:3 Polyrhythm",
          "3:4 Polyrhythm",
          "Single Stroke Roll"
          ];
      }
      //VARIANTE MIT RIDE
      else{
          sn=[
          "Quarter",
          "Offbeat",
          "Baião",
          "Tumbao",
          "Samba",
          "2:3 Son",
          "3:2 Son",
          "2:3 Rumba",
          "3:2 Rumba",
        "Groups of 3",
        "Groups of 5",
        "Groups of 7",
          "Cascara",
          "Backbeat",
          "Second sixteenth",
          "Last sixteenth",
          "One handed roll"
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
    rideknopf.style.color="#484848";rideknopf.style.border="5px solid #484848";
    ridebox.style.display="none";
    snc=1;
  }
}


  //RIDE
  function ride(){
    var box4=document.getElementById("box4");

    if(box4.style.color!="red"){
      var rd=[
        "Quarter",
        "8th",
        "16th",
        "Offbeat",
        "♪♬♪♬",
        "♬♪♬♪",
        "Baião",
        "Tumbao",
        "Second sixteenth",
        "Last sixteenth"

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
