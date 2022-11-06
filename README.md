# Blog de Notícias

Projeto das disciplinas ECM516 - Arquitetura de Sistemas Computacionais e ECM252 - Linguagens de Programação II, do 4ºano de Engenharia de Computação do Instituto Mauá de Tecnologia.

O projeto consiste em um blog de notícias, onde o usuário pode ler as notícias. O blog também possui um sistema de login, onde o usuário pode se cadastrar e fazer login.

## Integrantes do grupo
- Guilherme Samuel de Souza Barbosa 19.00012-0
- Guilherme Cury Galli 19.00374-9
- Gustavo Consoleti Ramirez de Souza 19.00715-9
- Matheus dos Santos Galbiati 19.01324-8
- Fernando Laiser Freire Kon 19.01336-0
- Igor Eiki Ferreira Kubota 19.02466-5


# Back-end

## Informações do backend

- Barramento de eventos: Porta 10000
- Microsserviço de notícias: Porta 3000
- Microsserviço de usuários: Porta 4000


## Como iniciar os microserviços

### Criar o arquivo `.env` - necessário em cada microsserviço

```
MONGODB_USER = 
MONGODB_PASSWORD = 
MONGODB_CLUSTER = 
MONGODB_HOST = 
MONGODB_DATABASE = 
```

### Construir as imagens Docker
```
docker build -t mss-noticias ./backend/mss-noticias
docker build -t mss-usuarios ./backend/mss-usuarios
docker build -t barramento ./backend/barramento
```

### Executar os containers
```
docker run -p 3000:3000 mss-noticias
docker run -p 4000:4000 mss-usuarios
docker run -p 10000:10000 barramento
```

### Orquestrar a aplicação com Kubernetes

Renomear imagens
```
docker tag mss-noticias guisamuka/mss-noticias:0.0.1
docker tag mss-usuarios guisamuka/mss-usuarios:0.0.1
docker tag barramento guisamuka/barramento:0.0.1
```

```
cd deplyo/kubernetes
kubectl apply -f mss-noticias-deployment.yaml
kubectl apply -f noticias-service.yaml
```

# Front-end
