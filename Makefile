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

.PHONY: default install build watch dev
