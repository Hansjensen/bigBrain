import { Route, Routes} from 'react-router-dom';
import UserPage from './User';
import AddEntry from './AddEntry';
import Entries from './Entries';
import { LogEntry, User, SceneSetting,  } from '../types/interfaces';


function Content (props: { user: User, scene: SceneSetting,  }) {
    const { user, scene} = props

    return(
        
            <Routes>
                
                <Route  path="/user" element={<UserPage 
                                                user={user} 
                                                scene={scene}
                                                />}/>
                
                
                <Route path="/addentry" element={<AddEntry
                                                    user={user}
                                                    scene={scene}
                                                    
                                                   />}/>
           
                <Route path="/entries" element={<Entries 
                                                         scene={scene}
                                                         />} />
               
            </Routes>
       
    )
}

export default Content