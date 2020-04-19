    function yugiho(num) {
    let arr= [];
    for (let i=1; i<=num; i++) {
        arr.push(i); 
    }; 
    
    for(k=0; k<arr.length; k++) {
        if(arr[k]%2==0 && arr[k]%3==0 && arr[k]%5==0){
             arr[k]= 'yu-gi-oh';
        } else
            if (arr[k] % 2 == 0 && arr[k] % 3 == 0 && arr[k] % 5 != 0){
             arr[k]= 'yu-gi';
        } else
            if (arr[k] % 2 != 0 && arr[k] % 3 == 0 && arr[k] % 5 == 0) {
            arr[k] = 'gi-oh';
        } else
            if (arr[k] % 2 == 0 && arr[k] % 3 != 0 && arr[k] % 5 == 0) {
        } else 
            if (arr[k] % 2 == 0 && arr[k] % 3 != 0 && arr[k] % 5 != 0){
             arr[k] = "yu";
        } else 
            if (arr[k] % 3 == 0){
             arr[k] = "gi";
        } else
            if (arr[k] % 5 == 0){
             arr[k] = "oh";
        } console.log(arr);
        
    } return arr;
};

yugiho(20);