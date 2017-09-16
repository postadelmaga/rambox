function removeElement(el) {
	if (el) {
		el.remove();
	}
}

function removeElementById(id, parent = false) {
	var el = document.getElementById(id);
	if (el && parent) {
		el = el.parentElement;
	}
	removeElement(el);

}

function removeElementByClass(name) {
	var el = document.getElementsByClassName(name);
	if (el.length > 0) {
		el[0].remove();
	}
}

function setBodyWidth() {
	document.body.style.minWidth = '400px';
}

function setToolbar() {
	// Logo
	var logo = document.getElementById('logo');
	var img = logo.querySelector('img');
	img.src = 'https://www.atlassian.com/assets/img/icons/imkt/imkt-navbar__charlie-logo.svg';
	img.style.height = '100px';
	removeElementByClass('aui-header-before');
	removeElementById('home_link',true);
	removeElementById('browse_link');
	removeElementById('greenhopper_menu');
	removeElementById('create-menu');
}

function setIssuePage(){
	// Issue details: remove padding
	var assignee;
	if (assignee = document.getElementById('assignee-val')) {
		var el = document.getElementsByClassName('aui-page-header-image');
		if (el.length > 0) {
			el[0].querySelector('img').src = assignee.querySelector('img').src;
		}
		removeElementById('viewissuesidebar');
	}

	removeElementById('viewissue-devstatus-panel');
	removeElementById('greenhopper-agile-issue-web-panel_heading');
	removeElementByClass('aui-sidebar-wrapper');
	removeElementByClass('toolbar-split toolbar-split-right');

	var el = document.getElementsByClassName('aui-page-panel')
	if (el.length > 0) {
		el[0].style.paddingLeft = '0px';
	}
}

function setJiraPage() {
	setToolbar();
	setIssuePage();
	removeElementByClass('dashboard-tabs');
	// workaround issues menu hidden
	setTimeout(setBodyWidth, 150);
}

//document.onload = setPage();
