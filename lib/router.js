// Config
Router.configure({
	layoutTemplate: 'app',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

// Handlers
function routerInboxWaitOn() {
	Session.set('label', false);
	return Meteor.subscribe('listaEmail');
}

function routerLabelWaitOn() {
	Session.set('label', this.params.name);
	return Meteor.subscribe('listaEmail', this.params.name);
}

function routerLerWaitOn() {
	Session.set('emailId', this.params._id);
	return [
		Meteor.subscribe('lerEmail', this.params._id),
		Meteor.subscribe('listaEmail', Session.get('label'))
	];
}

function routerLabelAction() {
	if (this.ready()) {
		this.render('lista', {to: 'lista'});
	}
}

function routerLerAction() {
	if (this.ready()) {
		this.render('lista', {to: 'lista'});
		this.render('email', {to: 'ler'});
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

// 404
Router.route('notFound', {
	layoutTemplate: 'error',
	path: '/(.*)'
});
