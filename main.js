var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
}

function openNav() {
  document.getElementById('myNav').style.width = '65%';
  document.getElementById('overlay').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('overlay').style.display = 'none';
}
