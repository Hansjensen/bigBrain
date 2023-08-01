import { error } from "console"
import { LogEntry } from "../types/interfaces"
import uniqid from 'uniqid'

type ActionLogEntry =
 | { type: 'add_logEntry', strain: string, grams: number, date: Date, userId: string, scene: string}
 | { type: 'edit_logEntry', id: string, grams: number, date: Date, userId: string, strain: string }
 | { type: 'delete_logEntry', id: string }
 

export function logEntryReducer(state: LogEntry[] | any , action: ActionLogEntry) {
    const {type} = action
    console.log(state)
    
    switch(type) {

        case 'edit_logEntry': {
            console.log('edit')
            return state.map((entry: LogEntry) => {
               if (entry.id === action.id) {
                console.log(entry, action)
                return {
                    ...entry,
                    strain: action.strain,
                    grams: action.grams,
                    date: action.date,
                }
               } 
                return entry
            })
           
        }
        

        case 'add_logEntry': {
            return [               
                {
                    id: uniqid('log-'),
                    strain: action.strain, 
                    grams: action.grams,
                    date: action.date,
                    logged: false,
                    userId: action.userId,
                    scene: action.scene,
                },
                ...state,
            ]

        }

        case 'delete_logEntry' : {
            return state.filter((entry: LogEntry) => entry.id !== action.id)
        }
 
        default:  {
            throw Error('Unknown Action: ' + type )
        }

        
    }

}