import { useState } from "react"
import { CicloDeVida } from "./CicloDeVida"
import { Referencia } from "./Referencia"
import { Vitrine } from "./Vitrine"

function App() {
  const [alterna, setAlterar] = useState(1)

  return (
    <>
      <button onClick={() => setAlterar(1)}>Mostra</button>
      <button onClick={() => setAlterar(2)}>Não Mostra</button>
      { alterna === 1 && <CicloDeVida />}
      { alterna === 1 && <Referencia />}
      <Vitrine></Vitrine>
    </>
  )
}

export default App
