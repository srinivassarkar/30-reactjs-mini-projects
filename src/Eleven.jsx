export default function Eleven() {
  const codingQuotes = [
    "Coding is like writing a poem. Every letter must be in the right place.",
    "Programming is the art of telling a computer what to do without yelling at it.",
    "The best way to learn to code is by coding.",
    "A good programmer is someone who can write code that a computer can understand, and another programmer can read.",
    "Code is poetry.",
    "Programming is the process of converting a caffeine-fueled idea into a working prototype.",
    "If you're not making mistakes, you're not learning.",
    "The only way to predict the future is to create it.",
    "The computer is a tool, and like any tool, it can be used for good or for evil. It is up to us to decide how we use it.",
    "The best way to solve a problem is to break it down into smaller, more manageable problems.",
    "The secret of great software is to design it to be as simple as possible, but not simpler.",
    "The best way to debug a program is to write it with a debugger in mind.",
  ];

  function randomFunction() {
    const quote = Math.floor(Math.random() * codingQuotes.length);
    return quote;
  }

  return <div onClick={randomFunction}>{codingQuotes[randomFunction()]}</div>;
}
