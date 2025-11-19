import { useState } from 'react'
import { useAcceptJs } from 'react-acceptjs';

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
    const { dispatchData, loading, error } = useAcceptJs({ authData });
    const [cardData, setCardData] = useState<BasicCardInfo>({
    cardNumber: '',
    month: '',
    year: '',
    cardCode: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("cardData", cardData);
    // Dispatch CC data to Authorize.net and receive payment nonce for use on your server
    const response = await dispatchData({ cardData });
    console.log('Received response:', response);
  };

  return (
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cardNumber"
        value={cardData.cardNumber}
        onChange={(event) =>
          setCardData({ ...cardData, cardNumber: event.target.value })
        }
      />
      <input
        type="text"
        name="month"
        value={cardData.month}
        onChange={(event) =>
          setCardData({ ...cardData, month: event.target.value })
        }
      />
      <input
        type="text"
        name="year"
        value={cardData.year}
        onChange={(event) =>
          setCardData({ ...cardData, year: event.target.value })
        }
      />
      <input
        type="text"
        name="cardCode"
        value={cardData.cardCode}
        onChange={(event) =>
          setCardData({ ...cardData, cardCode: event.target.value })
        }
      />
      <button type="submit" disabled={loading || error}>
        Pay
      </button>
    </form>
  )
}

export default App
