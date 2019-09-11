.PHONY: all
all: 
	$(MAKE) -C backend all
	$(MAKE) -C www all
	docker-compose up -d

clean:
	docker-compose down
	$(MAKE) -C www clean
	$(MAKE) -C backend clean
