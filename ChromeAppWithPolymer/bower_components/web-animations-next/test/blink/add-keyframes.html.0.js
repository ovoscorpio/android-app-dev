

test(function() {
  assert_throws({name: 'NotSupportedError'}, function() {
    div.animate([{height: '100px', composite: 'add'}, {height: '200px', composite: 'add'}], 1);
  }, 'Add animations should cause an exception.');
},
'Add animation tests',
{
  help:   'http://dev.w3.org/fxtf/web-animations/#the-unaccumulated-animation-value-of-a-keyframe-animation-effect',
  assert: 'Only keyframes without add compositing considered',
  author: 'Shane Stephens'
});

test(function() {
  assert_throws({name: 'NotSupportedError'}, function() {
    div.animate([{height: '100px'}, {height: '200px', composite: 'add'}], 1);
  }, 'Animations with add keyframes should cause an exception.');
},
'Hybrid animation tests',
{
  help:   'http://dev.w3.org/fxtf/web-animations/#the-unaccumulated-animation-value-of-a-keyframe-animation-effect',
  assert: 'Only keyframes without add compositing are considered',
  author: 'Shane Stephens'
});

