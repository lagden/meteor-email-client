function showEmail() {
	const emailId = Session.get('emailId');
	const settings = {};
	if (emailId) {
		settings._id = emailId;
	}
	return Emails.findOne(settings);
}

Template.email.helpers({
	dados: showEmail
});
