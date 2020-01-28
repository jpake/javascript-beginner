let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true; 
let runnerAge = 18;

if (earlyRegister && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRegister && runnerAge > 18) {
  console.log(`Race will begin at 9:30am. Your race number is: ${raceNumber}`)
}
else if (!earlyRegister && runnerAge > 18) {
  console.log(`Late adults run at 11:00am. Your race number is: ${raceNumber}`)
}
else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30pm. Your race number is: ${raceNumber}`)
}
else {
  console.log('Please see the registration desk')
}
