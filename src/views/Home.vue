<template>
  <div class="main">
    <div class="title">
      <h1 id="title">
        <p>
          <span id="n">A</span>
          <span id="e">u</span>
          <span id="o">g</span>
          <span id="n2">o</span>
        </p>
      </h1>
      <div class="typewriter">
        <h1>他们很优秀，感谢开源。必须系统的去学习为了将来，要强大起来。</h1>
      </div>
    </div>
    <div class="content">
      <table
        id="bar-example-24"
        class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes"
      >
        <caption>
          Bar Example #24
        </caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Progress 1</th>
            <th scope="col">Progress 2</th>
            <th scope="col">Progress 3</th>
            <th scope="col">Progress 4</th>
            <th scope="col">Progress 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2000</th>
            <td style="--size: 0.2"></td>
            <td style="--size: 0.5"></td>
            <td style="--size: 1"></td>
            <td style="--size: 0.7"></td>
            <td style="--size: 0.4"></td>
          </tr>
          <tr>
            <th scope="row">2020</th>
            <td style="--size: 0.2"></td>
            <td style="--size: 0.4"></td>
            <td style="--size: 0.6"></td>
            <td style="--size: 0.8"></td>
            <td style="--size: 1"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <footer></footer>
    </div>
  </div>
</template>



<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap");
@import url("https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css");
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
#title {
  display: inline-block;
  text-align: center;
  line-height: 50px;
  height: 70px;
  border-radius: 15px;
}
.title>h1{
    width: 140px;
}
.title>p {
  display: block;
  height: 70px;
  border-radius: 15px;
}
h1 {
  font-size: 50px;
}
p {
  color: #fff;
  position: relative;
  -webkit-text-stroke: 3px #9a9acc;
}
p::before {
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
  mix-blend-mode: multiply;
    height: 70px;
}
p:hover span {
  animation: flicker 1s linear forwards;
}
p:hover #e {
  animation-delay: 0.2s;
}
p:hover #o {
  animation-delay: 0.5s;
}
p:hover #n2 {
  animation-delay: 0.6s;
}

@keyframes flicker {
  0% {
    color: #333;
  }
  5%,
  15%,
  25%,
  30%,
  100% {
    color: #ececec;
    text-shadow: 0px 0px 5px var(--color), 0px 0px 10px var(--color),
      0px 0px 20px var(--color), 0px 0px 50px var(--color);
  }
  10%,
  20% {
    color: #333;
    text-shadow: none;
  }
}

.main {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background-color: #ececec;
}

#bar-example-24 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
/* DEMO-SPECIFIC STYLES */
.typewriter>h1 {
    font-size: 18px;
  color: #999;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>