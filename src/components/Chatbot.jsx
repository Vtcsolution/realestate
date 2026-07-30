import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, X } from 'lucide-react'
import { CHAT_ROOT_NODE, chatbotTree } from '../data/chatbotTree'
import { playPop } from '../lib/playPop'
import SpokeIcon from './icons/SpokeIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'

const WHATSAPP_NUMBER = '12125550198'
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to know more about VIP Estates properties.",
)}`

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-1.5 w-1.5 rounded-full bg-charcoal/40"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const [messages, setMessages] = useState([
    { id: 'seed', sender: 'bot', text: chatbotTree[CHAT_ROOT_NODE].bot },
  ])
  const [currentNodeId, setCurrentNodeId] = useState(CHAT_ROOT_NODE)
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)
  const timeoutRef = useRef(null)
  const greetingTimeoutRef = useRef(null)
  const greetingStoppedRef = useRef(false)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  useEffect(() => {
    const FIRST_DELAY_MS = 1800

    greetingTimeoutRef.current = setTimeout(() => {
      if (greetingStoppedRef.current) return
      setShowGreeting(true)
    }, FIRST_DELAY_MS)

    return () => clearTimeout(greetingTimeoutRef.current)
  }, [])

  const stopGreetingCycle = () => {
    greetingStoppedRef.current = true
    clearTimeout(greetingTimeoutRef.current)
    setShowGreeting(false)
  }

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    stopGreetingCycle()
    playPop(600)
  }

  const handleClose = () => setIsOpen(false)

  const handleDismissGreeting = (event) => {
    event.stopPropagation()
    stopGreetingCycle()
  }

  const handleOption = (option) => {
    playPop(680)
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: 'user', text: option.label }])
    setIsTyping(true)

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      const nextNode = chatbotTree[option.next]
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: `b-${Date.now()}`, sender: 'bot', text: nextNode.bot },
      ])
      setCurrentNodeId(option.next)
      playPop(440)
    }, 1100)
  }

  const currentOptions = chatbotTree[currentNodeId]?.options ?? []

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <motion.a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Chat with us on WhatsApp"
          className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 shadow-lg"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={19} />
          </span>
          <span className="font-body text-sm font-semibold text-navy">WhatsApp</span>
        </motion.a>

        <div className="relative">
          <AnimatePresence>
            {showGreeting && !isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute bottom-[136px] right-0 w-72"
              >
                <button
                  type="button"
                  onClick={handleToggle}
                  className="relative flex w-full items-center gap-3 rounded-2xl bg-offwhite px-5 py-4 text-left shadow-2xl"
                >
                  <SpokeIcon size={36} className="shrink-0 text-navy" />
                  <span className="font-heading text-base font-medium leading-snug text-navy">
                    Hey, How can we help you?
                  </span>
                  <span
                    role="button"
                    tabIndex={0}
                    aria-label="Dismiss greeting"
                    onClick={handleDismissGreeting}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') handleDismissGreeting(event)
                    }}
                    className="absolute right-3 top-3 text-charcoal/40 transition-colors hover:text-charcoal"
                  >
                    <X size={16} />
                  </span>
                  <span className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-offwhite" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="group relative h-14 w-14">
            <span className="pointer-events-none absolute -top-11 right-0 whitespace-nowrap rounded-full bg-navy px-3 py-1.5 font-body text-xs text-offwhite opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Ask AI Assistant
            </span>
            <motion.span
              className="absolute inset-0 rounded-full bg-gold"
              animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.button
              type="button"
              onClick={handleToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close AI assistant chat' : 'Open AI assistant chat'}
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-navy text-offwhite shadow-lg"
            >
              <MessageCircle size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy/30 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-x-0 bottom-0 z-50 flex h-[80vh] w-full flex-col rounded-t-2xl bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:h-[560px] sm:w-96 sm:rounded-2xl"
            >
              <div className="flex items-center justify-between rounded-t-2xl bg-navy px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy">
                    <Bot size={18} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-offwhite">
                      Estatey AI Assistant
                    </p>
                    <p className="font-body text-xs text-offwhite/60">Usually replies instantly</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close chat"
                  className="text-offwhite/80 hover:text-offwhite"
                >
                  <X size={20} />
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-offwhite px-4 py-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 font-body text-sm ${
                        message.sender === 'user'
                          ? 'rounded-br-sm bg-gold text-navy'
                          : 'rounded-bl-sm bg-white text-charcoal shadow-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <TypingIndicator />
                  </div>
                )}
              </div>

              {!isTyping && currentOptions.length > 0 && (
                <div className="flex flex-wrap gap-2 border-t border-neutral-light bg-white p-4">
                  {currentOptions.map((option) =>
                    option.to ? (
                      <Link
                        key={option.label}
                        to={option.to}
                        onClick={handleClose}
                        className="rounded-full border border-gold px-4 py-2 font-body text-xs font-medium text-navy transition-colors hover:bg-gold"
                      >
                        {option.label}
                      </Link>
                    ) : (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => handleOption(option)}
                        className="rounded-full border border-gold px-4 py-2 font-body text-xs font-medium text-navy transition-colors hover:bg-gold"
                      >
                        {option.label}
                      </button>
                    ),
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
