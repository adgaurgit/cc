.interactive-enabled .step-slider-tray .sliderTray {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  transform: none;
  border-radius: 0;
  top: 0;
  width: 100%;
}
  
.interactive-enabled .step-slider-tray .sliderTray .menu {
  border-radius: 0 0 8px 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 16px 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  background: var(--prompt-input-fill);
  justify-content: space-between;
  color: var(--color-white);
  font-weight: bold;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.32);
}

.interactive-enabled.light .step-slider-tray .sliderTray .menu {
  background: var(--prompt-btn-fill-light);
  color: var(--color-black);
}

.interactive-enabled .interactive-holder.dark.step-slider-tray .sliderTray .menu {
  background: var(--prompt-input-fill);
  color: var(--color-white);
}

.interactive-enabled .interactive-holder.light.step-slider-tray .sliderTray .menu {
  background: var(--prompt-btn-fill-light);
  color: var(--color-black);
}

.interactive-enabled .step-slider-tray .sliderTray .menu label {
  margin: 10px 0 0;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle {
  position: absolute;
  block-size: 20px;
  inline-size: 20px;
  background-color: var(--prompt-btn-fill-light);
  border-radius: 50%;
  top: -9px;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.interactive-enabled.light .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle {
  background-color: var(--color-black);
}

.interactive-enabled .interactive-holder.dark.step-slider-tray .sliderTray .menu .sliderContainer .outerCircle {
  background-color: var(--prompt-btn-fill-light);
}

.interactive-enabled .interactive-holder.light.step-slider-tray .sliderTray .menu .sliderContainer .outerCircle {
  background-color: var(--color-black);
}

[dir="rtl"] .interactive-enabled:not(.row-reversed) .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle,
[dir="rtl"] .interactive-enabled.row-reversed .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle {
  transform: translate(38%, -50%);
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle::before {
  border-radius: 100%;
  content: "";
  display: block;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: box-shadow 300ms ease-out 0s, inline-size 300ms ease-out 0s, block-size 300ms ease-out 0s, opacity 300ms ease-out 0s;
  block-size: 40px;
  inline-size: 40px;
  box-shadow: 0 0 0 8px #3892f3; 
  opacity: 0;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .showOuterBorder::before {
  opacity: 0.4;
}

[dir="rtl"] .interactive-enabled:not(.row-reversed) .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle::before,
[dir="rtl"] .interactive-enabled.row-reversed .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle::before {
  transform: translate(50%, -50%);
}

.interactive-enabled .step-slider-tray .sliderTray .menu .saturation,
.interactive-enabled .step-slider-tray .sliderTray .menu .hue {
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.5em;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  height: 3px;
  display: block;
  outline: none;
  transition: color 0.05s linear;
  width: 100%;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .saturation {
  background: linear-gradient(to right, black, red);
}

[dir='rtl'] .interactive-enabled .step-slider-tray .sliderTray .menu .saturation {
  background: linear-gradient(to left, darkgray, red);
}

.interactive-enabled .step-slider-tray .sliderTray .menu .hue {
  background: linear-gradient(to right, red, yellow, lime, aqua, blue, fuchsia, red);
}

[dir='rtl'] .interactive-enabled .step-slider-tray .sliderTray .menu .hue {
  background: linear-gradient(to left, red, yellow, lime, aqua, blue, fuchsia, red);
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .options::-webkit-slider-thumb,
.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .options::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  position: relative;
  border-radius: 2em;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  cursor: move;
  cursor: grab;
  cursor: -webkit-grab;
  z-index: 2;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .options[type="range"]:focus {
  outline: none;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .options {
  width: 100%;
  opacity: 0;
  position: absolute;
  top: -7px;
  z-index: 2;
  margin: 0;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .animate::before,
[dir='rtl'] .interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .animate::before,
.interactive-enabled.row-reversed .step-slider-tray .sliderTray .menu .sliderContainer .animate::before,
[dir='rtl'] .interactive-enabled.row-reversed .step-slider-tray .sliderTray .menu .sliderContainer .animate::before {
  opacity: 1;
  box-shadow: 0 0 0 4px #3892f3;
  inline-size: 25px;
  block-size: 25px;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .animateout::before,
[dir='rtl'] .interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .animateout::before,
.interactive-enabled.row-reversed .step-slider-tray .sliderTray .menu .sliderContainer .animateout::before {
  opacity: 0;
  box-shadow: 0 0 0 8px #3892f3;
  inline-size: 40px;
  block-size: 40px;
}
  
.interactive-enabled .step-slider-tray .sliderTray .uploadButton:hover,
.interactive-enabled .step-slider-tray .sliderTray .uploadButton.focusUploadButton {
  border: 3px solid #1273E6;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .sliderContainer .outerCircle.focusUploadButton {
  border: 4px solid #3892f3;
}

.interactive-enabled .step-slider-tray .sliderTray .uploadButton > input,
.interactive-enabled .step-slider-tray .sliderTray .uploadButtonMobile > input {
  opacity: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.interactive-enabled .step-slider-tray .sliderTray .uploadButton {
  display: none;
}

.interactive-enabled .step-slider-tray .continueButton {
  display: none;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .uploadButtonMobile {
  display: inline-flex;
  box-sizing: content-box;
  margin: 16px auto 0;
  background: var(--prompt-input-fill);
  color: var(--color-white) !important;
  width: auto;
  gap: 8px;
  padding: 5px 12px 5px 8px;
  max-width: fit-content;
  border-radius: 8px;
  align-items: center;
  max-height: 32px;
  font-size: 18px;
  border: 1px solid #fff;
  text-decoration: none;
  position: relative;
}

.interactive-enabled.light .step-slider-tray .sliderTray .menu .uploadButtonMobile,
.interactive-enabled .interactive-holder.light.step-slider-tray .sliderTray .menu .uploadButtonMobile {
  background: var(--prompt-btn-fill-light);
  color: var(--color-black) !important;
  border: 1px solid #000;
}

.interactive-enabled .interactive-holder.dark.step-slider-tray .sliderTray .menu .uploadButtonMobile {
  background: var(--prompt-input-fill);
  color: var(--color-white) !important;
  border: 1px solid #fff;
}

.interactive-enabled .step-slider-tray .sliderTray .uploadButton.uploadButtonMobile:hover,
.interactive-enabled .interactive-holder.dark.step-slider-tray .sliderTray .menu .uploadButtonMobile:hover,
.interactive-enabled .interactive-holder.light.step-slider-tray .sliderTray .menu .uploadButtonMobile:hover,
.interactive-enabled .step-slider-tray .sliderTray .uploadButton.uploadButtonMobile.focusUploadButton,
.interactive-enabled .interactive-holder.dark.step-slider-tray .sliderTray .menu .uploadButtonMobile.focusUploadButton,
.interactive-enabled .interactive-holder.light.step-slider-tray .sliderTray .menu .uploadButtonMobile.focusUploadButton {
  border: 1px solid #1273E6;
}

.interactive-enabled .step-slider-tray .sliderTray .menu .uploadButtonMobile.hide {
  display: none;
}

.interactive-enabled .step-slider-tray .sliderTray .svg-icon-container img {
  height: 18px;
  width: 18px;
  display: flex;
}

@media screen and (min-width: 600px) {
  .interactive-enabled .step-slider-tray .sliderTray,
  [dir="rtl"] .interactive-enabled.row-reversed .step-slider-tray .sliderTray {
   position: absolute;
   top: 45%;
   gap: 15px;
   transform: translateY(-50%);
   width: 260px;
   right: -20%;
 }

 [dir="rtl"] .interactive-enabled:not(.row-reversed) .step-slider-tray .sliderTray,
 .interactive-enabled.row-reversed .step-slider-tray .sliderTray {
  left: -20%;
  right: auto;
}

.interactive-enabled .step-slider-tray .sliderTray .menu {
   border-radius: 8px;
   padding: 14px 24px 28px;
   bottom: inherit;
   gap: 12px;
   width: 260px;
   box-sizing: border-box;
 }

 .interactive-enabled .step-slider-tray .sliderTray .uploadButton {
   top: 70%;
   display: flex;
   gap: 16px;
   background: var(--prompt-input-fill);
   border-radius: 8px;
   text-decoration: none;
   color: var(--prompt-btn-fill-light);
   font-weight: bold;
   padding: 6px 21px;
   align-items: center;
   justify-content: center;
   width: 260px;
   border: 3px solid transparent;
   box-sizing: border-box;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.32);
   height: 64px;
   position: relative;
 }

 .interactive-enabled.light .step-slider-tray .sliderTray .uploadButton {
  background: var(--prompt-btn-fill-light);
  color: var(--color-black);
 }

 .interactive-enabled .interactive-holder.dark.step-slider-tray .sliderTray .uploadButton {
  background: var(--prompt-input-fill);
  color: var(--color-white);
 }

 .interactive-enabled .interactive-holder.light.step-slider-tray .sliderTray .uploadButton {
  background: var(--prompt-btn-fill-light);
  color: var(--color-black);
 }

 .interactive-enabled .step-slider-tray .sliderTray .menu .uploadButtonMobile {
   display: none;
 }

 .interactive-enabled .step-slider-tray .sliderTray .svg-icon-container img,
 .interactive-enabled .step-slider-tray .continueButton .svg-icon-container img {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 34px;
   width: 34px;
   border-radius: 3px;
   flex-shrink: 0;
 }
}

@media screen and (min-width: 1024px) {
  .interactive-enabled .step-slider-tray .continueButton {
    position: absolute;
    bottom: 4%;
    display: flex;
    gap: 16px;
    background: #1273E6;
    border-radius: 8px;
    text-decoration: none;
    color: var(--prompt-btn-fill-light);
    font-weight: bold;
    padding: 0 56px;
    align-items: center;
    justify-content: center;
    width: 47%;
    left: 50%;
    max-height: 64px;
    transform: translateX(-50%);
    cursor: pointer;
    border: 2px solid transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 64px;
  }
  
  .interactive-enabled .step-slider-tray .continueButton.hide {
    display: none;
  }
  
  .interactive-enabled .step-slider-tray .continueButton:hover,
  .interactive-enabled .step-slider-tray .continueButton:focus {
    border: 2px solid var(--prompt-btn-fill-light);
  }
}
