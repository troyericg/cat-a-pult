//    "Before he swings the bat, a real slugger imagines an 
//     arc inside his heart, arching directly to Heaven."
// ............................................................
// .............. ?8DDDD7, ............ =ZDDDDZ=...............
// ...........DDDDDDDDDDDDDDD.......NDDDDDDDDDDDDDD8...... ....
// ........DDDDDDDDN+:,:IDDDDDD?..DDDDDND+::~$NDDDDDDD.... ....
// ......IDDDDDO............,DDDDDDD8.............NDDDDN.......
// .....DDDDD..................DDD: ................NDDDD. . . 
// ....NDDDN....................=.................... DDDD . . 
// ...NDDD ..........~.................................DDDD ...
// ...DDDN......... N...................................DDDI...
// ...DDD~........DDDND. DDD..D+....................... NDDD...
// ...DDD~..... NDDDDDD  DDD..DDD..Z ...................DDDD...
// ...NDDN... DDDDDDDDD?.DDD.IDDD.NDDD..................DDD:...
// ...DDDD......8DDDDD.........:=.DDD7.D7 .............ODDN. . 
// ....DDD+........  ND........... ZD.?DDD ............DDDD. . 
// ....=DDD,..........................DDN............ NDDN ....
// .....8DDD ................... . . . 7..ND .. . . .NDDD. ....
// ......ZDDD7........................ . DDD8...... DDDN . ....
// ........DDDD....................... ...~.  ....NDDD=... ....
// .........DDDDZ..........................DDD..,DDDN..........
// ...........DDDDO........................DDN,NDDD............
// ............DDDDD.......................DDDDDDD.............
// ..............DDDDD........ . . . . ....DDDDD. . . ....   . 
// ............... DDDDN ....... . . . ..DDDDD. . . . .... ....
// ..................DDDDD.......... . 7DDDN....... . .... ....
// ....................NDDD7.........,DDDD.....................
// ......................DDDD.......DDDD,......................
// .......................:DDDN... NDDD ............. .... ....
// .........................DDDN.~DDD  .... ... ... . .... ....
// ..........................,DDDDDN . ...    . . . . ....   . 
// ............................DDD8............................
// ............................ DD.............................
// ............................................................
//            Made, with love, by Troy Eric Griggs.


$(document).ready(function(){

	var insertCats = function(name, color){
		var theURL;
		color == true ? theURL = "http://placekitten.com/" : theURL = "http://placekitten.com/g/";
		
		$('div[class^=' +name+ ']').each(function(){
			var catImg = $('<img>').attr('src', theURL + $(this).width() + '/' + $(this).innerHeight());
			$(this).append(catImg);
		});
	}
	
	insertCats("cat",true);
	
});




