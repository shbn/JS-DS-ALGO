function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        // Assume a minimum value        
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
      
        // Swap if new minimun value found
        if (min !== i) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}