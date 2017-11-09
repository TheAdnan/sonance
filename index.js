
browser.browserAction.onClicked.addListener(function(tab){
	browser.browserAction.setPopup({popup: "options/index.html"});
});




