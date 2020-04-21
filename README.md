# identity-tools-plugin-vscode
A VS Code Extension Which gives ability to debug the Authentication flows of the Identity sever. It uses debug
 adapter Protocol [(DAP)](https://microsoft.github.io/debug-adapter-protocol/) and provides the functionality to fetch the service providers and debug the Authentication
  flow.
  
  In order to debug the IS using VS code debugger Extension, You need to setup the identity-tools-debugger. Follow this
   [Repository](https://github.com/wso2-extensions/identity-tools-debugger) to get to know about it.

## Run the Extension

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Then run the command `npm run compile`
- Then open the debug by pressing F5.
- Next open a new workspace or a folder  using the vscode [Extension Development Host].
- Start Debugging.

##Install the Extension

- Download the Extension
- Install it  as by selecting install from VSIX
- Start with new window File -> new -> Add a workspace 
- Follow the Developer Docs for Authenticate the Extension, Fetching the Service Providers and Debugging the Extention.

