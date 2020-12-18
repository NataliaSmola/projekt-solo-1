/* global Chart */

function toggleMenu(visible) {
  document.querySelector('.sidebar-menu').classList.toggle('show', visible);
  document.querySelector('#top_nav').classList.toggle('show', visible)
  console.log('test');
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {

    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
    options: {
        responsive: true,
        //maintainAspectRatio: false.
        legend: {
            display: false,
        }
    }

});


(function(){
          function onTabClick(event){
            var actives = document.querySelectorAll('.active');

            // deactivate existing active tab and panel
            for (var i=0; i < actives.length; i++){
              actives[i].className = actives[i].className.replace('active', '');
            }

            // activate new tab and panel
            event.target.parentElement.className += ' active';
            document.getElementById(event.target.href.split('#')[1]).className += ' active';
          }

          var el = document.getElementById('nav-tab');

          el.addEventListener('click', onTabClick, false);
        })();
