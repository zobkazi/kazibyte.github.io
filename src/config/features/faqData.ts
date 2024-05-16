interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqData: FAQItem[] = [
  {
    question: "How does the billing work?",
    answer:
      "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    isOpen: false,
  },
  {
    question: "Can I get a refund for my subscription?",
    answer:
      "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    isOpen: false,
  },
  // Add more FAQs as needed
];

export default faqData;
