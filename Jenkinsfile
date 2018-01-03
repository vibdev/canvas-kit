#!/usr/bin/env groovy

@Library('design-ops-shared-library') _
def nodeLabel = getNames()

workspaceDir = '/home/jenkins/workspace/canvas-kit-react-deploy'
repoBaseDir = 'canvas-kit-react'

//cdnVersion = 'beta',

timestamps {
 provisionPod(dockerTag: 'node8') {
  node(nodeLabel) {

    ws(workspaceDir) {
      def branchName = ''
      echo 'code checkout....'
      stage('Code-checkout') {
        dir(repoBaseDir) {
         echo 'Pulling...' + env.BRANCH_NAME
         checkout scm
         branchName = getBranchName()
         if (branchName == 'master') {
          echo "We're on $branchName! Building $branchName"
         } else {
          initGheStatusChecks(['ci/jenkins/ciProgress', 'ci/jenkins/envConfig', 'ci/jenkins/storybook', 'ci/jenkins/build'] as String[])
         }
        }
       } //END OF STAGE CODECHECKOUT

      stage('Configure npmrc, env, and aws') {
        dir(repoBaseDir) {
         try {
          setupNpmrc()
           // Setup AWS goes here
         } catch (Exception e) {
          setGheStatusChecks('ci/jenkins/ciProgress', 'CI FAILED!', 'FAIL')
          sleep(1800)
          throw e
         }
        }
       } // END OF STAGE configure env

      stage('Install Modules') {
        dir(repoBaseDir) {
         try {
          echo 'running yarn'
          sh('yarn')
          echo 'npm modules installed'
         } catch (Exception e) {
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
          sleep(1800)
          throw e
         }
        }
       } //END OF STAGE install modules

      stage('Build') {
        dir(repoBaseDir) {
         try {
          echo 'running lerna bootstrap'
          sh('yarn run bootstrap')
          echo 'running build'
          sh('yarn run build')
          echo 'built.'
          setGheStatusChecks('ci/jenkins/build', 'Build SUCCESS!', 'SUCCESS')
         } catch (Exception e) {
          setGheStatusChecks('ci/jenkins/build', 'Build FAILED!', 'FAIL')
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
          sleep(1800)
          throw e
         }
        }
       } //END OF Lerna Bootstrap


      // Tasks only for master branch
      if (branchName == 'master') {
       stage('Commit Storybook') {
         dir(repoBaseDir) {
          try {
           sh('git add docs')
           sh('git diff --quiet && git diff --staged --quiet || git commit -m "docs(storybook): Build Storybook [ci skip]"')
          } catch (Exception e) {
           //setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
           sleep(1800)
           throw e
          }
         }
        } //END OF STAGE Commit Storybook

       stage('Build Storybook') {
         dir(repoBaseDir) {
          try {
           sh('git rm -rf docs/')
           sh('yarn run build-storybook')
           gitConfig()
           setGheStatusChecks('ci/jenkins/storybook', 'Storybook SUCCESS!', 'SUCCESS')

          } catch (Exception e) {
           setGheStatusChecks('ci/jenkins/storybook', 'Storybook FAILED!', 'FAIL')
           setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
           sleep(1800)
           throw e
          }
         }
        } //END OF STAGE Build Storybook
       stage('NPM Publish') {
         dir(repoBaseDir) {
          try {
           echo 'NPM publish'
           sh('./node_modules/.bin/canvas-kit-build publish-monorepo')
            //publishing here.
          } catch (Exception e) {
           //setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
           sleep(1800)
           throw e
          }
         }
        } //END OF STAGE NPM Publish

       stage('Upload to CDN') {
         dir(repoBaseDir) {
          try {
           echo 'Upload to S3'
            // nothing for now...
            // sh('aws s3 ')
          } catch (Exception e) {
           //setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
           sleep(1800)
           throw e
          }
         }
        } //END OF STAGE NPM Publish

       stage('Cleanup') {
         try {
          echo 'Cleanup'
          postCleanup()
         } catch (Exception e) {
          //setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
          sleep(1800)
          throw e
         }
        } //END OF STAGE CLEANUP

      } else {
       //do stuff for other branches to upload storybook to s3, etc.
       stage('Build Storybook') {
        dir(repoBaseDir) {
         try {
          echo "Building Storybook."
          sh('yarn run build-storybook')
           //since there's no S3 Stage yet, setting the success status here...
          setGheStatusChecks('ci/jenkins/storybook', 'Storybook SUCCESS!', 'SUCCESS')
         } catch (Exception e) {
          setGheStatusChecks('ci/jenkins/storybook', 'Storybook FAILED!', 'FAIL')
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
          sleep(1800)
          throw e
         }
        }
       }
      }

      stage('Done') {
        dir(repoBaseDir) {
         try {
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress DONE!', 'SUCCESS')
         } catch (Exception e) {
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
          sleep(1800)
          throw e
         }
        }
       } //END OF STAGE Cleanup
     } //END OF WORKSPACE WS
   } //END OF NODE
 }
} //END OF TIMESTAMPS