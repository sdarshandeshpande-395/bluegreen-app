pipeline {
    agent any

    environment {
        IMAGE = "sudarshan2244/bluegreen-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/sdarshandeshpande-395/bluegreen-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE:green .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE:green'
            }
        }

        stage('Deploy Green') {
            steps {
                sh 'kubectl apply -f k8s/green-deployment.yaml'
            }
        }

        stage('Switch Traffic') {
            steps {
                sh '''
                kubectl patch svc myapp-service \
                -p '{"spec":{"selector":{"app":"myapp","version":"green"}}}'
                '''
            }
        }
    }
}
