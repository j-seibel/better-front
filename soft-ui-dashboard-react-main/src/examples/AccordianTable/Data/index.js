import SoftTypography from "components/SoftTypography"
import SoftBox from "components/SoftBox";
import { fetchSportOdds } from "layouts/tables/data/getGameData";

import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function Bets({ betType, homeOdds, awayOdds, teams }) {
    // Extract home team and away team from the teams array
    const [homeTeam, awayTeam] = teams;
  
    // State to manage the bet amount
    const [betAmount, setBetAmount] = useState(0);
    // State to manage the selected team
    const [selectedTeam, setSelectedTeam] = useState(null);
  
    // Function to handle the change in bet amount input
    const handleBetAmountChange = (event) => {
      const amount = parseInt(event.target.value);
      setBetAmount(isNaN(amount) ? 0 : amount); // Ensure betAmount is a number
    };
  
    // Function to handle selecting the home team
    const selectHomeTeam = () => {
      setSelectedTeam('home');
    };
  
    // Function to handle selecting the away team
    const selectAwayTeam = () => {
      setSelectedTeam('away');
    };
  
    // Function to handle placing the bet
    const placeBet = () => {
      // Ensure the bet amount is not below 0
      const validBetAmount = Math.max(0, betAmount);
      // Here you can handle the logic for placing the bet with the validBetAmount
      console.log('Placing bet with amount:', validBetAmount);
  
      const fetchSportOdds = async () => {
        const response = await fetch('http://127.0.0.1:5000/add_bet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "token_amount":validBetAmount, competitors: homeTeam + ' .vs ' + awayTeam  }), 
        });
        
        const data = await response.json();
        console.log(data);
        return data;
      };
  
      fetchSportOdds()
    };
  
    // Function to format odds to two decimal places
    const formatOdds = (odds) => {
      return parseFloat(odds).toFixed(2);
    };
  
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card onClick={selectHomeTeam} style={{ backgroundColor: selectedTeam === 'home' ? 'lightblue' : 'inherit', cursor: 'pointer', paddingBottom: 0, flex: 1 }}>
          <CardContent >
            <Typography variant="h5" component="h2">
              Home Team
            </Typography>
            <Typography variant="body2" component="p">
              {homeTeam} : {formatOdds(homeOdds)}
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={selectAwayTeam} style={{ backgroundColor: selectedTeam === 'away' ? 'lightblue' : 'inherit', cursor: 'pointer', paddingBottom: 0 ,flex: 1 }}>
          <CardContent >
            <Typography variant="h5" component="h2">
              Away Team
            </Typography>
            <Typography variant="body2" component="p">
              {awayTeam} : {formatOdds(awayOdds)}
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ flex: 1 }}>
          <CardContent style={{ paddingBottom: 0 }}>
            <Typography variant="h5" component="h2">
              Place Bet
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField
                type="number"
                onChange={handleBetAmountChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
              />
              <Button variant="button" onClick={placeBet}>Place Bet</Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  }

function BetData({GameID, rowData}) {
    const [homeOdds, setHomeOdds] = useState(0)
    const [awayOdds, setAwayOdds] = useState(0)
    const [teams, setTeams] = useState([])
    useEffect(() =>{
        async function wrapper(){
           const odds =  await fetchSportOdds(GameID)
            setHomeOdds(odds[0][0])
            setAwayOdds(odds[1][0])
            setTeams(rowData["competitors"].split(" vs. "))
            console.log(rowData)
        }
        wrapper()
    }, [])
    return(
        <SoftBox>
            <Bets betType="Money Line" homeOdds ={homeOdds} awayOdds={awayOdds} teams={teams}></Bets>
        </SoftBox>
    )
}

Bets.propTypes = {
    betType: PropTypes.string.isRequired,
    homeOdds: PropTypes.string.isRequired,
    awayOdds: PropTypes.string.isRequired,
    teams: PropTypes.string.isRequired
};
BetData.propTypes = {
    GameID: PropTypes.number.isRequired,
    rowData: PropTypes.any.isRequired
}

 export default BetData