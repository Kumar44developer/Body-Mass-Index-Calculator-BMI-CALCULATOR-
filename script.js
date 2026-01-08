document.getElementById("bmiForm").addEventListener('submit',function(e){
    e.preventDefault();

const gender = document.getElementById('gender').value;
const age = parseInt(document.getElementById('age').value);
const heightFeet = parseInt(document.getElementById('height-feet').value);

