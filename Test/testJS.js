$(function() {
    $('a[class^=link]').on('click', function () {
        function clear () {
            $('div[class^=div]').css({
                display : 'none'
            });
        }
        var $class = $(this).attr('class');
        if($class == 'link01'){
            clear();
            $('.div01').toggle('drop');
        } else if($class == 'link02'){
            clear();
            $('.div02').toggle('drop');
        } else if($class == 'link03'){
            clear();
            $('.div03').toggle('drop');
        };
    });
});