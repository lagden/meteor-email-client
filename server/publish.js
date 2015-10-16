function listaEmail(caption) {
	caption = caption || false;
	const settings = {};
	if (caption) {
		check(caption, String);
		settings.label = caption;
	}
	return Emails.find(settings);
}

function lerEmail(emailId) {
	check(emailId, String);
	return Emails.find({_id: emailId});
}

Meteor.publish('listaEmail', listaEmail);
Meteor.publish('lerEmail', lerEmail);
