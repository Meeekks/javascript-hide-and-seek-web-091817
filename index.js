function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // return document.querySelector('#nested .target');
  return document.getElementById('nested').querySelector(".target");
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranked.length; i++) {
	  ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}

function deepestChild() {
  let nest = document.querySelectorAll("#grand-node div div div div")
  for (let i = 0; i < nest.length; i++) {
    return nest[i];
  }
}
