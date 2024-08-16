import React from "react";
import Container from "./container";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="mb-5">
      <details className=" bg-base-100 p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500">
        <summary className="outline-none cursor-pointer focus:underline focus:text-inherit font-semibold marker:text-inherit group-open:before:rotate-90  before:origin-center relative  before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
          {question}
        </summary>

        <hr className="my-2 scale-x-150" />

        <div className="text-sm -m-4 -mt-2 p-4 bg-base-100">{answer}</div>
      </details>
    </div>
  );
};

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map(item => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How is the value of each $XOC backed?",
    answer:
      "Each $XOC is backed by an ERC20 token on the EVM-compatible chain of your choosing. This backing ensures that each $XOC can be liquidated for its equivalent value in $XOC-denominated debt and settle the account in the process, all backed by the network of validators. Minting contracts are currently live in Arbitrum, Base, Binance Smart Chain, Gnosis Chain, Optimism and Polygon.",
  },
  {
    question: "What can I do with $XOC?",
    answer:
      "You can use $XOC to pay off debts, acquire goods and services, or simply hold it as a store of value, much like any other Mexican peso. Additionally, you can support La DAO community by building the next open and decentralized financial system. Ask us how to get started on Discord or Telegram.",
  },
  {
    question: "Who maintains all this?",
    answer:
      "We utilize a business model based on a DAO, currently known as 'La DAO.' This decentralized autonomous organization is responsible for managing all the work needed to build in DeFi. We are in the process of establishing a DAO LLC to manage the legal and local financial aspects of the project.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can acquire $XOC on any exchange that offers it, or participate in the DAO and contribute to building the future of decentralized finance. If you have skills you think may be useful, feel free to reach out to us.",
  },
];

export default Faq;
