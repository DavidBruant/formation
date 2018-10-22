function track(event) {
  console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
}

export default function() {
  const trackingButton = document.createElement('button');

  let isTracking = false;

  trackingButton.addEventListener('click', () => {
    if (isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);
  });

  return trackingButton;
}
