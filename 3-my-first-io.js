/** 
    
 ## MY FIRST I/O! (Exercise 3 of 13)  
   
  Create a file named my-first-io.js.  
   
  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file.  

**/


const fs = require('fs') ;


console.log( fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1 )  ;
