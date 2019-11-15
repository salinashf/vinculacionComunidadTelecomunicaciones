var theme = 'dark';

(function () {
    'use strict';

    //set the active pill and section on first load
    var section = (document.location.hash) ? document.location.hash.slice(1) : 'psk';


    $('#trunk').load('charts/' + section + '.htm', function () {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    });

    //$('.examples li a#goto-' + section).addClass('active');
    $('#mainHeader li a#goto-' + section).addClass('active');


    //handle mouse clicks and so on
    assignEventListeners();

    function assignEventListeners() {
        //$('ul.examples li a.pill').on('click', function(event) {
        $('#mainHeader li a.pill').on('click', function (event) {
            event.preventDefault();

            //$('ul.examples li a.pill').removeClass('active');
            $('#mainHeader li a.pill').removeClass('active');

            $(this).addClass('active');

            var section = $(this).attr('id').slice(5);
            $('#trunk').load('charts/' + section + '.htm', function () {
                $('pre code').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            });

            document.location.hash = section;

            return false;
        });

        $('#dark-css').on('click', function () {
            theme = 'dark';

            $('.missing')
                .css('background-image', 'url(images/missing-data-dark.png)');

            $('.wip')
                .css('background-color', '#3b3b3b');

            $('.trunk-section')
                .css('border-top-color', '#5e5e5e');

            $('.mg-missing-background')
                .css('stroke', '#ccc');

            $('.head ul li a.pill').removeClass('active');
            $(this).toggleClass('active');
            $('#dark').attr({href: 'css/metricsgraphics-demo-dark.css'});
            $('#dark-code').attr({href: 'css/railscasts.css'});
            $('#accessible').attr({href: ''});

            return false;
        });

        $('#light-css').on('click', function () {
            theme = 'light';

            $('.missing')
                .css('background-image', 'url(images/missing-data.png)');

            $('.wip')
                .css('background-color', '#f1f1f1');

            $('.trunk-section')
                .css('border-top-color', '#ccc');

            $('.mg-missing-background')
                .css('stroke', 'blue');

            $('.head ul li a.pill').removeClass('active');
            $(this).toggleClass('active');
            $('#dark').attr({href: ''});
            $('#dark-code').attr({href: ''});
            $('#accessible').attr({href: ''});

            return false;
        });

        $('#accessible-css').on('click', function () {
            $('.head ul li a.pill').removeClass('active');
            $(this).toggleClass('active');
            $('#accessible').attr({href: 'css/metricsgraphics-demo-accessible.css'});

            return false;
        });
    }
})();
