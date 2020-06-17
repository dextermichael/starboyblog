// import React from "react"
// import "../components/Piano.css"
// import "../components/pianofn"
// import Tone from "tone"

// // Tone.Synth is a basic synthesizer with a single oscillator
// const synth = new Tone.Synth()
// // Set the tone to sine
// synth.oscillator.type = "sine"
// // connect it to the master output (your speakers)
// synth.toMaster()

// const piano = document.getElementById("piano")

// piano.addEventListener("mousedown", e => {
//   // fires off a note continously until trigger is released
//   synth.triggerAttack(e.target.dataset.note)
// })

// piano.addEventListener("mouseup", e => {
//   // stops the trigger
//   synth.triggerRelease()
// })

// // handles keyboard events
// document.addEventListener("keydown", e => {
//   // e object has the key property to tell which key was pressed
//   switch (e.key) {
//     case "d":
//       return synth.triggerAttack("C4")
//     case "r":
//       return synth.triggerAttack("C#4")
//     case "f":
//       return synth.triggerAttack("D4")
//     case "t":
//       return synth.triggerAttack("D#4")
//     case "g":
//       return synth.triggerAttack("E4")
//     case "h":
//       return synth.triggerAttack("F4")
//     case "u":
//       return synth.triggerAttack("F#4")
//     case "j":
//       return synth.triggerAttack("G4")
//     case "i":
//       return synth.triggerAttack("G#4")
//     case "k":
//       return synth.triggerAttack("A4")
//     case "o":
//       return synth.triggerAttack("A#4")
//     case "l":
//       return synth.triggerAttack("B4")
//     default:
//       return
//   }
// })
// // when the key is released, audio is released as well
// document.addEventListener("keyup", e => {
//   switch (e.key) {
//     case "d":
//     case "r":
//     case "f":
//     case "t":
//     case "g":
//     case "h":
//     case "u":
//     case "j":
//     case "i":
//     case "k":
//     case "o":
//     case "l":
//       synth.triggerRelease()
//   }
// })

// class Piano extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul id="piano">
//           <li data-note="C4" class="key">
//             <div data-note="C#4" class="black-key">
//               R
//             </div>
//             D
//           </li>
//           <li data-note="D4" class="key">
//             <div data-note="D#4" class="black-key">
//               T
//             </div>
//             F
//           </li>
//           <li data-note="E4" class="key">
//             G
//           </li>
//           <li data-note="F4" class="key">
//             <div data-note="F#4" class="black-key">
//               U
//             </div>
//             H
//           </li>
//           <li data-note="G4" class="key">
//             <div data-note="G#4" class="black-key">
//               I
//             </div>
//             J
//           </li>
//           <li data-note="A4" class="key">
//             <div data-note="A#4" class="black-key">
//               O
//             </div>
//             K
//           </li>
//           <li data-note="B4" class="key">
//             L
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }

// export default Piano
