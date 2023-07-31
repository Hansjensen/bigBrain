import { createContext } from 'react';
import { LogEntry } from '../types/interfaces';



export const LogContext = createContext<any>(null);
export const LogDispatchContext = createContext<any | null>(null);
