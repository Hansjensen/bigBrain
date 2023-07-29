export interface LogEntry {
    id: number;
    strain: string;
    grams: number;
    date: Date;
    logged: boolean;
    userId: number;
    scene: string
} 

export interface LogEntryProps {
  entries: LogEntry[];
}

export interface User {
  userName: string,
  id: number,
  sceneList: Array<string>
}

export interface SceneSetting {
    pricePerPound: number,
    currentScene: string,
    wetDry: 'Wet' | 'Dry',
}

