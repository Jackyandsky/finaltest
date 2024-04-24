function displayDate(){
    var dd = (new Date).toLocaleString("default", { day: "2-digit" })
    var mm = (new Date).toLocaleString("default", { month: "2-digit" })
    var yy = (new Date).toLocaleString("default", { year: "numeric" })
    var HH = (new Date).getHours()
    var MM = (new Date).getMinutes()
    document.getElementById('day').innerText = dd +"/"+mm+"/"+yy +" at " + HH+":"+ MM
}
//displayDate()
setInterval(displayDate, 1000)
function getRandomInteger(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function btnclick(){
    let data = [{id:1,src:'dice-1.svg'},
    {id:2,src:'dice-2.svg'},
    {id:3,src:'dice-3.svg'},
    {id:4,src:'dice-4.svg'},
    {id:5,src:'dice-5.svg'},
    {id:6,src:'dice-6.svg'},]
    var d1 = getRandomInteger(5)
    var d2 = getRandomInteger(5)

    document.getElementById('dice1').src = data[d1].src
    document.getElementById('dice2').src = data[d2].src

    var sum = data[d1].id + data[d2].id
    document.getElementById('total').innerText = sum
    if (sum > 8){
        document.getElementById('tip').innerText = 'You win: Try Again!'
    }
    else if (sum < 8){
        document.getElementById('tip').innerText = "You didn't win: Try Again!"
    }
}