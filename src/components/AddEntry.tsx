
import AddForm from "./AddForm";
import { LogEntry, SceneSetting , User} from "../types/interfaces";
import dayjs from "dayjs";

const balls: LogEntry = {
    id: '',
    strain: '',
    grams: NaN,
    date: dayjs(new Date()),
    logged: false,
    userId: '0',
    scene: 'Test Test'
}

const strains: Array<string> = [
    'Strawguana',
    'Og Kush',
    'Diesel'
]





function AddEntry (props: {user: User, scene: SceneSetting}) {
    const {user, scene} = props
    return  <AddForm logEntry={balls} strainList={strains} scene={scene} user={user}/>
        
}

export default AddEntry