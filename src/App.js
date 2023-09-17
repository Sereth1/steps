import { useState } from "react";

const messages = [
  ` "Learn React ⚛️"`,
  `Apply for jobs 💼`,
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps messages1={messages} />
    </div>
  );
}
function Steps({ messages1 }) {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function hadlePrevious() {
    step > 1 && setStep((s) => s - 1);
  }

  function nextT() {
    step < 3 && setStep((s) => s + 1);
  }
  function Reset() {
    setStep((s) => s * 0 + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOP) => !isOP)}>
        {isOpen ? "x" : "+"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step1={step}>{messages1[step - 1]}</StepMessage>
          <div className="buttons">
            <Button onClick={hadlePrevious} text="previous">
              <span>🫲</span>
            </Button>
            <Button onClick={Reset} text="reset">
              <span>🌊</span>
            </Button>
            <Button onClick={nextT} text="next">
              <span>🫱</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ onClick, text, children }) {
  return (
    <button className="btn" onClick={onClick}>
      <span>{children}</span> {text}
    </button>
  );
}
function StepMessage({ step1, children }) {
  return (
    <div className="message">
      <h3>Step {step1}</h3>
      {children}
    </div>
  );
}
