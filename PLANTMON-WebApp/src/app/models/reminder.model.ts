export interface Reminder{
    username: string;
    reason: string;
    day: string[];
    repeat: boolean
  }

export interface onlyUsername{
  username: string;
}