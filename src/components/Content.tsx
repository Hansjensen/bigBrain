import { Route, Routes} from 'react-router-dom';
import User from './User';
import AddEntry from './AddEntry';
import Entries from './Entries';


function Content () {
    return(
        
            <Routes>
                
                <Route  path="/user" element={<User/>}/>
                
                <Route path="/addentry" element={<AddEntry/>}/>
           
                <Route path="/entries" element={<Entries/>} />
               
            </Routes>
       
    )
}

export default Content