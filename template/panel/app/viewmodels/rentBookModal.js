define(['plugins/dialog', 'knockout'], function (dialog, ko) {
    var RentBookModal = function() {
        this.input = ko.observable('');
    };

    RentBookModal.prototype.ok = function() {
        dialog.close(this, this.input());
    };

    RentBookModal.prototype.canDeactivate = function () {
        return dialog.showMessage('Are you sure?', 'Just Checking...', ['Yes', 'No']);
    };

    RentBookModal.show = function(){
        return dialog.show(new RentBookModal());
    };

    return RentBookModal;
});