import { useState } from 'react'
import { HostedForm, useAcceptJs } from 'react-acceptjs';

const authData = {
  // test key
  apiLoginID: '8XaQ8r8Y',
  clientKey: '8HJeXH2ne7N97A6Xp5S7tJxVex7fp7Wc8JjKQXMa4yX55XquHDCuE58G4z74zwYM',
};

type BasicCardInfo = {
  cardNumber: string;
  cardCode: string;
  month: string;
  year: string;
};


function App() {
    const handleSubmit = (response: any) => {
    console.log('Received response:', response);
  };
  return <HostedForm authData={authData} onSubmit={handleSubmit} />;
}

export default App
