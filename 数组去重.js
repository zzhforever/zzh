 var arr = [1,1,2,3,4,4,5,6,6];
   Array.prototype.unique = function(){    //arr.unique()执行
       var temp = {};
       var arr = [];
       var len = this.length;
       for(var i = 0; i < len; i++){
           if(!temp[this[i]]){
               temp[this[i]] = "abc";
               arr.push(this[i]);
           }
       }
       return arr;
   }
