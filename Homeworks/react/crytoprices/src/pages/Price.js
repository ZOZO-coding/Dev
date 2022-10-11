import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Price = () => {
    // api key
    const apiKey = process.env.REACT_APP_API_KEY;
    // const apiKey = '882004EE-B805-4667-BB73-06CD83439B6A'

    // get the params
    const { symbol } = useParams();

    // get the url endpoint
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // create state to hold coin data
    const [coin, setCoin] = useState(null)

    // create a function to fetch the data
    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect hook to fetch the data when the page renders
    useEffect(() => {
        getCoin();
    }, [])

    // create the loaded page
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    // create the loading page
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return coin && coin.rate ? loaded() : loading();
}

export default Price