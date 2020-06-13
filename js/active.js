// changing elements font size.
function changeFontSize(){
    for(let i=0; i<=3; i++){
      if(i === 0){
        document.querySelector("#global-card-content > span").style.fontSize="xx-large";
      } else if(i === 1){
        document.querySelector("#global-card-content2 > span").style.fontSize="xx-large"
      } else if(i === 2){
        document.querySelector("#global-card-content3 > span").style.fontSize="xx-large"
      } else if(i === 3){
        document.querySelector("#global-card-content4 > span").style.fontSize="xx-large"
      }
    }
};
changeFontSize();





// ==========>  getting and inserting the nigerian covid-19 data..

$.getJSON("https://covidnigeria.herokuapp.com/api", function(data){
    //console.log(data);
    let confirmedCases = data.data.totalConfirmedCases;
    let activeCases = data.data.totalActiveCases;
    let dischargedCases = data.data.discharged;
    let deathCases = data.data.death;

    document.querySelector("#card-content > span").textContent = confirmedCases;
    document.querySelector("#card-content2 > span").textContent = activeCases;
    document.querySelector("#card-content3 > span").textContent = dischargedCases;
    document.querySelector("#card-content4 > span").textContent = deathCases;
});





// ==========>  getting and inserting the nigerian covid-19 data.
$.getJSON("https://api.thevirustracker.com/free-api?global=stats", function(data){
  let globalConfirmedCases = data.results[0].total_cases;
  let globalActiveCases = data.results[0].total_active_cases;
  let globalDischargedCases = data.results[0].total_recovered;
  let globalDeathCases = data.results[0].total_deaths;

  document.querySelector("#global-card-content > span").textContent = globalConfirmedCases;
  document.querySelector("#global-card-content2 > span").textContent = globalActiveCases;
  document.querySelector("#global-card-content3 > span").textContent = globalDischargedCases;
  document.querySelector("#global-card-content4 > span").textContent = globalDeathCases;

});

$('document').ready(function(){

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
})

