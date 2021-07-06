import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [, setIsLoading] = useState(true);

    const getQuote = () => {
        setIsLoading(true);
        fetch(
            "https://gist.githubusercontent.com/Ebazhanov/c391d558be432e54dc0f78783879ee84/raw/1eeb7469ba08c1708153b9b8ec800b4d4ba7a0bd/quotes.json"
        )
            .then((res) => res.json())
            .then((data) => {
                const randomQuote = Math.floor(Math.random() * 102);
                setQuote(data.quotes[randomQuote].quote);
                setAuthor(data.quotes[randomQuote].author);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="boxes">
            <div className="quote-container">
                <h1 className="quote-text">{quote}</h1>
                <p className="quote-author">-{author}</p>
            </div>
            <Button changeOnClick={getQuote}>next quote</Button>
            <footer>
                <div className="footer-text">© 2021 Ebazhanov</div>
            </footer>
        </div>
    );
}

export default App;
