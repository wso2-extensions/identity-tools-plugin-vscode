let timer;

function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function buttonClick(elem, title, req, res, type) {
    $(".block").on("click", elem, function () {
        showmodal(title, req, res, type);
    });
}

function showmodal(title, req, res, type) {
    // show Modal
    clearInterval(timer);
    $('#modal-title').text(title);

    if (type === "xml") {
        $("#simpleUseCase").simpleXML({
            xmlString: decodeHtml(req),
            collapsedText: "...",
        });
    } else if (type === "json") {
        const req_elem = '#req-tab-val';
        const req_elem_menu = '#req-tab-menu';
        const res_elem = '#res-tab-val';
        const res_elem_menu = '#res-tab-menu';
        $(req_elem).html('');
        $(res_elem).html('');
        $(req_elem_menu).hide();
        $(res_elem_menu).hide();
        if (req) {
            jsonView.format(req, req_elem);
            $(req_elem_menu).show();
            if (!res){
                $('#myTab li:last-child a').tab('show');
            }
        }
        if (res) {
            $('#myTab li:first-child a').tab('show');
            jsonView.format(res, res_elem);
            $(res_elem_menu).show();
        }
    }
    $('#commmon-modal').modal('show');
}

function blinking(elm) {
    timer = setInterval(blink, 10);

    function blink() {
        jQuery(elm).fadeOut(400, function () {
            jQuery(elm).fadeIn(400);
        });
    }
}

function divClick(elem) {
    var oidcDIV = document.getElementById(elem);
    oidcDIV.onclick = function () {
        if (oidcDIV.classList.contains("blink")) {
            oidcDIV.classList.remove("blink");
        }
    };
}

function addSAMLSSOConfig(job, req, res) {
    let query;
    const queryOIDC = 'oidc-label';
    divClick(queryOIDC);
    const htmlString = `  <div class="card" style="margin: 20px">
                               <div class="text-center card-header-pills">
                                   <button disabled id="saml-req-btn"  class="btn btn-primary btn-xs ">SAML Request</button>
                                   <div><b id="inbound-auth-name"></b></div>
                                    <button disabled id="saml-res-btn" class="btn btn-primary btn-xs ">SAML Response</button>
                                </div>
                            </div>`;

    var dom = document.createElement("div");
    dom.innerHTML = htmlString.trim();
    var inboundAuthName = dom.querySelector('#inbound-auth-name');
    inboundAuthName.innerHTML = job;
    if (!req.includes("SAML_REQUEST")) {
        query = '#saml-req-btn';
        let samlRequestBtn = dom.querySelector(query);
        samlRequestBtn.disabled = false;
        samlRequestBtn.classList.remove("btn-secondary");
        samlRequestBtn.add("btn-primary");
        buttonClick(query, `SAML Request`, req, req, `xml`);
        blinking(query)
    }

    if (!res.includes("SAML_RESPONSE")) {
        clearInterval(timer);
        query = '#saml-res-btn';
        var samlResponsetBtn = dom.querySelector(query);
        samlResponsetBtn.disabled = false;
        samlResponsetBtn.classList.remove("btn-secondary");
        samlResponsetBtn.add("btn-success");
        buttonClick(query, `SAML Response`, res, res, `xml`);
        blinking('#saml-res-btn')
    }

    return dom.innerHTML;
}


function addConfig(req, res) {
    let query;
    if (!req.includes("SAML_REQUEST")) {
        let card = document.getElementById("samlsso-card");
        card.classList.add("alert-primary");
        let reqBtn = document.getElementById("req-btn");
        reqBtn.disabled = false;
        reqBtn.classList.remove("btn-secondary");
        reqBtn.classList.add("btn-primary");
        query = '#req-btn';
        buttonClick(query, `SAML Request`, req, req, 'xml');
        blinking(query)
    }

    if (!res.includes("SAML_RESPONSE")) {
        clearInterval(timer);
        const resBtn = document.getElementById("res-btn");
        resBtn.disabled = false;
        resBtn.classList.remove("btn-secondary");
        resBtn.classList.add("btn-success");
        query = '#res-btn';
        buttonClick(query, `SAML Response`, res, res, 'xml');
        blinking(query)
    }
}

function addOIDCConfig(oidcAuthzRequest, oidcAuthzResponse, oidcTokenRequest, oidcTokenResponse) {

    let curBtn;
    let query;
    if (!oidcAuthzRequest.includes("OIDC_AUTHZ_REQUEST")) {
        let card = document.getElementById("oidc-label");
        card.classList.add("alert-primary");
        curBtn = document.getElementById("authz-req-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-primary");
        query = '#authz-req-btn';
        buttonClick(query, `OIDC Authorization Request`, oidcAuthzRequest, null, "json");
        blinking(query);
    }
    if (!oidcAuthzResponse.includes("OIDC_AUTHZ_RESPONSE")) {
        clearInterval(timer);
        curBtn = document.getElementById("authz-res-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-success");
        query = '#authz-res-btn';
        buttonClick(query, `OIDC Authorization Response`, oidcAuthzRequest, oidcAuthzResponse, "json");
        blinking(query)
    }
    if (!oidcTokenRequest.includes("OIDC_TOKEN_REQUEST")) {
        clearInterval(timer);
        curBtn = document.getElementById("token-req-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-primary");
        query = '#token-req-btn';
        buttonClick(query, `OIDC Token Request`, oidcTokenRequest, null, "json");
        blinking(query)
    }
    if (!oidcTokenResponse.includes("OIDC_TOKEN_RESPONSE")) {
        clearInterval(timer);
        curBtn = document.getElementById("token-res-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-success");
        query = '#token-res-btn';
        oidcTokenResponse = oidcTokenResponse.replace(/"\{/g, '{');
        oidcTokenResponse = oidcTokenResponse.replace(/\}"/g, '}');
        buttonClick(query, `OIDC Token Response`, oidcTokenRequest, oidcTokenResponse, "json");
        blinking(query)
    }
}
