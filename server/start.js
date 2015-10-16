if (Emails.find().count() === 0) {
	Meteor.startup(() => {
		const fixtures = JSON.parse(Assets.getText('fixtures.json'));
		fixtures.forEach(item => {
			item.date = new Date();
			Emails.insert(item);
		});
	});
}
