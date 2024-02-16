import { useEffect, useState } from "react"

const CicloDeVida = () => {
    const [incremento, setIncremento] = useState(0)
    console.log("constuctor")

    const funcaoDestruidora = () => console.log("componentWillUnmount")

    const incrementar = () => setIncremento((state) => state + 1)

    useEffect(() => {
        console.log("componentDidMount")
        return funcaoDestruidora
    },[])

    useEffect(() => {
        incrementar()
    },[])

    useEffect(() => {
        console.log('componentDidUpdate!!',incremento)
    },[incremento])

    return <>CicloDeVida</>
}

export {CicloDeVida}