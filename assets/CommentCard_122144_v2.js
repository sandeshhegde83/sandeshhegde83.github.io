//Comment Card Javascript Template for Universal Code

iperceptions_122144 = window.iperceptions || {};

//BEGIN Configuration variables
iperceptions_122144.imgSizeOut = [68, 68];
iperceptions_122144.imgSizeOver = [180, 68];
iperceptions_122144.blockMobile = true;
iperceptions_122144.surveyID = 122144;
iperceptions_122144.langIDArray = [1];
iperceptions_122144.posXArray = ['left'];
iperceptions_122144.posYArray = ['bottom'];
iperceptions_122144.winWidth = 676;
iperceptions_122144.winHeight = 676;

//Reserved for advanced use.  Do not modify these.
iperceptions_122144.iconBrandID = null;
iperceptions_122144.logoBrandID = null;
iperceptions_122144.siteID = null;
iperceptions_122144.imgOutArray = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABDVJREFUeF7tmj1uFEEQhX0TxAUQF0BcADgAEBNARAgSOT4AEBNARAiSc3wABCmJI1JLHGDhW/mtyu3u6ZrZ+anZ3pFGu56d7e3+/OpVdfecnByP6wQe3bq9OTIxBAByhJIBcoRyBUUKOSqlAKR5paQKaV4pJSDNKqULSJNQakCag+IB0hQUL5BmoPQB0gSUvkAOHkoNyOM7dzcvHzzcznfsebATwi4gwPj989fm7+VlO1BKQARjc3U0AyUHxMIAxJf3H7ZYmoCSAklhyD8+vj1tA4oFkoYJBAChewTlz8XFDZM9mOyjwabKYPCESA5KLusczCxZA/nx/fxGSDDwHJRaql51StbgGDyhkP73S9cPFkrqIaWsw/XT5y+2GYezK2xWHT61/7Q+P/v0WSXJ7tUabqmd1YWPB4jqEEhIHXgO/oIZ19pYFZTaYPhcxkoZzwkEwoeDV08bq4FSG4wGfv712xaEoPA3x5snT11AVlOn1IBIIYQI7229IrXgJYTSQXiKB4gqVKmDDAMgW6fIaQWpq93Q4eMBwj1AoU6RsaIUeYvqF4FDLbV2w0KpdTz9XFnFqsaW91KRp92QUDwdz93DwDkIG6sMrslvPG2Hg+LpdO4eQVDa1d8AeffqdTVkbJuhoAwFYpcXUQtAOKloaRPlqMz31CphoAwFohRsZ8nP7t3fwrBqUfaRaromiyGg7ANE37XlOwPXgUJQB9DIRBRxykwUdrnfXhzKGEBsG0rNtkhDFRyCobAKucUxJhAGyIGn2HataiyMkFscYwJRmW/XXG01m8IQvNKMeZHwGRuIDBXfwCdyYaIaJmSZPzYQ2sM87YJSThmog+vhUvIUQFSHoI4cDEKKDKSU7SnkZgufqYBIKapXcmFC3cJR2udJ+zYLlCmBqG0pQXMfXRcQrnuWIvne5FDmAIKnaIVN1Sy/K5/pMxmcHMocQBQ2eApgyETpxpgWnbi+qNHOBSQ3x0mfJpDP2PWVrv5NEj5zAuG3tNmFSvANXjVbJpw4pR7PAvboUOYGYn8vnRUDBggq9T1LkaN7ypJAtAEGGJQhk110g31JIFICIAgfuzyggo57Zt3iWBKIjFaK0DqKAFmTrU0ENY69PWVpIGklK2XYyhaVyG9KC0t2HHtBiQBEZb4KNPvolq1gBSmtanN1y2AoUYBIKbzKbNNJn9KxBSIjzm2jDoISCYj6IoXkBmkh2axUeoCnN5SIQOyGOqogVOwcyM6DSs/ODvaUiEAUPnaWLLPtC6N39okKRP0iFHIzZG26azNstEWm6EBs/3LPue02gf6/GeX5lLUAsc/b2+UD3pN2dXrG02m0ngYi3IPR6iEd+qOaJDVbb1+LULwNRLpPO4HphljfPmah9G0kwv19nlSq9fcGlNoXIn6uOsWz1Ojp/zUoni9EvGeod5TGsoMScbBL9Qko/wB0aZV8lHbd7wAAAABJRU5ErkJggg=='];
iperceptions_122144.imgOverArray = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABECAYAAAAoXx8rAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABD9JREFUeF7tnAFu5CAMRWfv01PM5fdYs5qqkVIE+Dsx4GHfSNW2DZjP98NxVlH/vP5+vR58cGAXB95A84UHuzDw2GUj7IND+d1t/ALhxQcHPtSBn04DoD80f8guHABokNjKAYDeKp1sBqBhYCsHAHqrdLIZgIaBrRwA6K3SyWYAGga2cmAG0M/n81V+bWViYzPHnlt7ta7v6NFwFkYDXUvalUS+53zC56zT2qd1PWK/mXyLYqHry0igoxIWFScCkF6MUudq3avXV/wO15gF6FZLorQqvTHKtbfx53Hnn8ukeHSek6VUJ2t8qasHg0en1RL1tCuHWNGpwC+NyQC0ZYrHkB4UrXWO27IFtVfn1XilniORtb31Wgqv3jMwvbnlmtZBbOUvvDq/NzATaKtq1BLXq5a1yqompRbXC0C28a27SbSvZTwL/tqhGwLzbKBVYy1QvG1A1LrlgbR0zr4eCXRZLDxV+WrFlloKa9DMCh0FltLzzajAdwGKBv6unhG+DqvELbEjgW61C3cTqbYVd9fJPL/sz2v59eqP8tXbClpF13V9NNC1W1evp7ryANHqzT23TaWiW/HKGF6grPFWfA/USuX0+NpqSab2z6N7aNfJYrDbAQVKd9CgCcodJGip32FmVOghwv/DoL0Hs2x2LDtsAJ0Nhb6eXhuQYSfL9QF0BgzQEOYAQIdZSaAMDgB0hiygIcwBgA6zkkAZHADoDFlAQ5gDAB1mJYEyOADQGbKAhjAHADrMSgJlcACgM2QBDWEOAHSYlQTK4ABAZ8gCGsIcAOgwKwmUwYFdgK693dV6hdHzJphnbC+fyrvOM3gYtZ8Z2qU1ALpv0ygAPHFrL8lLya0M8qzrOaBX9YTP2wXotzGtKngGwptQ7/hWgq7GuTovHJQiYFZdQ/+MwWhTy/hnk5Xvj/nqO7ytccp8q+WoxbiyXmvf5V5rP/fatrJgAPQEuhWIVbBqcq2E1+4SV0DqQanqP+5Kd8bXdLTiTkivtsSuLYcCd69NWQF0rVdWgVQOjrJf9TBRobXzdWuUAnELkCttwxkQa74KpnecOv4K8L3YAH0LVX3yGazzLOv3ygpKy6E+FLaAKHVawPaeI7wV2eqT00J8NiFzy2ElswdYeftWge4lTQHaAlV5GFNv+3eBtebTQytlzjFmBtC1tkGtsiWcnsNgtT61u4uyntczz/jeQXOkdezQzBV67M6J7nWAlsPrGONTOdBq21KJLMVQoVOnZ7k4639vlgsE6HQpQFCkA1ToSDeJtdwBgF6eAgREOgDQkW4Sa7kDAL08BQiIdACgI90k1nIHAHp5ChAQ6QBAR7pJrOUOAPTyFCAg0gGAjnSTWMsdAOjlKUBApAMAHekmsZY7ANDLU4CASAcAOtJNYi13AKCXpwABkQ4AdKSbxFruQBXon18ef1aJf79eePBZHjxI2GcljHz18/UP1m+cfwYH/W4AAAAASUVORK5CYII='];
//END Configuration variables.


iperceptions_122144.isMobile = (function (a) { return (/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|googlebot|google web preview|msbot|yahoo|bingbot|silk|mobile|rim tablet|hp-tablet|touch;|touch\)|wpdesktop/i.test(a)) })(navigator.userAgent || navigator.vendor || window.opera);

//API function to add floating icon
iperceptions_122144.ipeIcon = function (config) {
    config = config || {};
    if (iperceptions_122144.launchedIcon) {
        return;
    }
    iperceptions_122144.launchedIcon = true;

    var langIDIndex = 0;
    for (var i = 0; i < iperceptions_122144.langIDArray.length; i++) {
        if (iperceptions_122144.langIDArray[i] == config.langID) {
            langIDIndex = i;
            break;
        }
    }

    var _pos_x = config.pos_x || iperceptions_122144.posXArray[langIDIndex], //left|middle|right
        _pos_y = config.pos_y || iperceptions_122144.posYArray[langIDIndex], //'top'|middle|bottom 
        _img_out = config.img_out || iperceptions_122144.imgOutArray[langIDIndex],
        _img_over = config.img_over || iperceptions_122144.imgOverArray[langIDIndex],
        _size_out = iperceptions_122144.imgSizeOut || [68, 68],
        _size_over = iperceptions_122144.imgSizeOver || [180, 68],
        _size_current = _size_out,
        _id = Math.ceil(Math.random() * 10000),
        _img_id = 'UIF-IMG-' + _id,
		_page = '<img id="' + _img_id + '" ' +
        ' src="' + _img_out + '"' +
        'tabindex="0" style="display:none;position:fixed;cursor:pointer;margin:0px!important;padding:0px!important;border:0px!important;' +
        'z-index: 2147483647!important;' +
		(_pos_x == 'right' ? 'text-align:right!important;' : 'text-align:left!important;') +
		(_pos_y == 'bottom' ? 'vertical-align:bottom!important;' : 'vertical-align:top!important;') +
        'background-color:transparent!important;"/>',
		_img, _is_ie, _icon_timer,

        //Generic method to attach an event to a DOM element
        domAddEvent = function (target, eventName, handlerFn) {
            if (target.addEventListener)
                target.addEventListener(eventName, handlerFn, true);
            else if (target.attachEvent)
                target.attachEvent("on" + eventName, handlerFn);
            else
                target["on" + eventName] = handlerFn;
        },

        ipeSetPos = function (pos_x, pos_y) {
            var divW = _size_current[0],
                divH = _size_current[1],
                viewsize = iperceptions_122144.viewSize(),
                bodyWidth, bodyHeight, winW, winH;

            //Our default viewsize calculation sometimes to include the scrollbar.  document.documentElement.client[Width|Height] do not include scrollbar.
            bodyWidth = document.documentElement.clientWidth;
            if (bodyWidth > 0 && bodyWidth < viewsize[0]) {
                viewsize[0] = bodyWidth;
            }

            bodyHeight = document.documentElement.clientHeight;
            if (bodyHeight > 0 && bodyHeight < viewsize[1]) {
                viewsize[1] = bodyHeight;
            }

            winW = parseInt((viewsize[0] - divW));
            winH = parseInt((viewsize[1] - divH));

            if (pos_x == 'left') { _img.style.left = '0px'; }
            else if (pos_x == 'right') { _img.style.right = '0px'; }
            else if (winW >= 0) { _img.style.left = (winW / 2 >> 0) + 'px'; }
            if (pos_y == 'top') { _img.style.top = '0px'; }
            else if (pos_y == 'bottom') { _img.style.bottom = "0px"; }
            else if (winH >= 0) { _img.style.top = (winH / 2 >> 0) + 'px'; }
        },

        isIE = function () {
            var ua = navigator.userAgent.toLowerCase(),
            isOpera = (ua.indexOf('opera') != -1);
            return ua.indexOf('msie') != -1 && !isOpera && (ua.indexOf('webtv') == -1);
        },

        IEMajorVersion = function () {
            var m = /MSIE\s*(\d*)/.exec(navigator.userAgent),
                v = (m && m[1]) || -1;
            if (isNaN(parseInt(v, 10))) {
                v = -1;
            }
            return v;
        },

		ipeIconComplete = function () {
		    _img = document.getElementById(_img_id);
		    _img.style.display = "block";
		    ipeSetPos(_pos_x, _pos_y);

		    domAddEvent(window, 'resize', function () { ipeSetPos(_pos_x, _pos_y); });
		    domAddEvent(window, 'scroll', function () { ipeSetPos(_pos_x, _pos_y); });
		    domAddEvent(_img, "mouseout", function () {
		        _img.src = _img_out;
		        _size_current = _size_out;
		    });
		    domAddEvent(_img, "mouseover", function () {
		        _img.src = _img_over;
		        _size_current = _size_over;
		    });
		    domAddEvent(_img, "click", function (e) {
		        iperceptions_122144.ipeCC(config);
		    });
		};

    _is_ie = isIE();

    //Now blocking IE6 and mobile devices
    if (_is_ie && IEMajorVersion() < 8) {
        return;
    }
    if (iperceptions_122144.blockMobile && iperceptions_122144.isMobile) {
        return;
    }

    _icon_timer = setInterval(function () {
        if (document.readyState === "complete") {
            if (_is_ie && IEMajorVersion() < 10) {
                document.body.insertAdjacentHTML("beforeEnd", _page);
            } else {
                _dL = document.createElement("div");
                _dL.innerHTML = _page;
                document.body.appendChild(_dL);
            }
            clearInterval(_icon_timer);
            ipeIconComplete();
        }
    }, 250);
}


//API function to launch comment card
iperceptions_122144.ipeCC = function (config) {
    var config = config || {};
    config.surveyID = config.surveyID || iperceptions_122144.surveyID;

    iperceptions_122144.launch(config);
}

iperceptions_122144.viewSize = function () {
    var width = 0, height = 0;
    if (typeof (window.innerWidth) == 'number') {
        width = window.innerWidth;
        height = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    }
    return [width, height];
}

iperceptions_122144.launch = function (config) {
    config.langID = config.langID || iperceptions_122144.langID;

    var RC = function (n) { var nEQ = n + '='; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(nEQ) == 0) return c.substring(nEQ.length, c.length); } };

    var Tltsid = (function () {
        var tlfSid = RC("ChVisitorId");

        if (!tlfSid) {
            tlfSid = RC("CHIJSESSIONID");
        }

        if (!tlfSid) return "";

        return "&tltsid=" + tlfSid;
    })();

    var name = "IPerceptions_comment_" + config.surveyID;
    var w = 0, h = 0, url = "", l = 0, t = 0, vs = iperceptions_122144.viewSize(),
        sdfc = "5eb4e8f7" + "-" + config.surveyID + "-" + "eb8afa1f-e385-4810-95ca-56c8af00062c";
    w = iperceptions_122144.winWidth || 676;
    h = iperceptions_122144.winHeight || 676;
    l = Math.max((vs[0] - w) / 2, 0);
    t = Math.max((vs[1] - h) / 2, 0);
    url = window.location.protocol + "//ips-invite.iperceptions.com/WebValidator.aspx?lID=" + config.langID + "&sdfc=" + sdfc + "&source=91787&destination=commentcard&referrer=" + encodeURIComponent(window.location.href) + (iperceptions_122144.logoBrandID ? "&brandID=" + iperceptions_122144.logoBrandID : "") + (iperceptions_122144.siteID ? "&siteID=" + iperceptions_122144.siteID : "") + Tltsid;

    var features = "width=" + w + ",height=" + h + ", left=" + l + ", top=" + t + ", resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=no";

    window.open(url, name, features);
}

var ipeCC = [iperceptions_122144];


//Add script for screen readers 

addScriptIPE = function() {
    
    //Add script right after the opening BODY tag.
    var contentIPE = document.createElement('div');
    contentIPE.innerHTML = '<h1 tabindex="1" style="font-size:1rem;"><a href="">Feedback! - We would like to get your feedback on your visit. Whenever you\'ll feel ready, please press on Alt + Shift + C. The survey will open in a new window. You can reach the survey at any time during your visit. Thank you!</a></h1>';
    document.body.insertBefore(contentIPE, document.body.firstChild);
    contentIPE.setAttribute('class','IPE_hidden');
    contentIPE.setAttribute('role', 'alert');
    contentIPE.setAttribute('style','position:absolute;left:0; top:0;width:100%; height:1rem; overflow:hidden; opacity:0') 
   
    setTimeout(function() {    
        document.querySelectorAll('img[id^="UIF-IMG-"]')[0].setAttribute('tabindex', '0');
        document.querySelectorAll('img[id^="UIF-IMG-"]')[0].setAttribute('alt', 'Feedback! - We would like to get your feedback on your visit. Whenever you\'ll feel ready, please press on Alt + Shift + C. The survey will open in a new window. You can reach the survey at any time during your visit. Thank you!');
    },1000);
    
   
};

addScriptIPE();

var changeImgIPE = function(e) {
    setTimeout(function() {
        var imgIPE = document.querySelectorAll('img[id^="UIF-IMG-"]')[0];
        if (document.activeElement === document.getElementsByClassName('IPE_hidden')[0].querySelector('a') || document.activeElement === imgIPE) {
            imgIPE.src = iperceptions_122144.imgOverArray;
        } else {  
            imgIPE.src = iperceptions_122144.imgOutArray;
        }
    },500);
};




// All other keydown
document.addEventListener('keydown', function() {
    changeImgIPE();
});


//click & others

    var ipe_clicked = function (event) {
        document.querySelectorAll('img[id^="UIF-IMG-"]')[0].click();
    };

    //Remove the reload of anchor
    document.getElementsByClassName('IPE_hidden')[0].querySelector('a').onclick = function (event) {
        event.preventDefault();
        ipe_clicked();
    };

    // keypress binding (13 = Enter | 32 = Space)
    document.getElementsByClassName('IPE_hidden')[0].querySelector('a').addEventListener('keydown', function (event) {
        if (event.which == 13 || event.keyCode == 32) {
            ipe_clicked();
        }
    });

    //Trigger click function + Keyboard shortcut
    document.onkeydown = function (e) {
        if (e.altKey && e.shiftKey && e.which == 67) {
            ipe_clicked();
        }
    };


    //As soon as IPE_hidden exists, give focus
    // var IPEexists = setInterval(function() {
        // if (document.getElementsByClassName('IPE_hidden').length) {
            // document.getElementsByClassName('IPE_hidden')[0].querySelector('a').focus();
            // //changeImgIPE();
            // stopIPEexists();
        // }
    // }, 100);
    // function stopIPEexists() {
        // clearInterval(IPEexists);   
    // }

