export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=5de95050-53c7-4ad2-889a-94a504a25044`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      }
    );

    const data = await response.json();

    res.status(200).json({ data });
  };

  getData();
}
