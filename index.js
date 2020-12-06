function largestSubarraySum(array){
 // code to write here
 const runningSum = Array(array.length).fill(0);
 var currentMax = 0;
 var runningSum[0] = array[0];
 for(var i=1; i<array.lenth; i++)
 {
    var newSum = runningSum[i-1] + array[i]
    if(newSum > array[i])
      runningSum[i] = newSum
    else
      runningSum[i] = array[i]
    end 
    if(runningSum[i] > currentMax)
    {      
      currentMax = runningSum[i]
    }
  }
  return currentMax
 
}
