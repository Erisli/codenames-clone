import { useEffect, useState } from "react"
import data from "../../words.json"
import openSocket from "socket.io-client"
import "./index.css"

const socket = openSocket('http://localhost:3000', {transports: ['websocket']});
export default function MainWindow() {
    // const [socket, setSocket] = useState(null);
    const [words, setWords] = useState([])
    const [picked, setPicked] = useState([])

    const handleOnClick = (clicked => {
        if (!picked[clicked]) {
            setPicked([...picked, clicked])
        }
    })

    useEffect(() => {
        const unsubscribe = async () => {
            let words = []
            for (let i = 0; i < 25; i++) {
                words.push(data[Math.floor(Math.random() * 200)])
            }
            setWords(words)
        }
        unsubscribe()
    }, [])

    // useEffect(() => {
    //     const newSocket = io(`http://localhost:3000`);
    //     setSocket(newSocket);
    //     return () => newSocket.close();
    //   }, [setSocket]);

    return (
        <div className="container">
            {([1, 2, 3, 4, 5]).map((i) => {
                return <div className="row" key={i}>
                    {([1, 2, 3, 4, 5]).map((j) => {
                        return <div className="col" key={j}>
                            <button disabled={picked.includes(((i - 1) * 5 + j) - 1)} onClick={() => handleOnClick(((i - 1) * 5 + j) - 1)} type="button" className="btn btn-light py-3 my-3 cardbtn">{words[((i - 1) * 5 + j) - 1]}</button>
                        </div>
                    })}
                </div>
            })}

            <br></br>

            {([1, 2, 3, 4, 5]).map((i) => {
                return <div className="row" key={i}>
                    {([1, 2, 3, 4, 5]).map((i) => {
                        return <div className="col" key={i}>
                            map
                        </div>
                    })}
                </div>
            })}
        </div>
    )
}
