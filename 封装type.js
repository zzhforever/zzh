function type(target){
          var template = {
              "[object Array]": "array",
              "[object Object]": "object",
              "[object Nember]": "nember",
              "[object Boolean]": "boolean",
              "[object String]": "string"
          }  
        if(target === null){
            return "null";
        }else if(typeof(target) == "object"){
            var str = Object.prototype.toString.call(target);
            return template[str];
        }else{
            return typeof(target);
        }
       }
