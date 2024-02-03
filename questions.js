const questions = [
  {
    questionText: "Question 1: When faced with a challenge, how confident do you feel about overcoming it?",
    options: [
      { optionText: "1. Very confident", points: 5 },
      { optionText: "2. Somewhat confident", points: 3 },
      { optionText: "3. Doubtful", points: 1 },
      { optionText: "4. Not confident", points: 0 }
    ],
  },
  {
    questionText: "Question 2: Which statement resonates with you the most?",
    options: [
      { optionText: "1. Life is full of possibilities.", points: 3 },
      { optionText: "2. Life is unpredictable.", points: 2 },
      { optionText: "3. Life is a struggle.", points: 1 },
      { optionText: "4. Life is beautiful.", points: 4 }
    ],
  },
  {
    questionText: "Question 3: How often do you find it difficult to fall asleep due to racing thoughts?",
    options: [
      { optionText: "1. Rarely", points: 1 },
      { optionText: "2. Occasionally", points: 2 },
      { optionText: "3. Often", points: 3 },
      { optionText: "4. Constantly", points: 4 }
    ],
  },
  {
    questionText: "Question 4: How do you react to compliments?",
    options: [
      { optionText: "1. Appreciate them and move on", points: 3 },
      { optionText: "2. Feel a bit uncomfortable but thankful", points: 2 },
      { optionText: "3. Feel undeserving of them", points: 1 },
      { optionText: "4. Brush them off", points: 0 }
    ],
  },
  {
    questionText: "Question 5: Choose a word that describes your mood today:",
    options: [
      { optionText: "1. Content", points: 3 },
      { optionText: "2. Anxious", points: 2 },
      { optionText: "3. Indifferent", points: 1 },
      { optionText: "4. Excited", points: 4 }
    ],
  },
  {
    questionText: "Question 6: How do you handle criticism?",
    options: [
      { optionText: "1. Open to improvement", points: 4 },
      { optionText: "2. Take it personally but reflect", points: 2 },
      { optionText: "3. Defensive", points: 1 },
      { optionText: "4. Feel devastated", points: 0 }
    ],
  },
  {
    questionText: "Question 7: Which activity would you enjoy most at a social gathering?",
    options: [
      { optionText: "1. Dancing", points: 4 },
      { optionText: "2. Engaging in deep conversations", points: 3 },
      { optionText: "3. Observing others", points: 2 },
      { optionText: "4. Eating", points: 1 }
    ],
  },
  {
    questionText: "Question 8: How often do you feel motivated to accomplish your goals?",
    options: [
      { optionText: "1. Consistently", points: 4 },
      { optionText: "2. Fairly often", points: 3 },
      { optionText: "3. Occasionally", points: 2 },
      { optionText: "4. Rarely", points: 1 }
    ],
  },
  {
    questionText: "Question 9: Choose a quote that resonates with you:",
    options: [
      { optionText: "1. The only way out is through.", points: 3 },
      { optionText: "2. This too shall pass.", points: 2 },
      { optionText: "3. Life is what you make it.", points: 4 },
      { optionText: "4. Everything happens for a reason.", points: 1 }
    ],
  },
  {
    questionText: "Question 10: How often do you feel a sense of loneliness?",
    options: [
      { optionText: "1. Rarely", points: 1 },
      { optionText: "2. Occasionally", points: 2 },
      { optionText: "3. Often", points: 3 },
      { optionText: "4. Constantly", points: 4 }
    ],
  },
  {
  questionText: "Question 11: When faced with a challenge, how confident do you feel about overcoming it?",
  options: [
    { optionText: "1. Very confident", points: 5 },
    { optionText: "2. Somewhat confident", points: 3 },
    { optionText: "3. Doubtful", points: 1 },
    { optionText: "4. Not confident", points: 0 }
  ],
},
{
  questionText: "Question 12: Which statement resonates with you the most?",
  options: [
    { optionText: "1. Life is full of possibilities.", points: 3 },
    { optionText: "2. Life is unpredictable.", points: 2 },
    { optionText: "3. Life is a struggle.", points: 1 },
    { optionText: "4. Life is beautiful.", points: 4 }
  ],
},
{
  questionText: "Question 13: How often do you find it difficult to fall asleep due to racing thoughts?",
  options: [
    { optionText: "1. Rarely", points: 1 },
    { optionText: "2. Occasionally", points: 2 },
    { optionText: "3. Often", points: 3 },
    { optionText: "4. Constantly", points: 4 }
  ],
},
{
  questionText: "Question 14: How do you react to compliments?",
  options: [
    { optionText: "1. Appreciate them and move on", points: 3 },
    { optionText: "2. Feel a bit uncomfortable but thankful", points: 2 },
    { optionText: "3. Feel undeserving of them", points: 1 },
    { optionText: "4. Brush them off", points: 0 }
  ],
},
{
  questionText: "Question 15: Choose a word that describes your mood today:",
  options: [
    { optionText: "1. Content", points: 3 },
    { optionText: "2. Anxious", points: 2 },
    { optionText: "3. Indifferent", points: 1 },
    { optionText: "4. Excited", points: 4 }
  ],
},
{
  questionText: "Question 16: How do you handle criticism?",
  options: [
    { optionText: "1. Open to improvement", points: 4 },
    { optionText: "2. Take it personally but reflect", points: 2 },
    { optionText: "3. Defensive", points: 1 },
    { optionText: "4. Feel devastated", points: 0 }
  ],
},
{
  questionText: "Question 17: Which activity would you enjoy most at a social gathering?",
  options: [
    { optionText: "1. Dancing", points: 4 },
    { optionText: "2. Engaging in deep conversations", points: 3 },
    { optionText: "3. Observing others", points: 2 },
    { optionText: "4. Eating", points: 1 }
  ],
},
{
  questionText: "Question 18: How often do you feel motivated to accomplish your goals?",
  options: [
    { optionText: "1. Consistently", points: 4 },
    { optionText: "2. Fairly often", points: 3 },
    { optionText: "3. Occasionally", points: 2 },
    { optionText: "4. Rarely", points: 1 }
  ],
},
{
  questionText: "Question 19: Choose a quote that resonates with you:",
  options: [
    { optionText: "1. The only way out is through.", points: 3 },
    { optionText: "2. This too shall pass.", points: 2 },
    { optionText: "3. Life is what you make it.", points: 4 },
    { optionText: "4. Everything happens for a reason.", points: 1 }
  ],
},
{
  questionText: "Question 20: How often do you feel a sense of loneliness?",
  options: [
    { optionText: "1. Rarely", points: 1 },
    { optionText: "2. Occasionally", points: 2 },
    { optionText: "3. Often", points: 3 },
    { optionText: "4. Constantly", points: 4 }
  ],
},
{
  questionText: "Question 21: In a challenging situation, you are more likely to:",
  options: [
    { optionText: "1. Seek help from others", points: 3 },
    { optionText: "2. Solve it independently", points: 4 },
    { optionText: "3. Avoid it", points: 1 },
    { optionText: "4. Get overwhelmed", points: 2 }
  ],
},
{
  questionText: "Question 22: Choose a form of exercise:",
  options: [
    { optionText: "1. Yoga", points: 3 },
    { optionText: "2. Running", points: 4 },
    { optionText: "3. Weightlifting", points: 2 },
    { optionText: "4. None", points: 1 }
  ],
},
{
  questionText: "Question 23: How do you handle unexpected changes in your plans?",
  options: [
    { optionText: "1. Adapt and go with the flow", points: 3 },
    { optionText: "2. Feel annoyed but adapt", points: 2 },
    { optionText: "3. Get stressed and anxious", points: 4 },
    { optionText: "4. Panic and struggle to cope", points: 1 }
  ],
},
{
  questionText: "Question 24: How often do you feel a sense of accomplishment after completing a task?",
  options: [
    { optionText: "1. Every time", points: 4 },
    { optionText: "2. Often", points: 3 },
    { optionText: "3. Occasionally", points: 2 },
    { optionText: "4. Rarely", points: 1 }
  ],
},
{
  questionText: "Question 25: Choose a book genre:",
  options: [
    { optionText: "1. Self-help", points: 3 },
    { optionText: "2. Mystery/Thriller", points: 2 },
    { optionText: "3. Fantasy", points: 4 },
    { optionText: "4. Biography", points: 1 }
  ],
},
{
  questionText: "Question 26: When was the last time you cried?",
  options: [
    { optionText: "1. Recently", points: 4 },
    { optionText: "2. A few weeks ago", points: 3 },
    { optionText: "3. A few months ago", points: 2 },
    { optionText: "4. Can't remember", points: 1 }
  ],
},
{
  questionText: "Question 27: How often do you experience feelings of guilt?",
  options: [
    { optionText: "1. Rarely", points: 1 },
    { optionText: "2. Occasionally", points: 2 },
    { optionText: "3. Often", points: 3 },
    { optionText: "4. Constantly", points: 4 }
  ],
},
{
  questionText: "Question 28: Choose a leisure activity:",
  options: [
    { optionText: "1. Painting or drawing", points: 3 },
    { optionText: "2. Playing a musical instrument", points: 4 },
    { optionText: "3. Cooking or baking", points: 2 },
    { optionText: "4. None of these", points: 1 }
  ],
},
{
  questionText: "Question 29: How often do you find joy in simple everyday things?",
  options: [
    { optionText: "1. All the time", points: 4 },
    { optionText: "2. Often", points: 3 },
    { optionText: "3. Occasionally", points: 2 },
    { optionText: "4. Rarely", points: 1 }
  ],
},
{
  questionText: "Question 30: How do you react to making a significant life decision?",
  options: [
    { optionText: "1. Research thoroughly and decide confidently", points: 4 },
    { optionText: "2. Seek advice from others before deciding", points: 3 },
    { optionText: "3. Feel paralyzed and anxious", points: 2 },
    { optionText: "4. Make impulsive decisions", points: 1 }
  ],
}



  // Continue with the next set of questions and options
];

export default questions;
