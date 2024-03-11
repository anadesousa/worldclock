function updateTime() {
  //Porto
  let portoElement = document.querySelector("#porto");
  let portoDateElement = portoElement.querySelector(".date");
  let portoTimeElement = portoElement.querySelector(".time");

  let portoCurrentTime = moment();

  portoDateElement.innerHTML = portoCurrentTime.format("MMMM, Do YYYY");
  portoTimeElement.innerHTML = portoCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");

  let barcelonaCurrentTime = moment().tz("Europe/Madrid");

  barcelonaDateElement.innerHTML = barcelonaCurrentTime.format("MMMM, Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");

  let singaporeCurrentTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeCurrentTime.format("MMMM, Do YYYY");
  singaporeTimeElement.innerHTML = singaporeCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
