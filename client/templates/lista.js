function listaCreated() {
	// this.starred = new ReactiveVar([]);
	Session.setDefault('starred', []);
}

function listaEmails() {
	const label = Session.get('label');
	const settings = {};
	if (label) {
		settings.label = label;
	}
	return Emails.find(settings);
}

function getStarred() {
	// const starred = Template.instance().starred.get().indexOf(this._id);
	const starred = Session.get('starred').indexOf(this._id);
	return starred !== -1 ? 'starred' : '';
}

function handleEmailCheck(event) {
	event.stopPropagation();
	console.log('ID do email', event.target.value);
}

function handleStarred(event) {
	event.stopPropagation();
	event.preventDefault();
	// const current = instance.starred.get();
	const current = Session.get('starred');
	const emailID = $(event.currentTarget).data('email-id');
	const idx = current.indexOf(emailID);
	if (idx === -1) {
		current.push(emailID);
	} else {
		current.splice(idx, 1);
	}
	// instance.starred.set(current);
	Session.set('starred', current);
}

Template.lista.onCreated(listaCreated);

Template.lista.helpers({
	lista: listaEmails,
	starred: getStarred
});

Template.lista.events({
	'click .emails__chk': handleEmailCheck,
	'click .emails__icon--star': handleStarred
});
