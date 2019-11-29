$(function() {

    answers = '';

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

    $('#querstion .vaiant').click(function () {
        $('#testover').fadeIn(300);
        var answer = $(this).data('value');
        answers+= ','+answer;

        if (cur < testCount){
            cur++;
            setTimeout(function () {
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
                $('#testover').fadeOut(300);
            },300);
        } else {
            var ansArray = answers.substr(1).split(",");
            var mostAnsver = parseInt(getMostFrequentElement(ansArray)[0]);
            $.getJSON('results.json', function(data) {
                results = data.results;
                var title = results[mostAnsver].title,
                    text = results[mostAnsver].text,
                    img = results[mostAnsver].img;

                $('#otvet .img .title span').html(title);
                $('#otvet .def-par').html(text);
                $('#otvet .img img').attr('src',img);
            });
            $('#querstion').fadeOut(300);
            setTimeout(function () {
                $('#otvet').fadeIn(300);
                $('#testover').fadeOut(300);
            },300);
        }
    });


    function getMostFrequentElement(inputArg) {
        var type = typeof inputArg,
            length,
            mostFrequent,
            counts,
            index,
            value;

        if (inputArg === null || type === 'undefined') {
            throw TypeError('inputArg was "null" or "undefined"');
        }

        mostFrequent = [];
        if (type === 'function' || !Object.prototype.hasOwnProperty.call(inputArg, 'length')) {
            mostFrequent[0] = inputArg;
            mostFrequent[1] = 1;
        } else {
            counts = {};
            length = inputArg.length;
            for (index = 0; index < length; index += 1) {
                value = inputArg[index];
                type = typeof value;
                counts[type] = counts[type] || {};
                counts[type][value] = (counts[type][value] || 0) + 1;
                if (!mostFrequent.length || counts[type][value] >= mostFrequent[1]) {
                    mostFrequent[0] = value;
                    mostFrequent[1] = counts[type][value];
                }
            }
        }

        return mostFrequent;
    }
});