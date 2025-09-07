// src/components/ui/Chatbot.tsx

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';

// Define the structure for a single message
type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
};

export const Chatbot = () => {
  // State to hold the conversation messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome! I am VerifiAI. To begin, please tell me the official name of your proposed blue carbon project.",
      sender: 'ai',
    },
  ]);

  // State for the user's current input
  const [inputValue, setInputValue] = useState('');
  
  // Ref for the message container to enable auto-scrolling
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Function to automatically scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect hook to scroll down whenever messages are updated
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user's message to the chat
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);

    // Clear the input field
    setInputValue('');

    // **Future Step:** Here you will call your backend API
    // For now, we'll simulate an AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        // This is a placeholder. The real text will come from your Gemini backend.
        text: "Thank you. Your project is now registered. As per MoEFCC guidelines, please specify the project type (e.g., Mangrove Afforestation or Seagrass Restoration).",
        sender: 'ai',
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[85vh] bg-slate-900/50 border border-blue-900/50 rounded-lg shadow-xl">
      
      {/* Chat Header */}
      <div className="p-4 border-b border-blue-900/50 flex items-center">
        <Bot className="w-6 h-6 text-cyan-400 mr-3" />
        <h2 className="text-xl font-semibold text-white">VerifiAI Assistant</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* AI Avatar */}
              {message.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-md p-3 rounded-xl ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                <p>{message.text}</p>
              </div>

              {/* User Avatar */}
              {message.sender === 'user' && (
                 <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-slate-300" />
                </div>
              )}
            </div>
          ))}
           {/* Empty div to act as a scroll target */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-blue-900/50">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tell me the name of your project..."
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
            disabled={!inputValue.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};