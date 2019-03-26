 function deepClone(origin,target){
            var target = target || {},
                toStr = Object.prototype.toString,
                arrStr = "[object Array]";
                for(prop in origin){
                    if(origin.hasOwnPrototype(prop)){
                        if(origin[prop] !== "null" && typeof(origin[prop] == 'object')){
                            if(toStr.call(origin[prop]) == arrStr){
                                target[prop] = [];
                            }else{
                                target[prop] = {};
                            }
                            deepClone(origin[prop], target[prop]);
                        }else{
                            target[prop] = origin[prop];
                        }
                    }
                }
               return target;
        }
