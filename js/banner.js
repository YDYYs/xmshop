const banimg = document.querySelector(".banner-img");
const dots = document.querySelector(".banner-dots");
const list = ["../img/hs5Pro.jpg", "../img/banner.jpeg", "../img/mix3.jpeg"];
var list1 = [""];
let activeindex = 1;
let isplaying = false;
// 循环生成图片元素
for (let i = 0; i < list.length; i++) {
  let newimg = document.createElement("img");
  let dot = document.createElement("span");
  newimg.src = list[i];
  if (i == activeindex) {
    newimg.className = "banner-bigimg active";
    dot.className = "fl banner-dots-selected";
  } else {
    newimg.className = "banner-bigimg";
    dot.className = "fl";
  }
  banimg.appendChild(newimg);
  dots.appendChild(dot);
  // 生成底下指示
}

// 图片切换函数
function changeimg() {
  isplaying = true;
  const activeimg = document.querySelector(".active");
  const dotsact = document.querySelector(".banner-dots-selected");
  activeimg.className = "banner-bigimg";
  dotsact.className = "fl";
  dotslist[activeindex].className = "fl banner-dots-selected";
  imglist[activeindex].className = "banner-bigimg active";
  let imtime = setTimeout(() => {
    isplaying = false;
  }, 1000);
}

const imglist = document.querySelectorAll(".banner-bigimg");
const dotslist = document.querySelectorAll(".banner-dots span");
// 循环切换图片
function timer() {
  // 第一次加载的时候是第一张图片，执行到这加载第二张开始
  ++activeindex;
  if (activeindex == imglist.length) {
    activeindex = 0;
  }
  changeimg();
}
let timeid = setInterval(timer, 5000);
// 鼠标移入暂停
banimg.addEventListener("mouseover", () => {
  clearInterval(timeid);
  //   console.log("停止");
});
// 移出开始
banimg.addEventListener("mouseout", function () {
  timeid = setInterval(timer, 5000);
  //   console.log("开始");
});

const lefti = document.querySelector(".i-left");
const righti = document.querySelector(".i-right");
// 左箭头
lefti.addEventListener("click", () => {
  console.log(isplaying);
  if (isplaying) {
    return;
  } else {
    if (activeindex == 0) {
      activeindex = list.length - 1;
    } else {
      --activeindex;
    }
    changeimg();
  }
});
// 右箭头
righti.addEventListener("click", () => {
  console.log(isplaying);
  if (isplaying) {
    return;
  } else {
    if (activeindex == list.length - 1) {
      activeindex = 0;
    } else {
      ++activeindex;
    }
    changeimg();
  }
});
