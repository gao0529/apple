$(function(){
    var close=$('.ron');
    var open=$('.sear')
    $(open).click(function(){
        $('.search-box').css({
            display:'block'
        })
        setTimeout(function(){
            $('.suoyin a:nth-child(1)').addClass('positions')
            $('.suoyin a:nth-child(2)').addClass('positions')
            $('.suoyin a:nth-child(3)').addClass('positions')
            $('.suoyin a:nth-child(4)').addClass('positions')
        })
        $('ul li').not($('.icon')).css({
            display:'none'
        })
        $(close).css({
            display:'block'
        })
        $(document.body).css({
            background:'#eee'
        })
    })
    $(close).click(function(){
        $('.search-box').css({
            display:'none'
        })
        $('ul li').css({
            display:'inline-block'
        })
        $(this).css({
            display:'none'
        })
        $('.suoyin a:nth-child(1)').removeClass('positions')
        $('.suoyin a:nth-child(2)').removeClass('positions')
        $('.suoyin a:nth-child(3)').removeClass('positions')
        $('.suoyin a:nth-child(4)').removeClass('positions')
    })

// 小屏
    $('.mind').click(function(){
        var ht=$(window).height();
        $(".mind span:nth-child(1)").toggleClass('active')
        $(".mind span:nth-child(2)").toggleClass('active1')
        $('.min-nav .goshop').toggleClass('nav-syn')
        setTimeout(function(){
            var h=$(window).height()
            $('.nav-sy').toggleClass('nav-syh')
            $('.nav-sy').height(h - 15)
            setTimeout(function(){
                $('.nav-sy li:nth-child(1)').toggleClass('positions')
                $('.nav-sy li:nth-child(2)').toggleClass('positions')
                $('.nav-sy li:nth-child(3)').toggleClass('positions')
                $('.nav-sy li:nth-child(4)').toggleClass('positions')
                $('.nav-sy li:nth-child(5)').toggleClass('positions')
                $('.nav-sy li:nth-child(6)').toggleClass('positions')
                $('.nav-sy li:nth-child(7)').toggleClass('positions')
            })
        })
    })

// 无缝轮播图
    var imgs=$('.banner')
    t=setInterval(times,3000)
    function times(){
        imgs.animate({marginLeft:-1200},1000,function(){
            $(imgs).css('marginLeft','0');
            $('.banner div:first').remove().clone(true).appendTo(imgs);
        })
    }
    $('.banner-box').hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(times,3000)
    })

// 底部
    $('.tit').click(function(){
        $('.neirong').toggleClass('verticals');
    })

    $('.tit1').click(function(){
        $('.neirong1').toggleClass('verticals')
    })

})