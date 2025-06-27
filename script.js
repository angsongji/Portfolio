let isRunningFootstep = false;

// Ngăn scroll chuột (desktop)
if (
  window.location.pathname === "/" || 
  window.location.pathname === "/Portfolio/"
) {
  document.body.style.overflow = "hidden";

  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
      document.body.style.overflow = "hidden";

      if (isRunningFootstep) return;

      isRunningFootstep = true;

      startFootStep(); // Bắt đầu vẽ dấu chân

      // Kiểm tra mỗi 100ms cho đến khi isRunningFootstep = false
      const checkInterval = setInterval(() => {
        if (!isRunningFootstep) {
          document.body.style.overflowY = "auto"; // Bật scroll lại
          clearInterval(checkInterval);
        }
      }, 100);
    },
    { passive: false, once: true }
  );
}

// Ngăn scroll bằng touch (mobile)
// window.addEventListener(
//   "touchmove",
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );

function startFootStep() {
  const map = document.getElementById("map");
  const steps = [];
  const totalSteps = 3; // Hiển thị tối đa 3 dấu chân

  // Tạo đường đi từ giữa tới góc phải dưới
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const endX = 0;
  const endY = window.innerHeight - 50;

  const stepsCount = 10; // Tổng số bước đi
  const path = [];

  for (let i = 0; i < stepsCount; i++) {
    const x = centerX + ((endX - centerX) / stepsCount) * i;
    const y = centerY + ((endY - centerY) / stepsCount) * i;
    path.push({ x, y });
  }

  let index = 0;

  function addFootstep() {
    if (index >= path.length) {
      isRunningFootstep = false;
      return;
    }

    const step = document.createElement("div");
    step.className = "footstep";

    // SVG bạn đang dùng (giữ nguyên nội dung)
    step.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50" height="42" viewBox="0 0 301.000000 375.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,375.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M1710 3411 c0 -5 -18 -11 -40 -15 -22 -3 -40 -11 -40 -16 0 -6 -7 -10 -15 -10 -8 0 -15 -7 -15 -15 0 -8 -4 -15 -10 -15 -15 0 -50 -33 -50 -47 0 -7 -7 -13 -15 -13 -8 0 -15 -7 -15 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -11 -10 -25 0 -16 -6 -25 -15 -25 -11 0 -15 -12 -15 -44 0 -26 -6 -51 -15 -60 -21 -21 -21 -242 0 -270 8 -11 15 -39 15 -63 0 -24 4 -43 10 -43 5 0 13 -18 16 -40 4 -22 10 -40 14 -40 4 0 10 -18 14 -40 3 -22 11 -40 16 -40 6 0 10 -11 10 -25 0 -14 7 -28 15 -31 10 -4 15 -20 15 -45 0 -28 4 -39 15 -39 11 0 15 -11 15 -39 0 -22 5 -41 11 -43 6 -2 13 -26 16 -53 3 -28 9 -52 14 -55 4 -3 11 -53 15 -110 4 -58 12 -108 18 -112 6 -4 122 -8 259 -8 l247 0 0 30 c0 20 5 30 15 30 11 0 15 11 15 40 0 29 4 40 15 40 10 0 15 10 15 30 0 17 4 30 10 30 5 0 13 18 16 40 4 22 10 40 14 40 4 0 11 25 15 55 3 30 11 55 16 55 5 0 9 20 9 44 0 26 6 51 15 60 12 12 15 49 15 204 0 135 -3 191 -12 194 -6 2 -13 30 -16 61 -2 31 -8 57 -13 57 -5 0 -12 18 -15 40 -4 22 -10 40 -15 40 -5 0 -9 13 -9 29 0 16 -7 36 -15 45 -8 8 -15 24 -15 36 0 11 -7 23 -15 26 -8 4 -15 12 -15 20 0 8 -4 14 -10 14 -5 0 -12 11 -16 25 -3 14 -12 25 -20 25 -8 0 -14 4 -14 10 0 5 -11 12 -25 16 -14 3 -25 12 -25 20 0 8 -7 14 -15 14 -8 0 -15 4 -15 10 0 5 -18 13 -40 16 -22 4 -40 10 -40 15 0 5 -63 9 -140 9 -77 0 -140 -4 -140 -9z"/>
<path d="M713 2613 c-18 -2 -33 -8 -33 -13 0 -5 -13 -11 -30 -15 -16 -4 -30 -11 -30 -16 0 -5 -7 -9 -15 -9 -8 0 -15 -4 -15 -10 0 -5 -11 -12 -25 -16 -14 -3 -25 -12 -25 -20 0 -8 -4 -14 -9 -14 -5 0 -13 -10 -16 -22 -4 -11 -18 -31 -31 -43 -13 -12 -24 -32 -24 -44 0 -12 -7 -24 -15 -27 -10 -4 -15 -20 -15 -45 0 -28 -4 -39 -15 -39 -12 0 -15 -13 -15 -55 0 -42 -3 -55 -15 -55 -12 0 -15 -14 -15 -70 0 -40 -4 -70 -10 -70 -6 0 -10 -48 -10 -125 0 -69 4 -125 9 -125 5 0 11 -37 13 -82 2 -53 8 -83 16 -86 7 -2 12 -21 12 -44 0 -22 7 -46 15 -54 8 -9 15 -29 15 -45 0 -16 4 -29 10 -29 5 0 13 -18 16 -40 4 -22 10 -40 15 -40 5 0 9 -11 9 -25 0 -14 7 -28 15 -31 9 -4 15 -19 15 -40 0 -22 6 -37 15 -40 8 -4 15 -13 15 -21 0 -13 27 -14 208 -8 133 5 210 12 215 19 6 8 10 8 14 -1 6 -15 33 -17 33 -3 0 6 7 10 15 10 12 0 15 16 15 81 0 58 4 85 15 95 9 9 15 34 15 59 0 24 5 45 11 47 6 2 14 27 17 56 2 29 8 52 12 52 5 0 11 14 15 30 4 17 11 30 16 30 5 0 9 13 9 29 0 16 7 36 15 45 8 8 15 24 15 36 0 12 7 28 15 36 8 9 15 28 15 44 0 16 5 30 10 32 6 2 13 21 17 43 3 22 11 43 16 46 14 10 14 348 0 357 -5 4 -13 24 -17 45 -4 20 -11 37 -15 37 -5 0 -12 11 -15 25 -4 14 -11 25 -16 25 -6 0 -10 7 -10 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 -5 15 -11 15 -6 0 -17 7 -25 15 -9 8 -26 15 -39 15 -13 0 -25 5 -27 12 -4 12 -240 21 -305 11z"/>
<path d="M1680 1834 c0 -14 -7 -32 -15 -40 -8 -9 -15 -29 -15 -45 0 -16 -4 -29 -9 -29 -5 0 -11 -23 -13 -52 -3 -29 -11 -54 -17 -56 -13 -4 -16 -252 -2 -252 5 0 12 -12 15 -26 7 -28 86 -114 105 -114 6 0 11 -7 11 -15 0 -9 9 -15 25 -15 14 0 25 -4 25 -9 0 -5 20 -12 45 -15 25 -4 45 -11 45 -17 0 -5 11 -9 25 -9 14 0 25 4 25 10 0 5 18 13 40 16 22 4 40 10 40 15 0 5 7 9 15 9 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 9 0 15 9 15 25 0 16 6 25 15 25 10 0 15 10 15 29 0 16 5 31 10 33 6 2 13 33 17 71 3 37 10 67 14 67 5 0 9 14 9 30 0 17 -4 30 -8 30 -5 0 -12 48 -16 108 -3 59 -11 109 -16 110 -6 2 -10 14 -10 26 0 21 -6 24 -67 29 -38 4 -101 7 -140 7 -42 0 -73 4 -73 10 0 6 -35 10 -85 10 -85 0 -85 0 -85 -26z"/>
<path d="M823 1053 c-51 -2 -93 -8 -93 -13 0 -6 -35 -10 -80 -10 l-80 0 0 -40 c0 -27 -5 -43 -15 -46 -22 -9 -22 -364 0 -364 10 0 15 -10 15 -30 0 -16 4 -30 9 -30 5 0 12 -11 15 -25 4 -14 11 -25 16 -25 6 0 10 -7 10 -15 0 -8 7 -15 15 -15 8 0 15 -5 15 -11 0 -13 20 -33 43 -42 9 -3 17 -11 17 -17 0 -6 36 -10 95 -10 52 0 95 4 95 9 0 5 14 12 30 16 17 4 30 11 30 16 0 5 7 9 15 9 8 0 15 6 15 14 0 8 11 17 25 20 16 4 25 13 25 25 0 10 7 21 15 25 8 3 15 12 15 20 0 8 6 16 13 19 17 6 17 319 0 325 -8 2 -13 20 -13 43 0 28 -4 39 -15 39 -11 0 -15 11 -15 39 0 25 -5 41 -15 45 -8 3 -15 12 -15 21 0 12 -11 15 -47 13 -27 -1 -90 -4 -140 -5z"/>
</g>
</svg>`; // giữ nguyên SVG bạn có

    // Tính góc xoay nếu có bước trước
    if (index > 0) {
      const prev = path[index - 1];
      const curr = path[index];

      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Radians → Degrees

      // Áp dụng xoay (xoay toàn bộ SVG trong .footstep)
      step.style.rotate = `${angle + 90}deg`;
    }

    step.style.left = `${path[index].x}px`;
    step.style.top = `${path[index].y}px`;
    map.appendChild(step);
    steps.push(step);

    // Chỉ giữ lại 3 dấu chân
    if (steps.length > totalSteps - 2) {
      const oldStep = steps.shift();
      oldStep.style.opacity = "0";
      setTimeout(() => oldStep.remove(), 500);
    }

    index++;
    setTimeout(addFootstep, 500);
  }
  addFootstep();
}
