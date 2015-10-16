// Geral
function routerWaitOn() {
	return Meteor.subscribe('listaEmail', Session.get('label'));
}

function routerData() {
	return {
		lista: Emails.find({})
	};
}

function routerAction() {
	if (this.ready()) {
		this.render();
	}
}

Router.configure({
	layoutTemplate: 'app',
	template: 'inbox',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: routerWaitOn,
	data: routerData,
	action: routerAction
});

if (Meteor.isClient) {
	Router.onBeforeAction('loading');
}

// Inbox
function routerInboxWaitOn() {
	Session.set('label', false);
	return Meteor.subscribe('listaEmail');
}

Router.route('inbox', {
	path: '/',
	waitOn: routerInboxWaitOn
});

// Label
function routerLabelWaitOn() {
	Session.set('label', this.params.name);
	return Meteor.subscribe('listaEmail', this.params.name);
}

Router.route('label', {
	path: '/label/:name',
	template: 'inbox',
	name: 'label.filter',
	waitOn: routerLabelWaitOn
});

// Ler
function routerLerWaitOn() {
	Session.set('emailId', this.params._id);
	return Meteor.subscribe('lerEmail', this.params._id);
}

Router.route('ler', {
	path: '/ler/:_id',
	template: 'inbox',
	name: 'ler.email',
	waitOn: routerLerWaitOn
});
