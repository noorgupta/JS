const in1 = document.getElementById('in1');
const in2 = document.getElementById('in2');
const in3 = document.getElementById('in3');
const in4 = document.getElementById('in4');
const in5 = document.getElementById('in5');
const btn = document.getElementById('gradebtn');
const pa = document.getElementById('para');

btn.addEventListener('click', () => {
    // Get values inside the click listener
    const val1 = Number(in1.value);
    const val2 = Number(in2.value);
    const val3 = Number(in3.value);
    const val4 = Number(in4.value);
    const val5 = Number(in5.value);

    // Call functions and store the result inside the listener
    const average = calculateAverage(val1, val2, val3, val4, val5);
    const grade = getGrade(average);

    // Display the result using the correct variables
    pa.textContent = `Your average score is: ${average.toFixed(2)} - Grade: ${grade}`;
});

// These functions are defined in the global scope, so they can be called
// from within the event listener.
function calculateAverage(value1, value2, value3, value4, value5) {
    let sum = value1 + value2 + value3 + value4 + value5;
    let divide = sum / 5;
    return divide;
}

function getGrade(ans){
    let score = '';
    if(ans >= 90){
        score = "A";
    } else if(ans >= 80){
        score = "B";
    } else if(ans >= 70){
        score = "C";
    } else {
        score = "F";
    }
    return score;
}