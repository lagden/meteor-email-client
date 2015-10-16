Router.configure({
	layoutTemplate: 'app',
	template: 'inbox',
	notFoundTemplate: 'notFound',
	waitOn: function fn() {
		return Meteor.subscribe('listaEmail', Session.get('label'));
	},
	data: function fn() {
		return {
			lista: Emails.find({})
		};
	},
	action: function fn() {
		if (this.ready()) {
			this.render();
		} else {
			this.render('Loading');
		}
	}
});

Router.route('inbox', {
	path: '/',
	waitOn: function fn() {
		Session.set('label', false);
		return Meteor.subscribe('listaEmail');
	}
});

Router.route('label', {
	path: '/label/:name',
	template: 'inbox',
	name: 'label.filter',
	waitOn: function fn() {
		Session.set('label', this.params.name);
		return Meteor.subscribe('listaEmail', this.params.name);
	}
});

Router.route('ler', {
	path: '/ler/:_id',
	template: 'inbox',
	name: 'ler.email',
	waitOn: function fn() {
		Session.set('emailId', this.params._id);
		return Meteor.subscribe('lerEmail', this.params._id);
	}
});
