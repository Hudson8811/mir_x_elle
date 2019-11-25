$(function() {
    $.getJSON('test.json', function(data) {
        test = data.test;
        testCount = test.length;

        cur = 1;



        var text = test[cur-1].text,
            img1 = test[cur-1].img1,
            img2 = test[cur-1].img2,
            img3 = test[cur-1].img3,
            ans1 = test[cur-1].ans1,
            ans2 = test[cur-1].ans2,
            ans3 = test[cur-1].ans3;

        $('#vopros').html(text);
        $('#querstion .variant-1 img').attr('src',img1);
        $('#querstion .variant-2 img').attr('src',img2);
        $('#querstion .variant-3 img').attr('src',img3);
        $('#querstion .variant-1 .text').html(ans1);
        $('#querstion .variant-2 .text').html(ans2);
        $('#querstion .variant-3 .text').html(ans3);


        $('#quest-count').html(cur);
    });

});