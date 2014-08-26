define(['AbstractModel','knockout','plugins/router'], function(AbstractModel,ko,router) {
    return function (id) {
        var self=this;
        AbstractModel.apply(self,[id]);
        self.crudBaseURL="/admin/students/";
        self.serializableFields=["_id","name","de","pl","en"]; //TODO:
        self.name = ko.observable("");
        self.surname= ko.observable("");
        self.email = ko.observable("");
        self.booksborrowed = ko.observable("");
        self.index = ko.observable("");
        self.active = ko.observable("");


        self.Edit = function() {
            router.navigate("#students/"+self._id());
        };

        self.Cancel = function() {
            router.navigate("#students");
        };

        self.afterSave = function() {
            router.navigate("#students");
        };


    }
});