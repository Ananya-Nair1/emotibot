export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotions?: string[];
}

export interface EmotionAnalysis {
  primary: string;
  confidence: number;
  all: string[];
}

export interface ResponseTemplate {
  emotion: string;
  responses: string[];
  followUp?: string[];
}