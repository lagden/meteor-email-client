Template.lista.helpers({
	lista: function fn() {
		const label = Session.get('label');
		const settings = {};
		if (label) {
			settings.label = label;
		}
		console.log('----> lista', label);
		return Emails.find(settings);
	}
});
