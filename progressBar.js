// let circularProgress = document.querySelector(".circular-progress.communication");
// let teamCircleProgress = document.querySelector(".circular-progress.team");
// let progressValue = document.querySelector(".progress-value.communication");
// let teamProgressValue = document.querySelector(".progress-value.team");
// let problemProgressValue = document.querySelector(".progress-value.problem");

// let progressStartValue = 0,
//   progressEndValue = 50,  // Set the end value for communication to 50
//   teamStartValue = 0, 
//   teamEndValue = 95,
//   problemStartValue = 0, 
//   problemEndValue = 95,
//   speed = 100;

// // Interval for communication skill
// let progress = setInterval(() => {
//   progressStartValue++;

//   progressValue.textContent = `${progressStartValue}%`;
//   circularProgress.style.background = `conic-gradient(#99681e ${progressStartValue * 3.6}deg, #6C3428 0deg)`;

//   if (progressStartValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

// // Interval for team progress
// let teamProgress = setInterval(() => {
//   teamStartValue++; // Increment the team progress value

//   teamProgressValue.textContent = `${teamStartValue}%`;
//   teamCircleProgress.style.background = `conic-gradient(#99681e ${teamStartValue * 3.6}deg, #6C3428 0deg)`;

//   if (teamStartValue == teamEndValue) {
//     clearInterval(teamProgress);
//   }
// }, speed);

// // Interval for problem progress
// let problemProgress = setInterval(() => {
//   problemStartValue++;

//   problemProgressValue.textContent = `${problemStartValue}%`;
//   circularProgress.style.background = `conic-gradient(#99681e ${problemStartValue * 3.6}deg, #6C3428 0deg)`;

//   if (problemStartValue == problemEndValue) {
//     clearInterval(problemProgress);
//   }
// }, speed);