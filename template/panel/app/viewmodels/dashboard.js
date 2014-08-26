define(['knockout','backend',"models/Book"], function (ko, backend,Book) {

    return {
        borrowed: ko.observableArray(),
        activate:function(){
            var that = this;
            var books=[];
            for (var i=0; i < 23; i++) {
                var b = new Book();
                b.isbn("123"+i);
                b.title("Proces");
                b.author("Franz Kafka");
                b.borrowedto("Michał");
                b.returnbefore("2014-10-31");
                books.push(b);
            }


            that.borrowed(books);
        }
    };
});