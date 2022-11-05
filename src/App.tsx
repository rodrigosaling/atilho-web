import React, { useState } from 'react';

function App() {
  const [accountName, setAccountName] = useState('');
  const [accounts, setAccounts] = useState(['asdf']);

  const onClick = () => {
    setAccounts((prevState) => [...prevState, accountName]);
    setAccountName('');
  };

  return (
    <div>
      <h1>Hello world!</h1>

      <div>
        <input
          type="text"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
      </div>
      <button onClick={onClick}>add account</button>

      <h2>Accounts</h2>
      {accounts.length &&
        accounts.map((account) => {
          return <p>{account}</p>;
        })}
    </div>
  );
}

export default App;
