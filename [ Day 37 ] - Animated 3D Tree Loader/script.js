document.addEventListener("DOMContentLoaded", function () {
  const treeContainer = document.getElementById("tree");
  const branchCount = 4; // Number of branches

  for (let i = 0; i < branchCount; i++) {
    const branch = document.createElement("div");
    branch.classList.add("branch");
    branch.style.setProperty("--x", i);

    for (let j = 0; j < 4; j++) {
      const span = document.createElement("span");
      span.style.setProperty("--i", j);
      branch.appendChild(span);
    }

    treeContainer.appendChild(branch);
  }

  const stem = document.createElement("div");
  stem.classList.add("stem");

  for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    span.style.setProperty("--i", i);
    stem.appendChild(span);
  }

  treeContainer.appendChild(stem);
});
