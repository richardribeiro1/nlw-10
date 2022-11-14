function createGame(player1, player2, hour) {
  return `
    <li>
        <img src="assets/icon=${player1}.svg">
        <strong>${hour}</strong>
        <img src="assets/icon=${player2}.svg">
    </li>
    `;
}

let delay = -0.2;
function createCard(date, day, game) {
  delay += 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s">
         <ul>
              <h2>${date} <span>${day}</span></h2>
              ${game}
         </ul>          
     </div>    
    `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "05/12",
    "segunda-feira",
    createGame("brazil", "portugal", "13:45") +
      createGame("germany", "uruguay", "16:30") +
      createGame("united states", "turkey", "19:00")
  ) +
  createCard(
    "22/12",
    "Domingo",
    createGame("angola", "hong kong", "14:30") +
      createGame("india", "iran", "19:00")
  ) +
  createCard("06/12", "terça-feira", createGame("togo", "tunisia", "10:00")) +
  createCard(
    "08/12",
    "Quinta-feira",
    createGame("scotland", "paraguay", "12:30") +
      createGame("india", "iran", "17:00")
  ) +
  createCard("07/12", "quarta-feira", createGame("zambia", "vietnam", "11:00"));
