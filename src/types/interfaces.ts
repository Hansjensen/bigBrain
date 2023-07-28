export interface LogEntry {
    id: number;
    strain: string;
    grams: number;
    date: Date;
    logged: boolean;
    userId: number;
} 

export interface LogEntryProps {
  entries: LogEntry[];
}

export interface User {
  userName: string,
  id: number,
}