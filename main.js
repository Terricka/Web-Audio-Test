if (navigator.requestMIDIAccess) {
    console.log('Browser supports MIDI!');
}

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess()
        .then(success, failure);
}
function onMIDIMessage (message) {
    console.log(message.data);
}
function success (midi) {
   // console.log('Got midi!', midi);

    var inputs = midi.inputs.values();
    // console.log(inputs)
    for (var input = inputs.next();
	     input && !input.done;
	     input = inputs.next()) {
	    // each time there is a midi message call the onMIDIMessage function
	    input.value.onmidimessage = onMIDIMessage;
	}
}


 
function failure () {
    console.error('No access to your midi devices.')
}

