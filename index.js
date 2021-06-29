function saturdayFun(activity = "roller-skate") {
    if (activity) {
        return `This Saturday, I want to ${activity}!`
    } 
}

function mondayWork (work = "go to the office") {
    if (work) {
        return `This Monday, I will ${work}.`
    }
}

function wrapAdjective(special = "*") {
    return function (phrase = "a dedicated programmer") {
        return (`You are ${special}${phrase}${special}!`)
    }
}