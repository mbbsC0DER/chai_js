const form = document.querySelector("form")

form.addEventListener("submit" , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const res = document.querySelector("#result")

    if (height==="" || isNaN(height) || height < 0)
    {
        res.innerHTML = `Please enter valid height !`
    }
    else if (weight==="" || isNaN(weight) || weight < 0 )
    {
        res.innerHTML = "Please enter valid weight !"
    }
    else 
    {
        let bmi = (weight / ((height * height)/10000)).toFixed(3)
        if(bmi < 18.6)
        {
            res.innerHTML = `BMI = ${bmi}\nYou are under weight`
        }
        else if (bmi > 24.9)
        {
            res.innerHTML = `BMI = ${bmi}\nYou are Overweight`
        }
        else 
        {
            res.innerHTML = `BMI = ${bmi}\nYour bmi is in normal range .`
        }
    }
})