window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementById('myImg').className = 'slideUp'
  }
}
//-------------------------------------------
function btn_closed() {
  var close = document.getElementById('model-text')
  close.style.display = 'none'
}
function btn_search() {
  var search = document.getElementById('headers')
  search.style.display = 'none'
}
function close_btn_search() {
  var search = document.getElementById('headers')
  var cc = document.getElementById('11')
  if ((search.style.display = 'none')) {
    cc.style.display = 'none'
  }
}
function search() {
  alert('Không tìm thấy sản phẩm bạn cần tìm!')
}
// -----------------responsive
// function btn_mobile() {
//   var header = document.getElementById('headers')
//   var mobile = document.getElementById('mobile-menu')
//   var menu = document.getElementsByClassName('menu')
//   mobile.onclick = function () {
//     var isClosed = header.clientHeight === 80

//     if (isClosed) {
//       header.style.height = 'auto'
//     } else {
//       header.style.height = '80px'
//     }
//   }
// }
