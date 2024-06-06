.gray-button.start-over-button.continue.hide {
  display: none;
}

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
.interactive-enabled.split .interactive-holder > video {
  display: none;
} 

.interactive-enabled .step-slider-tray .sliderTray .menu {
  border-radius: 0 0 8px 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background: var(--prompt-input-fill);
  justify-content: space-between;
  color: var(--color-white);
  font-weight: bold;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.32);
  font-size: 16px;
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

.interactive-enabled .step-slider-tray .sliderTray .svg-icon-container svg,
.interactive-enabled .step-slider-tray .sliderTray .svg-icon-container img {
  height: 18px;
  width: 18px;
  display: flex;
}

.interactive-enabled .continueButton .svg-icon-container svg *,
.interactive-enabled .dark .sliderTray .uploadButton .svg-icon-container svg * {
  fill: white;
  stroke: white;
}

.interactive-enabled .step-slider-tray.step-removebg video {
  display: none;
}

.interactive-enabled .step-slider-tray .selector-tray .gray-button {
  position: relative;
}

.interactive-enabled .step-slider-tray .selector-tray .gray-button svg path,
.interactive-enabled .step-slider-tray .selector-tray .gray-button svg rect {
  fill: white;
} 

.interactive-enabled .step-slider-tray.light .selector-tray .gray-button svg path,
.interactive-enabled .step-slider-tray.light .selector-tray .gray-button svg rect {
  fill: black;
} 

.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title .hue-sat-title-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title .slider-svg,
.interactive-enabled .step-slider-tray.light .sliderTray .hue-sat-title .svgicon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title svg {
  height: 16px;
  width: 16px;
}

.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title .slider-svg svg {
  height: 20px;
  width: 20px;
}

.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title svg path,
.interactive-enabled .step-slider-tray .sliderTray .hue-sat-title svg rect {
  fill: white;
} 

.interactive-enabled .step-slider-tray.light .sliderTray .hue-sat-title svg path,
.interactive-enabled .step-slider-tray.light .sliderTray .hue-sat-title svg rect {
  fill: black;
} 

@media screen and (max-width: 600px) {
  .interactive-enabled .step-slider-tray .layer {
    display: flex;
    flex-direction: column;
  }

  .interactive-enabled .step-slider-tray .selector-tray {
    position: static !important;
    width: 100% !important;
    bottom: 0;
    left: 0;
    padding: 0 16px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--prompt-input-fill);
    border-radius: 0 0 8px 8px;
    font-weight: bold;
    box-sizing: border-box;
    color: var(--color-white);
    z-index: 4;
  }

  .interactive-enabled .step-slider-tray .selector-tray .product-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (min-width: 600px) {
  .interactive-enabled .step-slider-tray .sliderTray,
  [dir="rtl"] .interactive-enabled.row-reversed .step-slider-tray .sliderTray {
   position: absolute;
   top: 45%;
   gap: 15px;
   transform: translateY(-50%);
   width: 260px;
   right: 5%;
 }

 [dir="rtl"] .interactive-enabled:not(.row-reversed) .step-slider-tray .sliderTray,
 .interactive-enabled.row-reversed .step-slider-tray .sliderTray {
  left: 10%;
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

 .interactive-enabled .step-slider-tray .sliderTray .svg-icon-container svg,
 .interactive-enabled .step-slider-tray .continueButton .svg-icon-container svg,
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

 .interactive-enabled.split .interactive-holder {
   height: 100%;
   min-height: 100%;
   width: 50vw;
   min-width: 50vw;
 }

 .interactive-enabled.split .interactive-holder > picture img {
   height: 100%;
 }
  
  .interactive-enabled .step-slider-tray .selector-tray .product-icon {
    display: flex;
    align-items: center;
    justify-content: center;
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

@media screen and (min-width: 1200px) {
  .interactive-enabled.split .interactive-holder {
    height: 700px;
    min-height: 700px;
    width: 100%;
    min-width: 100%;
  }

  .interactive-enabled.split .interactive-holder > picture img {
    height: 700px;
    min-height: 700px;
    width: 100%;
    min-width: 100%;
  }
}


.interactive-enabled .step-slider-tray .selector-tray {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--prompt-input-fill);
  border-radius: 0 0 8px 8px;
  font-weight: bold;
  box-sizing: border-box;
  width: auto;
  color: var(--color-white);
  z-index: 4;
}

.interactive-enabled.light .step-slider-tray .selector-tray {
  background: var(--prompt-btn-fill-light);
  color: var(--prompt-text-color-light);
}

.interactive-enabled .interactive-holder.dark.step-slider-tray .selector-tray {
  background: var(--prompt-input-fill);
  color: var(--color-white);
}

.interactive-enabled .interactive-holder.light.step-slider-tray .selector-tray {
  background: var(--prompt-btn-fill-light);
  color: var(--prompt-text-color-light);
}

.interactive-enabled .step-slider-tray .selector-tray .tray-title {
  font-size: var(--type-body-m-size);
  line-height: var(--type-body-m-lh);
}

.interactive-enabled .step-slider-tray .selector-tray .tray-items {
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
}

.interactive-enabled
  .step-slider-tray
  .selector-tray
  .tray-items
  a.tray-thumbnail-img {
  display: block;
  width: 30%;
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  outline: none;
}

.interactive-enabled
  .step-slider-tray
  .selector-tray
  .tray-items
  a.tray-thumbnail-img
  .preload-img {
  display: none;
}

.interactive-enabled
  .step-slider-tray
  .selector-tray
  .tray-items
  a.tray-thumbnail-img
  .tray-thumbnail-outline {
  display: none;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  border: 5px solid var(--prompt-highlight-color);
}

.interactive-enabled
  .step-slider-tray
  .selector-tray
  .tray-items
  a.tray-thumbnail-img.thumbnail-selected
  .tray-thumbnail-outline,
.interactive-enabled
  .step-slider-tray
  .selector-tray
  .tray-items
  a.tray-thumbnail-img:focus-visible
  .tray-thumbnail-outline,
.interactive-enabled
  .step-slider-tray
  .selector-tray
  .tray-items
  a.tray-thumbnail-img:hover
  .tray-thumbnail-outline {
  display: block;
}

.interactive-enabled .step-slider-tray .selector-tray label {
  display: flex;
  gap: 8px;
}

.interactive-enabled .step-slider-tray .selector-tray input {
  opacity: 0;
  width: auto;
}

@media screen and (min-width: 1200px) {
  .interactive-enabled
    .interactive-holder.step-slider-tray.step-removebg {
    max-width: 100%;
    max-height: 560px;
    object-fit: fill;
  }

  .interactive-enabled .step-slider-tray .selector-tray {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    bottom: 40px;
    padding: 8px 8px 8px 12px;
    gap: 16px;
    border-radius: 9px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.32);
    box-sizing: content-box;
    width: auto;
  }

  [dir='rtl'] .interactive-enabled .step-slider-tray .selector-tray {
    /* left: auto;
    right: 90%; */
  }

  .interactive-enabled .step-slider-tray .selector-tray .tray-items {
    gap: 12px;
  }

  .interactive-enabled .step-slider-tray .selector-tray .tray-title {
    font-size: var(--type-body-l-size);
    line-height: var(--type-body-l-lh);
  }

  .interactive-enabled.selector-vertical
    .step-slider-tray
    .selector-tray
    .tray-items,
  .interactive-enabled
    .step-slider-tray
    .selector-tray
    .tray-items.vertical {
    flex-direction: column;
  }

  .interactive-enabled
    .step-slider-tray
    .selector-tray
    .tray-items
    a.tray-thumbnail-img {
    width: 80px;
    height: 120px;
  }

  .interactive-enabled
    .step-slider-tray
    .selector-tray
    .tray-items
    a.tray-thumbnail-img
    .tray-thumbnail-outline {
    height: calc(100% - 12px);
    width: calc(100% - 12px);
    border: 6px solid var(--prompt-highlight-color);
  }
}

@media screen and (min-width: 1200px) {
  .marquee.split.interactive-enabled .asset img {
    /* max-height: 560px; */
  }

  .interactive-enabled.row-reversed .step-slider-tray .selector-tray {
    left: auto;
    right: 56%;
  }

  [dir='rtl'] .interactive-enabled.row-reversed .step-slider-tray .selector-tray {
    right: auto;
    left: 56%;
  }
}

@media screen and (min-width: 600px) {

  .interactive-enabled .step-slider-tray .layer .gray-button.start-over-button.upload-button {
    z-index: 4;
    cursor: pointer;
    min-width: 100px;
    max-width: 200px;
  }

  .interactive-enabled .step-slider-tray .upload-button label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .interactive-enabled .step-slider-tray .upload-button label span:first-of-type {
    width: 70px;
    min-width: 70px;
    cursor: pointer;
  }

  .interactive-enabled .step-slider-tray .upload-button label span:first-of-type {
    /* width: 10px; */
    min-width: 50px;
    display: block;
    cursor: pointer;
  }

  .interactive-enabled .step-slider-tray .upload-button input {
    opacity: 0;
    width: auto;
    cursor: pointer;
  }

  .interactive-enabled .step-slider-tray .upload-button svg {
    transform: rotate(0);
    cursor: pointer;
  }

  .interactive-enabled .step-slider-tray .upload-button.processing svg {
    transform: rotate(90deg);
  }

  @keyframes animationKeyFrame {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes animationReturnKeyFrame {
    0% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  .interactive-holder {
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(135deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(135deg, transparent 75%, #ccc 75%);
    background-size: 25px 25px;
    background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px;
    border-radius: 16px;
  }

  .interactive-enabled .step-slider-tray .tray-items svg {
    top: 5px;
    height: 30px;
    width: 30px;
  }

  .interactive-enabled .step-slider-tray .tray-items .product-icon {
    margin-top: 7px;
  }

  .interactive-enabled .step-slider-tray .tray-items .product-icon svg {
    height: 40px;
    width: 40px;
  }

  .interactive-enabled .step-slider-tray .tray-items .gray-button {
    font-size: 18px;
    line-height: 21px;
    border: 1px solid #ccc;
    box-shadow: none;
  }
}

@media (min-width: 600px) and (max-width: 1199px) {

  .interactive-enabled .step-slider-tray .selector-tray {
    padding-top: 8px;
    border-radius: 8px;
    width: auto;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }

  .interactive-enabled .step-slider-tray .tray-items .gray-button {
    font-size: 16px;
    line-height: 18px;
    border: 1px solid #ccc;
    box-shadow: none;
  }

  .interactive-enabled .step-slider-tray .layer .gray-button.start-over-button {
    padding: 8px;
  }

  .interactive-enabled .step-slider-tray .layer .gray-button.start-over-button.upload-button { 
    padding: 8px;
    /* max-width: 150px; */
  }
}

@media screen and (max-width: 600px) {
  .interactive-enabled .step-slider-tray .selector-tray {
    padding-top: 8px;
    border-radius: 8px;
    width: auto;
  }

  .interactive-enabled .step-slider-tray .tray-items .gray-button {
    font-size: 16px;
    line-height: 18px;
    border: 1px solid #ccc;
    box-shadow: none;
  }

  .interactive-enabled .step-slider-tray .layer .gray-button.start-over-button {
    padding: 5px;
  }

  .interactive-enabled .step-slider-tray .layer .gray-button.start-over-button.upload-button { 
    padding: 5px;
    /* max-width: 142px; */
  }
}
