import { useEffect, useState } from "react"
import data from "../../words.json"

export default function MainWindow() {
    const [words, setWords] = useState([])
    const [picked, setPicked] = useState([])

    const handleOnClick = (clicked => {
        if (!picked[clicked]) {
            setPicked([...picked, clicked])
            //TODO
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

    

    return (
        <div className="container">
            {([1, 2, 3, 4, 5]).map((i) => {
                return <div className="row" key={i}>
                    {([1, 2, 3, 4, 5]).map((j) => {
                        return <div className="col" key={j}>
                            <button disabled={picked.includes(((i - 1) * 5 + j) - 1)} onClick={() => handleOnClick(((i - 1) * 5 + j) - 1)} type="button" className="btn btn-light btn-lg">{words[((i - 1) * 5 + j) - 1]}</button>
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
