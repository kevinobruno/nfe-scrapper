.PHONY: build build-no-cache db-create-migration db-migrate db-rollback down logs up up-silent

SERVICE_NAME=nfc_scrapper

build:
	@docker-compose build --pull

build-no-cache:
	@docker-compose build --no-cache --pull

db-create:
	@docker-compose exec ${SERVICE_NAME} sequelize db:create

db-create-migration:
	@docker-compose exec ${SERVICE_NAME} sequelize migration:create --name=${name}

db-create-seed:
	@docker-compose exec ${SERVICE_NAME} sequelize seed:generate --name ${name}

db-drop:
	@docker-compose exec ${SERVICE_NAME} sequelize db:drop

db-migrate:
	@docker-compose exec ${SERVICE_NAME} sequelize db:migrate

db-reset: db-drop db-create db-migrate db-seed

db-rollback:
	@docker-compose exec ${SERVICE_NAME} sequelize db:migrate:undo

db-seed:
	@docker-compose exec ${SERVICE_NAME} sequelize db:seed:all

db-seed-undo:
	@docker-compose exec ${SERVICE_NAME} sequelize db:seed:undo:all

down:
	@docker-compose stop ${SERVICE_NAME}

logs:
	@docker-compose logs --follow

shell:
	@docker-compose exec ${SERVICE_NAME} sh

test:
	@docker-compose run --rm ${SERVICE_NAME} npm test -- ${ARGS}

up:
	@docker-compose up ${SERVICE_NAME}

up-silent:
	@docker-compose up -d ${SERVICE_NAME}
