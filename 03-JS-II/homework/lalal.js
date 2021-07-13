function returnValueOfArray(array) {
    var suma = 0;
    var nuevoArray = [];
    for (var i = 0; i < array.length; i++) {
      console.log(array.length);
      suma = suma + array.pop();
    };
  
    return suma;
  };
  
console.log(returnValueOfArray([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))


