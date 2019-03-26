 var str = "1232434gfdgsdfs";
        function bytesLength(str) {
            //         var count = str.length;
            //         for (var i = 0; i < str.length; i++) {
            //             if (str.charCodeAt(i) > 255) {
            //                 count++;
            //             }
            //         }
            var count = 0;
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 255) {
                    count += 2;
                } else {
                    count ++;
                }
            }
            return count;
        }
