export const fetchBalance = async () => {
    const response = await fetch('http://127.0.0.1:5000/get_balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: "1" }), 
    });

    const data = await response.json();
    console.log(data);
    return data.balance;
};

export const fetchTokenBalance = async () => {
    const response = await fetch('http://127.0.0.1:5000/get_balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: "1" }), 
    });

    const data = await response.json();
    console.log(data);
    return data.balance;
};
