const form = document.querySelector("form"),
    statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();                                       //preventing form from submitting
    
    statusTxt.style.display = "block";


    let xhr = new XMLHttpRequest();                                               //creating new xml objext
    xhr.open("POST", "message.php", true);                                       //sending post message to php file
    xhr.onload = ()=>{                                            //once ajax loaded

        if (xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;                                     //storing ajax response in a response variable
            if(response.indexOf("Email and password field required") != -1 || response.indexOf("Enter a valid email address")|| response.indexOf("sorry, faild to send your message"));
            statusTxt.innerText = response;
        }else{
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display = "none";  
            }, 3000);
        }

    }
    let  formData = new formData(form);

    xhr.send(formData);

}

 