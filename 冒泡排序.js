let arr = [4, 5, 6, 2, 1, 7, 8, 7, 0];
    function bubbleSort(){
        for(i = 0; i < arr.length - 1; i++){
            for(j =0; j < arr.length - 1 - i; j++){
                if(arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    console.log(bubblesort(arr));
