window.onload = function(){

	//导航栏切换
	var Nav = document.getElementById("nav");
	var NavLi = Nav.getElementsByTagName("li");

	for(var i=0;i<NavLi.length;i++){
		NavLi[i].id = i;
		if(NavLi[i].className=="current"){
			var current = NavLi[i].id;
		}
		NavLi[i].onmousemove = function(){
			clearCls();
			this.className = "current";
		}
		NavLi[i].onmouseout = function(){
			clearCls();
			NavLi[current].className = "current";
		}
	}

	function clearCls(){
		for(var i=0;i<NavLi.length;i++){
			NavLi[i].className = "";
		}
	}

	//滚动加载头部导航栏底边框
	window.onscroll = function(){
		var Header = document.getElementById("header");
		var sT = document.documentElement.scrollTop || document.body.scrollTop;
		if(sT>0){
			Header.style.borderBottom = "1px solid #ccc";
		}else{
			Header.style.borderBottom = "none";
		}
	}
}