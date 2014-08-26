define(['AbstractModel','knockout','plugins/router'], function(AbstractModel,ko,router) {
    return function (id) {
        var self=this;
        AbstractModel.apply(self,[id]);
        self.crudBaseURL="/admin/category/";
        self.serializableFields=["_id","name","de","pl","en"]; //TODO:
        self.name = ko.observable("");
        self.code = ko.observable("");
        self.subcategories = ko.observable("");


        self.Edit = function() {
            router.navigate("#category/"+self._id());
        };

        self.Cancel = function() {
            router.navigate("#category");
        };

        self.afterSave = function() {
            router.navigate("#category");
        };


    }
});