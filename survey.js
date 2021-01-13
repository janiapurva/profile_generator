const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', (answer) => {
  rl.question('What\ s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite', (meal) => {
        rl.question('What\ s your favourite thing to eat for that meal?', (typeOfMeal) => {
          rl.question('Which sport is your absolute favourite ?', (sport) => {
            rl.question('What is your superpower', (strength) => {
              console.log(`Nice to meeting with: ${answer} .So you like to do: ${activity} .You like to listen: ${music}.So you your favourite meal is: ${meal}.So you your favourite thing to eat : ${typeOfMeal}I also like to play: ${sport}.Great that you have: ${strength}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
