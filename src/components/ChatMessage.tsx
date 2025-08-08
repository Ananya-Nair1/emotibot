import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const emotionColors: { [key: string]: string } = {
  happy: 'bg-green-100 text-green-800 border-green-200',
  sad: 'bg-blue-100 text-blue-800 border-blue-200',
  angry: 'bg-red-100 text-red-800 border-red-200',
  anxious: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  confused: 'bg-purple-100 text-purple-800 border-purple-200',
  grateful: 'bg-pink-100 text-pink-800 border-pink-200',
  lonely: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  excited: 'bg-orange-100 text-orange-800 border-orange-200',
  neutral: 'bg-gray-100 text-gray-800 border-gray-200'
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  const time = message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg ${
        isUser 
          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md' 
          : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
      }`}>
        <div className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</div>
        
        {message.emotions && message.emotions.length > 0 && !isUser && (
          <div className="flex flex-wrap gap-1 mt-2">
            {message.emotions.map((emotion, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full border ${emotionColors[emotion] || emotionColors.neutral}`}
              >
                {emotion}
              </span>
            ))}
          </div>
        )}
        
        <div className={`text-xs mt-2 opacity-60 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
          {time}
        </div>
      </div>
    </div>
  );
}