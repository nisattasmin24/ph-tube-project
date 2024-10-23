const isVerified = true;

// if(isVerified === true){
//     console.log("user is verified");
// }
// else{
//     console.log("user is not verified");
// }

console.log(
    `${isVerified === true ? "user is verified" : "user is not verified"}`
);

function getTimeString(time){
    //get Hour and Rest Seconds
    const hour = parseInt(time/3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour}hour ${minute}minute ${remainingSecond}second ago`;
}

console.log(getTimeString(7650));