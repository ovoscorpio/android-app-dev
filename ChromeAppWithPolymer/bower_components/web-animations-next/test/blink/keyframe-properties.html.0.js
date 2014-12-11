

test(function() {
  var keyframe = {};
  Object.defineProperty(keyframe, 'width', {value: '200px'});
  Object.defineProperty(keyframe, 'height', {
    value: '100px',
    enumerable: true});
  assert_equals(keyframe.width, '200px', 'width of keyframe is readable');
  assert_equals(keyframe.height, '100px', 'height of keyframe is readable');
  try {
    div.animate([keyframe, {height: '200px'}], 1);
  } catch (e) {
    assert_unreached("Mismatched properties - both or neither properties on keyframe were considered.");
  }
},
'enumerable keyframe properties tests',
{
  help:   'http://dev.w3.org/fxtf/web-animations/#dfn-procedure-for-converting-an-ecmascript-value-to-an-idl-keyframe-object',
  assert: 'Only enumerable properties on keyframes are considered',
  author: 'Shane Stephens'
});

test(function() {
  var KeyframeParent = function() { this.width = "100px"; };
  KeyframeParent.prototype = { height: "100px" };
  var Keyframe = function() { this.top = "100px"; };
  Keyframe.prototype = Object.create(KeyframeParent.prototype);
  Object.defineProperty(Keyframe.prototype, "left", {
    value: '100px',
    enumerable: 'true'});
  var keyframe = new Keyframe();
  try {
    div.animate([keyframe, {top: '200px', left: '200px', height: '200px'}], 1);
  } catch (e) {
    assert_unreached("Mismatched properties - left, width or height not considered on keyframe.");
  }
},
'inherited keyframe properties tests',
{
  help:   'http://dev.w3.org/fxtf/web-animations/#dfn-procedure-for-converting-an-ecmascript-value-to-an-idl-keyframe-object',
  assert: 'Only properties in Object.keys on keyframes are considered',
  author: 'Shane Stephens'
});


