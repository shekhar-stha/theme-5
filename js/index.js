
AOS.init();


$('.commercial-residential-row').slick({
  dots: true,
  infinite: true,
  loop: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right right-arrow"></i>'
});



$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  loop: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right right-arrow"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


window.addEventListener('load', function () {
  if (window.innerWidth > 992) {
    const sectionPairs = document.querySelectorAll('.about-us-flex');

    sectionPairs.forEach(pair => {
      const imgSection = pair.querySelector('.img-div');
      const infoSection = pair.querySelector('.info-div');

      const infoHeight = infoSection.clientHeight;
      imgSection.style.height = `${infoHeight}px`;
    });
  }
}); 
let showAll = true;

function toggleReviews() {
    showAll = !showAll;

    const reviews = document.querySelectorAll('.review');
    const showMoreBtn = document.querySelector('.show-more-btn');

    reviews.forEach((review, index) => {
        if (showAll || index < 10) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });

    if (showAll) {
        showMoreBtn.textContent = 'Show Less';
    } else {
        showMoreBtn.textContent = 'Show All';
    }
}


$(document).ready(function () {
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });
});

document.addEventListener("DOMContentLoaded", function () {

  var paragraphs = document.querySelectorAll(".testimonial-slider .data");
  paragraphs.forEach(function (paragraph) {
    var text = paragraph.textContent;
    if (text.length > 320) {
      var truncatedText = text.slice(0, 320);
      paragraph.textContent = (truncatedText + "..");
      var readMoreLink = document.createElement("a");
      readMoreLink.href = "/reviews.html";
      readMoreLink.textContent = " Read More";
      readMoreLink.classList.add("fw-600")
      paragraph.appendChild(readMoreLink);
    }
  });

  function setEqualHeight(columns) {
    if (window.innerWidth > 992) {
      var tallestColumn = 0;
      columns.forEach(function (column) {
        column.style.height = "auto";
        var columnHeight = column.offsetHeight;
        if (columnHeight > tallestColumn) {
          tallestColumn = columnHeight;
        }
      });
      columns.forEach(function (column) {
        column.style.height = tallestColumn + "px";
      });
    }
  }

  var columns = document.querySelectorAll(".testimonial-slider .column");
  setEqualHeight(columns);

  window.addEventListener("resize", function () {
    setEqualHeight(columns);
  });

  toggleReviews();
});

