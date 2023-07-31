import { LogEntry } from "../types/interfaces"
import uniqid from 'uniqid'

type ActionLogEntry =
 | { type: 'add_logEntry', strain: string, grams: number, date: Date, userId: string, scene: string}
 | { type: 'edit_logEntry', }
 

export function logEntryReducer(state: LogEntry[] | any , action: ActionLogEntry) {
    const {type} = action
    console.log(action)
    switch(type) {
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
    }

}