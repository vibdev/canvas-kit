#!/usr/bin/env groovy
@Library('design-ops-shared-library@stable') _

// Make sure to fill this out with the project name
setEnv.app('canvas-kit-react')
workspaceDir = env.WORKSPACEDIR
repoBaseDir = env.REPOBASEDIR

//
setEnv.node()
setEnv.ci()
setEnv.cdn('beta')

//AWS Profiles Required:
def awsProfileStorybook = "jenkinsprs"

timestamps {
  provisionPod(dockerTag: 'node8') {
    node(getNames()) {
      ws(workspaceDir) {

        stage('Code Checkout') {
          echo env.STAGE_NAME
          echo 'Checking out repo'
          dir(repoBaseDir) {
            getGit.start()
          }
        }

        ciSkip()
        if (env.CI_SKIP == "true") {
          return
        } else {
          initGheStatusChecks(['ci/jenkins/ciProgress', 'ci/jenkins/storybook', 'ci/jenkins/build'] as String[])
        }

        stage('Setup') {
          echo env.STAGE_NAME
          echo 'Setting up npm, installing aws cli'
          try {
            parallel(
                    npmrc: { setupNpmrc() },
                    awscli: {
                      installAwsCli()
                      ifBranch.isNotMaster {
                        setupAwsProfile(
                                profile: awsProfileStorybook,
                        )
                      }
                    }
            )
          } catch (Exception e) {
            setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
            throw e
          }
        }

        stage('Yarn Install') {
          echo env.STAGE_NAME
          dir(repoBaseDir) {
            try {
              sh('yarn install --production=false')
            } catch (Exception e) {
              setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              throw e
            }
          }
        }

        stage('Yarn Build') {
          echo env.STAGE_NAME
          dir(repoBaseDir) {
            try {
              sh('yarn run bootstrap')
              setGheStatusChecks('ci/jenkins/build', 'build SUCCESS!', 'SUCCESS')
            } catch (Exception e) {
              setGheStatusChecks('ci/jenkins/build', 'build FAILED!', 'FAIL')
              setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              throw e
            }
          }
        }

        stage('Storybook') {
          echo env.STAGE_NAME
          dir(repoBaseDir) {
            try {
              sh('git rm -rf docs/')
              sh('yarn run build-storybook')
              ifBranch.isMaster {
                sh('git add docs')
                sh('git diff --quiet && git diff --staged --quiet || git commit -m "docs(storybook): Build Storybook [ci skip]"')
                setGheStatusChecks('ci/jenkins/storybook', 'Storybook SUCCESS!', 'SUCCESS')
              }
              ifBranch.isNotMaster {
                setAwsProfile(awsProfileStorybook)
                s3Upload.prPage('docs') //give it a directory to upload
                setGheStatusChecks.withDetailsUrl('ci/jenkins/storybook', 'Click `Details` to view test page', 'SUCCESS')
              }
            } catch (Exception e) {
              setGheStatusChecks('ci/jenkins/storybook', 'storybook FAILED!', 'FAIL')
              setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              throw e
            }
          }
        }

        //Following stages occur only on master
        ifBranch.isMaster {

          stage('Release') {
            echo env.STAGE_NAME
            dir(repoBaseDir) {
              try {
                echo 'npm publish & uploading to s3'
                sh('./node_modules/.bin/canvas-kit-build publish-monorepo')
                sh('git push origin master') //Git Release
              } catch (Exception e) {
                // should have a fallback/unpublish/lerna "undo"
                setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
                throw e
              }
            }
          }

        } // End of master stages

        stage('Cleanup') {
          echo env.STAGE_NAME
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress DONE!', 'SUCCESS')
          postCleanup()
        }

      }
    }
  }
  echo "RESULT: ${currentBuild.result}"
}
