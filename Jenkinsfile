pipeline {
    agent any
    stages {
        stage('Install Docker Compose') {
            steps {
                sh 'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose'
                sh 'chmod +x /usr/local/bin/docker-compose'
            }
        }
        stage('checking Docker Compose version') {
            steps {
                sh 'docker-compose version'
            }
        }
        stage('stoping containers') {
            steps {
                sh 'docker-compose --project-name myproject --network mynetwork up -d'
            }
        }
        stage('Testing') {
            steps {
                sh 'docker-compose --network mynetwork ps'
            }
        }
    }
}
