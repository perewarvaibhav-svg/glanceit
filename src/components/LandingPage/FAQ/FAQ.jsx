import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { C } from '@/constants/designTokens';

const faqData = [
  {
    question: "Do I need to buy new cameras to use GlanceIt?",
    answer: "No. GlanceIt is designed to connect seamlessly with your existing IP cameras and CCTV infrastructure. We process the RTSP streams from your current hardware and apply our AI intelligence on top of it."
  },
  {
    question: "How fast is the incident detection?",
    answer: "Our AI processes video feeds in real-time with sub-200ms latency. When an incident or anomaly is detected, an alert is dispatched instantly to your dashboard and mobile devices."
  },
  {
    question: "Is my video data secure and private?",
    answer: "Absolutely. We employ enterprise-grade end-to-end encryption. Your video feeds are processed securely, and we never use your private data to train public AI models. You maintain 100% ownership of your footage."
  },
  {
    question: "What kind of KPIs can the AI extract?",
    answer: "GlanceIt can track foot traffic, vehicle counts, dwell times, safety compliance (like hardhat detection), and unauthorized access. Custom detection models can also be trained for your specific enterprise needs."
  },
  {
    question: "How does the pricing work?",
    answer: "Our Pro plan starts at $49/month per camera stream, which includes standard AI detections and 7-day cloud retention. For large deployments and custom models, we offer volume-based Enterprise pricing."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 
          className="fade-up"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: C.textPrimary,
            marginBottom: 16
          }}
        >
          Frequently Asked Questions
        </h2>
        <p style={{ color: C.textSecondary, fontSize: '1.1rem' }}>
          Everything you need to know about deploying GlanceIt.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              style={{
                background: isOpen ? 'rgba(255, 42, 133, 0.05)' : C.bg2,
                border: `1px solid ${isOpen ? 'rgba(255, 42, 133, 0.3)' : C.border}`,
                borderRadius: 16,
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ 
                  margin: 0, 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  color: isOpen ? C.textPrimary : C.textSecondary,
                  transition: 'color 0.3s ease'
                }}>
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={20} 
                  color={isOpen ? C.coral : C.textMuted}
                  style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>
              
              <div style={{ 
                maxHeight: isOpen ? 200 : 0, 
                overflow: 'hidden', 
                transition: 'max-height 0.3s ease',
                opacity: isOpen ? 1 : 0,
              }}>
                <p style={{ 
                  margin: 0, 
                  marginTop: 16, 
                  color: C.textMuted, 
                  lineHeight: 1.6 
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
