import {
  BookOpenCheck,
  Bot,
  BriefcaseBusiness,
  FileText,
  Gavel,
  HeartHandshake,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'

export const features = [
  {
    title: 'AI Legal Assistant',
    description:
      'Ask legal questions and get instant AI-powered guidance tailored to your situation.',
    icon: Bot,
  },
  {
    title: 'Find Verified Lawyers',
    description:
      'Connect with trusted and verified lawyers based on your legal needs.',
    icon: UserRoundCheck,
  },
  {
    title: 'Legal Knowledge Hub',
    description:
      'Explore simplified legal resources and guides to stay informed and empowered.',
    icon: BookOpenCheck,
  },
]

export const howItWorksSteps = [
  {
    title: 'Ask Your Query',
    description: 'Describe your legal issue in simple language.',
    icon: MessageSquareText,
  },
  {
    title: 'Get AI Guidance',
    description: 'Our AI suggests legal steps & possible actions.',
    icon: ShieldCheck,
  },
  {
    title: 'Connect with Lawyer',
    description: 'Find and contact verified lawyers instantly.',
    icon: SearchCheck,
  },
]

export const faqs = [
  {
    question: 'Is LawYaar free to use?',
    answer: 'Yes, initial AI guidance is free. Lawyer consultation may be paid.',
  },
  {
    question: 'Can I directly contact a lawyer?',
    answer: 'Yes, you can browse and connect with lawyers based on your case.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We follow strict data privacy and encryption practices.',
  },
]

export const legalAreas = [
  { label: 'Criminal Law', icon: Gavel },
  { label: 'Property Law', icon: FileText },
  { label: 'Corporate Law', icon: BriefcaseBusiness },
  { label: 'Family Law', icon: HeartHandshake },
]

export const homeStats = [
  { value: 3, label: 'Core legal tools' },
  { value: 3, label: 'Simple steps' },
  { value: 3, label: 'Helpful FAQs' },
]
