type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};
const mathQuiz: QuizQuestion[] = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Solve for x: 3x - 7 = 14",
    options: ["5", "6", "7", "8"],
    correctAnswer: "5",
  },
  {
    question: "What is 8 multiplied by 7?",
    options: ["45", "52", "56", "64"],
    correctAnswer: "56",
  },
  {
    question: "What is 20 divided by 4?",
    options: ["2", "4", "5", "6"],
    correctAnswer: "5",
  },
  {
    question: "What is the square root of 81?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "9",
  },
  {
    question:
      "If a triangle has angles of 30°, 60°, and 90°, what type of triangle is it?",
    options: ["Isosceles", "Scalene", "Equilateral", "Right"],
    correctAnswer: "Right",
  },
  {
    question:
      "What is the perimeter of a rectangle with a length of 12 units and a width of 8 units?",
    options: ["32 units", "40 units", "48 units", "56 units"],
    correctAnswer: "40 units",
  },
  {
    question: "What is 3 squared (3^2)?",
    options: ["6", "9", "12", "15"],
    correctAnswer: "9",
  },
  {
    question:
      "If a car travels at a speed of 60 miles per hour, how far will it travel in 2 hours?",
    options: ["60 miles", "90 miles", "120 miles", "150 miles"],
    correctAnswer: "120 miles",
  },
  {
    question:
      "What is the area of a circle with a radius of 5 units (use π ≈ 3.14)?",
    options: [
      "15.7 square units",
      "31.4 square units",
      "47.1 square units",
      "62.8 square units",
    ],
    correctAnswer: "78.5 square units",
  },
  {
    question: "If x = 3 and y = 4, what is the value of x^2 + y^2?",
    options: ["5", "7", "9", "11"],
    correctAnswer: "25",
  },
  {
    question: "What is 15% of 80?",
    options: ["8", "12", "15", "18"],
    correctAnswer: "12",
  },
  {
    question:
      "If a box has dimensions of 10 cm, 5 cm, and 3 cm, what is its volume?",
    options: ["150 cm³", "200 cm³", "250 cm³", "300 cm³"],
    correctAnswer: "150 cm³",
  },
  {
    question: "What is the next prime number after 17?",
    options: ["19", "21", "23", "25"],
    correctAnswer: "19",
  },
  {
    question: "If 2x + 3 = 11, what is the value of x?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
  },
  {
    question: "What is the product of 9 and 7?",
    options: ["56", "63", "72", "81"],
    correctAnswer: "63",
  },
  {
    question:
      "If a recipe calls for 2 cups of flour, how many cups do you need for 3 batches?",
    options: ["2 cups", "4 cups", "6 cups", "8 cups"],
    correctAnswer: "6 cups",
  },
  {
    question: "What is the square of 6 (6^2)?",
    options: ["24", "30", "36", "42"],
    correctAnswer: "36",
  },
  {
    question:
      "If a train travels at a speed of 50 kilometers per hour for 2 hours, how far does it travel?",
    options: ["50 km", "100 km", "150 km", "200 km"],
    correctAnswer: "100 km",
  },
  {
    question: "What is 20% of 150?",
    options: ["10", "20", "30", "40"],
    correctAnswer: "30",
  },
  {
    question:
      "If a square has a side length of 9 units, what is its perimeter?",
    options: ["18 units", "27 units", "36 units", "45 units"],
    correctAnswer: "36 units",
  },
  {
    question: "What is the value of 5 factorial (5!)?",
    options: ["10", "20", "30", "120"],
    correctAnswer: "120",
  },
  {
    question:
      "If a recipe calls for 3 eggs and you want to make 2/3 of the recipe, how many eggs do you need?",
    options: ["1 egg", "2 eggs", "3 eggs", "4 eggs"],
    correctAnswer: "2 eggs",
  },
  {
    question: "What is 7 multiplied by 9?",
    options: ["56", "63", "72", "81"],
    correctAnswer: "63",
  },
  {
    question:
      "If a box has dimensions of 6 cm, 4 cm, and 2 cm, what is its volume?",
    options: ["24 cm³", "48 cm³", "72 cm³", "96 cm³"],
    correctAnswer: "48 cm³",
  },
  {
    question: "What is the sum of the first 10 natural numbers?",
    options: ["45", "50", "55", "60"],
    correctAnswer: "55",
  },
  {
    question: "If x = 2 and y = 3, what is the value of x^3 + y^3?",
    options: ["11", "17", "23", "29"],
    correctAnswer: "35",
  },
  {
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "30"],
    correctAnswer: "20",
  },
  {
    question:
      "If a rectangle has a length of 15 units and a width of 10 units, what is its area?",
    options: [
      "100 square units",
      "125 square units",
      "150 square units",
      "175 square units",
    ],
    correctAnswer: "150 square units",
  },
];

export default mathQuiz;
