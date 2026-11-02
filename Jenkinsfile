// Jenkinsfile — Cypress test pipeline
pipeline {
    // Official Cypress image with Node, browsers and system dependencies
    agent {
        docker {
            image 'cypress/browsers:latest'   // once it works, pin a specific version from Docker Hub
            args  '--ipc=host'
        }
    }

    environment {
        CI = 'true'
        HOME = "${WORKSPACE}"
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
        npm_config_cache = "${WORKSPACE}/.npm"
    }

    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx cypress verify'
            }
        }

        stage('Cypress tests') {
            steps {
                // Failed tests mark the build as UNSTABLE (yellow) and results are still published
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh '''
                        npx cypress run \
                            --browser electron \
                            --reporter junit \
                            --reporter-options "mochaFile=results/cypress-[hash].xml"
                    '''
                }
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'results/*.xml'
            archiveArtifacts artifacts: 'cypress/screenshots/**, cypress/videos/**', allowEmptyArchive: true
        }
    }
}
