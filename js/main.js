const MarkWeight = {
  Minor: 0,
  Major: 1,
  Default: 2,
};
const FaderCurve = {};
const faderTool = () => {
  const b = Math.sqrt(5) + 1;
  const a = 90 / Math.log10(b + 1);
  const c = -80;

  FaderCurve.valueToPosition = (dB) => {
    let pos = 1 - (Math.pow(10, (dB - c) / a) - 1) / b;
    if (pos > 1) pos = 1;
    else if (pos < 0) pos = 0;
    return pos;
  };

  FaderCurve.positionToValue = (pos) => {
    if (pos > 1) pos = 1;
    else if (pos < 0) pos = 0;
    return a * Math.log10(b * pos + 1) + c;
  };

  FaderCurve.scale = [
    { value: 10, weight: MarkWeight.Major, label: "10" },
    { value: 8, weight: MarkWeight.Minor },
    { value: 6, weight: MarkWeight.Minor },
    { value: 4, weight: MarkWeight.Minor },
    { value: 2, weight: MarkWeight.Minor },
    { value: 0, weight: MarkWeight.Default, label: "0" },
    { value: -2, weight: MarkWeight.Minor },
    { value: -4, weight: MarkWeight.Minor },
    { value: -6, weight: MarkWeight.Minor },
    { value: -8, weight: MarkWeight.Minor },
    { value: -10, weight: MarkWeight.Major, label: "-10" },
    { value: -20, weight: MarkWeight.Major, label: "-20" },
    { value: -30, weight: MarkWeight.Major, label: "-30" },
    { value: -40, weight: MarkWeight.Major, label: "-40" },
    { value: -50, weight: MarkWeight.Major, label: "-50" },
    { value: -60, weight: MarkWeight.Major, label: "-60" },
    { value: -70, weight: MarkWeight.Major, label: "-70" },
    { value: -80, weight: MarkWeight.Major, label: "off" },
  ];
};

faderTool();

const clamp = (value, lowFrom, highFrom, lowTo, highTo) => {
  return lowTo + ((highTo - lowTo) * (value - lowFrom)) / (highFrom - lowFrom);
};

//slider logic
const range = document.getElementsByClassName("input-range")[0],
  value = document.getElementsByClassName("range-value")[0],
  rightSlider = document.getElementById("s");

const slider = document.getElementById("slider"),
  fill = document.getElementById("fill"),
  rgb1 = [255, 229, 59],
  rgb2 = [255, 37, 37];

const setupSlider = () => {
  let min = slider.getAttribute("min"),
    max = slider.getAttribute("max"),
    value = slider.value,
    percent = ((value - min) / (max - min)) * 100;

  fill.style.height = percent + "%";
};

if (slider) {
  slider.addEventListener("input", (_ev) => {
    setupSlider();
  });
}

setupSlider();

// second slider

addEventListener(
  "input",
  (e) => {
    trackFill(e.target);
  },
  false
);

const trackFill = (target) => {
  const _t = target,
    _p = _t.parentNode;
  console.log(_t.value);
  console.info(FaderCurve.positionToValue(_t.value));
  _p.style.setProperty(`--val`, +Math.round(clamp(_t.value, 0, 1, -80, 10)));
  _p.style.setProperty(
    `--display`,
    +Math.round(FaderCurve.positionToValue(_t.value))
  );
};
