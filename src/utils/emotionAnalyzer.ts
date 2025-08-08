import { EmotionAnalysis } from '../types';

const emotionKeywords = {
  happy: ['happy', 'joy', 'excited', 'great', 'awesome', 'wonderful', 'fantastic', 'amazing', 'love', 'perfect', 'excellent', 'thrilled', 'delighted', 'cheerful', 'glad'],
  sad: ['sad', 'depressed', 'down', 'upset', 'hurt', 'crying', 'tears', 'broken', 'devastated', 'miserable', 'heartbroken', 'disappointed', 'gloomy', 'blue'],
  angry: ['angry', 'mad', 'furious', 'irritated', 'annoyed', 'frustrated', 'rage', 'hate', 'disgusted', 'outraged', 'livid', 'bitter', 'resentful', 'enraged'],
  anxious: ['anxious', 'worried', 'nervous', 'scared', 'afraid', 'panic', 'stress', 'overwhelmed', 'concerned', 'uneasy', 'tense', 'fearful', 'apprehensive'],
  confused: ['confused', 'lost', 'stuck', 'unclear', 'puzzled', 'bewildered', 'perplexed', 'uncertain', 'doubt', 'questioning', 'unsure', 'baffled'],
  grateful: ['thank', 'grateful', 'appreciate', 'blessed', 'thankful', 'grateful', 'indebted', 'obliged', 'much appreciated'],
  lonely: ['lonely', 'alone', 'isolated', 'empty', 'abandoned', 'disconnected', 'solitary', 'friendless', 'withdrawn', 'rejected'],
  excited: ['excited', 'thrilled', 'pumped', 'enthusiastic', 'eager', 'stoked', 'hyped', 'energetic', 'motivated', 'inspired']
};

export function analyzeEmotion(text: string): EmotionAnalysis {
  const lowercaseText = text.toLowerCase();
  const words = lowercaseText.split(/\s+/);
  
  const emotionScores: { [key: string]: number } = {};
  
  // Calculate emotion scores based on keyword matches
  Object.entries(emotionKeywords).forEach(([emotion, keywords]) => {
    let score = 0;
    keywords.forEach(keyword => {
      if (lowercaseText.includes(keyword)) {
        // Give higher weight to exact word matches
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        const matches = lowercaseText.match(regex);
        score += matches ? matches.length * 2 : 0;
        
        // Also count partial matches with lower weight
        if (lowercaseText.includes(keyword) && !matches) {
          score += 0.5;
        }
      }
    });
    emotionScores[emotion] = score;
  });
  
  // Handle negations
  const negationWords = ['not', 'never', 'no', 'don\'t', 'won\'t', 'can\'t'];
  const hasNegation = negationWords.some(neg => lowercaseText.includes(neg));
  
  if (hasNegation) {
    // Flip positive emotions to their opposites when negated
    if (emotionScores.happy > 0) {
      emotionScores.sad += emotionScores.happy;
      emotionScores.happy = 0;
    }
  }
  
  // Find the emotion with the highest score
  const sortedEmotions = Object.entries(emotionScores)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1]);
  
  if (sortedEmotions.length === 0) {
    return {
      primary: 'neutral',
      confidence: 0.5,
      all: ['neutral']
    };
  }
  
  const [primaryEmotion, primaryScore] = sortedEmotions[0];
  const totalScore = Object.values(emotionScores).reduce((sum, score) => sum + score, 0);
  const confidence = Math.min(primaryScore / Math.max(totalScore, 1), 1);
  
  return {
    primary: primaryEmotion,
    confidence,
    all: sortedEmotions.slice(0, 3).map(([emotion]) => emotion)
  };
}