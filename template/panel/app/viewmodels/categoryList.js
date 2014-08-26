define(['knockout','backend',"models/Category"], function (ko, backend,Category) {

    return {
        categories: ko.observableArray(),
        activate:function(){
            var that = this;
            var c = new Category();
            c.name("HISTORIA SZTUKI / SZTUKA");
            that.categories.push(c);
        }
    };
});