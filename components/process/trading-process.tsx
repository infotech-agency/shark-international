'use client';

import { useState, type KeyboardEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { tradingSteps } from '@/data/trading-process';

export function TradingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = tradingSteps[activeStep];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const supportedKeys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!supportedKeys.includes(event.key)) return;
    event.preventDefault();

    const lastStep = tradingSteps.length - 1;
    const nextStep =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? lastStep
          : (activeStep + (event.key === 'ArrowRight' ? 1 : lastStep)) % tradingSteps.length;
    setActiveStep(nextStep);
    document.getElementById(`process-tab-${nextStep}`)?.focus();
  }

  return (
    <div className="process-console">
      <div className="process-tabs" role="tablist" aria-label="Trading process">
        {tradingSteps.map((step, index) => (
          <button
            key={step.title}
            role="tab"
            id={`process-tab-${index}`}
            aria-selected={activeStep === index}
            aria-controls={`process-panel-${index}`}
            tabIndex={activeStep === index ? 0 : -1}
            onKeyDown={handleTabKeyDown}
            onClick={() => setActiveStep(index)}
          >
            <span>0{index + 1}</span>
            <strong>{step.title}</strong>
            <ArrowUpRight size={18} />
          </button>
        ))}
      </div>
      <div
        className="process-detail"
        key={activeStep}
        role="tabpanel"
        id={`process-panel-${activeStep}`}
        aria-labelledby={`process-tab-${activeStep}`}
        tabIndex={0}
      >
        <span className="process-big" aria-hidden="true">
          0{activeStep + 1}
        </span>
        <div>
          <p className="eyebrow">THE NEXT STEP IN YOUR TRADE</p>
          <h3>{currentStep.summary}</h3>
          <p>{currentStep.description}</p>
          <span className="process-tag">{currentStep.tag}</span>
        </div>
        <a className="process-circle" href="#contact" aria-label="Start your trading enquiry">
          <ArrowUpRight size={26} />
        </a>
      </div>
    </div>
  );
}
