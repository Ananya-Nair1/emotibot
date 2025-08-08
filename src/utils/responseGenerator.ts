import { ResponseTemplate } from '../types';

const responseTemplates: ResponseTemplate[] = [
  {
    emotion: 'happy',
    responses: [
      "That's wonderful to hear! 😊 Your positivity is absolutely contagious!",
      "I can feel your joy through your words! It's amazing when life brings us such happiness. ✨",
      "Your enthusiasm is fantastic! It's beautiful to see you so upbeat and positive.",
      "That's incredible! Your happiness is really shining through, and it's made my day brighter too! 🌟",
      "I love your positive energy! It's so refreshing to connect with someone who radiates such joy."
    ],
    followUp: [
      "What's been the highlight of your day?",
      "I'd love to hear more about what's making you so happy!",
      "Your happiness is inspiring - what advice would you give others to find such joy?"
    ]
  },
  {
    emotion: 'sad',
    responses: [
      "I can hear the pain in your words, and I want you to know that what you're feeling is completely valid. 💙",
      "I'm really sorry you're going through this difficult time. Your feelings matter, and it's okay to not be okay.",
      "It sounds like you're carrying a heavy burden right now. Please know that you're not alone in this.",
      "I can sense the sadness in your message. It takes strength to reach out and share how you're feeling.",
      "Thank you for trusting me with your feelings. Going through tough times is never easy, but you're being so brave."
    ],
    followUp: [
      "Would it help to talk more about what's been weighing on your mind?",
      "Sometimes sharing our struggles can lighten the load. I'm here to listen.",
      "Is there anything specific that might help you feel even a little bit better today?"
    ]
  },
  {
    emotion: 'angry',
    responses: [
      "I can hear the frustration in your words. It's completely understandable to feel this way when things aren't going as planned.",
      "Your anger is valid - sometimes situations can be incredibly frustrating and it's natural to feel upset about them.",
      "It sounds like something has really gotten under your skin. Those feelings of frustration are totally legitimate.",
      "I can sense you're dealing with something really aggravating. It's okay to feel angry when things feel unfair or overwhelming.",
      "That sounds incredibly frustrating! Your feelings are completely justified, and it's healthy to acknowledge when something bothers you."
    ],
    followUp: [
      "What would help you feel more in control of this situation?",
      "Would it help to talk through what's been making you feel this way?",
      "Sometimes expressing our frustrations can help us process them better. Want to share more?"
    ]
  },
  {
    emotion: 'anxious',
    responses: [
      "I can sense the worry in your words. Anxiety can feel overwhelming, but you're not alone in facing these concerns. 🤗",
      "It's completely natural to feel anxious about uncertain situations. Your concerns are valid and understandable.",
      "I hear the stress in what you're sharing. Anxiety can make everything feel more intense, but we can work through this together.",
      "Those anxious feelings you're experiencing are so common - you're definitely not alone in feeling this way about challenging situations.",
      "It takes courage to acknowledge when we're feeling anxious. Thank you for sharing what's been weighing on your mind."
    ],
    followUp: [
      "Have you found any strategies that help calm your mind when anxiety strikes?",
      "What specific aspects of the situation are causing you the most concern?",
      "Would it help to break down what you're worried about into smaller, more manageable pieces?"
    ]
  },
  {
    emotion: 'confused',
    responses: [
      "It's completely okay to feel uncertain - confusion often means we're encountering something new or complex that requires time to understand.",
      "I can sense you're trying to make sense of a complicated situation. Feeling confused is a natural part of learning and growing.",
      "That uncertainty you're feeling is so relatable. Sometimes the most important questions don't have easy or immediate answers.",
      "It sounds like you're grappling with something that doesn't have a clear path forward. That kind of confusion can be really challenging.",
      "I hear that you're feeling lost or unclear about something. It's perfectly normal to need time to process complex situations."
    ],
    followUp: [
      "What specific aspects are causing the most confusion for you?",
      "Would it help to talk through the different options or perspectives you're considering?",
      "Sometimes discussing confusing situations out loud can help clarify our thoughts. Want to explore this together?"
    ]
  },
  {
    emotion: 'grateful',
    responses: [
      "Your gratitude is truly heartwarming! It's beautiful to see someone who appreciates the good things in life. 🙏",
      "I can feel the genuine appreciation in your words. Gratitude like yours makes the world a brighter place.",
      "Thank you for sharing your gratitude - it's incredibly touching and reminds me of all the good that exists in the world.",
      "Your thankfulness is so genuine and warming. It's wonderful to connect with someone who recognizes life's blessings.",
      "I'm touched by your gratitude. It takes a special kind of awareness to recognize and appreciate the positive things around us."
    ],
    followUp: [
      "What are some other things you've been feeling grateful for lately?",
      "Your appreciation is inspiring - how do you cultivate such a grateful mindset?",
      "It's lovely to hear such genuine thankfulness. What helps you notice the good things in life?"
    ]
  },
  {
    emotion: 'lonely',
    responses: [
      "I hear the loneliness in your words, and I want you to know that reaching out like this shows real strength. You're not as alone as you feel. 💜",
      "Loneliness can feel so heavy and isolating. Thank you for sharing this with me - connecting, even in small ways, matters more than you know.",
      "I can sense that feeling of isolation you're experiencing. It's one of the most difficult emotions to sit with, but you're not truly alone.",
      "That sense of being alone can be so overwhelming. I'm grateful you reached out because even this conversation is a form of connection.",
      "Loneliness is such a universal human experience, yet it can feel so isolating. Your willingness to share this shows incredible courage."
    ],
    followUp: [
      "Are there small ways we could think about building connections, even tiny ones, in your daily life?",
      "What kinds of activities or interactions usually help you feel more connected to others?",
      "Would it help to talk about what connection and companionship mean to you?"
    ]
  },
  {
    emotion: 'excited',
    responses: [
      "Your excitement is absolutely infectious! 🎉 I love how enthusiastic and energized you sound!",
      "I can practically feel your energy through your words! Your excitement is so genuine and wonderful to experience.",
      "Your enthusiasm is incredible! It's amazing to see someone so passionate and fired up about life.",
      "That excitement you're radiating is fantastic! Your energy is truly contagious and uplifting.",
      "I love your enthusiasm! Your excitement reminds me of how beautiful it is when we find things that truly energize us."
    ],
    followUp: [
      "I'd love to hear more about what has you so excited!",
      "Your energy is amazing - what's driving this incredible enthusiasm?",
      "Tell me more about this exciting thing that's got you so energized!"
    ]
  },
  {
    emotion: 'neutral',
    responses: [
      "I'm here and ready to listen to whatever is on your mind. How can I best support you today?",
      "Thank you for reaching out. I'm curious to learn more about what you'd like to talk about.",
      "I'm glad you're here to chat. What's been occupying your thoughts lately?",
      "It's nice to connect with you. I'm here to listen and respond to whatever you'd like to share.",
      "I appreciate you taking the time to chat. What would be most helpful for you to discuss right now?"
    ],
    followUp: [
      "What's been on your mind recently?",
      "How has your day been treating you?",
      "Is there anything specific you'd like to talk through or explore together?"
    ]
  }
];

export function generateResponse(emotion: string, previousResponses: string[] = []): { response: string; followUp?: string } {
  const template = responseTemplates.find(t => t.emotion === emotion) || responseTemplates.find(t => t.emotion === 'neutral')!;
  
  // Filter out previously used responses to ensure variety
  const availableResponses = template.responses.filter(response => 
    !previousResponses.some(prev => prev === response)
  );
  
  // If all responses have been used, reset and use all responses
  const responses = availableResponses.length > 0 ? availableResponses : template.responses;
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  const followUp = template.followUp ? template.followUp[Math.floor(Math.random() * template.followUp.length)] : undefined;
  
  return { response: randomResponse, followUp };
}