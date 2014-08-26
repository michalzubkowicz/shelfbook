define(['knockout','backend',"models/Student"], function (ko, backend,Student) {

    return {
        students: ko.observableArray(),
        activate:function(){
            var that = this;
            var b = new Student();
            b.name("Michał");
            b.surname("Z");
            b.index("ABC")
            that.students.push(b);
        }
    };
});