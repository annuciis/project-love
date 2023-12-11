function calculate() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  let loveScore = Math.random();
  loveScore = loveScore * 101;
  loveScore = Math.floor(loveScore);

  let loveScoreText =
    "Your love score is: <strong>" + loveScore + "%</strong> ";

  if (loveScore == 100) {
    document.querySelector(".score-text").innerHTML =
      loveScoreText + "I think you may have the strongest love ever!";
  } else if (loveScore < 100 && loveScore >= 50) {
    document.querySelector(".score-text").innerHTML =
      loveScoreText + "<br> We think that you will have good future together!";
  } else {
    document.querySelector(".score-text").innerHTML =
      loveScoreText +
      "<br> Maybe think more if you really want to be together with this person, you probably can find better match!";
  }

  document.querySelector(".score-text").style.visibility = "visible";
}
