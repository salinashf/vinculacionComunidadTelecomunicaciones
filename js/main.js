var theme = 'dark';

(function () {
    'use strict';
    var section =  'ask';
    $('#trunk').load('charts/' + section + '.htm');
    $('#mainHeader li a#goto-' + section).addClass('active');
    assignEventListeners();
    function assignEventListeners() {
        $('#mainHeader li a.pill').on('click', function (event) {
            event.preventDefault();
            $('#mainHeader li a.pill').removeClass('active');
            $(this).addClass('active');
            var section = $(this).attr('id').slice(5);
            $('#trunk').load('charts/' + section + '.htm');
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

            $('.head ul li a.pillHeader').removeClass('active');
            $(this).toggleClass('active');
            $('#dark').attr({href: 'css/metricsgraphics-dark.css'});
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

            $('.head ul li a.pillHeader').removeClass('active');
            $(this).toggleClass('active');
            $('#dark').attr({href: ''});
            $('#dark-code').attr({href: ''});
            $('#accessible').attr({href: ''});

            return false;
        });

        $('#accessible-css').on('click', function () {
            $('.head ul li a.pillHeader').removeClass('active');
            $(this).toggleClass('active');
            $('#accessible').attr({href: 'css/metricsgraphics-accessible.css'});

            return false;
        });
    }
})();
var isLoadin = false;
function loading() {
    if (!isLoadin) {
        isLoadin = true;
        EasyLoading.show({
            text: "dibujando..."
        });
    }
}
function dismiss() {
    if (isLoadin) {
        isLoadin = false;
        EasyLoading.hide();
    }
}