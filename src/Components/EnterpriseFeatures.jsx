import React, { useState, useEffect } from "react";
import { CheckCircle, MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "EventHub Organisers", value: "10+" },
  // { label: "Total Ticket Sales", value: "2K+" },
  { label: "Requests per Minute", value: "1K+" },
];

const features = [
  {
    title: "Seamless Integration",
    desc: "Integrate EventHub with your platform using our powerful APIs. Control ticketing end-to-end while keeping your branding intact.",
    image: "https://placehold.co/600x400/FFDDC1/8B4513?text=API+Integration",
    reverse: false,
  },
  {
    title: "Embedded Ticketing",
    desc: "Embed our ticketing system directly on your site and sell tickets without redirecting users, maintaining a seamless branded experience.",
    image: "https://placehold.co/600x400/CCE8CC/228B22?text=Embedded+Ticketing",
    reverse: true,
  },
  {
    title: "Custom Feature Development",
    desc: "Get tailor-made features aligned with your business model. Our dev team builds what you need to enhance engagement and performance.",
    image: "https://placehold.co/600x400/D1C4E9/4B0082?text=Custom+Dev",
    reverse: false,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "We encrypt attendee data at rest and in transit. With advanced security protocols, your data is always protected.",
    image: "https://placehold.co/600x400/FFECB3/FFA500?text=Security",
    reverse: true,
  },
  {
    title: "Priority Support",
    desc: "Get dedicated training and industry-level support to ensure success. Our customer success team is always ready to assist.",
    image: "https://placehold.co/600x400/B2EBF2/008B8B?text=Support",
    reverse: false,
  },
];

const ChatPromptModal = ({ onClose, onChatNow }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-2xl overflow-hidden z-50 border border-gray-200"
  >
    <div className="bg-teal-600 text-white p-4 flex justify-between items-center rounded-t-lg">
      <h3 className="font-bold text-lg">Chat with us!</h3>
      <button onClick={onClose} className="text-white hover:text-gray-200 transition">
        <X className="w-6 h-6" />
      </button>
    </div>
    <div className="p-4">
      <p className="text-gray-700 mb-4">Have questions about our enterprise features? Chat with our team now!</p>
      <button onClick={onChatNow} className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition shadow-sm">
        Chat Now
      </button>
    </div>
  </motion.div>
);

const LiveChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = React.useRef(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input.trim() }]);
      setInput("");
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: "Thank you for your message! Our team will be with you shortly." }]);
      }, 1000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-24 right-8 w-80 h-96 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col z-50 border border-gray-200"
    >
      <div className="bg-teal-600 text-white p-4 flex justify-between items-center rounded-t-lg">
        <h3 className="font-bold text-lg">Live Chat</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center text-sm">Start chatting with our team!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-2 rounded-lg text-sm max-w-[80%] ${msg.type === 'user' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'}`}>{msg.text}</div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t border-gray-200 p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
        />
        <button onClick={handleSendMessage} className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default function EnterpriseFeatures() {
  const [isChatPromptOpen, setIsChatPromptOpen] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenLiveChat = () => {
    setIsChatPromptOpen(false);
    setIsLiveChatOpen(true);
  };

  const handleCloseChatPrompt = () => setIsChatPromptOpen(false);
  const handleCloseLiveChat = () => setIsLiveChatOpen(false);

  return (
    <section className="relative px-6 py-12 md:px-20 bg-gradient-to-br from-white via-gray-50 to-teal-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Event Ticketing Platform for Enterprise
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Flexible, secure, and fast. EventHub is a cost-effective solution offering
          high performance, security, premium support, and tailored uptime.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-orange-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold mb-12 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Request A Demo
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-16 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${feature.reverse ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 p-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="flex-1 flex justify-center items-center p-6"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-lg w-full max-w-sm md:max-w-full h-auto object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Feature+Image`; }}
                />
              </motion.div>
            </div>
          ))}
        </div>

        <footer className="mt-20 border-t pt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EventHub. All rights reserved.
        </footer>
      </div>

      <button
        onClick={() => setIsChatPromptOpen(true)}
        className="fixed bottom-8 right-8 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        <MessageSquare className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {isChatPromptOpen && (
          <ChatPromptModal onClose={handleCloseChatPrompt} onChatNow={handleOpenLiveChat} />
        )}
        {isLiveChatOpen && (
          <LiveChatModal onClose={handleCloseLiveChat} />
        )}
      </AnimatePresence>
    </section>
  );
}
