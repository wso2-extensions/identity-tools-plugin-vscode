# Debugging SAML Flow

For the testing purposes of the SAML authentication flow, Try downloading the [saml2-web-app-pickup-dispatch](https://is.docs.wso2.com/en/latest/learn/deploying-the-sample-app/#deploying-the-saml2-web-app-pickup-dispatch-webapp) webapp. 

#### Important
In order to debug the IS using VS code debugger Extension, You need to do initial setup of the identity-tools
 debugger. Follow this [Repository](https://github.com/wso2-extensions/identity-tools-debugger) to get to know about it. 
 

## Getting started

- Follow [Authentication steps](/docs/Authentication.md) to authenticate the extension
    - you will get a list of service providers and the list of script libraries in the tenant domain you entered
- Then click the service provider name (saml_dispatch).
- You will get a graphical view of the service provider and the script.
- Start debugging by pressing F5.
- Add a breakpoint in the script on the right side.
- Open the PICKUP DISPATCH application and press login [http://localhost:8080/saml2-web-app-pickup-dispatch.com/ ](http://localhost:8080/saml2-web-app-pickup-dispatch.com/)
- In the Vscode extension you will see the SAML request and the Http Request details. Click the Request button
 blinking. You can click and view the SAML Request.
- Then you will get the login window in your application. Give the credentials and press login.
- When you press the login button you will get the SAML response in the green button blinking when you press it you
 will get the details containing the SAML response tab view.

![](/docs/resources/SAML.gif)
