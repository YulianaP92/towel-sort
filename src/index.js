
// You should implement your task here.

module.exports = function towelSort(matrix) {
  
  let result=[];
  let third='';
  if(matrix && matrix.length!==0){
  let first = matrix[0];
  let second = matrix[1];
  if(matrix[2]){
  third = matrix[2];
  }
  else{
  third ='';
  }

  let concat = [];
  for (let i = second.length-1; i >= 0; i--) {
    concat.push(second[i]);
  }

  if(matrix.length===2){
    result = [].concat(first,concat );
  }
  else{
  result = [].concat(first,concat,third );
  }
}
  return result;
}
