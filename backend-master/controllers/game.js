// import likePost from './posts.js'
// const choices = document.querySelectorAll('.choice');
// const score = document.getElementById('score');
// const result = document.getElementById('result');
// const restart = document.getElementById('restart');
// const modal = document.querySelector('.modal');
// const scoreboard = {
//   player: 0,
//   computer: 0
// };

// Play game
// export default  function play(e) {
//   restart.style.display = 'inline-block';
//   const playerChoice = e.target.id;
//   const computerChoice = getComputerChoice();
//   const winner = getWinner(playerChoice, computerChoice);
//   showWinner(winner, computerChoice);
// }

// Get computers choice
export default function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'ARCHERS';
  } else if (rand <= 0.67) {
    return 'PIKEMEN';
  } else {
    return 'CAVALRY';
  }
}

// // Get game winner
// export default  function getWinner(p, c) {
//   if (p === c) {
//     return 'draw';
//   } else if (p === 'ARCHERS') {
//     if (c === 'PIKEMEN') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } else if (p === 'CAVALRY') {
//     if (c === 'ARCHERS') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } else if (p === 'PIKEMEN') {
//     if (c === 'CAVALRY') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   }
// }

// export default function showWinner(winner, computerChoice) {
//   if (winner === 'player') {
//     // Inc player score
//     likePost;
//     // Show modal result
//     result.innerHTML = `
//       <h1 class="text-win">You Win</h1>
//       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//       <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//         computerChoice.slice(1)}</strong></p>
//     `;
//   } else if (winner === 'computer') {
//     // Inc computer score
//     likePost;
//     // Show modal result
//     result.innerHTML = `
//       <h1 class="text-lose">You Lose</h1>
//       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//       <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//         computerChoice.slice(1)}</strong></p>
//     `;
//   } else {
//     result.innerHTML = `
//       <h1>It's A Draw</h1>
//       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//       <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
//         computerChoice.slice(1)}</strong></p>
//     `;
//   }
//   // Show score
//   score.innerHTML = `
//     <p>Player: ${scoreboard.player}</p>
//     <p>Computer: ${scoreboard.computer}</p>
//     `;

//   modal.style.display = 'block';
// }

// // Restart game
// export default  function restartGame() {
//   scoreboard.player = 0;
//   scoreboard.computer = 0;
//   score.innerHTML = `
//     <p>Player: 0</p>
//     <p>Computer: 0</p>
//   `;
// }

// // Clear modal
// export default function clearModal(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }

// // Event listeners
// choices.forEach(choice => choice.addEventListener('click', play));
// window.addEventListener('click', clearModal);
// restart.addEventListener('click', restartGame);
