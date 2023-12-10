let currentSet1 = 0;
let currentSet2 = 0;

function changeSlide(sliderId, direction) {
  const currentSet = (sliderId === 'slider1') ? currentSet1 : currentSet2;
  const newSet = (currentSet + direction + 3) % 3; // Ensure positive result

  if (sliderId === 'slider1') {
    currentSet1 = newSet;
    updateSlider('slider1', currentSet1);
  } else if (sliderId === 'slider2') {
    currentSet2 = newSet;
    updateSlider('slider2', currentSet2);
  }
}

function updateSlider(sliderId, currentSet) {
  const cardSlider = document.getElementById(sliderId);
  const offset = -currentSet * 300; // 300px is the width of each set of cards

  cardSlider.style.transform = `translateX(${offset}px)`;
}

