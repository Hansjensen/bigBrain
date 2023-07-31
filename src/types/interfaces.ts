import { Dispatch } from "react";
import { Dayjs } from "dayjs";

export interface LogEntry {
    id: string;
    strain: string;
    grams: number;
    date: Dayjs;
    logged: boolean;
    userId: string;
    scene: string;
} 

export interface LogEntryProps {
  entries: LogEntry[];
}

export interface User {
  userName: string,
  id: string,
  sceneList: Array<string>
}

export interface SceneSetting {
    pricePerPound: number,
    currentScene: string,
    wetDry: 'Wet' | 'Dry',
}

export interface ComponentProps {
    dispatch: Dispatch<{ type: string }>
  }

