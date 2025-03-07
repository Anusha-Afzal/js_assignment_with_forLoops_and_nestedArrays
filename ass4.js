    // ASSIGNMENT # 01     " Basic for loop"

    document.write("Assignment # 01: " + "<br>");   // just to print the assignment number on the screen
    for (var  i = 1; i <=10; i++){
        document.write( i + ", ");
    }
    document.write("<br><br><br>");  // to move to the next line after the loop ends
"--------------------------------------------------------------------------------------------------"
    // ASSIGNMENT # 02    "Sum of Numbers"

    document.write("Assignment # 02: " + "<br>");
    let sum = 0;
    for (let i = 1; i <=100; i++){
        sum += i;
    }
    document.write("The sum of the numbers from 1 to 100 is : " , sum);
    document.write("<br><br><br>");
"--------------------------------------------------------------------------------------------------"
     // ASSIGNMENT # 03   "Print Even Numbers"
     document.write("Assignment # 03: " + "<br>" + " Even numbers are: ");
    for( let i = 1; i <=50; i++){
        if(i % 2 == 0){
            document.write(i + ", ");
        }
    }
    document.write("<br><br><br>");
"--------------------------------------------------------------------------------------------------"

    // ASSIGNMENT # 04   "Nested for loop to print 3x3 of asterisks"
    document.write("Assignment # 04: " + "<br>");
    for( let i=1; i<=3; i++){
        for( let j=1; j<=3; j++){
            document.write("* ");
        }
        document.write("<br>");  
    }
    document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"
    // ASSIGNMENT # 05   "Multiplication Table with Nested for loop"
    document.write("Assignment # 05: " + "<br>");
    for(let i=1; i<=5; i++){
        document.write("Multiplication tabel for " + i + ": <br>");
        for(let j=1; j<=5; j++){
            document.write(i + " x " + j + " = " + i*j + "<br>");
        }
        document.write("\n");
    }
     document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"

    // ASSIGNMENT # 06     "Square Pattern Numbers"
    document.write("Assignment # 06: " + "<br>");
    let n = 5;
    for(let i=1; i<n; i++){
       let row = " ";
     for( let j=1; j<n; j++){
         row += j + " ";
     }
        document.write(row + "<br>");
    }
    document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 07    "Right Angle Triangle"
   document.write("Assignment # 07: " + "<br>");
    for( let i=0; i<=5; i++){
        for(let j=1; j<=i; j++){
            document.write(j + "");
        }
        document.write(i + " <br>");
    }
   document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 08     "Inverted Number Pyramid"
   document.write("Assignment # 08: " + "<br>");
    for(let i=5; i>=1; i--){
        let row = " ";
        for(let j=1; j<=i; j++){
            row += j + " ";
        }
        document.write( row + "<br>");
    }
   document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 09      "Reverse Countdown"
   document.write("Assignment # 09: " + "<br>");
    for(let i=10; i>=1; i--){
        document.write(i + ", ");
    }
   document.write(" <br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 10      "fruits length"
   document.write("Assignment # 10: " + "<br>");
   let fruits = [" apple ", " banana", " mango", " orange", " strawberry"];
   for(let i=0; i<fruits.length; i++){
    document.write(fruits[i] + " <br>");
   }
   document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 11    "Nested Array"
   document.write("Assignment # 11: " + "<br>");
   let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
   ];
   document.write("The second element of 3rd row is : " + arr[2][1] + "<br><br>");

"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 12    "Modifying  a value in a Nested Array"
   document.write("Assignment # 12: " + "<br>");
   let names = [
    ["Ali", 78, 99],
    ["Anwar", 35, 90],
    ["Amna", 99, 45],
];
   names[0][2] = 55 ;
   for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names[i].length; j++) {
        document.write(names[i][j] + " "); 
    }
    document.write(" <br>"); // Move to the next line after a full row
}
   document.write(" <br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 13     "Iterating over a Nested Array using loops"
  
   document.write("Assignment # 13: " + "<br>");
   function sumArray(numArray){
    for(let i=0; i<numArray.length; i++){
        let sum = 0;
        for(let j=0; j<numArray[i].length; j++){
            sum += numArray[i][j];
        }
        document.write(" Sum of "+ (i+1)+ " sub-array elements : "+ sum + "<br>");
    }
   
   }

   let numbers = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
];
    sumArray(numbers);
   document.write("<br><br>");
"-------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 14     " Create a Single-Level Array"

   document.write("Assignment # 14: " + "<br>");
   function singleArray(arr){
    let my_array = [];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            my_array.push(arr[i][j]);
        }
     }
   return my_array;
   }

    let myArray = [
        ["Asfandiyar", "SARA"],
        ["Anusha", "SAMAN"],
        ["Alia", "FAIZAN"],
];
    singleArray(myArray);
    document.write("The single array is :  " + singleArray(myArray) +"  " + " <br>");
   document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"
   // ASSIGNMENT # 15    " Find the Largest Number in an Array"

   document.write("Assignment # 15: " + "<br>");
   function largestNumber(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
   }
   let my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.write("The largest number in the array is : " + largestNumber(my_array) + "<br>");
    document.write("<br><br>");
"--------------------------------------------------------------------------------------------------"