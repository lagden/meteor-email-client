Session.setDefault('emailId', false);
Session.setDefault('label', false);

function startupApp() {
	svgLocalStorage('images/sprite.svg', '0.2.0');
}

Meteor.startup(startupApp);
