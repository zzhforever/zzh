function inherit(Target, Origin) {
            function F() { };
            F.prototype = Origin.prototype;
            Target.prototype = new F();
            Target.prototype.constuctor = Target;
            Target.prototype.uber = Origin.prototype;
        }
        Father.prototype.lastName = "Zhang";
        function Father() {
        }
        function Son() {
        }
        inherit(Son, Father);
        var son = new Son();
        var father = new Father();
