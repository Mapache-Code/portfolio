window.onload = () => {
  const width = window.innerWidth;
  if (width <= "426") {
    const projects = document.querySelectorAll(".noShow");
    projects.forEach((p) => {
      p.classList.remove("active");
      p.classList.remove("noShow");
    });
  }
};

function previous() {
  const projects = document.querySelectorAll(".Project");
  let position;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("active")) {
      position = i;
    }
  }

  projects[position].classList.remove("active");
  projects[position].classList.add("noShow");

  if (position == 0) {
    projects[projects.length - 1].classList.add("active");
    projects[projects.length - 1].classList.remove("noShow");
  } else {
    projects[position - 1].classList.add("active");
    projects[position - 1].classList.remove("noShow");
  }
}

function next() {
  const projects = document.querySelectorAll(".Project");
  let position;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("active")) {
      position = i;
    }
  }

  projects[position].classList.remove("active");
  projects[position].classList.add("noShow");

  if (position >= projects.length - 1) {
    projects[0].classList.add("active");
    projects[0].classList.remove("noShow");
  } else {
    projects[position + 1].classList.add("active");
    projects[position + 1].classList.remove("noShow");
  }
}
