
const data = {
  "tawang": {
    score: 82, cls:"Very High", rainfall:"118 mm", road:"High", alert:"Active",
    title:"Very High Landslide Risk",
    text:"Heavy rainfall combined with steep terrain and historical landslide density is driving the current risk.",
    action:"Inspect vulnerable slope and prepare traffic restriction.",
    d1:"High", d2:"High", d3:"Medium", status:"VERY HIGH RISK",
    trend:[24,31,38,44,56,68,82]
  },
  "east-khasi": {
    score: 71, cls:"High", rainfall:"96 mm", road:"High", alert:"Active",
    title:"High Landslide Risk",
    text:"Persistent rainfall and road-cut slopes have increased risk along exposed corridors.",
    action:"Prioritize field inspection and keep response teams ready.",
    d1:"High", d2:"Medium", d3:"High", status:"HIGH RISK",
    trend:[28,33,35,47,52,61,71]
  },
  "aizawl": {
    score: 58, cls:"High", rainfall:"74 mm", road:"Medium", alert:"Watch",
    title:"Elevated Landslide Risk",
    text:"Recent rainfall and dense slope modification are contributing to a rising local risk profile.",
    action:"Monitor rainfall trend and inspect priority road-cut locations.",
    d1:"Medium", d2:"High", d3:"Medium", status:"HIGH RISK",
    trend:[22,26,31,36,43,49,58]
  },
  "sikkim": {
    score: 43, cls:"Moderate", rainfall:"52 mm", road:"Medium", alert:"Watch",
    title:"Moderate Landslide Risk",
    text:"Conditions warrant attention, but current trigger intensity remains below critical levels.",
    action:"Continue monitoring forecast and vulnerable corridors.",
    d1:"Medium", d2:"Medium", d3:"Low", status:"MODERATE RISK",
    trend:[18,21,24,29,32,37,43]
  }
};

const select = document.getElementById("districtSelect");
const replay = document.getElementById("replayBtn");

function render(key){
  const d = data[key];
  document.getElementById("riskScore").textContent = d.score;
  document.getElementById("riskClass").textContent = d.cls;
  document.getElementById("rainfall").textContent = d.rainfall;
  document.getElementById("roadExposure").textContent = d.road;
  document.getElementById("alertStatus").textContent = d.alert;
  document.getElementById("alertTitle").textContent = d.title;
  document.getElementById("alertText").textContent = d.text;
  document.getElementById("actionText").textContent = d.action;
  document.getElementById("driver1").textContent = d.d1;
  document.getElementById("driver2").textContent = d.d2;
  document.getElementById("driver3").textContent = d.d3;
  document.getElementById("mapStatus").textContent = d.status;

  const bars = [...document.querySelectorAll("#trendBars i")];
  bars.forEach((b,i)=> b.style.height = d.trend[i] + "%");
}

select.addEventListener("change", e => render(e.target.value));

replay.addEventListener("click", () => {
  replay.textContent = "Replaying...";
  const bars = [...document.querySelectorAll("#trendBars i")];
  bars.forEach((b,i)=>{ b.style.height = "10%"; setTimeout(()=> b.style.height = data[select.value].trend[i] + "%", 160*i + 200); });
  setTimeout(()=> replay.textContent = "▶ Replay Rainfall Event", 1600);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", ()=>{
  const open = navLinks.style.display === "flex";
  navLinks.style.display = open ? "none" : "flex";
  if(!open){
    navLinks.style.position = "absolute";
    navLinks.style.top = "72px";
    navLinks.style.left = "12px";
    navLinks.style.right = "12px";
    navLinks.style.background = "#fff";
    navLinks.style.padding = "18px";
    navLinks.style.borderRadius = "12px";
    navLinks.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";
    navLinks.style.flexDirection = "column";
  }
});
