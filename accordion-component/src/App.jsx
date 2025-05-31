import { useState } from "react";
import "./App.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "They are assembled in the chair packing stall.",
  },
  {
    title: "How long do i have, to return my chair?",
    text: `Actually, it depends on the date each user borrowed a chair. But then, every chair
     must be returned after a week it's been borrowed.`,
  },
  {
    title: "Do you ship to countries outside EU?",
    text: `Yes, our company do ship chairs to countries outside EU, but you need to be aware that
     custom expenses would be added.`,
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((datas, index) => (
        <AccordionItem
          title={datas.title}
          text={datas.text}
          num={index}
          key={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "isOpen" : ""}`}>
      <div className="item-info" onClick={handleToggle}>
        {" "}
        <p className={`number ${isOpen ? "isOpenNum" : ""}`}>
          {num < 9 ? "0" + (num + 1) : num}
        </p>
        <p className={`text ${isOpen ? "isOpenNum" : ""}`}>{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
