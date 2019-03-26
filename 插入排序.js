 let arr = [2, 4, 1, 6, 8, 0, 5, 7, 3];
    function insertSort() {
        let start = 1;
        for (let i = start; i < arr.length; i++ , start++) {
            for (let j = 0; j < start; j++) {
                if (arr[i] <= arr[j]) {
                    //插入  
                    arr.splice(j, 0, arr[i]);
                    //删除
                    arr.splice(i + 1, 1);
                    break;
                }
            }
        }
        return arr;
    }
    console.log(insertSort(arr));
