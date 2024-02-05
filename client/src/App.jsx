import { Route          } from "wouter"
import { HomePage       } from "./pages/HomePage"
import { PatchNotesPage } from "./pages/PatchNotesPage"
import { ChampionPage   } from "./pages/ChampionPage"
import { NotiPage       } from "./pages/NotiPage"
import { EsportsPage    } from "./pages/EsportsPage"


function App() {
   


 return (

        <>
           
            <Route path='/'           component={HomePage} />
            <Route path='/patchnotes' component={PatchNotesPage} />
            <Route path='/campeones'  component={ChampionPage} />
            <Route path='/noticias'   component={NotiPage}/>
            <Route path='/esports'    component={EsportsPage}/>
        </>
  
    )  
}
export default App