let upChar ="AABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowChar = "abcdefghijklmnopqrstuvwxyz"
        let numChar = "0123456789"
        let symChar = "!@#$%^&*"
        
        let passBox = document.getElementById("passbox")
        let inputSlider = document.getElementById("inputSlider")
        let sliderValue = document.getElementById("sliderValue")
        let lowerCase = document.getElementById("lowercase");
        let upperCase = document.getElementById("uppercase");
        let special = document.getElementById("special");
        let number = document.getElementById("number");
        let copy = document.getElementById("copy")




        
        let randomChar = (data) => {
            return data[Math.floor(Math.random()*data.length)];
        }
        
        const genPass = (pass = "") => {
            if (lowerCase.checked){
                pass += randomChar(lowChar);
            }
            if(upperCase.checked){
                pass += randomChar(upChar);
            }
            if (special.checked){
                pass += randomChar(symChar);
            }
            if (number.checked){
                pass += randomChar(numChar);
            }
            if(pass.length<sliderValue.value)
            {
                return genPass(pass) 
            }
            console.log(trim(pass, sliderValue.value));
            passBox.value = pass;
        }

        const trim = (pass, lnth) => {
            if(pass.length>lnth){
                let str = pass.substring(0,lnth);
                return str;
            }
            else{
                return pass;
            }
        }
        

        function slider(event){
            const value = event.target.value;
            inputSlider.value = value;
            sliderValue.value = value;
        }
        inputSlider.addEventListener('input', slider);
        sliderValue.addEventListener('input', slider);

        
        copy.addEventListener("click", () => {
            navigator.clipboard.writeText(passBox,value);
            alert("password coppied sucssesfully");
        
        })