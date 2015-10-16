Template.email.helpers({
	dados: function fn() {
		const emailId = Session.get('emailId');
		const settings = {};
		if (emailId) {
			settings._id = emailId;
		}
		return Emails.findOne(settings);
	}
});
