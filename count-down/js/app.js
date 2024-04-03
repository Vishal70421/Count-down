const endDate = "05 April 2024 11:24 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end -now)/1000;
    console.log(diff);
    if(diff<0)return;

        //convert into days;
    inputs[0].value = Math.floor(diff /3600 /24);
    inputs[1].value = Math.floor(diff/ 3600)% 24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;
    
}
//intial call
clock()

/**
 * 1days =24hrs
 * 1hr= 60 mins
 * 60min = 3600 sec
*/

setInterval(
    () => {
        clock()
    },
    1000
)