var open = false;
var tab_id = 0;

function openSonance() {
	if(open == false){
		var creating = browser.tabs.create({
	     "url": "/sonance/index.html",
	     "pinned": true
	   });
	   creating.then(onCreated, onError);
	}
	else{
		var removing = browser.tabs.remove(tab_id);
		removing.then(onRemoved, onError);
	}
   
}

browser.browserAction.onClicked.addListener(openSonance);

function onRemoved() {
	unset();
}

function onError(error) {
	unset();
}

function onCreated(tab) {
  tab_id = tab.id;
  open = true;
}

function unset(){
	tab_id = 0;
	open = false;
}
