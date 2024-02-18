import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

// Soft UI Dashboard React components
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';

// Icons
import WithdrawIcon from '@mui/icons-material/MoneyOff';
import DepositIcon from '@mui/icons-material/Money';
import TokensEarnedIcon from '@mui/icons-material/AttachMoney';
import colors from '../../../../assets/theme/base/colors';
import { fetchBalance } from 'utils/plaidUtils';
import { useEffect, useState } from 'react';

function BalanceComponent() {
    const [balance, setBalance] = useState(500);
    const [tokenAmount, setTokenAmount] = useState(100);
    const [tokensEarnedPerDay, setTokensEarnedPerDay] = useState(balance / 100);
    useEffect( () => {
        const getBalance = async () => {
            await fetchBalance(1).then((balance) => {
                setBalance(balance);
            });
        }
        getBalance();
    }, []);

  return (
    <Card elevation={0} sx={{ backgroundColor: colors.white }}>
      <SoftBox p={2} display="flex" alignItems="stretch">
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12}>
            <Card elevation={3} sx={{ backgroundColor: colors.darkBlue, p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <SoftBox display="flex" flexDirection="column" alignItems="center">
                <SoftBox pt={1} mb={1}>
                  <SoftTypography variant="h4" color={colors.white} fontWeight="bold">
                    Balance
                  </SoftTypography>
                </SoftBox>
                <SoftTypography variant="h3" color={colors.white} fontWeight="bold" gutterBottom>
                  {`${balance}`} {/* Display the money amount */}
                </SoftTypography>
                <SoftBox mb={1}>
                  <SoftTypography variant="h5" color={colors.white}>
                    {`${tokenAmount} Tokens`} {/* Display the token amount */}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card elevation={3} sx={{ backgroundColor: colors.dark, p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <SoftBox display="flex" flexDirection="column">
                <SoftBox display="flex" alignItems="center" mb={1}>
                  <WithdrawIcon sx={{ marginRight: 1, color: colors.white }} />
                  <SoftTypography variant="body2" color={colors.white}>
                    Withdraw
                  </SoftTypography>
                </SoftBox>
                <SoftBox display="flex" alignItems="center" mb={1}>
                  <DepositIcon sx={{ marginRight: 1, color: colors.white }} />
                  <SoftTypography variant="body2" color={colors.white}>
                    Deposit
                  </SoftTypography>
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <TokensEarnedIcon sx={{ marginRight: 1, color: colors.white }} />
                  <SoftTypography variant="body2" color={colors.white}>
                    {`${tokensEarnedPerDay} Tokens Earned/Day`}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

BalanceComponent.propTypes = {
  moneyAmount: PropTypes.number.isRequired,
  tokenAmount: PropTypes.number.isRequired,
  tokensEarnedPerDay: PropTypes.number.isRequired,
};

export default BalanceComponent;
