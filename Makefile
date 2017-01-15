default: install build

install:
	@echo Installing npm packages...
	@npm install

build:
	@echo Building project...
	@npm run build

watch:
	@echo Starting file watcher...
	@npm run watch

dev:
	@echo Starting dev server
	@npm run dev

docker-baseimage:
	@echo Building a docker image...
	@docker build -t ascend/ascend-web-baseimage -f Dockerfile.baseimage .

docker-image:
	@echo Building a docker image...
	@docker build -t ascend/ascend-web .

docker-image-removed:
	@echo Removing docker image...
	@docker rmi ascend/ascend-web -f

docker-container:
	@echo Creating a container from ascend-web image...
	@docker run --name ascend-web-container -d -p 8081:8080 ascend/ascend-web
	@echo Created container successfully!

docker-container-prod:
	@echo Creating a container from ascend-web image...
	@docker run --name ascend-web-container -d -p 8080:8080 ascend/ascend-web
	@echo Created container successfully!

docker-container-removed:
	@echo Removing container...
	@docker stop ascend-web-container
	@docker rm ascend-web-container

docker-enter-container:
	@docker exec -it ascend-web-container /bin/bash

docker-container-removed:
	@echo Removing container...
	@docker rm ascend-web-container -f

.PHONY: default install build watch dev
