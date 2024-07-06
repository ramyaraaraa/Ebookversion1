// Get the video element
var audio;
var emptyAudio;
var count=0;
const audio1 = document.getElementById('title');
const audio2 = document.getElementById('apg34');
const audio3 = document.getElementById('apg56');
const audio4 = document.getElementById('apg78');
const audio5 = document.getElementById('apg910');
const audio6 = document.getElementById('apg1112');
const audio7 = document.getElementById('apg1314');
const audio8 = document.getElementById('apg1516');
const audio9 = document.getElementById('apg1718');
const audio10 = document.getElementById('apg1920');
const audio11 = document.getElementById('apg2122');
const audio12 = document.getElementById('apg2324');
const audio13 = document.getElementById('apg2526');
const audio14 = document.getElementById('apg2728');

var nextPage;
var prevPage;
const img1 = document.getElementById('page1');
const img2 = document.getElementById('page2');
const img3 = document.getElementById('page3');
const img4 = document.getElementById('page4');
const img5 = document.getElementById('page5');
const img6 = document.getElementById('page6');
const img7 = document.getElementById('page7');
const img8 = document.getElementById('page8');
const img9 = document.getElementById('page9');
const img10 = document.getElementById('page10');
const img11 = document.getElementById('page11');
const img12 = document.getElementById('page12');
const img13 = document.getElementById('page13');
const img14 = document.getElementById('page14');
const img15 = document.getElementById('page15');
const img16 = document.getElementById('page16');
const img17 = document.getElementById('page17');

const vid1 = document.getElementById('page1vid');
const vid2 = document.getElementById('page2vid');
const vid3 = document.getElementById('page3vid');
const vid4 = document.getElementById('page4vid');
const vid5 = document.getElementById('page5vid');


const timeKeeper = document.getElementById('playtime');

var currentPage = 1;

var text = document.getElementById('textbox');

var sen1;
var sen2;
var sen3;
var sen4;
var sen5;
var sen6;
var sen7;
var sen8;
var sen9;
var sen10;
var sen11;
var sen12;
var sen13;
var sen14;
var sen15;
var sen16;
var sen17;
var sen18;
var sen19;
var sen20;
var sen21;
var sen22;
var sen23;
var sen24;
var sen25;
var sen26;
var sen27;
var sen28;
var sen29;
var sen30;
var sen31;
var sen32;
var sen33;
var sen34;
var sen35;
var sen36;
var sen37;
var sen38;
var sen39;
var sen40;
var sen41;
var sen42;
var sen43;
var sen44;
var sen45;
var sen46;
var sen47;
var sen48;

var stnEmpty;

var stn1 = document.getElementById('sentence1');
var stn1a = document.getElementById('sentence1a');
var stn1b = document.getElementById('sentence1b');
var stn1c = document.getElementById('sentence1c');
var stn1d = document.getElementById('sentence1d');
var stn2 = document.getElementById('sentence2');
var stn2a = document.getElementById('sentence2a');
var stn2b = document.getElementById('sentence2b');
var stn2c = document.getElementById('sentence2c');
var stn3 = document.getElementById('sentence3');
var stn3a = document.getElementById('sentence3a');
var stn3b = document.getElementById('sentence3b');
var stn4 = document.getElementById('sentence4');
var stn4a = document.getElementById('sentence4a');
var stn5 = document.getElementById('sentence5');
var stn5a = document.getElementById('sentence5a');
var stn5b = document.getElementById('sentence5b');
var stn6 = document.getElementById('sentence6');
var stn6a = document.getElementById('sentence6a');
var stn6b = document.getElementById('sentence6b');
var stn6c = document.getElementById('sentence6c');
var stn6d = document.getElementById('sentence6d');
var stn6e = document.getElementById('sentence6e');
var stn6f = document.getElementById('sentence6f');
var stn6g = document.getElementById('sentence6g');
var stn6h = document.getElementById('sentence6h');
var stn7 = document.getElementById('sentence7');
var stn7a = document.getElementById('sentence7a');
var stn7b = document.getElementById('sentence7b');
var stn7c = document.getElementById('sentence7c');
var stn7d = document.getElementById('sentence7d');
var stn7e = document.getElementById('sentence7e');
var stn8 = document.getElementById('sentence8');
var stn8a = document.getElementById('sentence8a');
var stn8b = document.getElementById('sentence8b');
var stn8c = document.getElementById('sentence8c');
var stn8d = document.getElementById('sentence8d');
var stn8e = document.getElementById('sentence8e');
var stn9 = document.getElementById('sentence9');
var stn9a = document.getElementById('sentence9a');
var stn9b = document.getElementById('sentence9b');
var stn10 = document.getElementById('sentence10');
var stn10a = document.getElementById('sentence10a');
var stn10b = document.getElementById('sentence10b');
var stn10c = document.getElementById('sentence10c');
var stn11 = document.getElementById('sentence11');
var stn11a = document.getElementById('sentence11a');
var stn11b = document.getElementById('sentence11b');
var stn11c = document.getElementById('sentence11c');
var stn11d = document.getElementById('sentence11d');
var stn12 = document.getElementById('sentence12');
var stn12a = document.getElementById('sentence12a');
var stn12b = document.getElementById('sentence12b');
var stn12c = document.getElementById('sentence12c');
var stn13 = document.getElementById('sentence13');
var stn13a = document.getElementById('sentence13a');
var stn13b = document.getElementById('sentence13b');
var stn14 = document.getElementById('sentence14');
var stn14a = document.getElementById('sentence14a');
var stn14b = document.getElementById('sentence14b');
var stn15 = document.getElementById('sentence15');
var stn16 = document.getElementById('sentence16');
var stn17 = document.getElementById('sentence17');
var stn17a = document.getElementById('sentence17a');
var stn17b = document.getElementById('sentence17b');
var stn17c = document.getElementById('sentence17c');
var stn18 = document.getElementById('sentence18');
var stn18a = document.getElementById('sentence18a');
var stn18b = document.getElementById('sentence18b');
var stn18c = document.getElementById('sentence18c');
var stn19 = document.getElementById('sentence19');
var stn19a = document.getElementById('sentence19a');
var stn20 = document.getElementById('sentence20');
var stn20a = document.getElementById('sentence20a');
var stn20b = document.getElementById('sentence20b');
var stn21 = document.getElementById('sentence21');
var stn21a = document.getElementById('sentence21a');
var stn22 = document.getElementById('sentence22');
var stn22a = document.getElementById('sentence22a');
var stn23 = document.getElementById('sentence23');
var stn23a = document.getElementById('sentence23a');
var stn23b = document.getElementById('sentence23b');
var stn23c = document.getElementById('sentence23c');
var stn23d = document.getElementById('sentence23d');
var stn23e = document.getElementById('sentence23e');
var stn23f = document.getElementById('sentence23f');
var stn23g = document.getElementById('sentence23g');
var stn24 = document.getElementById('sentence24');
var stn24a = document.getElementById('sentence24a');
var stn24b = document.getElementById('sentence24b');
var stn25 = document.getElementById('sentence25');
var stn25a = document.getElementById('sentence25a');
var stn25b = document.getElementById('sentence25b');
var stn25c = document.getElementById('sentence25c');
var stn26 = document.getElementById('sentence26');
var stn26a = document.getElementById('sentence26a');
var stn26b = document.getElementById('sentence26b');
var stn26c = document.getElementById('sentence26c');
var stn26d = document.getElementById('sentence26d');
var stn27 = document.getElementById('sentence27');
var stn27a = document.getElementById('sentence27a');
var stn27b = document.getElementById('sentence27b');
var stn27c = document.getElementById('sentence27c');
var stn27d = document.getElementById('sentence27d');
var stn27e = document.getElementById('sentence27e');
var stn28 = document.getElementById('sentence28');
var stn28a = document.getElementById('sentence28a');
var stn28b = document.getElementById('sentence28b');
var stn28c = document.getElementById('sentence28c');
var stn28d = document.getElementById('sentence28d');
var stn28e = document.getElementById('sentence28e');
var stn28f = document.getElementById('sentence28f');
var stn29 = document.getElementById('sentence29');
var stn30 = document.getElementById('sentence30');
var stn31 = document.getElementById('sentence31');
var stn31a = document.getElementById('sentence31a');
var stn32 = document.getElementById('sentence32');
var stn32a = document.getElementById('sentence32a');
var stn32b = document.getElementById('sentence32b');
var stn33 = document.getElementById('sentence33');
var stn33a = document.getElementById('sentence33a');
var stn34 = document.getElementById('sentence34');
var stn34a = document.getElementById('sentence34a');
var stn35 = document.getElementById('sentence35');
var stn36 = document.getElementById('sentence36');
var stn37 = document.getElementById('sentence37');
var stn37a = document.getElementById('sentence37a');
var stn38 = document.getElementById('sentence38');
var stn38a = document.getElementById('sentence38a');
var stn39 = document.getElementById('sentence39');
var stn39a = document.getElementById('sentence39a');
var stn39b = document.getElementById('sentence39b');
var stn39c = document.getElementById('sentence39c');
var stn39d = document.getElementById('sentence39d');
var stn39e = document.getElementById('sentence39e');
var stn39f = document.getElementById('sentence39f');
var stn40 = document.getElementById('sentence40');
var stn40a = document.getElementById('sentence40a');
var stn41 = document.getElementById('sentence41');
var stn41a = document.getElementById('sentence41a');
var stn41b = document.getElementById('sentence41b');
var stn42 = document.getElementById('sentence42');
var stn42a = document.getElementById('sentence42a');
var stn43 = document.getElementById('sentence43');
var stn43a = document.getElementById('sentence43a');

var stn44 = document.getElementById('sentence44');
var stn45 = document.getElementById('sentence45');
var stn46 = document.getElementById('sentence46');
var stn47 = document.getElementById('sentence47');
var stn48 = document.getElementById('sentence48');
var stn49 = document.getElementById('sentence49');
var stn49b = document.getElementById('sentence49b');
var stn50 = document.getElementById('sentence50');
var stn50b = document.getElementById('sentence50b');
var stn51 = document.getElementById('sentence51');
var stn52 = document.getElementById('sentence52');
var stn53 = document.getElementById('sentence53');
var stn54 = document.getElementById('sentence54');
var stn55 = document.getElementById('sentence55');
var stn56 = document.getElementById('sentence56');
var stn57 = document.getElementById('sentence57');
var stn58 = document.getElementById('sentence58');
var stn59 = document.getElementById('sentence59');
var stn60 = document.getElementById('sentence60');
var stn60a = document.getElementById('sentence60a');
var stn61 = document.getElementById('sentence61');
var stn61a = document.getElementById('sentence61a');
var stn62 = document.getElementById('sentence62');
var stn63 = document.getElementById('sentence63');
var stn64 = document.getElementById('sentence64');
var stn65 = document.getElementById('sentence65');
var stn65a = document.getElementById('sentence65a');
var stn66 = document.getElementById('sentence66');
var stn66a = document.getElementById('sentence66a');
var stn67 = document.getElementById('sentence67');
var stn67b = document.getElementById('sentence67b');
var stn68 = document.getElementById('sentence68');
var stn68a = document.getElementById('sentence68a');
var stn68b = document.getElementById('sentence68b');
var stn69 = document.getElementById('sentence69');
var stn70 = document.getElementById('sentence70');
var stn71 = document.getElementById('sentence71');
var stn72 = document.getElementById('sentence72');
var stn73 = document.getElementById('sentence73');
var stn74 = document.getElementById('sentence74');
var stn75 = document.getElementById('sentence75');
var stn76 = document.getElementById('sentence76');
var stn77 = document.getElementById('sentence77');
var stn78 = document.getElementById('sentence78');
var stn79 = document.getElementById('sentence79');
var stn80 = document.getElementById('sentence80');
var stn81 = document.getElementById('sentence81');
var stn82 = document.getElementById('sentence82');
var stn82a = document.getElementById('sentence82a');
var stn83 = document.getElementById('sentence83');
var stn84 = document.getElementById('sentence84');
var stn85 = document.getElementById('sentence85');
var stn85a = document.getElementById('sentence85a');
var stn86 = document.getElementById('sentence86');
var stn87 = document.getElementById('sentence87');
var stn88 = document.getElementById('sentence88');
var stn89 = document.getElementById('sentence89');
var stn90 = document.getElementById('sentence90');
var stn91 = document.getElementById('sentence91');
var stn92 = document.getElementById('sentence92');
var stn93 = document.getElementById('sentence93');
var stn94 = document.getElementById('sentence94');
var stn95 = document.getElementById('sentence95');
var stn96 = document.getElementById('sentence96');
var stn97 = document.getElementById('sentence97');
var stn98 = document.getElementById('sentence98');
var stn99 = document.getElementById('sentence99');
var stn100 = document.getElementById('sentence100');
var stn101 = document.getElementById('sentence101');
var stn102 = document.getElementById('sentence102');
var stn103 = document.getElementById('sentence103');
var stn104 = document.getElementById('sentence104');
var stn105 = document.getElementById('sentence105');
var stn106 = document.getElementById('sentence106');
var stn107 = document.getElementById('sentence107');
var stn108 = document.getElementById('sentence108');
var stn109 = document.getElementById('sentence109');
var stn110 = document.getElementById('sentence110');
var stn111 = document.getElementById('sentence111');
var stn112 = document.getElementById('sentence112');
var stn113 = document.getElementById('sentence113');
var stn114 = document.getElementById('sentence114');
var stn115 = document.getElementById('sentence115');
var stn116 = document.getElementById('sentence116');
var stn117 = document.getElementById('sentence117');
var stn118 = document.getElementById('sentence118');
var stn119 = document.getElementById('sentence119');
var stn120 = document.getElementById('sentence120');

var index = 0;
var currentTimeStamps = [];
var timestamp1 = [0,6,7,8,9,12,14,16,17,20,23,26,29,31,33,35,36,39,41,42,43,45,46,49,52,53,56,58,61,64,68,70,73,76,78,80,81,83,86,87,89];
var timestamp2 = [0,2,4,7,10,12,14,18,22,25,28,31,34,36,38,41,43,46,49,52,55,57,59,62,65,67,69,74,75,78,81,83,85,88,90,92,95,97];
var timestamp3 = [0,4,7,10,12,15,17,20,23,25,26,31,32,34,38,42,46,48,51,54,57,59,61,63,67,70,73,75,78,80,83,85,87,89,91];
var timestamp4 = [0,4,8,10,13,16,18,20,23,26,30,32,35,38,41,45,50,55,57,60,63,65,69.5,73,75,81,83,87,89,92,97];

var textshow1 = ["sen1","sen1a","sen1b","sen1c","sen1d","sen2","sen3","sen4","sen5","sen6","sen7","sen8"]

var au = document.getElementById("title1");



function GoPrev(){
	document.getElementById("myModal").style.display = "none";
	document.getElementById("myModal2").style.display = "none";
	document.getElementById("myModal3").style.display = "none";
	document.getElementById("myModal4").style.display = "none";
	//alert(currentPage)
  currentPage--;
  if(audio != emptyAudio){
    audio.pause();
    audio.currentTime = 0;
  }
  timeSlider.value = 0;
  if(currentPage < 1){
    currentPage = 1;
  }
  const a = CheckPageItem(currentPage);
  a.style.visibility = 'visible';
  const b = CheckPageItem(currentPage+1);
  b.style.visibility = 'hidden'
  ResetVideoVisibility();
  UpdatePage(currentPage);
}

function GoNext(){
	document.getElementById("myModal").style.display = "none";
	document.getElementById("myModal2").style.display = "none";
	document.getElementById("myModal3").style.display = "none";
	document.getElementById("myModal4").style.display = "none";
	
  //currentPage++;
  if(audio != emptyAudio){
    audio.pause();
    audio.currentTime = 0;
  }
  timeSlider.value = 0;
  if(currentPage == 8){
    currentPage = 8;
  }else{
	    currentPage++;
  }
	//alert(currentPage);
  const a = CheckPageItem(currentPage);
  a.style.visibility = 'visible';
  const b = CheckPageItem(currentPage-1);
  b.style.visibility = 'hidden'
  ResetVideoVisibility();
  UpdatePage(currentPage);
}

function Replay(){
  timeSlider.value = 0;
  if(audio != emptyAudio){
      audio.currentTime = 0;
      audio.play();
  }
}


function myFunction()
{
	UpdatePage(currentPage);
	//audio.play();
	document.getElementById("startb").style.display="none";
	document.getElementById("overlaybackground").style.display="none";
	
}
function UpdatePage(index){
  switch(index){
    case 1:
	audio = emptyAudio;
		      document.getElementById('page1vid').style.visibility = 'visible';
		   vid1.style.visibility = 'visible';
		   document.getElementById('page1vid').play();
		  // UpdateSlider();
      break;
    case 2:
		 document.getElementById('page1vid').muted=true;
		   document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		   document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio1;
      UpdateSlider();
      ResetParagraph();
	  break;
    case 3:
		  	document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio2;
      UpdateSlider();
      ResetParagraph();
	   vid2.style.visibility = 'visible';
	   document.getElementById('page2vid').play();
      document.getElementById('Page3').style.visibility = 'visible';
      sen1 = stn1;
	  sen2 = stn1a;
	  sen3 = stn1b;
	  sen4 = stn1c;
	  sen5 = stn1d;
	  sen6 = stn2;
      sen7 = stn2a;
      sen8 = stn2b;
      sen9 = stn2c;
	  sen10 = stn3;
      sen11 = stn3a;
	  sen12 = stn3b;
      sen13 = stn4;
      sen14 = stn4a;
      sen15 = stn5;
      sen16 = stn5a;
      sen17 = stn5b;
      sen18 = stn6;
      sen19 = stn6a;
      sen20 = stn6b;
      sen21 = stn6c;
	  sen22 = stn6d;
	  sen23 = stn6e;
	  sen24 = stn6f;
	  sen25 = stn6g;
	  sen26 = stn6h;
	  sen27 = stn7;
	  sen28 = stn7a;
	  sen29 = stn7b;
	  sen30 = stn7c;
	  sen31 = stn7d;
	  sen32 = stn7e;
	  sen33 = stn8;
	  sen34 = stn8a;
	  sen35 = stn8b;
	  sen36 = stn8c;
	  sen37 = stn8d;
	  sen38 = stn8e;
	  sen39 = stn9;
	  sen40 = stn9a;
	  sen41 = stn9b;
      currentTimeStamps = timestamp1;
      break;
    case 4:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio3;
      UpdateSlider();
      ResetParagraph();
		   vid3.style.visibility = 'visible';
	   document.getElementById('page3vid').play();
      document.getElementById('Page4').style.visibility = 'visible';
      sen1 = stn10;
	  sen2 = stn10a;
	  sen3 = stn10b;
	  sen4 = stn10c;
	  sen5 = stn11;
	  sen6 = stn11a;
	  sen7 = stn11b;
      sen8 = stn11c;
      sen9 = stn11d;
      sen10 = stn12;
      sen11 = stn12a;
      sen12 = stn12b;
      sen13 = stn12c;
      sen14 = stn13;
      sen15 = stn13a;
      sen16 = stn13b;
      sen17 = stn14;
      sen18 = stn14a;
      sen19 = stn14b;
      sen20 = stn15;
	  sen21 = stn16;
	  sen22 = stn17;
	  sen23 = stn17a;
	  sen24 = stn17b;
	  sen25 = stn17c;
	  sen26 = stn18;
	  sen27 = stn18a;
	  sen28 = stn18b;
	  sen29 = stn18c;
	  sen30 = stn19;
	  sen31 = stn19a;
	  sen32 = stn20;
	  sen33 = stn20a;
	  sen34 = stn20b;
	  sen35 = stn21;
	  sen36 = stn21a;
	  sen37 = stn22;
	  sen38 = stn22a;
	  sen39 = stnEmpty;
	  sen40 = stnEmpty;
	  sen41 = stnEmpty;
      currentTimeStamps = timestamp2;
      break;
    case 5:
		   document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio4;
      UpdateSlider();
      ResetParagraph();
    //  vid3.style.visibility = 'visible';
		  vid4.style.visibility = 'visible';
	   document.getElementById('page4vid').play();
      document.getElementById('Page5').style.visibility = 'visible';
      sen1 = stn23;
      sen2 = stn23a;
      sen3 = stn23b;
      sen4 = stn23c;
      sen5 = stn23d;
      sen6 = stn23e;
      sen7 = stn23f;
      sen8 = stn23g;
      sen9 = stn24;
      sen10 = stn24a;
      sen11 = stn24b;
      sen12 = stn25;
      sen13 = stn25a;
      sen14 = stn25b;
      sen15 = stn25c;
	  sen16 = stn26;
	  sen17 = stn26a;
	  sen18 = stn26b;
	  sen19 = stn26c;
	  sen20 = stn26d;
	  sen21 = stn27;
	  sen22 = stn27a;
	  sen23 = stn27b;
	  sen24 = stn27c;
	  sen25 = stn27d;
	  sen26 = stn27e;
	  sen27 = stn28;
	  sen28 = stn28a;
	  sen29 = stn28b;
	  sen30 = stn28c;
	  sen31 = stn28d;
	  sen32 = stn28e;
	  sen33 = stn28f;
	  sen34 = stn29;
	  sen35 = stn30;
	  sen36 = stnEmpty;
	  sen37 = stnEmpty;
	  sen38 = stnEmpty;
	  sen39 = stnEmpty;
	  sen40 = stnEmpty;
	  sen41 = stnEmpty;
      currentTimeStamps = timestamp3;
      break;
    case 6:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio5;
      UpdateSlider();
      ResetParagraph();
		  vid5.style.visibility = 'visible';
	   document.getElementById('page5vid').play();
      document.getElementById('Page6').style.visibility = 'visible';
      sen1 = stn31;
      sen2 = stn31a;
      sen3 = stn32;
      sen4 = stn32a;
      sen5 = stn32b;
      sen6 = stn33;
      sen7 = stn33a;
      sen8 = stn34;
      sen9 = stn34a;
      sen10 = stn35;
      sen11 = stn36;
      sen12 = stn37;
      sen13 = stn37a;
      sen14 = stn38;
      sen15 = stn38a;
	  sen16 = stn39;
	  sen17 = stn39a;
	  sen18 = stn39b;
	  sen19 = stn39c;
	  sen20 = stn39d;
	  sen21 = stn39e;
	  sen22 = stn39f;
	  sen23 = stn40;
	  sen24 = stn40a;
	  sen25 = stn41;
	  sen26 = stn41a;
	  sen27 = stn41b;
	  sen28 = stn42;
	  sen29 = stn42a;
	  sen30 = stn43;
	  sen31 = stn43a;
	  sen32 = stnEmpty;
	  sen33 = stnEmpty;
	  sen34 = stnEmpty;
	  sen35 = stnEmpty;
	  sen36 = stnEmpty;
	  sen37 = stnEmpty;
	  sen38 = stnEmpty;
	  sen39 = stnEmpty;
	  sen40 = stnEmpty;
	  sen41 = stnEmpty;
      currentTimeStamps = timestamp4;
      break;
    case 7:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		   document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = emptyAudio;
      ResetParagraph();
      break;
    case 8:
      audio = emptyAudio;
	  ResetParagraph();
      break;
    default:
  }
  if(audio != emptyAudio){
	
    audio.play();
  }
}



function PlayAudio() {

  switch(currentPage){
    case 2:
      audio.play();
      break;
    case 3:
      audio.play();
      break;
    case 4:
      audio.play();
      break;
    case 5:
      audio.play();
      break;
    case 6:
      audio.play();
      break;
    default:
      audio = emptyAudio;
      // code block
  }
}

function PauseAudio() {
  switch(currentPage){
    case 2:
      audio.pause();
      break;
    case 3:
      audio.pause();
      break;
    case 4:
      audio.pause();
      break;
    case 5:
      audio.pause();
      break;
    case 6:
      audio.pause();
      break;
    default:
      audio = emptyAudio;
      // code block
  }
}

function CheckTime(time){
  if(currentTimeStamps.length != 0){
    currentTimeStamps.forEach((item, i) => {
      if(time >= currentTimeStamps[i]){
        index = i;
      }
    });
    ShowSelection(index);
  }
}

function ShowSelection(index){
  switch(index) {
    case 0:
      ResetColour();
      sen1.style.color = 'red';
      break;
    case 1:
      ResetColour();
      sen2.style.color = 'red';
      break;
    case 2:
      ResetColour();
      sen3.style.color = 'red';
      break;
    case 3:
      ResetColour();
      sen4.style.color = 'red';
      break;
    case 4:
      ResetColour();
      sen5.style.color = 'red';
      break;
    case 5:
      ResetColour();
      sen6.style.color = 'red';
      break;
    case 6:
      ResetColour();
      sen7.style.color = 'red';
      break;
    case 7:
      ResetColour();
      sen8.style.color = 'red';
      break;
    case 8:
      ResetColour();
      sen9.style.color = 'red';
      break;
    case 9:
      ResetColour();
      sen10.style.color = 'red';
      break;
    case 10:
      ResetColour();
      sen11.style.color = 'red';
      break;
    case 11:
      ResetColour();
      sen12.style.color = 'red';
      break;
    case 12:
      ResetColour();
      sen13.style.color = 'red';
      break;
    case 13:
      ResetColour();
      sen14.style.color = 'red';
      break;
    case 14:
      ResetColour();
      sen15.style.color = 'red';
      break; 
	case 15:
      ResetColour();
      sen16.style.color = 'red';
      break;  
	case 16:
      ResetColour();
      sen17.style.color = 'red';
      break;  
	case 17:
      ResetColour();
      sen18.style.color = 'red';
      break;  
	case 18:
      ResetColour();
      sen19.style.color = 'red';
      break;
	case 19:
      ResetColour();
      sen20.style.color = 'red';
      break;
	case 20:
      ResetColour();
      sen21.style.color = 'red';
      break;
	case 21:
      ResetColour();
      sen22.style.color = 'red';
      break;
	case 22:
      ResetColour();
      sen23.style.color = 'red';
      break;
	case 23:
      ResetColour();
      sen24.style.color = 'red';
      break;
	case 24:
      ResetColour();
      sen25.style.color = 'red';
      break;
	case 25:
      ResetColour();
      sen26.style.color = 'red';
      break;
	case 26:
      ResetColour();
      sen27.style.color = 'red';
      break;
	case 27:
      ResetColour();
      sen28.style.color = 'red';
      break;
	case 28:
      ResetColour();
      sen29.style.color = 'red';
      break;
	case 29:
      ResetColour();
      sen30.style.color = 'red';
      break;  
	case 30:
      ResetColour();
      sen31.style.color = 'red';
      break;   
 	case 31:
      ResetColour();
      sen32.style.color = 'red';
      break;
	case 32:
      ResetColour();
      sen33.style.color = 'red';
      break;
	case 33:
      ResetColour();
      sen34.style.color = 'red';
      break;
	case 34:
      ResetColour();
      sen35.style.color = 'red';
      break;
	case 35:
      ResetColour();
      sen36.style.color = 'red';
      break;
	case 36:
      ResetColour();
      sen37.style.color = 'red';
      break;
	case 37:
      ResetColour();
      sen38.style.color = 'red';
      break;
	case 38:
      ResetColour();
      sen39.style.color = 'red';
      break;
	case 39:
      ResetColour();
      sen40.style.color = 'red';
      break;
	case 40:
      ResetColour();
      sen41.style.color = 'red';
      break;
    default:
      // code block
  }
}

function ResetColour(){
  if(sen1 != stnEmpty){sen1.style.color = 'black';}
  if(sen2 != stnEmpty){sen2.style.color = 'black';}
  if(sen3 != stnEmpty){sen3.style.color = 'black';}
  if(sen4 != stnEmpty){sen4.style.color = 'black';}
  if(sen5 != stnEmpty){sen5.style.color = 'black';}
  if(sen6 != stnEmpty){sen6.style.color = 'black';}
  if(sen7 != stnEmpty){sen7.style.color = 'black';}
  if(sen8 != stnEmpty){sen8.style.color = 'black';}
  if(sen9 != stnEmpty){sen9.style.color = 'black';}
  if(sen10 != stnEmpty){sen10.style.color = 'black';}
  if(sen11 != stnEmpty){sen11.style.color = 'black';}
  if(sen12 != stnEmpty){sen12.style.color = 'black';}
  if(sen13 != stnEmpty){sen13.style.color = 'black';}
  if(sen14 != stnEmpty){sen14.style.color = 'black';}
  if(sen15 != stnEmpty){sen15.style.color = 'black';}
  if(sen16 != stnEmpty){sen16.style.color = 'black';}
  if(sen17 != stnEmpty){sen17.style.color = 'black';}
  if(sen18 != stnEmpty){sen18.style.color = 'black';}
  if(sen19 != stnEmpty){sen19.style.color = 'black';}
  if(sen20 != stnEmpty){sen20.style.color = 'black';}
  if(sen21 != stnEmpty){sen21.style.color = 'black';}
  if(sen22 != stnEmpty){sen22.style.color = 'black';}
  if(sen23 != stnEmpty){sen23.style.color = 'black';}
  if(sen24 != stnEmpty){sen24.style.color = 'black';}
  if(sen25 != stnEmpty){sen25.style.color = 'black';}
  if(sen26 != stnEmpty){sen26.style.color = 'black';}
  if(sen27 != stnEmpty){sen27.style.color = 'black';}
  if(sen28 != stnEmpty){sen28.style.color = 'black';}
  if(sen29 != stnEmpty){sen29.style.color = 'black';}
  if(sen30 != stnEmpty){sen30.style.color = 'black';}
  if(sen31 != stnEmpty){sen31.style.color = 'black';}
  if(sen32 != stnEmpty){sen32.style.color = 'black';}
  if(sen33 != stnEmpty){sen33.style.color = 'black';}
  if(sen34 != stnEmpty){sen34.style.color = 'black';}
  if(sen35 != stnEmpty){sen35.style.color = 'black';}
  if(sen36 != stnEmpty){sen36.style.color = 'black';}
  if(sen37 != stnEmpty){sen37.style.color = 'black';}
  if(sen38 != stnEmpty){sen38.style.color = 'black';}
  if(sen39 != stnEmpty){sen39.style.color = 'black';}
  if(sen40 != stnEmpty){sen40.style.color = 'black';}
  if(sen41 != stnEmpty){sen41.style.color = 'black';}
}

// Get the time slider element
const timeSlider = document.getElementById('timeSlider');


function UpdateSlider(){
  // Set the maximum value of the time slider to the video duration

		
					 if(audio != emptyAudio){
						
						 document.getElementById('page1vid').volume = 1;
	  
	 
    audio.addEventListener('play', function() {
		
      timeSlider.setAttribute('max', audio.duration);
    });

    // Update the time slider value as the video plays
    audio.addEventListener('timeupdate', function() {
      timeSlider.value = audio.currentTime;
      CheckTime(audio.currentTime);
    });

    audio.addEventListener('ended', function() {
		if(audio.currentTime==audio.duration)
		   {
		    GoNext();
		   }
     // GoNext();
    });

    // Update the video playback time when the user changes the slider position
    timeSlider.addEventListener('input', function() {
      audio.currentTime = timeSlider.value;
      CheckTime(audio.currentTime);
    });
  }
				
  
 
}

function CheckPageItem(index){
  switch (index) {
    case 1:
      return img1;
      break;
    case 2:
      return img2;
      break;
    case 3:
      return img3;
      break;
    case 4:
      return img4;
      break;
    case 5:
      return img5;
      break;
    case 6:
      return img6;
      break;
    case 7:
      return img7;
      break;
    case 8:
      return img8;
      break;
    case 9:
      return img9;
      break;
    case 10:
      return img10;
      break;
    case 11:
      return img11;
      break;
    case 12:
      return img12;
      break;
    case 13:
      return img13;
      break;
    case 14:
      return img14;
      break;
    case 15:
      return img15;
      break;
    case 16:
      return img16;
      break;
    case 17:
      return img17;
      break;
    default:

  }
}

function ResetVideoVisibility(){
  vid1.style.visibility = 'hidden';
  vid2.style.visibility = 'hidden';
  vid3.style.visibility = 'hidden';
  vid4.style.visibility = 'hidden';
  vid5.style.visibility = 'hidden';
}

function ResetParagraph(){
	
      document.getElementById('Page3').style.visibility = 'hidden';
      document.getElementById('Page4').style.visibility = 'hidden';
      document.getElementById('Page5').style.visibility = 'hidden';
      document.getElementById('Page6').style.visibility = 'hidden';
    /*   document.getElementById('Page7').style.visibility = 'hidden';
      document.getElementById('Page8').style.visibility = 'hidden';
     document.getElementById('Page9').style.visibility = 'hidden';
      document.getElementById('Page10').style.visibility = 'hidden';
      document.getElementById('Page11').style.visibility = 'hidden';
      document.getElementById('Page12').style.visibility = 'hidden';
      document.getElementById('Page13').style.visibility = 'hidden';
      document.getElementById('Page14').style.visibility = 'hidden';
      document.getElementById('Page15').style.visibility = 'hidden';*/
}
