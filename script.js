// let dataArr = [];
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => buildChart(data));

// const months = document.getElementById("months");

function buildChart(data) {
  if (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let el = document.getElementsByClassName("month")[i];
      el.innerText = data[i].day;
      let toolEl = document.getElementsByClassName("tooltiptext")[i];
      toolEl.innerText = "$" + data[i].amount;
      let bar = document.getElementsByClassName("bar")[i];
      bar.style.height = data[i].amount + "%";
    }
  }
}
