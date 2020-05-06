# Debugging OIDC Flow

For the testing purposes of the OIDC authentication flow, Try downloading the [pickup-dispatch](https://is.docs.wso2.com/en/latest/learn/deploying-the-sample-app/#deploying-the-pickup-dispatch-webapp) webapp. 

#### Important
In order to debug the IS using VS code debugger Extension, You need to do initial setup of the identity-tools
 debugger. Follow this [Repository](https://github.com/wso2-extensions/identity-tools-debugger) to get to know about it. 
 

## Getting started

- When you click the wso2 button in the VS-Code IDE in the side tab you can start the extension.
- Then you will get a web-view for authentication of the user. 
    - You can do it by command as well (`Ctrl+Shift+P`) -> Login with WSO2 IS
- Enter your credential and login to the system.
- After the success message goes back to the vscode then you will get a list of service providers and the list of script libraries in the tenant domain you entered.

![](/docs/resources/Auth.gif)
