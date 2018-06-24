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

init:
	@cp constants-example.js constants.js

upload-images:
	@rsync -r ./public/images/assets/* ascend@dev.ascendntnu.no:/home/ascend/ascendntnu-web/images/assets
	@rsync -r ./public/images/teams/20* ascend@dev.ascendntnu.no:/home/ascend/ascendntnu-web/images/teams

upload-image:
	@rsync -r ./public/images/assets/${folder}/${file} ascend@dev.ascendntnu.no:/home/ascend/ascendntnu-web/images/assets/${folder}

#To upload a folder, just specify folder
#Example usage file: make upload folder=testfolder file=testfile.txt
#Example usage folder make upload folder=testfolder
upload:
	@rsync -r ./${folder}/${file} ascend@dev.ascendntnu.no:/home/ascend/ascendntnu-web/${folder}

download-images:
	@mkdir -p ./public/images/assets
	@rsync -r ascend@dev.ascendntnu.no:/home/ascend/ascendntnu-web/images/assets/* ./public/images/assets
	@mkdir -p ./public/images/teams
	@rsync -r ascend@dev.ascendntnu.no:/home/ascend/ascendntnu-web/images/teams/20* ./public/images/teams

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
	@if [ `docker ps -a | grep ascend-web-container | wc -l` -ne "0" ]; then \
	echo "Found existing ascend-web-container. Replacing it..."; \
	make docker-container-removed; \
	fi
	@echo Creating a container from ascend-web image...
	@docker run --name ascend-web-container -d -p 8081:8080 ascend/ascend-web
	@echo Created container successfully!

docker-container-prod:
	@if [ `docker ps -a | grep ascend-web-container-prod | wc -l` -ne "0" ]; then \
	echo "Found existing ascend-web-container-prod. Replacing it..."; \
	make docker-container-prod-removed; \
	fi
	@echo Creating a container from ascend-web image...
	@docker run --name ascend-web-container-prod -d -p 8080:8080 ascend/ascend-web
	@echo Created production container successfully!

docker-container-removed:
	@echo Removing container...
	@docker stop ascend-web-container
	@docker rm ascend-web-container

docker-container-prod-removed:
	@echo Removing production container...
	@docker stop ascend-web-container-prod
	@docker rm ascend-web-container-prod

docker-enter-container:
	@docker exec -it ascend-web-container /bin/bash

docker-enter-container-prod:
	@docker exec -it ascend-web-container-prod /bin/bash

.PHONY: default install build watch dev
