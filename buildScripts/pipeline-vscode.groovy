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

import groovy.json.JsonSlurper

def VERSION
def CLI_REPO = "https://github.com/wso2-extensions/identity-tools-plugin-vscode.git"
def BRANCH = "master"
def repo = "wso2-extensions/identity-tools-plugin-vscode"

node('COMPONENT_ECS') {
    stage('Preparation') {
        // Get some code from a GitHub repository
        checkout([$class           : 'GitSCM', branches: [[name: BRANCH]],
                  userRemoteConfigs: [[url: CLI_REPO]]])
        sh 'git checkout master'
    }
    stage('Build') {
        if (ReleaseVersion != "") {
            VERSION = ReleaseVersion
            sh """
            export npm_config_prefix=/home/node/.npm-global
            ln -s /build/software/nodejs/node-v8.8.1-linux-x64/bin/node /usr/bin/node
            npm -v
            npm install
            cd server/
            npm install
            cd ..
            cd client/
            npm install
            cd ..
            npm version ${VERSION} --no-git-tag-version --allow-same-version
            npm install -g vsce
            npm run compile
            /home/node/.npm-global/lib/node_modules/vsce/out/vsce package  
          """
        } else {
            sh """
            export npm_config_prefix=/home/node/.npm-global
            ln -s /build/software/nodejs/node-v8.8.1-linux-x64/bin/node /usr/bin/node
            npm install
            npm run compile
      """
        }

        if (ReleaseVersion != "") {
            withCredentials([usernamePassword(credentialsId: '4ff4a55b-1313-45da-8cbf-b2e100b1accd', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {

                sh """
                        npm version  ${VERSION} --no-git-tag-version --allow-same-version
                        cd server/
                        npm version  ${VERSION} --no-git-tag-version --allow-same-version
                        cd ..
                        cd client/
                        npm version  ${VERSION} --no-git-tag-version --allow-same-version
                        cd ..
                    """
                sh 'git config  user.email "<CHANGE_EMAIL_ADDRESS>"'
                sh 'git config user.name ${GIT_USERNAME}'
                sh 'git config user.password ${GIT_PASSWORD}'
                sh 'git status'
                sh 'git add .'
                sh 'git commit -m "Release update package versions"'
                sh 'git remote -v'
                sh """
                    git checkout -b temp 
                    git branch -f master temp 
                    git checkout master
                    git branch -D temp 
               """
                sh 'git push -u "https://"${GIT_USERNAME}:${GIT_PASSWORD}"@github' +
                        '.com/wso2-extensions/identity-tools-plugin-vscode.git"'

                def response = sh returnStdout: true,
                        script: "curl --retry 5 -s -u ${GIT_USERNAME}:${GIT_PASSWORD} " +
                                "-d '{\"tag_name\": \"v${ReleaseVersion}\", \"target_commitish\": \"${BRANCH}\", " +
                                "\"name\":\"vscode-wso2-is v${ReleaseVersion}\",\"body\":\"vscode-wso2-is " +
                                "v${ReleaseVersion} released! \",\"prerelease\": true}' " +
                                "https://api.github.com/repos/${repo}/releases"

                uploadUrl = getUploadUrl(response)
                file = "wso2-is-${ReleaseVersion}.vsix"
                sh returnStdout: true,
                        script: "curl -s -H \"Content-Type: application/octet-stream\" -u ${GIT_USERNAME}:${GIT_PASSWORD} " +
                                "--data-binary @${file} " +
                                "${uploadUrl}?name=${file}\\&label=${file}"
                sh """
                        npm version ${DevelopmentVersion} --no-git-tag-version --allow-same-version
                        cd server/
                        npm version ${DevelopmentVersion} --no-git-tag-version --allow-same-version
                        cd ..
                        cd client/
                        npm version ${DevelopmentVersion} --no-git-tag-version --allow-same-version
                        cd ..
                    """
                sh 'git status'
                sh 'git add .'
                sh 'git commit -m "Update to next development version"'
                sh 'git remote -v'
                sh """
                    git checkout -b temp 
                    git branch -f master temp 
                    git checkout master
                    git branch -D temp 
               """
                sh 'git push -u "https://"${GIT_USERNAME}:${GIT_PASSWORD}"@github' +
                        '.com/wso2-extensions/identity-tools-plugin-vscode.git"'
            }
        }
    }
    stage('Results') {
        archiveArtifacts '*.vsix'
    }
}

@NonCPS
def getUploadUrl(response) {

    JsonSlurper slurper = new JsonSlurper()
    def data = slurper.parseText(response)
    def upload_url = data.upload_url
    return upload_url.substring(0, upload_url.lastIndexOf("{"))
}
