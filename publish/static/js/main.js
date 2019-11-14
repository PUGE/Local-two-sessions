
window.onscroll = function() {
  var a = document.documentElement.scrollTop || document.body.scrollTop
  if (a < (document.body.offsetWidth * 0.29)) {
    $('.float-title-bar')[0].style.display = 'none'
  } else {
    $('.float-title-bar')[0].style.display = 'block'
  }
}

$(function () {
  // 判断是否需要显示漂浮导航条
  var a = document.documentElement.scrollTop || document.body.scrollTop
  if (a < (document.body.offsetWidth * 0.29)) {
    $('.float-title-bar')[0].style.display = 'none'
  } else {
    $('.float-title-bar')[0].style.display = 'block'
  }

  

  // 主轮播图
  try {
    if ($('.main-box .swiper-container').length > 0) {
      var slideListLength = $('.main-box .swiper-wrapper .swiper-slide').length;
      $('.main-box .index')[0].innerText = '1/' + slideListLength; // 轮播图展示区域swiper
      var swiper = new Swiper($('.main-box .swiper-container')[0], {
        pagination: $('.main-box .pagination')[0],
        loop: true,
        autoplay: 3000,
        paginationClickable: true,
        onSlideChangeStart: function onSlideChangeStart(swiper) {
          var index = null;
          if (swiper.activeIndex <= slideListLength) index = swiper.activeIndex;else index = 1;
          $('.main-box .index')[0].innerText = index + '/' + slideListLength;
        }
      });
      setTimeout(function () {
        var switchList = $('.pagination .swiper-pagination-switch');
  
        for (var ind = 0; ind < switchList.length; ind++) {
          switchList[ind].style.width = 100 / slideListLength + '%';
        }
      }, 100);
      // 点击切换事件
      $(".main-box .previou").click(function() {
        swiper.swipePrev();
      })
      $(".main-box .next").click(function() {
        swiper.swipeNext();
      })
    }
  } catch (error) {}
  
  // 报告解读轮播图
  try {
    if ($('.unscramble .swiper-container').length > 0) {
      var slideListLength = $('.unscramble .swiper-wrapper .swiper-slide').length;
      $('.unscramble .index')[0].innerText = '1/' + slideListLength; // 轮播图展示区域swiper
      var swiper2 = new Swiper($('.unscramble .swiper-container')[0], {
        pagination: $('.unscramble .pagination')[0],
        loop: true,
        autoplay: 3000,
        paginationClickable: true,
        onSlideChangeStart: function onSlideChangeStart(swiper) {
          var index = null;
          if (swiper.activeIndex <= slideListLength) index = swiper.activeIndex;else index = 1;
          $('.unscramble .index')[0].innerText = index + '/' + slideListLength;
        }
      });
      setTimeout(function () {
        var switchList = $('.pagination .swiper-pagination-switch');
  
        for (var ind = 0; ind < switchList.length; ind++) {
          switchList[ind].style.width = 100 / slideListLength + '%';
        }
      }, 100);
      // 点击切换事件
      $(".unscramble .previou").click(function() {
        swiper2.swipePrev();
      })
      $(".unscramble .next").click(function() {
        swiper2.swipeNext();
      })
    }
  } catch (error) {}
  // 日历
  try {
    if ($('.calendar-box .data-list').length > 0) {
      var firstLi = $('.calendar-box .data-list li').first()
      firstLi.addClass('active')
      $('.calendar-box .data-list li').each(function(index, element) {
        if ($(element).find('.text')[0] && $(element).find('.text')[0].innerHTML) {

        } else {
          $(element).addClass('no-text')
        }
      })
      $('.calendar-box .text-box')[0].innerHTML = firstLi.find('.text')[0].innerHTML
      // 点击选中事件
      $('.calendar-box .data-list li').click(function() {
        $('.calendar-box .data-list li').removeClass("active")
        $(this).addClass('active')
        $('.calendar-box .text-box')[0].innerHTML = $(this).find('.text')[0].innerHTML
      })
    }
  } catch (error) {}

  try {
    if ($('.renwubaodao').length > 0) {
      $('.people-box ul').roundabout({
        easing: 'easeOutInCirc',
        duration: 600,
        minScale: 0.7,
        // autoplay: true,
        // autoplayDuration: 3000,
        // autoplayPauseOnHover: true,
        btnNext: ".people-right-button",
        btnPrev: ".people-left-button",
      });
    }
  } catch (error) {}
  // 精彩图片
  try {
    if ($('.picture-box').length > 0) {
      $('.picture-box ul').roundabout({
        easing: 'easeOutInCirc',
        // duration: 600,
        // autoplay: true,
        // autoplayDuration: 3000,
        // autoplayPauseOnHover: true,
        minScale: 0.2,
        period: 1,
        minOpacity: 0.9,
        btnNext: ".pic-left-button",
        btnPrev: ".pic-right-button"
      });
    }
  } catch (error) {}

  // 报道焦点轮播图
  try {
    if ($('.swiper-container-2').length > 0) {
      var swiper = new Swiper($('.swiper-container-2')[0], {
        loop: true,
        slidesPerView: 3,
        paginationClickable: true
      });
      // 点击切换事件
      $(".focus-left-button").click(function() {
        swiper.swipePrev();
      })
      $(".focus-right-button").click(function() {
        swiper.swipeNext();
      })
    }
  } catch (error) {}

  // 报道焦点轮播图
  
  try {
    if ($('.video-box .right').length > 0) {
      // 更换初始视频
      $('.video-box .swiper-wrapper .swiper-slide').first().addClass('is-active')
      $('.video-box .left')[0].innerHTML = $('.video-box .swiper-wrapper .swiper-slide .video')[0].innerHTML
      var swiper3 = new Swiper($('.swiper-container-3')[0], {
        // autoplay: 3000,
        mode: 'vertical',
        slidesPerView: 3,
        paginationClickable: true,
        onSlideTouch: function (e) {
          $('.swiper-container-3 .swiper-slide').removeClass("is-active")
          $(e.clickedSlide).addClass('is-active')
          e.swipeTo(e.clickedSlideIndex - 1)
          // 更换视频
          $('.video-box .left')[0].innerHTML = $(e.clickedSlide).find('.video')[0].innerHTML
        }
      });
      // 点击切换事件
      $(".fl.up").click(function() {
        swiper3.swipePrev();
      })
      $(".fl.down").click(function() {
        swiper3.swipeNext();
      })
    }
  } catch (error) {}

  // 自动轮播
  // 滚动新闻
  try {
    var indTemp = 0
    var htmlData = '<ul class="swiper-slide clear">'
    var newList = $('.news-list-edit li')
    newList.each(function (ind, el) {
      indTemp++
      if (indTemp > 6) {
        indTemp = 0
        htmlData += '</ul><ul class="swiper-slide clear">'
      }
      htmlData += el.outerHTML
    })
    htmlData += '</ul>'
    $('.swiper-container-4 .swiper-wrapper')[0].innerHTML = htmlData
    setTimeout(() => {
      if ($('.swiper-container-4').length > 0) {
        var swiper3 = new Swiper($('.swiper-container-4')[0], {
          autoplay: 3000,
          mode: 'vertical',
          slidesPerView: 1
        })
      }
      // 鼠标悬浮自动停止轮播
      $('.swiper-container-4 .swiper-wrapper').mouseenter(function () {//滑过悬停
        swiper3.stopAutoplay();//mySwiper 为上面你swiper实例化的名称
      }).mouseleave(function(){//离开开启
        swiper3.startAutoplay();
      });
    }, 100)
  } catch (error) {
    
  }
})