import { Route, Routes} from 'react-router-dom';
import UserPage from './User';
import AddEntry from './AddEntry';
import Entries from './Entries';
import { User, SceneSetting,  } from '../types/interfaces';


function Content (props: { user: User, scene: SceneSetting, strains: Array<string>  }) {
    const { user, scene, strains} = props

    return(
        
            <Routes>
                
                <Route  path="/user" element={<UserPage 
                                                user={user} 
                                                scene={scene}
                                                />}/>
                
                
                <Route path="/addentry" element={<AddEntry
                                                    user={user}
                                                    scene={scene}
                                                    strains={strains}
                                                    
                                                   />}/>
           
                <Route path="/entries" element={<Entries 
                                                         scene={scene}
                                                         strains={strains}
                                                         user={user}
                                                         />} />
               
            </Routes>
       
    )
}

export default Content