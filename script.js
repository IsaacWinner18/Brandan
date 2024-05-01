function openNav() {
    document.querySelector("#myNav").style.width = "50%";
}

function closeNav() {
    document.querySelector("#myNav").style.width = "0%";
}

var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }


const arrival = document.querySelector(".arrival");
const trending = document.querySelector(".trending");
const treend = document.querySelector("#treend");
const arrive = document.querySelector("#arrive");

trending.addEventListener("click", () => {
treend.style.display = "flex";
arrive.style.display = "none";
  if(trending.style.backgroundColor = "white") {
    trending.style.backgroundColor = "black";
    trending.style.color = 'white';
    arrival.style.backgroundColor = 'white'
    arrival.style.color = 'black'
  }
})

arrival.addEventListener("click", () => {
treend.style.display = "none";
arrive.style.display = "flex";
  if(arrival.style.backgroundColor = "white") {
    trending.style.backgroundColor = "white";
    trending.style.color = 'black';
    arrival.style.backgroundColor = 'black'
    arrival.style.color = 'white'
  }
})



