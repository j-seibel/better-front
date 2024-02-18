export const fetchSportsBet = async () => {
  const response = await fetch('http://127.0.0.1:5000//get_sports_db', {
  method: 'GET',
  })
    
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchSportOdds = async (GameID) => {
  const response = await fetch('http://127.0.0.1:5000//get_odds_ml', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ GameID }), 
    });

  const data = await response.json();
  console.log(data);
  return data;
};