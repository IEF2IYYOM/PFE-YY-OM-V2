pipeline {
    agent {
        docker {
            image 'docker/compose:1.29.2'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Testing') {
            steps {
                sh 'docker-compose version'
                sh 'docker-compose up -d'
                sh 'docker-compose ps'
            }
        }
    }
}
