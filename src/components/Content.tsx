import { Route, Routes} from 'react-router-dom';
import UserPage from './User';
import AddEntry from './AddEntry';
import Entries from './Entries';
import { LogEntry, User, SceneSetting } from '../types/interfaces';


function Content (props: {logEntries: LogEntry[], user: User, scene: SceneSetting}) {
    const {logEntries, user, scene} = props

    return(
        
            <Routes>
                
                <Route  path="/user" element={<UserPage 
                                                user={user} 
                                                scene={scene}
                                                logEntries={logEntries}/>}/>
                
                
                <Route path="/addentry" element={<AddEntry
                                                    user={user}
                                                    scene={scene}
                                                    logEntries={logEntries}/>}/>
           
                <Route path="/entries" element={<Entries logEntries={logEntries}
                                                         scene={scene}
                                                         logEntries={logEntries}/>} />
               
            </Routes>
       
    )
}

export default Content