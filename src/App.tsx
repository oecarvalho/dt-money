import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions"
import { TransacionsProvider } from "./contexts/TransactionsContext"

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
       <TransacionsProvider>
         <Transactions/>
       </TransacionsProvider>
    </ThemeProvider>

  )
}

export default App
