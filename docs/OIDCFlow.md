# Debugging OIDC Flow

For the testing purposes of the OIDC authentication flow, Try downloading the [pickup-dispatch](https://is.docs.wso2.com/en/latest/learn/deploying-the-sample-app/#deploying-the-pickup-dispatch-webapp) webapp. 

#### Important
In order to debug the IS using VS code debugger Extension, You need to do initial setup of the identity-tools
 debugger. Follow this [Repository](https://github.com/wso2-extensions/identity-tools-debugger) to get to know about it. 
 

## Getting started

- Follow [Authentication steps](/docs/Authentication.md) to authenticate the extension
    - you will get a list of service providers and the list of script libraries in the tenant domain you entered
- Then click the service provider name (pickup-dispatch)
- You will get a graphical view of the service provider and the script.
- Start debugging by pressing F5.
- Add a breakpoint in the script on the right side.
- Open the PICKUP DISPATCH application and press login [http://localhost:8080/pickup-dispatch/](http://localhost:8080/pickup-dispatch/)
- In the VS-Code extension you will see the OIDC authorization request 
- When you approve you will get the OIDC authorization response in the green button blinking when you press it you
 will get the details containing the OIDC authorization response tab view. Simultaneously we have added  and OIDC
  authorization request in the same window for easy navigation.
 - Finally the token endpoint will be hit and Token Request and Token Response could be seen.

![](/docs/resources/OIDC.gif)





