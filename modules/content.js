import Element from "../constructor/Element.js";

const cardData = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
];

const cards = cardData.map(el => new Element('div', 'card', el).get())

const cardData1 = [
  'Same Card 1',
  'Same Card 2',
  'Same Card 3',
  'Same Card 4',
  'Same Card 5',
];

const cards1 = cardData1.map(el => new Element('div', 'card1', el).get())

const content = new Element('div', 'content', cards);
const content1 = new Element('div', 'content', cards1);

export {content, content1};