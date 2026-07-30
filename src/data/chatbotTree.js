export const chatbotTree = {
  root: {
    bot: "Hi there! I'm Estatey, your AI assistant. How can I help you today?",
    options: [
      { label: 'Looking to Buy', next: 'buy' },
      { label: 'Looking to Rent', next: 'rent' },
      { label: 'Talk to an Agent', next: 'agent' },
      { label: 'Schedule a Visit', next: 'visit' },
    ],
  },
  buy: {
    bot: 'Great! We have luxury villas, apartments, farmhouses, and commercial properties available. Would you like to browse listings or get a personalized recommendation?',
    options: [
      { label: 'Browse Listings', to: '/properties' },
      { label: 'Get a Recommendation', next: 'recommendation' },
      { label: 'Back to Start', next: 'root' },
    ],
  },
  rent: {
    bot: 'We work with a curated network of premium rental properties. Our leasing team can match you with options based on your budget and location.',
    options: [
      { label: 'Talk to an Agent', next: 'agent' },
      { label: 'Back to Start', next: 'root' },
    ],
  },
  agent: {
    bot: "I'll connect you with a senior advisor. You can reach our team directly at concierge@vipestates.com, or send a message and we'll call you back within one business day.",
    options: [
      { label: 'Go to Contact Page', to: '/contact' },
      { label: 'Back to Start', next: 'root' },
    ],
  },
  visit: {
    bot: "I'd love to help you schedule a private viewing. Share your preferred property and time on our Contact page, and a senior agent will confirm within one business day.",
    options: [
      { label: 'Go to Contact Page', to: '/contact' },
      { label: 'Back to Start', next: 'root' },
    ],
  },
  recommendation: {
    bot: "For a tailored shortlist, our team just needs a few details about your budget and preferences — let's continue that over on the Contact page.",
    options: [
      { label: 'Go to Contact Page', to: '/contact' },
      { label: 'Back to Start', next: 'root' },
    ],
  },
}

export const CHAT_ROOT_NODE = 'root'
