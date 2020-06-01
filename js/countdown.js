const now = moment();
let les = moment("july 6", "MMM DD");
if ( les.isBefore(now, 'days') ) {
  les = les.add(1, 'year');
}
let diff = les.diff(now, 'days');
let counter = document.getElementById('countdown');
counter.innerHTML = diff;
