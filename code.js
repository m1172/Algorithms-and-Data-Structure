const meetups = [
  { name: 'javascript', isActive: true, membera: 100 },
  { name: 'Angular', isActive: true, membera: 900 },
  { name: 'Node', isActive: false, membera: 600 },
  { name: 'React', isActive: true, membera: 500 },
];

const membersOnACtiveMeetups = (meetups) =>
  meetups.filter((meetup) => meetup.isActive);

console.log(
  membersOnACtiveMeetups(meetups).reduce(
    (sum, meetup) => sum + meetup.membera,

    0
  )
);
