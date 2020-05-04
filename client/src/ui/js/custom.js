let timer;

function decodeHtml(html) {

    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function buttonClick(elem, title, req, res, type) {

    $(".block").on("click", elem, function () {
        showModal(title, req, res, type);
    });
}

function showModal(title, req, res, type) {

    const XML = "xml";
    const JSON = "json";
    clearInterval(timer);
    $('#modal-title').text(title);

    if (type === XML) {
        $("#simpleUseCase").simpleXML({
            xmlString: decodeHtml(req),
            collapsedText: "...",
        });
    } else if (type === JSON) {
        const req_elem = '#req-tab-val';
        const req_elem_menu = '#req-tab-menu';
        const res_elem = '#res-tab-val';
        const res_elem_menu = '#res-tab-menu';
        // Better way to check the empty using jquery
        // EMPTy?
        $(req_elem).empty();
        $(res_elem).empty();
        $(req_elem_menu).hide();
        $(res_elem_menu).hide();
        if (req) {
            jsonView.format(req, req_elem);
            $(req_elem_menu).show();
            if (!res) {
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

function addSAMLSSOConfig(req, res) {

    let query;
    const SAML_REQUEST = "SAML_REQUEST";
    const SAML_REQUEST_TITLE = "SAML Request";
    const SAML_RESPONSE = "SAML_RESPONSE";
    const SAML_RESPONSE_TITLE = "SAML Response";
    const VALUE_TYPE = "xml";

    if (!req.includes(SAML_REQUEST)) {
        let card = document.getElementById("samlsso-card");
        card.classList.add("alert-primary");
        let reqBtn = document.getElementById("req-btn");
        reqBtn.disabled = false;
        reqBtn.classList.remove("btn-secondary");
        reqBtn.classList.add("btn-primary");
        query = '#req-btn';
        buttonClick(query, SAML_REQUEST_TITLE, req, req, VALUE_TYPE);
        blinking(query)
    }

    if (!res.includes(SAML_RESPONSE)) {
        clearInterval(timer);
        const resBtn = document.getElementById("res-btn");
        resBtn.disabled = false;
        resBtn.classList.remove("btn-secondary");
        resBtn.classList.add("btn-success");
        query = '#res-btn';
        buttonClick(query, SAML_RESPONSE_TITLE, res, res, VALUE_TYPE);
        blinking(query)
    }
}

function addOIDCConfig(oidcAuthzRequest, oidcAuthzResponse, oidcTokenRequest, oidcTokenResponse) {
    // constants move
    const OIDC_AUTHZ_REQUEST = "OIDC_AUTHZ_REQUEST";
    const OIDC_AUTHZ_REQUEST_TITLE = "OIDC Authorization Request";
    const OIDC_AUTHZ_RESPONSE = "OIDC_AUTHZ_RESPONSE";
    const OIDC_AUTHZ_RESPONSE_TITLE = "OIDC Authorization Response";
    const OIDC_TOKEN_REQUEST = "OIDC_TOKEN_REQUEST";
    const OIDC_TOKEN_REQUEST_TITLE = "OIDC Token Request";
    const OIDC_TOKEN_RESPONSE = "OIDC_TOKEN_RESPONSE";
    const OIDC_TOKEN_RESPONSE_TITLE = "OIDC Token Response";
    const VALUE_TYPE = "json";

    let curBtn;
    let query;
    if (!oidcAuthzRequest.includes(OIDC_AUTHZ_REQUEST)) {
        let card = document.getElementById("oidc-label");
        card.classList.add("alert-primary");
        curBtn = document.getElementById("authz-req-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-primary");
        query = '#authz-req-btn';
        buttonClick(query, OIDC_AUTHZ_REQUEST_TITLE, oidcAuthzRequest, null, VALUE_TYPE);
        blinking(query);
    }
    if (!oidcAuthzResponse.includes(OIDC_AUTHZ_RESPONSE)) {
        clearInterval(timer);
        curBtn = document.getElementById("authz-res-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-success");
        query = '#authz-res-btn';
        buttonClick(query, OIDC_AUTHZ_RESPONSE_TITLE, oidcAuthzRequest, oidcAuthzResponse, VALUE_TYPE);
        blinking(query)
    }
    if (!oidcTokenRequest.includes(OIDC_TOKEN_REQUEST)) {
        clearInterval(timer);
        curBtn = document.getElementById("token-req-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-primary");
        query = '#token-req-btn';
        buttonClick(query, OIDC_TOKEN_REQUEST_TITLE, oidcTokenRequest, null, VALUE_TYPE);
        blinking(query)
    }
    if (!oidcTokenResponse.includes(OIDC_TOKEN_RESPONSE)) {
        clearInterval(timer);
        curBtn = document.getElementById("token-res-btn");
        curBtn.disabled = false;
        curBtn.classList.remove("btn-secondary");
        curBtn.classList.add("btn-success");
        query = '#token-res-btn';
        oidcTokenResponse = oidcTokenResponse.replace(/"\{/g, '{');
        oidcTokenResponse = oidcTokenResponse.replace(/\}"/g, '}');
        buttonClick(query, OIDC_TOKEN_RESPONSE_TITLE, oidcTokenRequest, oidcTokenResponse, VALUE_TYPE);
        blinking(query)
    }
}
