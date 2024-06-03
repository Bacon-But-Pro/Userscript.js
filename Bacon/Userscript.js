if (document.title == 'Just a moment...') {
    return;
}

var currentURL = window.location.href;
var newerURL = currentURL.replace('https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing', 'https://lootdest.com/s?qljL');
var pageTitle = document.title;
var API = "https://spdmteam.com/api/keysystem?step=";
if (currentURL.includes("https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing")) {
  window.location.replace(newerURL);
} else if (pageTitle.includes("NEO") && pageTitle.includes("1")) {
  window.location.href = API + "1&advertiser=linkvertise&OS=ios";
} else if (currentURL.includes("https://spdmteam.com/key-system-2?hwid=")) {
  window.location.replace("https://loot-link.com/s?mYit");
} else if (pageTitle.includes("NEO") && pageTitle.includes("2")) {
  window.location.replace("https://spdmteam.com/api/keysystem?step=2&advertiser=linkvertise&OS=ios");
} else if (currentURL.includes("https://spdmteam.com/key-system-3?hwid=")) {
  window.location.replace("https://loot-link.com/s?qlbU");
} else if (pageTitle.includes("NEO") && pageTitle.includes("3")) {
  window.location.replace("https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=ios");
}

// auto click captcha
function qSelector(selector) {
    return document.querySelector(selector);
}

function isHidden(el) {
    return (el.offsetParent === null)
}

(function() {
    'use strict';


    var domain = (window.location != window.parent.location) ? document.referrer.toString() : document.location.toString();
    // excluding domains
    if(
        domain.indexOf('example.com') == -1
        &&
        domain.indexOf('PartOfUrlName') == -1
        &&
        domain.indexOf('paypal.com') == -1
    ) {



        // HCAPTCHA SECTION
        const HC_PAUSE = "3000"; // ms to open ( 3000ms = 5sec )
        const HC_CHECK_BOX = "#checkbox";
        const HC_ARIA_CHECKED = "aria-checked";

        if (window.location.href.includes("checkbox")) {
            var hc_checkboxInterval = setInterval(function() {
                if (!qSelector(HC_CHECK_BOX)) {
                } else if (qSelector(HC_CHECK_BOX).getAttribute(HC_ARIA_CHECKED) == "true") {
                    clearInterval(hc_checkboxInterval);
                    console.log("HC SOLVED");
                } else if (!isHidden(qSelector(HC_CHECK_BOX)) && qSelector(HC_CHECK_BOX).getAttribute(HC_ARIA_CHECKED) == "false") {
                    qSelector(HC_CHECK_BOX).click();
                    clearInterval(hc_checkboxInterval);
                    console.log("HC OPEN BOX");
                } else {
                    return;
                }

            }, HC_PAUSE );
        }



        // RECAPTCHA SECTION
        const RC_PAUSE = "3000"; // ms to open ( 3000ms = 5sec )
        const CHECK_BOX = ".recaptcha-checkbox-border";
        const RECAPTCHA_STATUS = "#recaptcha-accessible-status";
        const DOSCAPTCHA = ".rc-doscaptcha-body";

        var rc_checkboxInterval = setTimeout(function() {

            var solved = false;
            var checkBoxClicked = false;
            var requestCount = 0;

            var recaptchaInitialStatus = qSelector(RECAPTCHA_STATUS) ? qSelector(RECAPTCHA_STATUS).innerText : ""
            function isHidden(el) {
                return(el.offsetParent === null)
            }
            try {
                if(!checkBoxClicked && qSelector(CHECK_BOX) && !isHidden(qSelector(CHECK_BOX))) {
                    qSelector(CHECK_BOX).click();
                    checkBoxClicked = true;
                    console.log("RC OPEN BOX");
                }
                //Check if the captcha is solved
                if(qSelector(RECAPTCHA_STATUS) && (qSelector(RECAPTCHA_STATUS).innerText != recaptchaInitialStatus)) {
                    solved = true;
                    console.log("RC SOLVED");
                }
                if(requestCount > 1) {
                    console.log("Attempted Max Retries. Stopping the solver");
                    solved = true;
                }
                //Stop solving when Automated queries message is shown
                if(qSelector(DOSCAPTCHA) && qSelector(DOSCAPTCHA).innerText.length > 0) {
                    console.log("Automated Queries Detected");
                }
            } catch(err) {
                console.log(err.message);
                console.log("An error occurred while solving. Stopping the solver.");
            }

        }, RC_PAUSE );

    }
    else {

        console.log( domain +" EXCLUDED!" );

    }


})();

// auto click Autopass Cloudflare CAPTCHA

global_module = window['global_module'];

async function VerifyYouAreHuman_01() {
    let dom = await global_module.waitForElement("input[value='Verify you are human'][type='button']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function VerifyYouAreHuman_02() {
    let dom = await global_module.waitForElement("input[type='checkbox']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
    dom = await global_module.waitForElement("span[class='mark']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function VerifyYouAreHuman_03() {
    let dom = await global_module.waitForElement("input[value='Verify you are human'][type='button']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function main() {
    let ray_id = $("div[class='ray-id']");
    let hrefdom = $("a[href*='cloudflare.com'][target='_blank']");
    if (ray_id.length > 0 && hrefdom.length > 0) {
        VerifyYouAreHuman_01();
        return;
    }
    if (window.location.host == 'challenges.cloudflare.com' && $("div[id='success']").length > 0 && $("div[id='fail']").length > 0 && $("div[id='expired']").length > 0) {
        VerifyYouAreHuman_02();
        return;
    }
    if ($('div[class="logo"]').length > 0) {
        VerifyYouAreHuman_03();
        return;
    }
}

$(document).ready(() => main());

async function hydrogen() {
    function e(e) {
        return new Promise(t => setTimeout(t, e))
    }
    let t = new URL(window.location.href).searchParams.get("id"),
        a = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/2569/" + t)).json();
    if (a.key) return;
    let o = new URL(window.location.href).searchParams.get("tk");
    if (o) await e(5e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/2569/${t}/${o}`, {
        method: "PUT"
    })).json().then(async e => {
        if (console.log(e), e.redirect.includes("https://gateway.platoboost.com/")) {
            window.location.reload();
            return
        }
        let t = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(e.redirect)}`)).text(),
            a = new URL(t).searchParams.get("r"),
            o = atob(a);
        window.location.assign(o)
    }).catch(e => {
        alert(e)
    });
    else {
        let n = a.captcha,
            s = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/2569/" + t, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: n ? await getTurnstileResponse() : "",
                    type: n ? "Turnstile" : ""
                })
            });
        s = await s.json(), await e(1e3);
        let i = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(s.redirect)}`)).text(),
            c = new URL(i).searchParams.get("r"),
            r = atob(c);
        window.location.assign(r)
    }
}
async function delta() {
    let e = new URL(window.location.href).searchParams.get("id"),
        t = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/8/" + e)).json();
    if (t.key) return;
    let a = new URL(window.location.href).searchParams.get("tk");
    if (a) await sleep(5e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/8/${e}/${a}`, {
        method: "PUT"
    })).json().then(async e => {
        window.location.assign(e.redirect)
    }).catch(e => {
        alert(e)
    });
    else {
        let o = t.captcha,
            n = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/8/" + e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: o ? await getTurnstileResponse() : "",
                    type: o ? "Turnstile" : ""
                })
            });
        n = await n.json(), await sleep(1e3);
        let s = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(n.redirect)}`)).text(),
            i = new URL(s).searchParams.get("r"),
            c = atob(i);
        window.location.assign(c)
    }
}

function sleep(e) {
    return new Promise(t => setTimeout(t, e))
}

function adSpoof(e, t) {
    return new Promise((a, o) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: e,
            anonymous: !0,
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 8.1.0; GO3C Build/OPM2.171019.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.141 Mobile Safari/537.36",
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "sec-ch-ua": '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": '"Android"',
                referrer: t,
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            onload: function(t) {
                window.location.href = e
            },
            onerror: function(e) {
                console.log(e)
            }
        })
    })
}

function linkvertiseSpoof(e) {
    return new Promise((t, a) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: e,
            headers: {
                Referer: "https://linkvertise.com/"
            },
            onload: function(e) {
                t(e.responseText)
            },
            onerror: function(e) {
                a(e)
            }
        })
    })
}
async function getTurnstileResponse() {
    let e = "";
    for (;;) {
        try {
            if (e = turnstile.getResponse()) break
        } catch (t) {}
        await sleep(1)
    }
    return turnstile.getResponse()
}

function base64decode(e) {
    return atob(e = e.replace(/-/g, "+").replace(/_/g, "/"))
}
async function start() {
    switch (window.location.hostname) {
        case "mobile.codex.lol":
            await codex();
            break;
        case "hohohubv-ac90f67762c4.herokuapp.com":
            await hohohub();
            break;
        case "rekonise.com":
            await rekonise();
            break;
        case "letsboost.net":
            await letsboost();
            break;
        case "boost.ink":
            await boostink()
    }
}! function() {
    "use strict";
    if ("adshnk.com" === window.location.hostname || "adshrink.it" === window.location.hostname) {
        let e = setInterval(() => {
            "object" == typeof _sharedData && 0 in _sharedData && "destination" in _sharedData[0] ? (clearInterval(e), document.write(_sharedData[0].destination), window.location.replace(document.body.textContent)) : "undefined" != typeof ___reactjsD && "object" == typeof window[___reactjsD.o] && "string" == typeof window[___reactjsD.o].dest && (clearInterval(e), window.location.replace(window[___reactjsD.o].dest))
        })
    } else if ("sub2unlock.com" === window.location.hostname) {
        let t = document.URL;
        if (t.includes("sub2unlock.com/link/unlock")) {
            let a = document.getElementById("link").getAttribute("href");
            window.location.replace(a)
        } else {
            let o = t.split("/"),
                n = o[o.length - 1];
            window.location.replace("https://sub2unlock.com/link/unlock/" + n)
        }
    } else if ("socialwolvez.com" === window.location.hostname) fetch("https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7)).then(e => (e.ok || window.location.reload(), e.json())).then(e => {
        e && e.link && e.link.url ? window.location.replace(e.link.url) : window.location.reload()
    }).catch(e => {
        alert(e)
    });
    else if ("mboost.me" === window.location.hostname) try {
        let s = document.querySelector('script[id="__NEXT_DATA__"]');
        if (s) {
            let i = JSON.parse(s.textContent);
            i.props.pageProps.data.targeturl ? window.location.replace(i.props.pageProps.data.targeturl) : window.location.reload()
        } else window.location.reload()
    } catch (c) {
        alert(c)
    } else if ("leasurepartment.xyz" === window.location.hostname) {
        async function r(e) {
            return JSON.parse(atob(e))
        }
        async function l() {
            let e = await r(function e(t) {
                if (t = RegExp("[?&]" + encodeURIComponent(t) + "=([^&]*)").exec(location.search)) return decodeURIComponent(t[1])
            }("cc"));
            e && e.link ? window.location.replace(e.link) : window.location.reload()
        }
        l()
    } let p = window.location.href;
    p.includes("gateway.platoboost.com/a/2569") && hydrogen(), p.includes("gateway.platoboost.com/a/8") && delta(), p.includes("spdmteam.com/key-system-1") && arceus(), p.includes("sub2get.com/link?l=") && sub2get()
}(), lvdl(), start();
