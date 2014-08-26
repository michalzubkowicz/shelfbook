﻿define(['plugins/router', 'durandal/app','bootstrap','jquery'], function (router, app,bootstrap,$) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Start', moduleId: 'viewmodels/dashboard', nav: true, icons: 'glyphicons glyphicons-star' },
                { route: 'books', title:'Katalog', moduleId: 'viewmodels/bookList', nav: true, icons: 'glyphicons glyphicons-star' },
                { route: 'categories', title:'Kategorie', moduleId: 'viewmodels/categoryList', nav: true, icons: 'glyphicons glyphicons-star' },
                { route: 'students', title:'Studenci', moduleId: 'viewmodels/studentList', nav: true, icons: 'glyphicons glyphicons-star' },
                { route: 'books/:id', title:'Edycja książki', moduleId: 'viewmodels/bookEdit', nav: false },
                { route: 'students/:id', title:'Edycja studenta', moduleId: 'viewmodels/studentEdit', nav: false }

            ]).buildNavigationModel();
            $('.dropdown-toggle').dropdown();
            
            return router.activate();
        },
        showPasswordModal: function() {
            PasswordModal.show().then(function(response) {
                if(response.length<8) {
                    app.showMessage("Password have to be longer than 8 chars", "Error", ["Close"], true, { style:  { color: "red", "font-size": "16px" } });
                    return false;
                }
                showLoading();
                $.ajax({
                    url: "/admin/changepassword",
                    type: "POST",
                    data: {"password":response},
                    context: document.body,
                    success: function () {
                        app.showMessage('Password changed:"' + response + '".');
                    },
                    error: function() {
                        app.showMessage("Cannot save password", "Error", ["Close"], true, { style:  { color: "red", "font-size": "16px" } });
                    },
                    complete: function() {
                        hideLoading();
                    }
                });
            });
        }
    };
});