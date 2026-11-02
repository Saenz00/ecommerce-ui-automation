// Jenkinsfile — prueba inicial con Cypress
pipeline {
    // Imagen oficial de Cypress con Node, navegadores y dependencias del sistema
    agent {
        docker {
            image 'cypress/browsers:latest'   // cuando funcione, fija una versión concreta de Docker Hub
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
        stage('Instalar dependencias') {
            steps {
                sh 'npm ci'
                sh 'npx cypress verify'
            }
        }

        stage('Pruebas Cypress') {
            steps {
                // Si hay pruebas fallidas, el build queda en amarillo (inestable) y se publican los resultados igual
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
