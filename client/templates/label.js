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

Template.label.helpers({
	captions: getCaptions
});
