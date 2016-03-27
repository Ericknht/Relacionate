var m;
var s;

function temporizador(){
    m=3;
    s=60;
    var temp = setInterval(function(){

    	if (m>=0) {
    		s--;
    		if (s<10) {
    			s="0"+s;
    		}
    		document.getElementById("reloj").innerHTML="0"+m+":"+s;

    	}

        if (s==0 & m>=0) {
    		s=60;
    		m--;
    	}
    	if(m<0){
    		s=0;
    		clearInterval(temp);
    	}
    },1000,"JavaScript");
}

function detener(){

}