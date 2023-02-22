
let attemptsCounter = 0;

const luhnAlgorithm = (ccNumber) => {
    const length = ccNumber.length;
    let count = 0;

    if(length % 2 == 0)
    {
       
        for(let i = 0; i < length; i++)
        {
            let currentDigit = parseInt(ccNumber[i]);
            if (i % 2 == 0) 
            {
                if ((currentDigit *= 2) > 9)
                {
                    
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);

                    
                    currentDigit = firstNumber + trailingNumber;
                }
            }
            
            count += currentDigit;
        }
    }
    else {
       
        for(let i = length - 1 ; i >= 0; i--)
        {
            let currentDigit = parseInt(ccNumber[i]);
            if ((i - 1) % 2 == 0) 
             {
                if ((currentDigit *= 2) > 9)
                {
                    
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);

                   
                    currentDigit = firstNumber + trailingNumber;
                }
            }
            
            count += currentDigit;
        }
    }

    return (count % 10) === 0;
}

const checkCC = () => {
    const elCCNumber = document.getElementById('ccNumber');
    const elCCValidation = document.getElementById('ccValidator');
    const elAttempts = document.getElementById('attempts');
    let message = "";

    
    if( luhnAlgorithm(elCCNumber.value) )
        message = "Gecerli Kart Numarasi";
    else
        message = "Gecersiz Kart Numarasi";
    
    
    elCCValidation.textContent = message;
    
    elCCNumber.value = null;

    elAttempts.textContent = ++attemptsCounter;
};
module.exports=luhnAlgorithm;





