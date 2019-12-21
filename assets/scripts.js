var bottom = document.getElementById('bottom');
var email = document.getElementById('email');
window.addEventListener('scroll', function(e){
	if(bottom.getBoundingClientRect().top < window.innerHeight)
		this.document.querySelector('body').classList.add('social-share-revealed');	
	else
		this.document.querySelector('body').classList.remove('social-share-revealed');	
});

document.getElementById('fb-share').addEventListener('click', function(e){
	e.preventDefault();
	var url = encodeURI(window.location);
	window.open('https://www.facebook.com/sharer/sharer.php?u='+url, '_blank', 'width=600,height=500,resizable,scrollbars=yes,status=1');
});

document.getElementById('tw-share').addEventListener('click', function(e){
	e.preventDefault();
	var text = encodeURI(document.title);
	var url = encodeURI(window.location);
	window.open('http://twitter.com/share?text='+text+' %23downwithtillman&url='+url, '_blank', 'width=500,height=300,resizable,scrollbars=yes,status=1');
});