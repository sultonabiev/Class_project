let days = document.querySelectorAll(".timer_value")[0]
let hours = document.querySelectorAll(".timer_value")[1]
let minutes = document.querySelectorAll(".timer_value")[2]

let deadlineDate = new Date(2024, 1, 2, 23, 59, 59)

function countDown() {
    let newDate = new Date()
    let resultDate = deadlineDate - newDate
    if (resultDate < 0) {
        clearInterval(timer); 
    } else {
        let daysValue = Math.floor(resultDate / (24 * 60 * 60 * 1000))
        let hoursValue = Math.floor((resultDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let minutesValue = Math.floor((resultDate % (60 * 60 * 1000)) / (60 * 1000))
        hold(daysValue, days)
        hold(minutesValue, minutes)
        hold(hoursValue, hours)
        
    }
}

let timer = setInterval(countDown, 1000)

countDown()

function hold(elem, value) {
    if (elem < 10) {
        value.textContent = `0${elem}`;
    } else {
        value.textContent = elem;
    }
}

function openpopUP() {
    let bg = document.querySelector('.bg')
    bg.classList.remove('closed')
}

function closepopUP() {
    let elem = event.target
    if(elem.className == 'bg' ) {
    let bg = document.querySelector('.bg')
    bg.classList.add('closed')
}
}


function setPhoneMask(inputElement) { 
    inputElement.addEventListener('input', function(event) { 
        let inputValue = event.target.value.replace(/\D/g, '');  

        if (!inputValue.startsWith('998')) { 
            inputValue = '998' + inputValue;  
        } 
 
        inputValue = inputValue.slice(0, 12);  
 
        let formattedValue = '+'; 
        for (let i = 0; i < inputValue.length; i++) { 
            if (i === 3) { 
                formattedValue += '('; 
            } else if (i === 5) { 
                formattedValue += ')'; 
            } else if (i === 8 || i === 10) { 
                formattedValue += '-'; 
            } 
            formattedValue += inputValue[i]; 
        } 
 
        event.target.value = formattedValue; 
    }); 
 
    inputElement.addEventListener('keydown', function(event) { 
        if (event.key === 'Backspace' && event.target.value.length <= 5) { 
            event.preventDefault(); 
        } 
    }); 
} 
 
let phoneInput = document.getElementsByName('phone')[0]; 
setPhoneMask(phoneInput);