// document.getElementById('inputElement').addEventListener('input',()=>{
//     let inputSearch = document.getElementById('inputElement');
//     let inputOutput = document.getElementById('inputOutput')
//     let d = inputSearch.value;
    
//     inputOutput.innerHTML = d
//     console.log(d)
// })
let inputSearch = document.getElementById('inputElement');
let d = inputSearch.value;
// Assuming 'valueToSave' is the value you want to save
localStorage.setItem('myValue', d);

var retrievedValue = localStorage.getItem('myValue');

if (retrievedValue !== null) {
    // Do something with the retrieved value, for example:
    console.log('Retrieved value:', retrievedValue);
} else {
    console.log('No value found in local storage.');
}


// Saving a value to local storage
// var valueToSave = 'Hello, world!';
// localStorage.setItem('myValue', valueToSave);

// // Retrieving the saved value from local storage
// var retrievedValue = localStorage.getItem('myValue');

// // Using the retrieved value to display something
// if (retrievedValue !== null) {
//     console.log('Retrieved value:', retrievedValue);
// } else {
//     console.log('No value found in local storage.');
// }


