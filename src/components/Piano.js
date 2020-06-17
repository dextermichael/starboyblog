import React from "react"
import "../components/Piano.css"
import "../components/pianofn"
;<script src=""></script>

const Piano = () => (
  <div>
    <ul id="piano">
      <li data-note="C4" class="key">
        <div data-note="C#4" class="black-key">
          R
        </div>
        D
      </li>
      <li data-note="D4" class="key">
        <div data-note="D#4" class="black-key">
          T
        </div>
        F
      </li>
      <li data-note="E4" class="key">
        G
      </li>
      <li data-note="F4" class="key">
        <div data-note="F#4" class="black-key">
          U
        </div>
        H
      </li>
      <li data-note="G4" class="key">
        <div data-note="G#4" class="black-key">
          I
        </div>
        J
      </li>
      <li data-note="A4" class="key">
        <div data-note="A#4" class="black-key">
          O
        </div>
        K
      </li>
      <li data-note="B4" class="key">
        L
      </li>
    </ul>
  </div>
)

export default Piano