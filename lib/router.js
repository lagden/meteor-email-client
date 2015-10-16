// Geral
function routerWaitOn() {
	return Meteor.subscribe('listaEmail', Session.get('label'));
}

function routerData() {
	return {
		lista: Emails.find({})
	};
}

Router.configure({
	layoutTemplate: 'app',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: routerWaitOn,
	data: routerData
});

if (Meteor.isClient) {
	Router.onBeforeAction('loading');
}

// Rotas
function routerInboxWaitOn() {
	Session.set('label', false);
	return Meteor.subscribe('listaEmail');
}

function routerLabelWaitOn() {
	Session.set('label', this.params.name);
	return Meteor.subscribe('listaEmail', this.params.name);
}

function routerLabelAction() {
	console.log('routerLabelAction', this.ready());
	if (this.ready()) {
		this.render('lista', {to: 'lista'});
	} else {
		this.render('loading');
	}
}

function routerLerWaitOn() {
	Session.set('emailId', this.params._id);
	return Meteor.subscribe('lerEmail', this.params._id);
}

function routerLerAction() {
	if (this.ready()) {
		this.render('lista', {to: 'lista'});
		this.render('email', {to: 'ler'});
	} else {
		this.render('loading');
	}
}

// Inbox
Router.route('inbox', {
	path: '/',
	waitOn: routerInboxWaitOn,
	action: routerLabelAction
});

// Label
Router.route('label', {
	path: '/label/:name',
	name: 'label.filter',
	waitOn: routerLabelWaitOn,
	action: routerLabelAction
});

// Ler
Router.route('ler', {
	path: '/ler/:_id',
	name: 'ler.email',
	waitOn: routerLerWaitOn,
	action: routerLerAction
});
