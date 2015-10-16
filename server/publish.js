function listaEmail(caption) {
	caption = caption || false;
	const settings = {};
	if (caption) {
		settings.label = caption;
	}
	return Emails.find(settings);
}

function lerEmail(emailId) {
	return Emails.find({_id: emailId}, {limit: 1});
}

Meteor.publish('listaEmail', listaEmail);
Meteor.publish('lerEmail', lerEmail);
