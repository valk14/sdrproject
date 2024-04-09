
const standingsTable = document.getElementById('standings-table');
standingsData.forEach(team => {
    const row = standingsTable.insertRow();
    row.innerHTML = `<td>${team.team}</td><td>${team.wins}</td><td>${team.losses}</td><td>${team.points}</td>`;
});

const playersList = document.getElementById('players');
playersData.forEach(player => {
    const playerItem = document.createElement('p');
    playerItem.textContent = `${player.name} (${player.team}) - Goals: ${player.goals}, Assists: ${player.assists}`;
    playersList.appendChild(playerItem);
});
