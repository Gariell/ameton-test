
let elements = document.querySelectorAll(".information-item");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    
    let indicator = this.querySelector('.information-item__indicator');

    if (this.classList.contains('active')){
      this.classList.remove('active');
    }else {
      this.classList.add('active');
    }
  };
}