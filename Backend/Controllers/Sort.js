function assignRanks(users) {
  users.sort((a, b) => b.Points - a.Points);

  let rank = 1;
  for (let i = 0; i < users.length; i++) {
    if (i > 0 && users[i].Points === users[i - 1].Points) {
      users[i].rank = users[i - 1].rank; 
    } else {
      users[i].rank = rank;
    }
    rank++;
  }

  return users;
}

module.exports={assignRanks};