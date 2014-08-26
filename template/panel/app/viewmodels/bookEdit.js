define(['knockout','backend','models/Book'], function (ko, backend,Book) {
    return {
        book:ko.observable(),
        activate:function(id){
            var b = new Book();
            b.isbn("123");
            b.title("Proces");
            b.author("Franz Kafka");
            b.borrowedto("Michał");
            b.returnbefore("2014-10-31");
            this.book(b);
        }
    };
});