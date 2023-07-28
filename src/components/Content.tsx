import { Route, Routes} from 'react-router-dom';
import User from './User';
import AddEntry from './AddEntry';
import Entries from './Entries';
import { LogEntry } from '../types/interfaces';


function Content (props: {logEntries: LogEntry[]}) {
    const {logEntries} = props

    return(
        
            <Routes>
                
                <Route  path="/user" element={<User/>}/>
                
                <Route path="/addentry" element={<AddEntry/>}/>
           
                <Route path="/entries" element={<Entries logEntries={logEntries}/>} />
               
            </Routes>
       
    )
}

export default Content