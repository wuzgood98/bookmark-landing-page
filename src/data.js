import tabOne from "./assets/images/illustration-features-tab-1.svg";
import tabTwo from "./assets/images/illustration-features-tab-2.svg";
import tabThree from "./assets/images/illustration-features-tab-3.svg";
import fireFox from "./assets/images/logo-firefox.svg";
import chrome from "./assets/images/logo-chrome.svg";
import opera from "./assets/images/logo-opera.svg";

const data = [
  {
    id: 1,
    feature: "simple bookmarking",
    img: tabOne,
    title: "Bookmark in one click",
    info: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    feature: "Speedy Searching",
    img: tabTwo,
    title: "Intelligent search",
    info: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    feature: "Easy Sharing",
    img: tabThree,
    title: "Share your bookmarks",
    info: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const extensions = [
  {
    id: 4,
    name: "chrome logo",
    img: chrome,
    title: "Add to Chrome",
    version: "Minimum version 62",
  },
  {
    id: 5,
    name: "firefox logo",
    img: fireFox,
    title: "Add to FireFox",
    version: "Minimum version 55",
  },
  {
    id: 6,
    name: "opera logo",
    img: opera,
    title: "Add to Opera",
    version: "Minimum version 46",
  },
];

const frequentlyAskedQuestions = [
  {
    id: 7,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 8,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 9,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 10,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export { extensions, data, frequentlyAskedQuestions };
