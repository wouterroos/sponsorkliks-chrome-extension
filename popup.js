chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	
    var url = tabs[0].url;
	
	var domain = url.split('/')[2];
    var domain = domain.split('.')[1];
	
	var beginUrl = '<div class="supercontainer"><div class="container"><iframe src="http://www.sponsorkliks.com/partners.php?club=3831&v=iframe&shopsearch=';
	
	var endUrl = '"width="100%" height="1220x" style="position: relative; top: -380px;" overflow-x: hidden; overflow-y: scroll></iframe></div></div>';
	
	document.write(beginUrl+domain+endUrl);
})