define(['knockout','backend','models/Student'], function (ko, backend,Student) {
    return {
        student:ko.observable(),
        activate:function(id){
            var b = new Student();
            b.name("Michał");
            b.surname("Z");
            b.index("ABC");
            this.student(b);
        }
    };
});