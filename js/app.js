document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();

  tl.fromTo('.bg-loader', 2,
  {width: '100%'},
  {width: '0%', delay: 5, ease: Expo.easeInOut})
})