#!/usr/bin/env groovy

// Declare Variables

workspaceDir = '/home/jenkins/workspace/canvas-kit-react-deploy'
repoBaseDir = 'canvas-kit-react'
buildBaseDir = 'jenkins'
sshKeyPath = '/ssh_keys'
currentJobName = "${env.JOB_NAME}"
safeJobName = currentJobName.replaceAll('/', '-')
shortK8SLabel = safeJobName.take(63)

//cdnVersion = 'beta',

void setBuildStatus(String context, String message, String state) {
    step([
            $class: "GitHubCommitStatusSetter",
            reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://ghe.megaleo.com/design/canvas-kit-react"],
            contextSource: [$class: "ManuallyEnteredCommitContextSource", context: context],
            errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
            statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
    ]);
}

timestamps {
  podTemplate(
    name: 'canvas-kit-react', // used for k8s naming... can't be too long?
    label: shortK8SLabel, // used for node() blocks
    containers: [
      containerTemplate(
        name: 'jnlp'
        ,image: 'docker-dev-artifactory.workday.com/ux-infra/canvas/canvas-base-image/base-image:node8'
        ,command: 'jenkins-slave' // default to image ENTRYPOINT
        ,args: '${computer.jnlpmac} ${computer.name}' // used to connect to jenkins master
        ,ttyEnabled: true
        ,alwaysPullImage: true
        ,privileged: true
        ,resourceRequestCpu: '4'
        ,resourceRequestMemory: '4Gi'
        ,resourceLimitCpu: '4'
        ,resourceLimitMemory: '4Gi')
    ],
    volumes: [
      secretVolume(mountPath: sshKeyPath, secretName: 'jenkins-bamboo-ssh-key', readOnly: true)
    ])

    {
      node(shortK8SLabel){
        ws(workspaceDir) {
          echo 'code checkout....'		
           stage('Code-checkout') {		
                 dir(repoBaseDir){
                    checkout scm

                    if (env.BRANCH_NAME == 'master') {
                                // setBuildStatus("continuous-integration/jenkins/preBuild", 'Build in Progress', "PENDING")
                                // setBuildStatus("continuous-integration/jenkins/unitTests", 'Build in Progress', "PENDING")
                                // setBuildStatus("continuous-integration/jenkins/publishJar", 'Build in Progress', "PENDING")
                                // setBuildStatus("continuous-integration/jenkins/IntegrationTest", 'Build in Progress', "PENDING")          
                    } else {
                                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Build in Progress', "PENDING")
                                setBuildStatus("continuous-integration/jenkins/envConfig", 'Build in Progress', "PENDING")
                                // setBuildStatus("continuous-integration/jenkins/storybook", 'Build in Progress', "PENDING")
                                setBuildStatus("continuous-integration/jenkins/build", 'Build in Progress', "PENDING")
                    }
                                
                }
            }  //END OF STAGE CODECHECKOUT

          stage('Configure npmrc, env, and aws') {
            try {
              withCredentials([
                  file(credentialsId: 'canvas-npmrc', variable: 'NPMRC_FILE'),
                  // file(credentialsId: 'aws-credentials-production', variable: 'AWS_CRED_FILE')
              ]) {
                sh ("cp $NPMRC_FILE /home/jenkins/.npmrc")
				//sh ("echo '@workday:registry=https://artifactory.workday.com/artifactory/api/npm/npm-local' > ~/.npmrc")  
				sh ("npm config set @workday:registry https://artifactory.workday.com/artifactory/api/npm/npm-local")
                echo '.npmrc created'  
                // sh ("mkdir -p /home/jenkins/.aws && cp $AWS_CRED_FILE /home/jenkins/.aws/credentials")
                // echo 'aws creds created'  
              }
                sh ('mkdir ~/.npm-global')
                sh ("npm config set prefix '~/.npm-global'")
                sh ("echo 'export PATH=~/.npm-global/bin:$PATH' > ~/.profile")
                sh ('source ~/.profile') 
                echo '.npm  and aws configured' 
                setBuildStatus("continuous-integration/jenkins/envConfig", 'Env Configured', "SUCCESS")
            } catch(Exception e) {
              setBuildStatus("continuous-integration/jenkins/envConfig", 'Env Config Failed', "FAILURE")
              sleep(1800)
              throw e
            }
          }  // END OF STAGE configure env

          stage('Install Modules') {
            dir(repoBaseDir) {
              try {
                echo 'running yarn'  
                sh ('yarn')
                echo 'npm modules installed'
                echo 'installing global modules'    
                sh ('npm install -g lerna@2.4.0')
                echo 'installed lerna@2.4.0'                                
              } catch(Exception e) {
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
              }
            }
          } //END OF STAGE install modules



          stage('Build') {
            dir(repoBaseDir) {
              try{
                echo 'running lerna bootstrap'  
                sh ('yarn run bootstrap')
                echo 'running build'
                sh ('yarn run build')
                echo 'built.'    
                setBuildStatus("continuous-integration/jenkins/build", 'Built!', "SUCCESS")                                
              } catch(Exception e) {
                setBuildStatus("continuous-integration/jenkins/build", 'Failed', "FAILURE")                
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
              }
            }
          } //END OF Lerna Bootstrap
          
          
          stage('Build Storybook') {
            dir(repoBaseDir) {
              try{
                sh('git rm -rf docs/')
                sh ('yarn run build-storybook')
                withCredentials([file(credentialsId: 'ux-infra-jenkins-ssh', variable: 'SSH_KEY')]) {
                  sh('mkdir -p ~/.ssh; mv $SSH_KEY ~/.ssh/id_rsa; chmod 600 ~/.ssh/id_rsa; ssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub')
                }
                sh ('git config user.name ux-infra-jenkins')
                sh ('git config user.email ux-infra-jenkins@workday.com')
                //setBuildStatus("continuous-integration/jenkins/storybook", 'Storybook Built', "SUCCESS")

              } catch(Exception e) {
                //setBuildStatus("continuous-integration/jenkins/storybook", 'Storybook Not Built', "FAILURE")                
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
              }
            }
          } //END OF STAGE Build Storybook

        // Tasks only for master branch
        if (env.BRANCH_NAME == 'master') {
            stage ('Commit Storybook'){
                dir(repoBaseDir) {
                try{
                    sh ('git add docs')
                    sh ('git commit -m "docs(storybook): Build Storybook [ci skip]"')
                    //sh ('git push origin master') not pushing until l8r
                } catch(Exception e) {
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
                  }
                }
            } //END OF STAGE Commit Storybook

            stage ('NPM Publish'){
                dir(repoBaseDir) {
                try{
                    echo 'NPM publish'
                    sh ('canvas-kit-build publish-monorepo')
                    //publishing here.
                    sh ('git push origin master')
                } catch(Exception e) {
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
                  }
                }
            } //END OF STAGE NPM Publish

            stage ('Upload to CDN'){
                dir(repoBaseDir) {
                try{
                    echo 'Upload to S3'
                    // nothing for now...
                    // sh('aws s3 ')
                } catch(Exception e) {
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
                  }
                }
            } //END OF STAGE NPM Publish
          // 
        } else {
            stage ('Other Branches'){
                echo 'other branch'
                //do stuff for other branches to upload storybook to s3, etc.
            } //END OF STAGE Other Branches
        }

          stage('Cleanup') {
            dir(repoBaseDir) {
              try{
                sh('rm ~/.ssh/id_rsa*')
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Done!', "SUCCESS")                
              } catch(Exception e) {
                setBuildStatus("continuous-integration/jenkins/ciProgress", 'Failed', "FAILURE")
                sleep(1800)
                throw e
              }
            }
          } //END OF STAGE Cleanup

        } //END OF WORKSPACE WS
      } //END OF NODE
    }
} //END OF TIMESTAMPS
