import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import PropTypes from 'prop-types';

const PlaidLink = () => {
  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    try {
      const response = await fetch('/api/create_link_token', {
        method: 'POST',
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

  return null ? <Link linkToken={linkToken} /> : <button>Hello</button>;
};

const Link = ({ linkToken }) => {
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    fetch('/api/set_access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
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
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  );
};

Link.propTypes = {
  linkToken: PropTypes.string.isRequired,
};

export default PlaidLink;
