function sct(){
	var s=document.getElementById("focuspic");
	var navs=s.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var img=s.getElementsByTagName("ul")[1].getElementsByTagName("li");
	var index=0;
	function show(){
 	for(var i=0;i<navs.length;i++){
 		img[i].style.display="none";
 		navs[i].className="";
 	}
 	img[index].style.display="";
 	navs[index].className="turn_bgcolor";
	}
	//定时器
	function time_show(){
		show();
		index=(index==(navs.length-1))?0:(index+1);
	}
	time_show();
	var auto=setInterval(time_show,3000);
	//点击箭头画面前进后退
	var movement_bk=function(flag){
		for(var k=0;k<navs.length;k++){
			if(this.innerText==navs[k].innerText){
				index=k;
				break;
			}
		}
		if(flag){
			index--;
			if(index<0)
				index=navs.length-1;
		}
		else{
			index++;
			if(index>(navs.length-1))
				index=0;
		}	
		show(index);
	}
	leftarr.onclick=function(){
		movement_bk(true);
	}
	rightarr.onclick=function(){
		movement_bk(false);
	}
	//文字导航框
	for (var i = 0; i <navs.length; i++) {	
		navs[i].onmouseover=function(){		
			for (var m = 0; m < navs.length; m++) {
				if (this.innerText==navs[m].innerText){
					index=m;
					break;
				}
			}
			show();
		}
	}
	//画面悬停与箭头显示
	var mover_arr=function(){
		document.getElementById("leftarr").style.display="block";
		document.getElementById("rightarr").style.display="block";
	}
	var mout_arr=function(){
		document.getElementById("leftarr").style.display="none";
		document.getElementById("rightarr").style.display="none";
	}
	s.onmouseover=function(){
		clearInterval(auto);
		mover_arr();
	};
	s.onmouseout=function(){
		auto=setInterval(time_show,3000);
		mout_arr();
	};	
}
window.onload=sct;