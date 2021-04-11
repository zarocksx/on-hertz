navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

const midiData = {
  deviceId: 0,
  controlId: 1,
  value: 2,
};

function onMIDISuccess(midiAccess) {
  console.log(midiAccess);
  for (var input of midiAccess.inputs.values()) {
    input.onmidimessage = getMIDIMessage;
  }
  console.log(FaderCurve);
}

function getMIDIMessage(midiMessage) {
  console.log(midiMessage.data);
  rightSlider.value = clamp(midiMessage.data[2], 0, 127, 0, 1);
  trackFill(rightSlider);
  rightSlider.focus();
}

function onMIDIFailure() {
  console.log("Could not access your MIDI devices.");
}
