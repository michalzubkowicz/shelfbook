define(['AbstractModel','knockout','plugins/router'], function(AbstractModel,ko,router) {
    return function (id) {
        var self=this;
        AbstractModel.apply(self,[id]);
        self.crudBaseURL="/admin/books/";
        self.serializableFields=["_id","name","de","pl","en"]; //TODO:
        self.title = ko.observable("");
        self.isbn = ko.observable("");
        self.author = ko.observable("");
        self.category = ko.observable("");
        self.status = ko.observable("");
        self.description = ko.observable("");
        self.picture = ko.observable("");
        self.content = ko.observable("");
        self.returnbefore = ko.observable("");
        self.borrowedto = ko.observable("");
        self.lastborrowed = ko.observable("");
        self.status = ko.observable("Wypożyczona");

        self.Edit = function() {
            router.navigate("#books/"+self._id());
        };

        self.Cancel = function() {
            router.navigate("#books");
        };

        /*
         self.afterRemove = function() {
         //console.log(list);
         //list.labels.remove(self);
         };*/

        self.afterSave = function() {
            router.navigate("#books");
        };

        self.zwrot = function() {

        }

    }
});