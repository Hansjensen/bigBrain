import { Route, Routes} from 'react-router-dom';
import UserPage from './User';
import AddEntry from './AddEntry';
import Entries from './Entries';
import { User, SceneSetting,  } from '../types/interfaces';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import { useAuth } from './AuthContext';


function Content (props: { user: User, scene: SceneSetting, strains: Array<string>  }) {
    const { user, scene, strains} = props
    const {currentUser} = useAuth()
 
    return(
        
            <Routes>

                <Route exact path="/" element={currentUser? <UserPage 
                                                user={user} 
                                                scene={scene}
                                                />: <Login/>}/>
                
                <Route path="/user" element={<PrivateRoute><UserPage 
                                                user={user} 
                                                scene={scene}
                                                /></PrivateRoute>}/>
                
                
                <Route path="/addentry" element={<PrivateRoute><AddEntry
                                                    user={user}
                                                    scene={scene}
                                                    strains={strains}
                                                    
                                                   /></PrivateRoute>}/>
           
                <Route path="/entries" element={<PrivateRoute><Entries 
                                                         scene={scene}
                                                         strains={strains}
                                                         user={user}
                                                         /></PrivateRoute>} />
               
            </Routes>
       
    )
}

export default Content