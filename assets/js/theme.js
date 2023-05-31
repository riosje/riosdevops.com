const STORAGE_KEY = "theme";
const THEME_ATTR  = "data-theme";
const QUERY_KEY   = "(prefers-color-scheme: dark)";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

initTheme();

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    // Storage theme
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
    // system theme
    setTheme(themes.DARK);
  } else {
    // Default theme
    setTheme(themes.LIGHT);
  }

  // Watch for system theme changes
  window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
    const newTheme = e.matches ? themes.DARK : themes.LIGHT;
    setTheme(newTheme);
  });
}

function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);
}



// this is patch is for the timeline component to render a different component based on screen size
const timelineresponsive = function timelineresponsive() {
  var componentTimeline = document.getElementById('timeline');
  var componentTimelineResponsive = document.getElementById('timelineresponsive');
  var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (clientWidth < 896) {
    // Modify the visibility of the placeholder element based on the condition for small screens
    componentTimeline.style.display = "none";
    componentTimelineResponsive.style.display = "block";
  } else { 
    // Modify the visibility of the placeholder element based on the condition for large screens
    componentTimeline.style.display = "block";
    componentTimelineResponsive.style.display = "none";
  }
}

// event listeners for the timeline component
window.addEventListener("resize", timelineresponsive);
document.addEventListener('DOMContentLoaded', timelineresponsive);

