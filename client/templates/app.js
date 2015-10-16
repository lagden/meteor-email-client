Session.setDefault('emailId', false);
Session.setDefault('label', false);

function startupApp() {
	svgLocalstorage('/images/sprite.svg', '0.4.0');
}

function formatDate(date) {
	const sd = date.toDateString().split(' ');
	return `${sd[2]} ${sd[1]}`;
}

function lowerCase(s) {
	return s.toLowerCase();
}

Meteor.startup(startupApp);
Template.registerHelper('lowerCase', lowerCase);
Template.registerHelper('formatDate', formatDate);
