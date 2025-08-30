// const date = new Date();
// // console.log(date)
// // const Year = date.getFullYear();
// // const month = date.getMonth();
// // const day = date.getDay();
// // const hours = date.getHours();
// // const minutes = date.getMinutes();
// // const seconds = date.getSeconds();
// // const milliseconds = date.getMilliseconds();
// // console.log(`year ${Year}`)
// // console.log(`month ${month}`)
// // console.log(`day ${day}`)
// // console.log(`hours ${hours}`)
// // console.log(`minutes ${minutes}`)
// // console.log(`seconds ${seconds}`)
// // console.log(`milliseconds ${milliseconds}`)

// // console.log(date.toDateString());
// // console.log(date);
// // console.log(date.toISOString());
// // console.log(date.toLocaleString());
// date.setDate(date.getDate() - 1);
// console.log(date);


//setinterval


const intervalid = setInterval(()=>{
    console.log("hello sir")
}
,1000)


setTimeout(()=>{
    console.log("this function will be executed after 5 seconds")
},5000)


//stop the interval after 10 seconds

setTimeout(()=>{
    clearInterval(intervalid)
    console.log("interval stopped");
},5000)

console.log(intervalid)