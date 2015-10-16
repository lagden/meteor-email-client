function getCaptions() {
	return [{
		name: 'Clients'
	}, {
		name: 'Social'
	}, {
		name: 'Family'
	}, {
		name: 'Friends'
	}];
}

function lowerCase(s) {
	return s.toLowerCase();
}

Template.label.helpers({
	captions: getCaptions
});

Template.registerHelper('lowerCase', lowerCase);
