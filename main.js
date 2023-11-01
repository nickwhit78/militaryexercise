const name = 'Steve';
const rank = 'Major';
const age = 22;
if (age < 18) {
  console.log('You are to young for the military')
};
 if (name === 'Rugen') {
  console.log('My name is Inigo Montoya, you killed my father, prepare to die.')
};
 if (rank === 'Captain') {
  console.log('Aye Aye Captain' + name + '.')
};
 if (rank === 'Private' && age === 40) {
  console.log('What have you been doing with your life' + name + '?')
}
else(console.log('Hello Major Steve, I cannot wait to celebrate your ' + (age + 1) +'rd birthday next year!'));
