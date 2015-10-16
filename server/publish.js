const timeSleep = 1000;

function inputDelay() {
	return false;
}

function listaEmail(caption) {
	if (inputDelay()) {
		Meteor._sleepForMs(timeSleep);
	}

	caption = caption || false;
	const settings = {};
	if (caption) {
		settings.label = caption;
	}
	return Emails.find(settings);
}

function lerEmail(emailId) {
	if (inputDelay()) {
		Meteor._sleepForMs(timeSleep);
	}

	return Emails.find({_id: emailId}, {limit: 1});
}

Meteor.publish('listaEmail', listaEmail);
Meteor.publish('lerEmail', lerEmail);
