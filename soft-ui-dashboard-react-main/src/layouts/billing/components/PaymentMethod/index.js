/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import PropTypes from 'prop-types';

const PlaidLink = () => {
  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/create_link_token', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          user_id: '1', // Example data
        }),
      });
      const data = await response.json();
      setLinkToken(data.link_token);
    } catch (error) {
      console.error('Error generating link token:', error);
    }
  };

  useEffect(() => {
    console.log('Generating link token...');
    generateToken();
  }, []);

  return linkToken ? <Link linkToken={linkToken} /> : null;
};

const Link = ({ linkToken }) => {
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    fetch('http://127.0.0.1:5000/exchange_public_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token, user_id: "1" }), 
    })
      .then((response) => {
        // Handle response ...
      })
      .catch((error) => {
        console.error('Error setting access token:', error);
      });
  }, []);

  const config = {
    token: linkToken,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <button
  onClick={() => open()}
  disabled={!ready}
  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}
>
  Link account
</button>
  );
};

Link.propTypes = {
  linkToken: PropTypes.string.isRequired,
};



function PaymentMethod() {
  const { borderWidth, borderColor } = borders;

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Payment Method
        </SoftTypography>
        <SoftButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          <PlaidLink />
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <SoftTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </SoftTypography>
              <SoftBox ml="auto" lineHeight={0}>
                
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <SoftTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </SoftTypography>
              <SoftBox ml="auto" lineHeight={0}>
                
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default PaymentMethod;
