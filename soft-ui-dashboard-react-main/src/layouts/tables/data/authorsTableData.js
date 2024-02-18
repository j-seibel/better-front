function authorsTableData(data){
  data = data[0][0]
  var toReturn = {columns: [
    { name: "league", align: "left" },
    { name: "competitors", align: "center" },
    { name: "date", align: "center" },
    { name: "Made bet", align: "right" },
  ],

  rows: [
  ],
};

for(let i = 0; i < data.length; i++){
  const isoDateString = data[i]["commence_time"]
  const formattedDate = new Date(isoDateString).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) + ' ' + new Date(isoDateString).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  toReturn["rows"].push(
    {
      league: data[i]['sport_title'],
      competitors: data[i]['home_team'] + " vs. " + data[i]["away_team"],
      date: formattedDate,
    }
  )
}

return toReturn

};

export default authorsTableData;
