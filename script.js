document.getElementById("bmiForm").addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const resultElement = document.getElementById("result");

    if(gender && age > 0 && heightFeet >= 0 && heightInches >= 0 && (heightFeet > 0 || heightInches > 0) && weight > 0){

        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;  
        const bmi = weight / (heightInMeters * heightInMeters);

        let category = '';

        if(bmi < 18.5){
            category = 'Under Weight';
        }else if (bmi < 25){
            category = 'Normal Weight';
        }else if (bmi < 30){
            category = 'Over Weight';
        }else{
            category = 'Obese';
        }

        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;

    }else{
        resultElement.innerHTML = 'Please enter valid values for all fields.';
    }

});
