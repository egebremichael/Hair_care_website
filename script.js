let btnShow = document.querySelector('button');
let input = document.querySelector('input');

btnShow.addEventListener('click', () => {
    output.innerText = input.value;
});

input.addEventListener('keyup', () => {
    if(input.value.length > 6) btnShow.disabled = true
    else btnShow.disabled = false;
});

let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  e.addEventListener('click', (x) => {
    progress(x.target.id);
  });
});

function progress(stepNum) {
  let p = stepNum * 30;
  document.getElementsByClassName('percent')[0].style.width = `${p}%`;
  steps.forEach((e) => {
    if (e.id === stepNum) {
      e.classList.add('selected');
      e.classList.remove('completed');
    }
    if (e.id < stepNum) {
      e.classList.add('completed');
    }
    if (e.id > stepNum) {
      e.classList.remove('selected', 'completed');
    }
  });
}

$('#next').click(function () {
    var $next = $('.progress ul li.current').removeClass('current').addClass('complete').next('li');
    if ($next.length) {
        $next.removeClass('complete').addClass('current');
        //console.log('Prev');
    } else {
        $(".progress ul li:first").removeClass('complete').addClass('current');
        if (".progress ul li:last") {
          $('.progress ul li').removeClass('current').removeClass('complete').removeAttr('class');
          $(".progress ul li:first").addClass('current');
        }
        //console.log('Next');
    }
});
$('#prev').click(function () {
    var $prev = $('.progress ul li.current').removeClass('current').removeClass('complete').removeAttr('class').prev('li');
    if ($prev.length) {
        $prev.removeClass('complete').addClass('current');
        //console.log('Prev');
    } else {
        $(".progress ul li:first").removeClass('complete').addClass('current');
        $(".progress ul li:last").removeClass('current').removeClass('complete').removeAttr('class');
        //console.log('Prev');
    }
});

if (value == "2a") {
    document.getElementById('result').innerHTML = num + ' is a Prime number';
    var imageshown = "OptimusPrime.gif"
}
