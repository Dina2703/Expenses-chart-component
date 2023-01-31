// let dataArr = [];
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => buildChart(data));

// const months = document.getElementById("months");

function buildChart(data) {
  if (data) {
    const max = Math.max(...data.map((each) => each.amount));
    console.log(max);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let el = document.getElementsByClassName("month")[i];
      el.innerText = data[i].day;
      let toolEl = document.getElementsByClassName("tooltiptext")[i];
      toolEl.innerText = "$" + data[i].amount;
      let bar = document.getElementsByClassName("bar")[i];
      bar.style.height = data[i].amount + "%";
      if (data[i].amount === max) {
        bar.style.backgroundColor = "hsl(186, 34%, 60%)";
      }
    }
  }
}
