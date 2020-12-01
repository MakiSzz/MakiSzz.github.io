let p = document.getElementById("footnote");
let today = new Date().toISOString().slice(0, 10);
p.innerHTML = `Website maintained by Zijian Zhao. Last Updated: ${today}.`;
