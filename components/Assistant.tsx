
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { getLeatherAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Good evening. I am the Habtesillasie Craft Advisor. How may I assist you with our collections or leather care today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const advice = await getLeatherAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: advice || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300 rounded-lg overflow-hidden border">
          {/* Header */}
          <div className="bg-stone-900 text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot size={20} />
              <span className="text-xs uppercase tracking-widest font-bold">Craft Advisor</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} className="opacity-70 hover:opacity-100" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-stone-200 text-stone-800' 
                  : 'bg-white text-stone-900 border shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 animate-pulse italic text-xs text-stone-400">
                  Refining thoughts...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about leather care or gifting..."
              className="flex-1 bg-stone-100 border-none px-4 py-2 text-sm focus:ring-1 focus:ring-stone-900"
            />
            <button 
              onClick={handleSend}
              className="bg-stone-900 text-white p-2 hover:bg-black transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};
