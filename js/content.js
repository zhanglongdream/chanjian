//分享
// document.querySelector('.dateTime').valueAsDate = new Date();
$.ajax({
  url:
    'http://magictower.ly724300.com/api.php?ctl=share&act=getSignPackage&url=' +
    encodeURIComponent(window.location.href),
  type: 'GET',
  success: function(data, textStatus, jqXHR) {
    share(data.data.data)
  }
})
// $('#start_date').val();
var calendar = new LCalendar()
calendar.init({
  trigger: '#start_date', //标签id
  type: 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
  minDate: new Date().getFullYear() - 30 + '-' + 1 + '-' + 1, //最小日期
  maxDate: new Date().getFullYear() + 3 + '-' + 12 + '-' + 31 //最大日期
})
function share(params) {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: params.appId, // 必填，公众号的唯一标识
    timestamp: params.timestamp, // 必填，生成签名的时间戳
    nonceStr: params.nonceStr, // 必填，生成签名的随机串
    signature: params.signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
  wx.ready(function() {
    wx.onMenuShareTimeline({
      desc: '儿童作品上传', // 分享描述
      title: '儿童设计比赛', // 分享标题
      link: params.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://magictower.ly724300.com/artCompetition/img/logo.png', // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareAppMessage({
      title: '儿童设计比赛', // 分享标题
      desc: '儿童作品上传', // 分享描述
      link: params.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://magictower.ly724300.com/artCompetition/img/logo.png', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    })
  })
}

var imgfiles

$('.inputAll input').focus(function() {
  if (
    $(this)
      .siblings()
      .hasClass('spanList') &&
    $(this).val()
  ) {
  } else {
    $(this)
      .siblings()
      .removeClass('fontLeave')
    $(this)
      .siblings()
      .addClass('spanList')
  }
  var inputConte = $(this)
    .parent()
    .siblings('.inputAll')
    .children('input')
  for (
    var i = 0;
    i <
    $(this)
      .parent()
      .siblings('.inputAll')
      .children('span').length;
    i++
  ) {
    if (
      $(
        $(this)
          .parent()
          .siblings('.inputAll')
          .children('span')[i]
      ).hasClass('spanList') &&
      !$(inputConte[i]).val()
    ) {
      $(
        $(this)
          .parent()
          .siblings('.inputAll')
          .children('span')[i]
      ).removeClass('spanList')

      $(
        $(this)
          .parent()
          .siblings('.inputAll')
          .children('span')[i]
      ).addClass('fontLeave')
    }
  }
})
$('.inputAll input').blur(function(params) {
  if (
    $(this)
      .siblings()
      .hasClass('spanList') &&
    $(this).val()
  ) {
  } else {
    $(this)
      .siblings()
      .removeClass('spanList')
    $(this)
      .siblings()
      .addClass('fontLeave')
  }
})

$('.radioGender input').change(function() {
  var val = $('input[name="gender"]:checked').val()
  if (val == '男') {
    if (!$('.manOne').hasClass('label')) {
      $('.womanOne').removeClass('label')
      $('.manOne').addClass('label')
    }
  } else {
    if (!$('.womanOne').hasClass('label')) {
      $('.manOne').removeClass('label')
      $('.womanOne').addClass('label')
    }
  }
})

$('.dashichuangying input').change(function() {
  var val = $('input[name="dashichuang"]:checked').val()
  if (val == '1') {
    $('.nodashi').removeClass('label')
    $('.yesdashi').addClass('label')
  } else {
    $('.yesdashi').removeClass('label')
    $('.nodashi').addClass('label')
  }
})
$('.radioSkills input').change(function() {
  var val = $('input[name="arts"]:checked').val()
  if (val == '1') {
    $('.calligraphyOne').removeClass('label')
    $('.photographyOne').removeClass('label')
    $('.calligraphyOnes').removeClass('label')
    $('.artsOne').addClass('label')
  } else if (val == '2') {
    $('.calligraphyOne').removeClass('label')
    $('.artsOne').removeClass('label')
    $('.calligraphyOnes').removeClass('label')
    $('.photographyOne').addClass('label')
  } else if (val == '3') {
    $('.artsOne').removeClass('label')
    $('.photographyOne').removeClass('label')
    $('.calligraphyOnes').removeClass('label')
    $('.calligraphyOne').addClass('label')
  } else {
    $('.artsOne').removeClass('label')
    $('.photographyOne').removeClass('label')
    $('.calligraphyOne').removeClass('label')
    $('.calligraphyOnes').addClass('label')
  }
})
$('.radioTime input').change(function() {
  var val = $('input[name="children"]:checked').val()
  if (val == '1') {
    $('.children').removeClass('label')
    $('.youngChildren').addClass('label')
  } else {
    $('.youngChildren').removeClass('label')
    $('.children').addClass('label')
  }
})
$("textarea").focus(function(){
  $(".textareaCode span").css("display","none");
});
$(".textareaCode span").click(function(){
  $(".textareaCode span").css("display","none")
  $('textarea').focus();
});
$("textarea").blur(function(){
  
    var _val = $(this).val()
  if (_val.length <= 0) {
  $(".textareaCode span").css("display","block");
  }
});
$('textarea').keyup(function() {
  var _val = $(this).val()
  if (_val.length > 100) {
    // console.log(11111)
    // $(this).val(_val.substring(0, 100));
  }
})
document.getElementById('photo').addEventListener('change', function(e) {
  var files = this.files
  var reader = new FileReader()
  // console.log(EXIF)
  reader.readAsDataURL(files[0])
  imgfiles = files[0]
  // if (navigator.userAgent.match(/iphone/i)) {
  //     EXIF.getData(imgfiles, function() {
  //       EXIF.getAllTags(this)
  //       Orientation = EXIF.getTag(this, 'Orientation')
  //       //return;
  //     })
  // }
  reader.onload = function(e) {
    var mb = e.total / 1024 / 1024
    if (mb >= 10) {
      alert('文件大小大于10M')
      return
    }
    if ($('#imgUpdate').find('img').length > 0) {
      $('#imgUpdate img').remove()
    }
    var img = new Image()
    img.src = this.result
    // img.onload = function () {
    //   alert(this.naturalWidth)
    // }
    // if (navigator.userAgent.match(/iphone/i)) {
    //   switch (orientation) {
    //     //正常状态
    //     case 1:
    //       alert('旋转0°')
    //       break
    //     //旋转90度
    //     case 6:
    //       alert('旋转90°')
    //       img.className = 'nineZero'
    //       break
    //     //旋转180°
    //     case 3:
    //       alert('旋转180°')
    //       img.className = 'oneEight'
    //       break
    //     //旋转270°
    //     case 8:
    //       alert('旋转270°')
    //       img.className = 'twoSeven'
    //       break
    //     //undefined时不旋转
    //     case undefined:
    //       alert('undefined  不旋转')
    //       break
    //   }
    // }

    img.className = 'imgUpdateImg transformTranslateAll'
    $('#imgUpdate').append(img)
    setTimeout(() => {
      $('#imgUpdate .zhibiao').remove()
      $('#imgUpdate').css('background', 'transparent')
      if ($('#imgUpdate img').height() > $('#imgUpdate img').width()) {
        $('#imgUpdate img').css({
          width: 'auto',
          height: $('#imgUpdate').height() + 'px',
          opacity: '1'
        })
      } else {
        $('#imgUpdate img').css({
          width: $('#imgUpdate').width() + 'px',
          height: 'auto',
          opacity: '1'
        })
      }
    }, 500)
  }
})

function updateImg() {
  var formFile = new FormData()
  formFile.append('action', 'UploadVMKImagePath')
  formFile.append('file', imgfiles)
  $.ajax({
    url: 'http://magictower.ly724300.com/api.php?ctl=main&act=upload',
    type: 'POST',
    data: formFile,
    contentType: false,
    processData: false,
    cache: false,
    success: function(data, textStatus, jqXHR) {
      postAjax(data.data.data.photo)
    },
    error: function(xhr, textStatus) {}
  })
}
$('#submitContent button').click(function() {
//   function popup(popupName){
//     var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
//     _windowHeight = $(window).height(),//获取当前窗口高度
//     _popupHeight = $(".dialog-transform").height(),//获取弹出层高度

//     _posiTop = (_windowHeight - _popupHeight)/2 + _scrollHeight;
//     $(".dialog-transform").css("top", _posiTop + "px");
//      alert(_scrollHeight)
// }
// popup()
// alert($(document).scrollTop())
  if ($('.inputAll .name').val()) {
    if (/^[3-9]\d?|10|11|12|13$/.test($('.inputAll .sex').val())) {
      if ($('.inputAll .theClass').val()) {
        var dataValue = new Date($('.chushengnianyueInput').html()).getTime()
        var now = new Date()
        now.setHours(02, 50, 50, 0)
        var nowTime = now.getTime()
        if (nowTime > dataValue) {
          if ($('.inputAll .partentSex').val()) {
            if (/^1[34578]{1}\d{9}$/.test($('.inputAll .phone').val())) {
              // if ($('.inputAll .weChatTime').val()) {
              if ($('.inputAll .nationality').val()) {
                if ($('.inputAll .citiesProvinces').val()) {
                  if ($('.inputAll .citieshistory').val()) {
                    if ($('#imgUpdate').find('img').length > 0) {
                      if ($('.inputWorks').val()) {
                        if ($('textarea').val()) {
                          if (
                            $(".enterIpnut input[type='checkbox']").is(
                              ':checked'
                            )
                          ) {
                            updateImg()
                          } else {
                            $('.dialog-transform').addClass('inputErrorOpcity')
                            $('.dialog-bg').addClass('inputErrorNone')
                            $('#inputError').html('请阅读大赛章程并同意')
                          }
                        } else {
                          $('.dialog-transform').addClass('inputErrorOpcity')
                          $('.dialog-bg').addClass('inputErrorNone')
                          $('#inputError').html('请填写作品描述')
                        }
                      } else {
                        $('.dialog-transform').addClass('inputErrorOpcity')
                        $('.dialog-bg').addClass('inputErrorNone')
                        $('#inputError').html('作品名称不能为空')
                      }
                    } else {
                      $('.dialog-transform').addClass('inputErrorOpcity')
                      $('.dialog-bg').addClass('inputErrorNone')
                      $('#inputError').html('请上传作品')
                    }
                  } else {
                    $('.dialog-transform').addClass('inputErrorOpcity')
                    $('.dialog-bg').addClass('inputErrorNone')
                    $('#inputError').html('学校不能为空')
                  }
                } else {
                  $('.dialog-transform').addClass('inputErrorOpcity')
                  $('.dialog-bg').addClass('inputErrorNone')
                  $('#inputError').html('所在省市不能为空')
                }
              } else {
                $('.dialog-transform').addClass('inputErrorOpcity')
                $('.dialog-bg').addClass('inputErrorNone')
                $('#inputError').html('国籍不能为空')
              }

              // } else {
              //   $('#inputError').addClass('inputErrorNone')
              //   $('#inputError').html('微信号不能为空')
              // }
            } else {
              $('.dialog-transform').addClass('inputErrorOpcity')
              $('.dialog-bg').addClass('inputErrorNone')
              $('#inputError').html('联系方式错误')
            }
          } else {
            $('.dialog-transform').addClass('inputErrorOpcity')
            $('.dialog-bg').addClass('inputErrorNone')
            $('#inputError').html('家长姓名不能为空')
          }
        } else {
          $('.dialog-transform').addClass('inputErrorOpcity')
          $('.dialog-bg').addClass('inputErrorNone')
          $('#inputError').html('出生日期填写错误')
        }
      } else {
        $('.dialog-transform').addClass('inputErrorOpcity')
        $('.dialog-bg').addClass('inputErrorNone')
        $('#inputError').html('年级不能为空')
      }
    } else {
      $('.dialog-transform').addClass('inputErrorOpcity')
      $('.dialog-bg').addClass('inputErrorNone')
      $('#inputError').html('年龄填写错误')
    }
  } else {
    $('.dialog-transform').addClass('inputErrorOpcity')
    $('.dialog-bg').addClass('inputErrorNone')
    $('#inputError').html('姓名不能为空')
  }
})
$('.dialog-transform button').click(function(){
  $('.dialog-transform').removeClass('inputErrorOpcity')
  $('.dialog-bg').removeClass('inputErrorNone')
})
function timeOut(html) {
  $('.success').html(html)
  $('.success').css('display', 'block')
  setTimeout(function() {
    $('.success').css('display', 'none')
    // if ($('input[name="dashichuang"]:checked').val() == '1') {
    //    window.location.href = 'masterClass/index.html'
    // } else {
    //   window.location.href = '/artCompetition/index.html'
    // }
    window.location.href = '/artCompetition/index.html'
  }, 2000)
}

function postAjax(img) {
  var data = {
    name: $('.inputAll .name').val(),
    gender: $('input[name="gender"]:checked').val(),
    parentName: $('.inputAll .partentSex').val(),
    age: $('.inputAll .sex').val(),
    phone: $('.inputAll .phone').val(),
    eventGroup: $('input[name="arts"]:checked').val(),
    ageGroup: $('input[name="children"]:checked').val(),
    productName: $('.inputWorks').val(),
    url: img,
    content: $('textarea').val(),
    birthday: $('.chushengnianyueInput').html(),
    class: $('.inputAll .theClass').val(),
    weixin: $('.inputAll .weChatTime').val(),
    country: $('.inputAll .nationality').val(),
    province: $('.inputAll .citiesProvinces').val(),
    joinCourse: $('input[name="dashichuang"]:checked').val(),
    school: $('.inputAll .citieshistory').val(),
    introduce: $('.inputAll .citiesSelf').val()
  }
  $.ajax({
    url: 'http://magictower.ly724300.com/api.php?ctl=main&act=joinEvent',
    type: 'POST',
    data: data,
    success: function(data, textStatus, jqXHR) {
      if ((data.data.data = '作品提交成功，请耐心等待官方审核。')) {
        window.location.href = '/artCompetition/success.html'
      } else {
        timeOut(data.data.data)
      }
    },
    error: function(xhr, textStatus) {}
  })
}

// /competitionVote/index.html
