

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

ready( () => {
    document.getElementById('showPicture').addEventListener('click', () => {
        document.getElementById('thisisgit').setAttribute('hidden', false);
    });
});