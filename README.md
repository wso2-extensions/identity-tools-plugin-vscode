# This repository is no longer maintained.
Issue reports and pull requests will not be attended.

# identity-tools-plugin-vscode
A VS Code Extension Which gives ability to connect to IS, fetch Service Providers, visualize in to diagram
,Generate adaptive Scripts for the Service Providers , debug the Authentication flows of the Identity sever. 

It uses debug adapter Protocol [(DAP)](https://microsoft.github.io/debug-adapter-protocol/) and provides the functionality to fetch the service providers and debug the Authentication
 flow.  
 
## Run the Extension

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Then run the command `npm run compile`
- Then open the debug by pressing F5.
- Next open a new workspace or a folder  using the vscode [Extension Development Host].
- Start Debugging.

## Install the Extension

- Download the extension
- Install it  as by selecting install from VSIX
- Start with new window File -> new -> Add a workspace 
- [Authenticate the extension which will fetch the Service Providers](/docs/Authentication.md)
- Debug the authentication flow.
    - #### Important
        In order to debug the IS using VS code debugger Extension, You need to do initial setup of the identity-tools
        -debugger. Follow this
   [Repository](https://github.com/wso2-extensions/identity-tools-debugger) to get to know about it. After the setup
    try debugging flowing flows.
        - [OIDC Flow](/docs/OIDCFlow.md)
        - [SAML flow](/docs/SAMLFlow.md)

## Extension Capabilities

- Connect to IS & fetch Service Providers and visualize in to diagram
- Generate adaptive Scripts for the Service Providers
- Debugging capabilities
    - [Debug SAML authentication flow and visualize it](/docs/SAMLFlow.md)
    - [Debug OIDC authentication flow and visualize it](/docs/OIDCFlow.md)

