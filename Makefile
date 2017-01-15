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

docker-image:
	@echo Building a docker image...
	@docker build -t ascend/ascend-web .

docker-image-removed:
	@echo Removing docker image...
	@docker rmi ascend/ascend-web -f

docker-container:
	@echo Creating a container from ascend-web image...
	@docker run --name ascend-web-container \
		-d -p 8080:8080 \
		ascend/ascend-web
	@echo Created container successfully!

docker-enter-container:
	@docker exec -it ascend-web-container /bin/bash

docker-container-removed:
	@echo Removing previous container...
	@docker rm ascend-web-container -f

.PHONY: default install build watch dev
