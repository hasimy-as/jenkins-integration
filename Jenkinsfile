pipeline {
    agent {
        docker {
            image 'node:16.8.0-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
                sh 'npm start'
            }
        }
    }
}
