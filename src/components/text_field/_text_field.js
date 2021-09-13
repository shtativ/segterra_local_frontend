(function ($) {
    /*select*/
    $(function () {
        var $element = $('.dropdown__select');
        var $selectList = $('.dropdown__list');
        
        $('.dropdown-wrapper').find('.dropdown__selected').on('click', function (e) {
            e.preventDefault();
            $(this).parent().find('.dropdown__list').toggleClass('visible');
            $(this).toggleClass('dropdown__arrow--down');
        });
        $('.dropdown__list-item').on('click', function (e) {
            e.preventDefault();
            var $option = $(this);
            var newValue = $option.html();
            var lastValue = $element.html();
            $element.html(newValue);
            
            if (newValue != lastValue) {
                $element.trigger('change');
            }
            $option.parent().removeClass('visible');
            $element.removeClass('dropdown__arrow--down');
            
            var achievementGroupId = $option.data('id');
            var $achievementGroups = $('.achievements_groups_container > article');
            if (!achievementGroupId) {
                $achievementGroups.removeClass('hide');
                return;
            }
            $achievementGroups.addClass('hide');
            $('.achievement_group_' + achievementGroupId).removeClass('hide');
        });
        $(document).on('mouseup', function (e) {
            if (!$selectList.is(e.target) && !$element.is(e.target) && $selectList.has(e.target).length === 0) {
                $selectList.removeClass('visible');
                $element.removeClass('dropdown__arrow--down');
            }
        });
    });
    
    /*search*/
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            matches = [];
            substrRegex = new RegExp(q, 'i');
            
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            
            cb(matches);
        };
    };
    
    var items = ['Item', 'Item 1', 'Item 2', 'Item 3'];
    
    $('.typeahead').typeahead({
            hint: true,
            minLength: 1
        },
        {
            name: 'items',
            source: substringMatcher(items)
        });
    
})(jQuery);