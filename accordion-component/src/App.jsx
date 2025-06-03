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
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((datas, index) => (
        <AccordionItem
          title={datas.title}
          num={index}
          key={index}
          //text={datas.text}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {datas.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Thinking in React"
        num={22}
        key="test 1"
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        {
          <div>
            <p>Allow React deevelop to:</p>
            <ul>
              <li>Break up UI into components</li>
              <li>Make components reusable</li>
              <li>Place states efficiently</li>
            </ul>
          </div>
        }
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
    // onOpen(num);
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

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
