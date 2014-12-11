
assertInterpolation({
  property: 'text-indent',
  from: '0px',
  to: '50px'
}, [
  {at: -0.3, is: '-15px'},
  {at: 0, is: '0'},
  {at: 0.3, is: '15px'},
  {at: 0.6, is: '30px'},
  {at: 1, is: '50px'},
  {at: 1.5, is: '75px'},
]);
