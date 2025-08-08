import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, RefreshCw } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import TypingIndicator from './components/TypingIndicator';
import EmotionIndicator from './components/EmotionIndicator';
import { Message } from './types';
import { analyzeEmotion } from './utils/emotionAnalyzer';
import { generateResponse } from './utils/responseGenerator';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your emotion-aware companion. I can sense how you're feeling and respond with empathy and understanding. Share whatever is on your mind, and I'll listen with both my heart and mind. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
      emotions: ['neutral']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<{ emotion: string; confidence: number } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [previousBotResponses, setPreviousBotResponses] = useState<string[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Analyze emotion
    const emotionAnalysis = analyzeEmotion(inputText);
    setCurrentEmotion({ emotion: emotionAnalysis.primary, confidence: emotionAnalysis.confidence });

    // Simulate thinking time
    setTimeout(() => {
      const { response, followUp } = generateResponse(emotionAnalysis.primary, previousBotResponses);
      
      // Add this response to the history to ensure variety
      setPreviousBotResponses(prev => [...prev.slice(-10), response]); // Keep last 10 responses
      
      let botResponseText = response;
      if (followUp && Math.random() > 0.4) { // 60% chance to include follow-up
        botResponseText += `\n\n${followUp}`;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
        emotions: [emotionAnalysis.primary]
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Variable response time for realism
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      text: "Chat cleared! I'm here and ready to listen. How are you feeling right now?",
      sender: 'bot',
      timestamp: new Date(),
      emotions: ['neutral']
    }]);
    setCurrentEmotion(null);
    setPreviousBotResponses([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">EmotiBot</h1>
                <p className="text-sm text-gray-600">Your emotion-aware companion</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {currentEmotion && (
                <EmotionIndicator 
                  emotion={currentEmotion.emotion} 
                  confidence={currentEmotion.confidence} 
                />
              )}
              <button
                onClick={clearChat}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                title="Clear chat"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl min-h-[calc(100vh-200px)] flex flex-col">
          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-1">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200/50">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share what's on your mind... I'm here to listen and understand."
                  className="w-full p-4 pr-12 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white/80 backdrop-blur-sm transition-all duration-200"
                  rows={1}
                  style={{ minHeight: '56px', maxHeight: '120px' }}
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isTyping}
                className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                Express yourself freely - I understand emotions and respond with empathy
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;