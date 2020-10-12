/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * This class is to add the Static Debug related constants.
 */
export class DebugConstants {

    public static readonly HTTP_SERVLET_REQUEST: string = "HttpServletRequest";
    public static readonly HTTP_SERVLET_RESPONSE: string = "HttpServletResponse";
    public static readonly SAML_REQUEST: string = "SAMLRequest";
    public static readonly SAML_RESPONSE: string = "SAMLResponse";
    public static readonly SAML_REQUEST_HTML: string = `{SAML_REQUEST}`;
    public static readonly SAML_RESPONSE_HTML: string = `{SAML_RESPONSE}`;
    public static readonly OIDC_AUTHZ_REQUEST_HTML: string = `{OIDC_AUTHZ_REQUEST}`;
    public static readonly OIDC_AUTHZ_RESPONSE_HTML: string = `{OIDC_AUTHZ_RESPONSE}`;
    public static readonly OIDC_TOKEN_REQUEST_HTML: string = `{OIDC_TOKEN_REQUEST}`;
    public static readonly OIDC_TOKEN_RESPONSE_HTML: string = `{OIDC_TOKEN_RESPONSE}`;
    public static readonly OIDC_AUTHZ_REQUEST: string = "OIDCAuthzRequest";
    public static readonly OIDC_AUTHZ_RESPONSE: string = "OIDCAuthzResponse";
    public static readonly OIDC_TOKEN_REQUEST: string = "OIDCTokenRequest";
    public static readonly OIDC_TOKEN_RESPONSE: string = "OIDCTokenResponse";
    public static readonly LOCAL_AND_OUTBOUND_AUTHENTICATION_CONFIG: string = `LocalAndOutBoundAuthenticationConfig`;
    public static readonly AUTHENTICATION_SCRIPTS: string = `AuthenticationScript`;
    public static readonly SCRIPT_FILE: string = `scriptFile`;
    public static readonly ADAPTIVE_SCRIPT: string = `adaptiveScript`;
    public static readonly DEFAULT_SCRIPT_FILE: string = `defaultScriptFile`;
    public static readonly AUTHENTICATION_SCRIPT_TRUE: string = `AuthenticationScript enabled="true"`;
    public static readonly AUTHENTICATION_SCRIPT_FALSE: string = `AuthenticationScript enabled="false"`;
    public static readonly IAM_BASE_URL: string = "IAM.BaseURL";
    public static readonly IAM_SERVICE_CLIENT_ID: string = "IAM.ServiceClientID";
    public static readonly CLIENT_SECRET: string = "clientSecret";
    public static readonly ACCESS_TOKEN: string = "accessToken";
    public static readonly STRING_ENCODING: string = "base64";
    public static readonly DEBUG_STOP_ON_ENTRY: string = "stopOnEntry";
    public static readonly DEBUG_END: string = "end";
    public static readonly DEBUG_CLEAR_BREAKPOINT: string = "clearBreakpoints";
    public static readonly DEBUG_STOP_ON_BREAKPOINT: string = "stopOnBreakpoint";
    public static readonly DEBUG_SET_BREAKPOINT: string = "setBreakpoint";
    public static readonly DEBUG_BREAKPOINT_VALIDATED: string = "breakpointValidated";
    public static readonly DEBUG_CONTINUE: string = "continue";
    public static readonly DEBUG_CONNECTED: string = "connected";
    public static readonly DEBUG_BREAKPOINT: string = "breakpoint";
    public static readonly DEBUG_STOP_ON_STEP: string = "stopOnStep";
    public static readonly DEBUG_STOP_ON_DATA_BREAKPOINT: string = "stopOnDataBreakpoint";
    public static readonly DEBUG_EXCEPTION: string = "exception";
    public static readonly DEBUG_STOP_ON_EXCEPTION: string = "stopOnException";
    public static readonly DEBUG_NO_SAML: string = "NO SAML Request Added";
    public static readonly DEBUG_OIDC_CONSENT_URL: string = "oauth2_consent.do?";
    public static readonly MESSAGE_FILE_SAVED_SUCCESS: string = "The file has been saved!";
    public static readonly MESSAGE_SERVICE_IMPORT_SUCCESS: string = "Service has been Successfully imported.";
    public static readonly MESSAGE_SERVICE_IMPORT_ERROR: string = "Error Populating the Services.";
    public static readonly MESSAGE_SELECT_SERVICE_INFO: string = "You do not select any service.";
    public static readonly MESSAGE_CONFIGURATION_SUCCESS: string = "Successfully Configured your extension.";
    public static readonly MESSAGE_SERVICE_FETCHED_SUCCESS: string = "Successfully retrieve the services.";
    public static readonly MESSAGE_ACCESS_TOKEN_EXPIRED: string = "Access Token has expired.";
    public static readonly MESSAGE_SCRIPTS_IMPORT_SUCCESS: string = "Successfully retrieved the script libraries.";
}
