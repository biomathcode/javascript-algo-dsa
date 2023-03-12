var tracker = 0;

var callMe = () => {
  debugger;
  tracker++;
  if (tracker === 3) {
    return "loops";
  }
  debugger;

  return callMe();
};

console.log(callMe());

debugger;

console.log("just for seeing the call stack");
