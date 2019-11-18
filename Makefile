.PHONY: all
all: 
	$(MAKE) -C www all
	sudo docker-compose up --build -d

clean:
	sudo docker-compose down
	$(MAKE) -C www clean
