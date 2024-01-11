const menuBtn = document.querySelector(".menuBtn");
const menu_line_1 = document.querySelector(".menu_line_1");
const menu_line_2 = document.querySelector(".menu_line_2");
const menu_line_3 = document.querySelector(".menu_line_3");
const sidebar = document.querySelector(".sidebar");
const class10Box = document.querySelector("#class10");
const class12Box = document.querySelector("#class12");

let toggle = false;

menuBtn.addEventListener("click", () => {
  sidebar.style.width = toggle ? "0%" : "100%";
  toggle = !toggle;
  menu_line_2.style.background = toggle ? "none" : "#fff";
  menu_line_1.style.transform = toggle ? "rotate(45deg)" : "none";
  menu_line_1.style.position = toggle ? "absolute" : "relative";
  menu_line_3.style.transform = toggle ? "rotate(-45deg)" : "none";
  menu_line_3.style.position = toggle ? "absolute" : "relative";
});

const class10Data = [
  {
    name: "English Videos",
    videos: [
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
    ],
  },
  {
    name: "Hindi Videos",
    videos: [
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
    ],
  },
  {
    name: "Odia Videos",
    videos: [
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
    ],
  },
];

class10Data.forEach((data, index) => {
  if (window.location.href.includes("class10")) {
    class10Box.innerHTML += `
  <div class="videoConatiner">
  <h2>${data.name} Videos</h2>
  <div class="line"></div>
  <div class="card-container" id="c-${index}">
  </div>
  </div>
  `;
  }
});
class10Data.forEach((data, index) => {
  if (window.location.href.includes("class10"))
    data.videos.forEach((item, i) => {
      const ele = document.querySelector("#c-" + index);
      console.log(ele);
      ele.innerHTML += `
    <div class="cardBox">
    <iframe
      width="560"
      height="315"
      src="${item}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>`;
    });
});

// class 12

const class12Data = [
  {
    name: "English Videos",
    videos: [
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
    ],
  },
  {
    name: "Hindi Videos",
    videos: [
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
    ],
  },
  {
    name: "Odia Videos",
    videos: [
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
      "https://www.youtube-nocookie.com/embed/aIhTc8HpjQc?si=Pm9_uZnNk3x5KMZS",
    ],
  },
];

class12Data.forEach((data, index) => {
  if (window.location.href.includes("class12"))
    class12Box.innerHTML += `
  <div class="videoConatiner">
  <h2>${data.name} Videos</h2>
  <div class="line"></div>
  <div class="card-container" id="c-${index}">
  </div>
  </div>
  `;
});
class12Data.forEach((data, index) => {
  if (window.location.href.includes("class12"))
    data.videos.forEach((item, i) => {
      const ele = document.querySelector("#c-" + index);
      console.log(ele);
      ele.innerHTML += `
    <div class="cardBox">
    <iframe
      width="560"
      height="315"
      src="${item}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>`;
    });
});

const showAlert = (text) => {
  alert(text);
  window.location.href = "/";
};
