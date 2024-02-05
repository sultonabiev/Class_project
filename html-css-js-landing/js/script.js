let days = document.querySelectorAll(".timer_value")[0]
let hours = document.querySelectorAll(".timer_value")[1]
let minutes = document.querySelectorAll(".timer_value")[2]

let deadlineDate = new Date(2024,2,2,23,59,59)

function countdown() {
    let newDate = new Date()
    let resultDate = deadlineDate-newDate
        if(resultDate<=10) {
            clearInterval(timer)
        }
        else{
            let daysVale=Math.floor(resultDate/(24*60*60*1000))
            let hoursValue=Math.floor((resultDate%(24*60*60*1000)/(60*60*1000)))
            let minutesValur=Math.floor((resultDate%(60*60*1000))/(60*1000))
            hold(daysVale,days)
            hold(hoursValue,hours)
            hold(minutesValur, minutes)
        }
}

let timer =setInterval(countdown,5000)

countdown()

function hold(elem, value) {
    if(elem<10){
        value.innerHTML=`0${elem}`;
    }
    else{
        value.innerHTML=elem;
    }
}