(function a() {
	var btn=document.getElementsByTagName('button');
	var i;
	var pre=document.getElementsByTagName('pre');
	btn[0].onclick=function(){
		for (i = 0; i < pre.length; i++) {
			pre[i].style.color="transparent";
			pre[i].style.background="none";
			pre[i].onmouseover=null;
			pre[i].onmouseout=null;
		}
	}
	btn[1].onclick=function () {
		for (i = 0; i < pre.length; i++) {
			pre[i].style.color="#000";
			pre[i].style.background="none";
			pre[i].onmouseover=null;
			pre[i].onmouseout=null;
		}
	}
	btn[2].onclick=function(){
		for (i = 0; i < pre.length; i++) {
			pre[i].style.color="transparent";
			pre[i].style.background="none";
			pre[i].onmouseover=function () {
			this.style.color="#fff";
			this.style.backgroundColor="rgba(0, 0, 0, 0.7)";
			}
			pre[i].onmouseout=function () {
			this.style.color="transparent";
			this.style.background="none";
			}
		}
	}
})();