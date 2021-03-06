module.exports = {
        requiresCompatibilities: [
            "FARGATE"
        ],
        "inferenceAccelerators": [],
        "containerDefinitions": [
            {
                "name": "apigateway-8442",
                "image": "harishsundhar/fargate:apigateway-8442",
                "memoryReservation": "300",
                "resourceRequirements": null,
                "essential": true,
                "portMappings": [
                    {
                        "containerPort": "8000",
                        "protocol": "tcp",
                        "hostPort": "8000"
                    }
                ],
                "environment": null,
                "environmentFiles": [],
                "secrets": null,
                "mountPoints": null,
                "volumesFrom": null,
                "hostname": null,
                "user": null,
                "workingDirectory": null,
                "extraHosts": null,
                "logConfiguration": {
                    "logDriver": "awslogs",
                    "options": {
                        "awslogs-group": "/ecs/APIFargate",
                        "awslogs-region": "us-east-1",
                        "awslogs-stream-prefix": "ecs",
                        "awslogs-create-group": "true"
                    }
                },
                "ulimits": null,
                "dockerLabels": null,
                "dependsOn": null,
                "repositoryCredentials": {
                    "credentialsParameter": ""
                }
            }
        ],
        "volumes": [
            {
                "host": {},
                "name": "newtesting"
            }
        ],
        "networkMode": "awsvpc",
        "memory": "512",
        "cpu": "256",
        "executionRoleArn": "arn:aws:iam::967636366309:role/ecsTaskExecutionRole",
        "family": "APIFargate",
        "tags": [],
        "placementConstraints": [],
        "taskRoleArn": "arn:aws:iam::967636366309:role/ecsTaskExecutionRole"
    
  };
