window.onload = function(){
	var Box1 = document.querySelector('.box1'),
		aBtn = document.getElementsByTagName('a'),
		aMask = document.getElementsByTagName('div'),
		aSpan = document.getElementsByTagName('span');



		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				
				Box1.style.display = 'block';
				for(var j=0; j<aBtn.length; j++){

				aMask[j+2].style.display = 'none';
				aMask[j+2].style.background= 'none';
				}
					aMask[this.index+2].style.display = 'block';
					aMask[this.index+2].style.background= '#fff url('+this.index+'.png) no-repeat center 40%';
				//background: #fff url(image/1.png) no-repeat center center;
			}
		} 
		for(var i=0; i<aSpan.length; i++){
			aSpan[i].index = i;
		aSpan[i].onclick = function(){
			aMask[this.index+2].style.display = 'none';
			Box1.style.display = 'none';
		}
	}
}