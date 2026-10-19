import { useState, useRef, useEffect, useId } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone } from 'lucide-react';
import { getConciergeResponse } from '@/src/utils/pure_logic';
import { SITE_CONFIG } from '@/src/config/siteConfig';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

export default function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatInputId = useId();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: "Hi, gorgeous! I'm the Beyoutiful Assistant. How can I help you today?",
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    'Where are you located?',
    'Book a salon visit',
    'What does the boutique carry?',
    'Store hours',
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend ?? inputText).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) {
      setInputText('');
    }

    setIsTyping(true);

    // Realistic typing response delay
    setTimeout(() => {
      // NOTE FOR BACKEND INTEGRATION:
      // To connect a live Gemini or server-side AI model in production,
      // replace this call with a fetch request to `/api/chat` with user query.
      const replyText = getConciergeResponse(text);

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: 'Just now',
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Floating Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-rose-gradient p-3.5 sm:p-4 rounded-full shadow-blush-lg flex items-center justify-center text-white hover:scale-105 transition-transform group relative"
          aria-label="Open Beyoutiful Assistant chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="sr-only">Open chat</span>
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#C9A66B] border-2 border-white" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Beyoutiful Assistant Chat"
          className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-[#FFF9F5] rounded-3xl shadow-2xl border border-[#C9A66B]/40 flex flex-col overflow-hidden animate-fade-in"
        >
          {/* Header */}
          <div className="bg-[#3A1F2B] text-[#FFF9F5] p-4 flex items-center justify-between border-b border-[#C9A66B]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D98C9B] border border-[#C9A66B] flex items-center justify-center text-[#3A1F2B]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif-luxury text-base font-semibold text-white">
                    Beyoutiful Assistant
                  </h3>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#C9A66B]/30 text-[#C9A66B] font-mono">
                    Demo
                  </span>
                </div>
                <p className="text-[11px] text-[#F6D6D8]">Boutique & Salon Guide</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFF9F5]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#B4506A] text-white rounded-br-xs'
                      : 'bg-white text-[#2A2025] border border-[#C9A66B]/30 shadow-xs rounded-bl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                  {m.sender === 'assistant' && m.text.includes('+1 229-938-7291') && (
                    <div className="mt-2 pt-2 border-t border-[#F6D6D8]">
                      <a
                        href={`tel:${SITE_CONFIG.phoneClean}`}
                        className="font-semibold text-[#B4506A] hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call +1 229-938-7291</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#C9A66B]/30 rounded-2xl rounded-bl-xs p-3 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B4506A] animate-bounce" />
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-[#B4506A] animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-[#B4506A] animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          <div className="px-3 py-2 bg-[#F6D6D8]/30 border-t border-[#C9A66B]/25 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(chip)}
                className="shrink-0 text-[10px] bg-white border border-[#C9A66B]/40 text-[#3A1F2B] hover:bg-[#F6D6D8] px-2.5 py-1 rounded-full transition-colors font-medium"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#C9A66B]/30 flex items-center gap-2"
          >
            <label htmlFor={chatInputId} className="sr-only">Type a message to Beyoutiful Assistant</label>
            <input
              id={chatInputId}
              type="text"
              placeholder="Ask about boutique or salon..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 text-xs px-3.5 py-2.5 rounded-full border border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#D98C9B] bg-[#FFF9F5]"
            />
            <button
              type="submit"
              className="btn-rose-gradient p-2.5 rounded-full text-white shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
