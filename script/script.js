(function($){

    class Joy{

        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.footer();
            this.modal();
        }

        header(){

            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focus(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }

                
            })

            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);

                    $('.main-btn').removeClass('on');
                }
            })

        }

        section1(){

            let count = 0;

            function mainSlide(){
                $('.slide-wrap').stop().animate({top:`${count * -100}%`}, 400, function(){
                    if(count > 2) count = 0;
                    $('.slide-wrap').stop().animate({top:`${count * -100}%`}, 0)
                })
            }

            function nextCount(){
                count ++;
                mainSlide();
            }

            function autoTimer(){
                setInterval(nextCount, 3000);
            }

            autoTimer();

        }
        section2(){}
        section3(){

            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.gallery').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.notice').addClass('on');
                       
                }
            })

            $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.gallery').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.notice').removeClass('on');
                       
                }
            })

        }

        footer(){}

        modal(){
            
            
            $('.notice-btn-1').on({
                click(event){
                    event.preventDefault();
                    $('.modal').addClass('open');
                    $('.modal').removeClass('close');
                }
            })


            $('.close-btn').on({
                click(){
                    $('.modal').removeClass('open');
                    $('.modal').addClass('close');   
                }
            })

        }
    }

    const joy = new Joy(); 

    joy.init();

})(jQuery)