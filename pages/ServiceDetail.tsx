import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  Smartphone, Star, Clapperboard, ShoppingBag, Zap, 
  Ghost, Telescope, Gem, Wand2, Megaphone, Rocket, Activity, Bot
} from 'lucide-react';
import ServicePageTemplate, { ServicePageProps } from '../components/ServicePageTemplate';

// Data Dictionary
const servicesData: Record<string, ServicePageProps> = {
  "ai-agent-development": {
    title: "AI Agent Development",
    headline: "Hire a Digital Employee That Never Quits.",
    description: "Move beyond simple chatbots. We engineer intelligent AI agents capable of reasoning, taking action, and integrating with your existing tools. Whether it's handling complex customer queries, booking appointments, or analyzing trends, our agents do the heavy lifting.",
    offerings: [
      "Custom AI Agent Architecture",
      "RAG (Retrieval-Augmented Generation) Systems",
      "24/7 Support & Sales Automation",
      "Multi-Platform Integration (Slack, Discord, Web)",
      "Continuous Learning & Optimization"
    ],
    ctaText: "Build Your Agent",
    color: "text-sutra-neon",
    icon: <Bot size={48} />,
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
  },
  "social-media-management": {
    title: "Social Media Management",
    headline: "Stay in the Feed. Stay on Their Mind.",
    description: "We run your social presence like a full-time creative studio. Trend-ready content, community engagement, daily storytelling, and a personality your audience can’t ignore.",
    offerings: [
      "Content calendar and strategy",
      "Reels, posts, carousels, polls",
      "Community replies & engagement",
      "Growth experiments",
      "Monthly performance reports"
    ],
    ctaText: "Let’s Level Up Your Socials",
    color: "text-sutra-cyan",
    icon: <Smartphone size={48} />,
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  },
  "influencer-creator-marketing": {
    title: "Influencer & Creator Marketing",
    headline: "The Right Creators Make All the Difference.",
    description: "We pair brands with creators who actually connect with your audience. Authentic, fun, subtle promotions — not awkward sponsored posts.",
    offerings: [
      "Creator scouting & vetting",
      "Campaign briefs & scripts",
      "Negotiations & contracts",
      "Content approvals",
      "Cross-platform amplification"
    ],
    ctaText: "Find Your Perfect Creator",
    color: "text-sutra-pink",
    icon: <Star size={48} />,
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  "content-production": {
    title: "Content Production",
    headline: "Lights, Camera, Viral Energy.",
    description: "Short, long, cinematic, chaotic, educational — whatever tells your story best, we make it.",
    offerings: [
      "Short-form videos (Reels, Shorts, TikTok)",
      "YouTube long-form",
      "Podcasts",
      "Product shoots",
      "Brand films"
    ],
    ctaText: "Let's Shoot",
    color: "text-sutra-neon",
    icon: <Clapperboard size={48} />,
    heroImage: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=1000&auto=format&fit=crop"
  },
  "creator-commerce-store-growth": {
    title: "Creator Commerce & Store Growth",
    headline: "Your Store + Our Strategy = Sales That Slap.",
    description: "We help Instagram sellers, thrift stores, and creator-led brands turn their pages into irresistible storefronts with high-converting content.",
    offerings: [
      "Branding & product storytelling",
      "Aesthetic feed planning",
      "Product photography",
      "High-conversion Reels",
      "Lead-gen strategies",
      "Optimization for checkout & DMs"
    ],
    ctaText: "Boost Sales",
    color: "text-yellow-400",
    icon: <ShoppingBag size={48} />,
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
  },
  "brand-consulting": {
    title: "Brand Consulting",
    headline: "Brands Don’t Need More Noise — They Need a Voice.",
    description: "We shape your tone, identity, aesthetics, and positioning to feel fresh, relevant, and Gen Z-approved.",
    offerings: [
      "Brand voice development",
      "Positioning & storytelling",
      "Visual identity prep",
      "Messaging frameworks"
    ],
    ctaText: "Find Your Voice",
    color: "text-purple-400",
    icon: <Zap size={48} />,
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c2236033?q=80&w=1000&auto=format&fit=crop"
  },
  "meme-marketing": {
    title: "Meme Marketing",
    headline: "We Make Brands Culturally Fluent.",
    description: "Meme formats, internet humor, and trend-adapted storytelling that feels organic — not forced.",
    offerings: [
      "Weekly meme packs",
      "Custom memes & GIFs",
      "Trend adaptation",
      "Community-led humor"
    ],
    ctaText: "Get Memed",
    color: "text-green-400",
    icon: <Ghost size={48} />,
    heroImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
  },
  "trend-research": {
    title: "Trend Research",
    headline: "Decode Tomorrow — Today.",
    description: "We identify what’s rising, what’s fading, and what your brand should do about it.",
    offerings: [
      "Daily/weekly trend briefs",
      "Hashtag & audio tracking",
      "Platform behavior insights",
      "Trend-fit strategy"
    ],
    ctaText: "Spot The Trend",
    color: "text-red-400",
    icon: <Telescope size={48} />
  },
  "creator-sales-monetization": {
    title: "Creator Sales & Monetization",
    headline: "Creators Deserve Revenue That Matches Their Influence.",
    description: "Helping creators earn through deals, products, partnerships & platforms.",
    offerings: [
      "Brand deal strategy",
      "Media kits",
      "Product & merch planning",
      "Platform monetization guides"
    ],
    ctaText: "Monetize Now",
    color: "text-emerald-400",
    icon: <Gem size={48} />
  },
  "video-editing-post": {
    title: "Video Editing & Post",
    headline: "Editing That Adds Emotion, Energy & Edge.",
    description: "From raw clips to studio-quality storytelling. We fix it in post.",
    offerings: [
      "Fast cuts, transitions",
      "Motion graphics",
      "Captioning",
      "VFX add-ons",
      "Creative storytelling"
    ],
    ctaText: "Fix It In Post",
    color: "text-blue-400",
    icon: <Wand2 size={48} />
  },
  "pr-collaborations": {
    title: "PR & Collaborations",
    headline: "Your Brand, in the Right Spotlight.",
    description: "Get noticed by the right eyes, at the right time.",
    offerings: [
      "Press releases",
      "Media outreach",
      "Brand partnerships",
      "Creator gifting"
    ],
    ctaText: "Get Famous",
    color: "text-orange-400",
    icon: <Megaphone size={48} />
  },
  "campaign-management": {
    title: "Campaign Management",
    headline: "From Brainstorm to Big Win.",
    description: "Multi-channel. High-impact. High-energy. All handled for you.",
    offerings: [
      "Campaign strategy",
      "Multi-platform rollout",
      "Budget allocation",
      "Weekly updates",
      "Campaign reporting"
    ],
    ctaText: "Launch It",
    color: "text-indigo-400",
    icon: <Rocket size={48} />
  },
  "analytics-reporting": {
    title: "Analytics & Reporting",
    headline: "Numbers That Actually Mean Something.",
    description: "Dashboards, insights, and data that actually guide decisions.",
    offerings: [
      "Dashboards",
      "Insights + next steps",
      "A/B testing",
      "ROI tracking"
    ],
    ctaText: "Show Me The Data",
    color: "text-teal-400",
    icon: <Activity size={48} />
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[slug];

  return <ServicePageTemplate {...service} />;
};

export default ServiceDetail;