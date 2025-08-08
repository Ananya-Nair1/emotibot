import React from 'react';
import { Heart, Frown, Angry, Zap, HelpCircle, ThumbsUp, Users, Star } from 'lucide-react';

interface EmotionIndicatorProps {
  emotion: string;
  confidence: number;
}

const emotionIcons: { [key: string]: React.ReactNode } = {
  happy: <Heart className="w-4 h-4" />,
  sad: <Frown className="w-4 h-4" />,
  angry: <Angry className="w-4 h-4" />,
  anxious: <Zap className="w-4 h-4" />,
  confused: <HelpCircle className="w-4 h-4" />,
  grateful: <ThumbsUp className="w-4 h-4" />,
  lonely: <Users className="w-4 h-4" />,
  excited: <Star className="w-4 h-4" />,
  neutral: <Heart className="w-4 h-4" />
};

const emotionColors: { [key: string]: string } = {
  happy: 'text-green-600 bg-green-50 border-green-200',
  sad: 'text-blue-600 bg-blue-50 border-blue-200',
  angry: 'text-red-600 bg-red-50 border-red-200',
  anxious: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  confused: 'text-purple-600 bg-purple-50 border-purple-200',
  grateful: 'text-pink-600 bg-pink-50 border-pink-200',
  lonely: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  excited: 'text-orange-600 bg-orange-50 border-orange-200',
  neutral: 'text-gray-600 bg-gray-50 border-gray-200'
};

export default function EmotionIndicator({ emotion, confidence }: EmotionIndicatorProps) {
  const confidencePercentage = Math.round(confidence * 100);
  
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${emotionColors[emotion] || emotionColors.neutral}`}>
      {emotionIcons[emotion] || emotionIcons.neutral}
      <span className="capitalize font-medium">{emotion}</span>
      <span className="opacity-75">({confidencePercentage}%)</span>
    </div>
  );
}