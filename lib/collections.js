Emails = new Mongo.Collection('emails');

// Emails.paginacao = function(page, limit) {
//   var offset, pages, total;
//   if (page == null) {
//     page = 1;
//   }
//   total = Emails.find({}).count();
//   pages = Meteor.totalPages(total, limit);
//   if (page > pages) {
//     page = pages;
//   }
//   if (total < limit) {
//     limit = total;
//     offset = 0;
//   } else {
//     offset = page > 0 ? (page - 1) * limit : 0;
//   }
//   return Emails.find({}, {
//     skip: offset,
//     limit: limit,
//     fields: {
//       name: 1
//     }
//   });
// };
