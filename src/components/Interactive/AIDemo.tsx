import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Send, User } from 'lucide-react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const responses: Record<string, string> = {
  hours: "We're available Monday-Friday 9am-6pm, and Saturday 10am-4pm. Would you like to book a consultation?",
  services: "We offer three main services: AI Automation (automate repetitive tasks), Custom App Development (build exactly what you need), and Modern Web Design (lightning-fast websites). Which interests you most?",
  price: "Our pricing is transparent and based on project scope. Most AI automation projects start at £2,500, apps from £5,000, and websites from £3,000. Want a custom quote?",
  pricing: "Our pricing is transparent and based on project scope. Most AI automation projects start at £2,500, apps from £5,000, and websites from £3,000. Want a custom quote?",
  book: "Great! I can help you book a free 30-minute consultation. What day works best for you this week?",
  contact: "You can reach us at hello@buildmediastrategies.com or call 01234 567890. Would you prefer to schedule a call?",
  ai: "AI automation can handle customer service, email responses, appointment scheduling, data processing, and much more. What would you like to automate?",
  automation: "AI automation can handle customer service, email responses, appointment scheduling, data processing, and much more. What would you like to automate?",
  default: "That's a great question! In a real implementation, I'd be trained on your specific business data. For now, try asking about 'hours', 'services', 'price', or say 'book' to schedule a consultation!",
};

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([{
    id: crypto.randomUUID(),
    role: 'assistant',
    content: "Hi! I'm an AI assistant. Try asking me about business hours, services, or booking a consultation. This is just a demo of what we can build for your business!",
    timestamp: new Date(),
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const disabled = useMemo(() => isTyping || input.trim().length === 0, [isTyping, input]);

  const handleSend = async () => {
    if (disabled) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 1000));

    const text = userMsg.content.toLowerCase();
    const key = Object.keys(responses).find((k) => text.includes(k)) ?? 'default';
    const botMsg: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: responses[key],
      timestamp: new Date(),
    };
    setMessages((m) => [...m, botMsg]);
    setIsTyping(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center border border-gray-100">
              <Bot className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-sky-gradient">AI Assistant Demo</h2>
              <p className="text-sm text-black">See how AI can handle your customer queries 24/7</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-96 overflow-y-auto bg-gray-50 px-4 py-4 space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_200ms_ease-out]`}>
              {m.role === 'assistant' && (
                <div className="mr-2 mt-1 w-7 h-7 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
              )}
              <div className={`max-w-[75%] rounded-lg px-3 py-2 text-sm leading-relaxed shadow ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}>
                {m.content}
              </div>
              {m.role === 'user' && (
                <div className="ml-2 mt-1 w-7 h-7 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                  <User className="w-4 h-4 text-black" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="mr-2 mt-1 w-7 h-7 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200 flex items-center justify-center">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 shadow inline-flex items-center">
                <span className="sr-only">Assistant is typing</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about hours, services, pricing..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={disabled}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow disabled:opacity-60"
              aria-disabled={disabled}
            >
              <Send className="w-4 h-4 mr-2" /> Send
            </button>
          </div>
          <p className="mt-2 text-xs text-black">This is a demo. Real implementations are trained on your business data.</p>
        </div>
      </div>
    </div>
  );
}

