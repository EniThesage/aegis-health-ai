import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  Volume2, 
  Sparkles, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AIHealthAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am your CareVault Health Assistant. How can I help you today? I can explain medical terms, summarize your health history, or help you understand your records.',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I understand you're asking about "${input}". Based on your health records, I can see you have a history of hypertension. However, please remember I am an AI, not a doctor. You should consult with a medical professional for any medical advice or diagnosis.`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-250px)] max-h-[700px] bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
      <div className="p-4 border-b border-border bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-health-blue/10 flex items-center justify-center text-health-blue">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Health Assistant</h3>
            <span className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              AI Powered • Online
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <Info size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
      >
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
              message.role === 'user' 
                ? 'bg-health-blue text-white rounded-tr-none' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-tl-none'
            }`}>
              {message.content}
              <div className={`text-[10px] mt-2 opacity-60 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-3xl rounded-tl-none flex gap-1">
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border bg-slate-50 dark:bg-slate-900/50">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask me anything about your health..."
            className="w-full bg-white dark:bg-slate-950 border border-border rounded-2xl py-3 pl-4 pr-24 focus:outline-none focus:ring-2 focus:ring-health-blue/20 resize-none h-14 text-sm"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="p-2 text-muted-foreground hover:text-health-blue transition-colors">
              <Mic size={20} />
            </button>
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 bg-health-blue text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-health-blue-dark transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-center text-muted-foreground mt-3">
          CareVault AI does not provide medical diagnosis. Always consult a doctor.
        </p>
      </div>
    </div>
  );
};
