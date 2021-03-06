/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0`
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * This class holds the variables related to the Extension.
 */
export class ExtensionConstants {

    public static readonly DIAGRAM: string = "extension.diagram";
    public static readonly SCRIPT: string = "extension.script";
    public static readonly SERVICE_PROVIDER: string = "extension.serviceProviders";
    public static readonly SERVICE_PROVIDER_FROM_TREE_VIEW: string = "extension.serviceProviderFromTreeView";
    public static readonly REFRESH_SCRIPTS: string = "extension.refreshScripts";
    public static readonly REFRESH_SCRIPTS_VIEW_ID: string = "script-libraries";
    public static readonly REFRESH_SERVICES: string = "extension.refreshServices";
    public static readonly REFRESH_SERVICES_VIEW_ID: string = "service-providers";
    public static readonly NODE_TLS_REJECT_UNAUTHORIZED: string = "NODE_TLS_REJECT_UNAUTHORIZED";

    public static readonly VS_CODE_MESSAGE_COMMAND_LOGIN: string = "login";
    public static readonly VS_CODE_MESSAGE_COMMAND_ACCESS: string = "access";
    public static readonly VS_CODE_MESSAGE_COMMAND_OPEN: string = "vscode.open";
}
