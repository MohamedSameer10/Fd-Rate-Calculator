function fdRate()
{
    const container = document.querySelector(".container")

    container.classList.add("animate")

    let user_input = document.getElementById("user_input")

    let result_value = document.getElementById("result")

    let user_value = Number(user_input.value)

    result_value.classList.add("result")

    if( document.querySelector("input").value == ""){
        result_value.innerHTML = `<span style = "color:yellow;">Please Enter The Value</span>`
        container.append(result_value)
    }

    else{

        if(user_value<3){
            result_value.innerHTML = `The calculated value is 5.8%`
        }
        else if(user_value>=3 && user_value<=6){
            result_value.innerHTML = `The calculated value is 6.5%`
        }
        else if(user_value>=7 && user_value <=9){
            result_value.innerHTML = `The calculated value is 6.8%`
        }
    
        else{
            result_value.innerHTML = `The calculated value is 7%`
        }
    
    }


    
}