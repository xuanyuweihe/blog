/*
 *
 * by commy
 * Date: 2015-10-05
 *
 */


  /* ========================================================================
 * 全局
 * ======================================================================== */
$(document).ready(function () {
  $('.expand,.frame-link.fa-heart').click(function(){
    $('body').toggleClass('hide-side');
  });
  $('.left-side').css("height",$(window).height() - 51)
});
window.onresize=function(){
    $('.left-side').css("height",$(window).height() - 51)
  }

// iframe
$(function(){
  $(".logo").click(function(){
    $("#fame").css("display","none");
    $(".box-main").css("display","block");
  })
  $(".left-nav ul a,.frame-link").click(function(){
    $("#fame").attr("src",$(this).attr("href"));
    $("#fame").css("display","block");
    $("#fame").removeClass("fame-bg");
    $(".box-main").css("display","none");

        $(".left-nav .active").removeClass("active");
        $(this).parent().addClass("active");
  })
  $('.fame-bg').click(function(){
    $('#fame').addClass("fame-bg");
  });
  $(".left-nav>li>a").click(function(){
    $("#fame").css("display","none");
    $(".box-main").css("display","block");
  });
});
    $(document).ready(function ($) {
    $('.left-side .side-content').perfectScrollbar();
    $('.my-links-box').perfectScrollbar();
    });


//accordion
    $(document).ready(function() {

      // Store variables

      var accordion_head = $('.left-nav > li .open'),

        accordion_body = $('.left-nav li  ul');

      // Open the first tab on load

      accordion_head.first().addClass('fa-rotate-135').next().show('normal');

      // Click function

      accordion_head.on('click', function(event) {

        // Disable header links

        event.preventDefault();

        // Show and hide the tabs on click

        if (!$(this).hasClass('fa-rotate-135')){

          accordion_body.hide('normal');

          $(this).next().stop(true,true).show('normal');

          accordion_head.removeClass('fa-rotate-135');

          $(this).addClass('fa-rotate-135');

        }else{
          $(this).next().hide();
          $(this).removeClass('fa-rotate-135');
        }

      });

    });
/* scroll */
$(function(){
    $(".scroll,.left-nav > li > a").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 500);
    });
});

/* dt a click flase*/

$(document).ready(function(){
 $(".panel-body dt a").click(function(){
  return false;
 })
});


//search old




/* jQuery - Easy Ticker
* https://github.com/vaakash/jquery-easy-ticker
*/
;(function($,h,i,j){var k="easyTicker",defaults={direction:'up',easing:'swing',speed:'slow',interval:2000,height:'auto',visible:0,mousePause:1,controls:{up:'',down:'',toggle:'',playText:'Play',stopText:'Stop'}};function EasyTicker(f,g){var s=this;s.opts=$.extend({},defaults,g);s.elem=$(f);s.targ=$(f).children(':first-child');s.timer=0;s.mHover=0;s.winFocus=1;init();start();$([h,i]).off('focus.jqet').on('focus.jqet',function(){s.winFocus=1}).off('blur.jqet').on('blur.jqet',function(){s.winFocus=0});if(s.opts.mousePause==1){s.elem.mouseenter(function(){s.timerTemp=s.timer;stop()}).mouseleave(function(){if(s.timerTemp!==0)start()})}$(s.opts.controls.up).on('click',function(e){e.preventDefault();moveDir('up')});$(s.opts.controls.down).on('click',function(e){e.preventDefault();moveDir('down')});$(s.opts.controls.toggle).on('click',function(e){e.preventDefault();if(s.timer==0)start();else stop()});function init(){s.elem.children().css('margin',0).children().css('margin',0);s.elem.css({position:'relative',height:s.opts.height,overflow:'hidden'});s.targ.css({'position':'absolute','margin':0});setInterval(function(){adjHeight()},100)}function start(){s.timer=setInterval(function(){if(s.winFocus==1){move(s.opts.direction)}},s.opts.interval);$(s.opts.controls.toggle).addClass('et-run').html(s.opts.controls.stopText)}function stop(){clearInterval(s.timer);s.timer=0;$(s.opts.controls.toggle).removeClass('et-run').html(s.opts.controls.playText)}function move(a){var b,eq,appType;if(!s.elem.is(':visible'))return;if(a=='up'){b=':first-child';eq='-=';appType='appendTo'}else{b=':last-child';eq='+=';appType='prependTo'}var c=s.targ.children(b);var d=c.outerHeight();s.targ.stop(true,true).animate({'top':eq+d+"px"},s.opts.speed,s.opts.easing,function(){c.hide()[appType](s.targ).fadeIn();s.targ.css('top',0);adjHeight()})}function moveDir(a){stop();if(a=='up')move('up');else move('down')}function fullHeight(){var a=0;var b=s.elem.css('display');s.elem.css('display','block');s.targ.children().each(function(){a+=$(this).outerHeight()});s.elem.css({'display':b,'height':a})}function visHeight(a){var b=0;s.targ.children(':lt('+s.opts.visible+')').each(function(){b+=$(this).outerHeight()});if(a==1){s.elem.stop(true,true).animate({height:b},s.opts.speed)}else{s.elem.css('height',b)}}function adjHeight(){if(s.opts.height=='auto'&&s.opts.visible!=0){anim=arguments.callee.caller.name=='init'?0:1;visHeight(anim)}else if(s.opts.height=='auto'){fullHeight()}}return{up:function(){moveDir('up')},down:function(){moveDir('down')},start:start,stop:stop,options:s.opts}}$.fn[k]=function(a){return this.each(function(){if(!$.data(this,k)){$.data(this,k,new EasyTicker(this,a))}})}})(jQuery,window,document);

// setting easy ticker
$(function () {
  $('.slogan').easyTicker({
    visible: 1,
    interval: 3000
  });
});

/*   END Easy Ticker   */




/* AJAX LOAD MORE LINKS
$(function(){

  $('.appen-text').click(function appendText(){
    var txt2=$("<div class='more-content'>加载失败...</div>");  // 以 jQuery 创建新元素

    $(this).parents('.panel').find('.panel-body').prepend(txt2);        // 追加新元素
    $(this).addClass('none');
    $(this).next().removeClass('none');
  });

  bind();
  function bind(){
    var $a = $('.load-button');
    if(!$a[0]) return;

    function ajax(e){
      var $this = jQuery(this);
        $container = $(this).parents('.panel').find('.more-content');


      jQuery.ajax({
        url : $this[0].href,

        success : function(data){
          var $dom = jQuery(data),
            content = $dom.find($this.data('node'));

          $container.html(content);
          $('.more-content').hide();
          $('.more-content').slideDown();

        },
        error : function(){
          alert('error');
        }
      });
      return false;
    }
    $a.on('click',ajax);
  }

  //remove .more-content
  $('.remove-more-content').click(function appendText(){
    if($(this).parents('.panel').children('.panel-body').children().hasClass('more-content')){
      var txt = $('.more-content').is(':visible') ? 'MORE' : 'LESS';
      $(this).text(txt)
      $(this).parents('.panel').find('.more-content').slideToggle()
    }else{
    }
  });

});
*/


/* ========================================================================
 * Bootstrap: tab.js v3.3.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.0'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);







//link =================================================================

$(document).ready(function () {
    //function myLink(){
        var $recentItems = $('.recent-items');
        var fm = $('.my-link-form');
        var sortable;
        var myList = document.querySelector('.my-link-list');

        initPresets();
        initLists();

        function getPresets(){
            return [{
                id: 60001,
                name: '知乎',
                url: 'http://www.zhihu.com',
            },{
                id: 60002,
                name: '网易公开课',
                url: 'http://open.163.com',
            },{
                id: 60003,
                name: '友道词典',
                url: 'http://dict.youdao.com',
            },{
                id: 60004,
                name: '今日头条',
                url: 'http://toutiao.com',
            },{
                id: 60005,
                name: 'cnBeta',
                url: 'http://www.cnbeta.com',
            },{
                id: 60006,
                name: 'QQ 邮箱',
                url: 'https://mail.qq.com',
            },{
                id: 60007,
                name: 'Bilibili',
                url: 'http://www.bilibili.com',
            },{
                id: 60008,
                name: '网易云音乐',
                url: 'http://music.163.com',
            },{
                id: 60009,
                name: 'weibo',
                url: 'https://weibo.com',
            }];
        }

        function initPresets(){
            var items = getStoreItems();

            if (! items.length) {
                items = getPresets();
                setStore(items);
            }
        }

        function getStoreItems(){
            var items = window.localStorage.getItem('myLinks');
            if (! items) {
                return [];
            }
            items = JSON.parse(items);
            return items;
        }

        function addToStore(item){
            var items = getStoreItems();
            items.unshift(item)
            setStore(items)
        }

        function setStore(items){
            window.localStorage.setItem('myLinks', JSON.stringify(items));
        }

        function initLists(){
            var items = getStoreItems();

            if (! items.length) {
                return
            }

            for (var i = 0; i < items.length; i++) {
                var li = document.createElement('li');
                li.setAttribute('data-id', items[i].id);
                li.innerHTML = '<a href="' + items[i].url + '" target="_blank" class="item" data-id="' + items[i].id + '" data-name="' + items[i].name + '"><img src="http://statics.dnspod.cn/proxy_favicon/_/favicon?domain=' + items[i].url.replace(/https:\/\/|http:\/\//ig, '') + '">' + items[i].name + '</a><i data-target="' + items[i].id + '" class="remove fa fa-times"></i>';
                li.querySelector('.remove').addEventListener('click', onClickRemoveItem);
                li.querySelector('a.item').addEventListener('click', onClickItem);
                myList.appendChild(li);
            }

            sortable = createSort();
        }

        function onClickItem(e) {
            //e.preventDefault();

            var item = {
                name: this.getAttribute('data-name'),
                url: this.href,
            };

            addRecentItem(item);
            initRecentItems();

        }

        function onClickRemoveItem(e){
            e.preventDefault();
            var targetID = this.getAttribute('data-target');
            var items = getStoreItems();

            for(var i = 0; i < items.length; i++){
                console.log(items[i].id, targetID)
                if (parseInt(items[i].id) === parseInt(targetID)) {
                    items.splice(i, 1);
                    break;
                }
            }

            setStore(items);
            sortable.destroy();
            myList.innerHTML = '';
            initLists();
        }

        //bind form bn
        $('.my-links .fa-plus').on('click', function(){
            fm.toggle('fast', function(){
                try{
                    fm.find('input').eq(0).focus();
                } catch(err){}
            })

        });

        //bind close fm
        $('.btn-close-fm').on('click', function(){
            fm.toggle('fast');
        });

        //bind fm submit
        fm.on('submit', function(){
            //var li = document.createElement('li')
            var name = $('.fm-add-name').val();
            var url = $('.fm-add-url').val();

            addToStore({
                id: +new Date(),
                name: name,
                url: url,
            })

            //if (getStoreItems().length) {
            //    sortable.destroy();
            //}
            myList.innerHTML = '';
            initLists();

            this.reset()
            this.querySelector('input').focus();
        })

        function createSort(){
            return Sortable.create(myList, {
                group: "localStorage-my-link",
                animation: 150,
                store: {
                    /**
                     * Get the order of elements. Called once during initialization.
                     * @param   {Sortable}  sortable
                     * @returns {Array}
                     */
                    get: function (sortable) {
                        var order = localStorage.getItem(sortable.options.group.name) || [];

                        if (! order || ! order.length) {
                            return [];
                        }

                        return JSON.parse(order);
                    },

                    /**
                     * Save the order of elements. Called onEnd (when the item is dropped).
                     * @param {Sortable}  sortable
                     */
                    set: function (sortable) {
                        var order = JSON.stringify(sortable.toArray());
                        localStorage.setItem(sortable.options.group.name, order);
                    }
                }
            });
        }
    //}

    //myLink();


    //function recentLink(){
        function getRecentItems(){
            var items = window.localStorage.getItem('recentItems');

            if (! items) {
                return [];
            }

            return JSON.parse(items);
        }

        function setRecentItems(items){
            window.localStorage.setItem('recentItems', JSON.stringify(items))
        }

        function addRecentItem(item){
            var items = getRecentItems();

            for(var i = 0; i<items.length; i++){
                if (items[i].name === item.name) {
                    items.splice(i, 1);
                    break;
                }
            }

            items.unshift(item);
            setRecentItems(items);
        }

        function initRecentItems(){
            var items = getRecentItems();

            $recentItems[0].innerHTML = '';

            if (! items.length) {
                return
            }

            for (var i = 0; i < items.length; i++) {
                var li = document.createElement('li');
                var url = items[i].url;

                if (url.lastIndexOf('/') === url.length - 1) {
                    url = url.substring(0, url.length - 1);
                }

                li.setAttribute('data-id', items[i].name);
                li.innerHTML = '<a href="' + url + '" target="_blank" class="item" data-name="' + items[i].name + '"><img src="http://statics.dnspod.cn/proxy_favicon/_/favicon?domain=' + url.replace(/https:\/\/|http:\/\//ig, '') + '">' + items[i].name + '</a><i data-target="' + items[i].name + '"class="remove fa fa-times"></i>';
                li.querySelector('.remove').addEventListener('click', onClickRemoveRecentItem);
                li.querySelector('a.item').addEventListener('click', onClickItem);
                $recentItems[0].appendChild(li);
            }
        }

        function onClickRemoveRecentItem(e){
            e.preventDefault();
            var targetID = this.getAttribute('data-target');
            var items = getRecentItems();

            for(var i = 0; i < items.length; i++){
                if (items[i].name === targetID) {
                    items.splice(i, 1);
                    break;
                }
            }

            setRecentItems(items);
            initRecentItems();
        }



        initRecentItems();

        var $markLinks = $('.links .panel-body dd a');

        function markLinks(){
            $markLinks.each(function(){
                this.addEventListener('click', onClickAllLink);
            })
        }

        function onClickAllLink(e){
            //e.preventDefault();

            var item = {
                name: this.querySelector('.link-title').textContent,
                url: this.href,
            };

            addRecentItem(item);
            initRecentItems();
        }

        markLinks();
    //}

    //recentLink();

});

}(jQuery);



