const monChart = document.getElementById("square__mon");
const tueChart = document.getElementById("square__tue");
const wedChart = document.getElementById("square__wed");
const thuChart = document.getElementById("square__thu");
const friChart = document.getElementById("square__fri");
const satChart = document.getElementById("square__sat");
const sunChart = document.getElementById("square__sun");

const spendingMon = document.getElementById("square__price__1");
const spendingTue = document.getElementById("square__price__2");
const spendingWed = document.getElementById("square__price__3");
const spendingThu = document.getElementById("square__price__4");
const spendingFri = document.getElementById("square__price__5");
const spendingSat = document.getElementById("square__price__6");
const spendingSun = document.getElementById("square__price__7");

const days = ["sun","mon","tue", "wed", "thu", "fri" , "sat" ]; 

let checktoday = () => { 
    let d = new Date(); 
    let day = days[d.getDay()];
    console.log(day);
    if (day === "sun") { 
        sunChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    } else if (day === "mon") { 
        monChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    } else if (day === "tue") { 
        tueChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    } else if (day === "wed") { 
        wedChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    } else if (day === "thu") { 
        thuChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    } else if (day === "fri") { 
        friChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    } else { 
        satChart.style.backgroundColor ="hsl(186, 34%, 60%)";
    }
}

checktoday()
setInterval (()=> { 
    checktoday()
}, 600000) // Repeats every 10 mins

/* For devices with mouse or a pointing device */

monChart.addEventListener("mouseover", ()=> { 
    spendingMon.style.display="block";
    spendingMon.innerText="$17.45";
})
monChart.addEventListener("mouseout", ()=> { 
    spendingMon.style.display="none";
})



tueChart.addEventListener("mouseover", ()=> { 
    spendingTue.style.display="block";
    spendingTue.innerText="$34.91";
})
tueChart.addEventListener("mouseout", ()=> { 
    spendingTue.style.display="none";
})



wedChart.addEventListener("mouseover", ()=> { 
    spendingWed.style.display="block";
    spendingWed.innerText="$52.36";
})
wedChart.addEventListener("mouseout", ()=> { 
    spendingWed.style.display="none";
})



thuChart.addEventListener("mouseover", ()=> { 
    spendingThu.style.display="block";
    spendingThu.innerText="$31.07";
})
thuChart.addEventListener("mouseout", ()=> { 
    spendingThu.style.display="none";
})


friChart.addEventListener("mouseover", ()=> { 
    spendingFri.style.display="block";
    spendingFri.innerText="$23.39";
})
friChart.addEventListener("mouseout", ()=> { 
    spendingFri.style.display="none";
})


satChart.addEventListener("mouseover", ()=> { 
    spendingSat.style.display="block";
    spendingSat.innerText="$43.28";
})
satChart.addEventListener("mouseout", ()=> { 
    spendingSat.style.display="none";
})


sunChart.addEventListener("mouseover", ()=> { 
    spendingSun.style.display="block";
    spendingSun.innerText="$25.48";
})
sunChart.addEventListener("mouseout", ()=> { 
    spendingSun.style.display="none";
})

/* On touch screens */

monChart.addEventListener("click", ()=> { 
    spendingMon.style.display="block";
    spendingMon.innerText="17.45";
    spendingTue.style.display="none";
    spendingWed.style.display="none";
    spendingThu.style.display="none";
    spendingFri.style.display="none";
    spendingSat.style.display="none";
    spendingSun.style.display="none";
})

tueChart.addEventListener("click", ()=> { 
    spendingMon.style.display="none";
    spendingTue.style.display="block";
    spendingWed.style.display="none";
    spendingThu.style.display="none";
    spendingFri.style.display="none";
    spendingSat.style.display="none";
    spendingSun.style.display="none";
})

wedChart.addEventListener("click", ()=> { 
    spendingMon.style.display="none";
    spendingTue.style.display="none";
    spendingWed.style.display="block";
    spendingThu.style.display="none";
    spendingFri.style.display="none";
    spendingSat.style.display="none";
    spendingSun.style.display="none";
})

thuChart.addEventListener("click", ()=> { 
    spendingMon.style.display="none";
    spendingTue.style.display="none";
    spendingWed.style.display="none";
    spendingThu.style.display="block";
    spendingFri.style.display="none";
    spendingSat.style.display="none";
    spendingSun.style.display="none";
})


friChart.addEventListener("click", ()=> { 
    spendingMon.style.display="none";
    spendingTue.style.display="none";
    spendingWed.style.display="none";
    spendingThu.style.display="none";
    spendingFri.style.display="block";
    spendingSat.style.display="none";
    spendingSun.style.display="none";
})

satChart.addEventListener("click", ()=> { 
    spendingMon.style.display="none";
    spendingTue.style.display="none";
    spendingWed.style.display="none";
    spendingThu.style.display="none";
    spendingFri.style.display="none";
    spendingSat.style.display="block";
    spendingSun.style.display="none";
})

sunChart.addEventListener("click", ()=> { 
    spendingMon.style.display="none";
    spendingTue.style.display="none";
    spendingWed.style.display="none";
    spendingThu.style.display="none";
    spendingFri.style.display="none";
    spendingSat.style.display="none";
    spendingSun.style.display="block";
})


/* Fetching data from json file*/
let totalSum = 0;

function processdata (data) { 
    let sum = 0; 
    data.forEach((obj) => { 
        sum += obj.amount; 
        console.log(sum);
    })
    return sum
}

function setHeight (data) { 
    data.forEach((obj) => { 
        if (obj.day === "mon") { 
            let newH = obj.amount;
            monChart.style.height = `${newH}%`; 
        } else if (obj.day === "tue") { 
            let newH = obj.amount;
            tueChart.style.height = `${newH}%`; 
        } else if (obj.day === "wed") { 
            let newH = obj.amount;
            wedChart.style.height = `${newH}%`; 
        } else if (obj.day === "thu") { 
            let newH = obj.amount;
            thuChart.style.height = `${newH}%`; 
        } else if (obj.day === "fri") { 
            let newH = obj.amount;
            friChart.style.height = `${newH}%`; 
        } else if (obj.day === "sat") { 
            let newH = obj.amount;
            satChart.style.height = `${newH}%`; 
        } else if (obj.day === "sun") { 
            let newH = obj.amount;
            sunChart.style.height = `${newH}%`; 
        }
    })
}

fetch("../data.json")
    .then((response) => { 
        return response.json();
    })
    .then((obj) => { 
        console.log(obj);
       totalSum = processdata(obj);
       console.log(totalSum)
       setHeight(obj)
        
    })
    .catch((error) => { 
        console.error ("Something went wrong with fetching data"); 
        console.error (error);
    })
