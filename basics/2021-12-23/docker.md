# Docker

Docker는 서비스의 요청자와 제공자간의 작업이 분리되어 있다. 동작방식은 Client-Server Model로 되어 있으며 Docker Client는 REST API를 사용하여 Docker Server를 제어한다.

- Docker Client : docker CLI
- Docker Server: docker daemon
- Docker REST API

 Docker Server(docker daemon)는 Docker Client로부터 받은 요청에 따라, 다음의 Docker Object들을 생성하고 관리한다.

- Image
- Container
- Network
- Data Volumes

 Docker Client는 Docker Daemon과 UNIX Socket 또는 REST API를 사용하여 통신하며 Docker Daemon이 Container를 구축, 실행 및 배포할 수 있도록 한다. Docker Client와 Daemon은 동일한 시스템에서 실행될 수도 있고, Docker Client를 원격으로 Docker Daemon에 연결하여 사용할 수도 있다.

### Docker Daemon

 Docker Daemon(dockerd)은 Client로부터 API 요청을 수신하고 Image, Container, Network 및 Volume과 같은 Docker Object를 관리한다. Daemon은 Docker 서비스를 관리하기 위해 다른 Daemon과 통신할 수 있다.

### Docker Client

 Docker Client(docker)는 사용자가 Docker Daemon과 통신하는 주요 방법이다. docker run과 같은 명령을 사용하면 Docker Client는 해당 명령을 Docker Daemon으로 전송하여 명령을 수행하게 한다. docker 명령은 Docker API를 사용하며 Docker Client는 둘 이상의 Docker Daemon과 통신할 수 있다.

### Docker Registry

 Docker Registry는 Docker Image를 저장한다. Docker Hub는 누구나 사용할 수 있는 Public Registry이며, Docker는 기본적으로 Docker Hub에서 Image를 찾아 Container를 구성하도록 되어 있다. 예를들어, docker pull을 사용하여 Image를 Registry에서 Local로 내려받을 수 있으며, docker push를 통해 Local의 Image를 Registry에 저장할 수도 있다.

### Docker Object

 Docker Object는 Docker Daemon에 의해, 생성 및 관리되는 Image/Container/Network/Volume 등의 개체를 말한다.

### Image

 Image는 컨테이너를 생성하기 위한 읽기 전용 템플릿이다. Image들은 다른 Image 기반 위에 Customizing이 추가되어 만들어질 수 있고 이렇게 만들어진 Image는 Docker Registry에 Push한 뒤 사용할 수 있다. Image는 Dockerfile에 Image를 만들고 실행하는 데 필요한 단계를 명령어로 정의하여 생성한다. Dockerfile에 정의된 각각의 명령어들은 Image의 Layer를 생성하며 이러한 Layer들이 모여 Image를 구성한다. Dockerfile을 변경하고 Image를 다시 구성하면 변경된 부분만 새로운 Layer로 생성된다. 이러한 Image의 Layer구조는 Docker가 타 가상화 방식과 비교할때, 매우 가볍고 빠르게 기동할 수 있는 요인이 된다.

### Container

 Container는 Docker API 사용하여 생성, 시작, 중지, 이동 또는 삭제 할 수 있는 Image의 실행가능한 Instance를 나타낸다. Container를 하나 이상의 Network에 연결하거나, 저장 장치로 묶을 수 있으며, 현재 상태를 바탕으로 새로운 Image를 생성할 수도 있다. 기본적으로 Container는 Host 도는 다른 Container로부터 격리되어 있으며, Network/Storage와 다른 하위 시스템에 대한 접근을 직접 제어 할 수 있다. Container는 생성되거나 시작될 때, 구성 옵션 및 Image로부터 정의된다. Container가 제거될 때는 영구 저장소에 저장되지 않은 변경 사항은 모두 해당 Container와 같이 사라진다.

### Service

 Service를 사용하면, 여러 개의 Docker Daemon들로 이루어진 영역 내에서 Container들을 확장시킬 수 있다. Service는 '특정 시간동안 사용가능한 Service의 Replica 개수'와 같은 상태 정보들을 직접 정의하여 사용할 수 있다. 기본적으로 Service는 Docker Daemon들 간의 Load Balancing을 제공하고 있기 때문에, 사용자 관점에서는 단일 어플리케이션으로 보인다.

- 여러개의 Docker Daemon이 모여서 클러스터를 이루고 이를 Docker Swarm이 조율한다. Docker Swarm은 Manager와 Worker Node로 구성되어 있고 Docker Engine은 Swarm Mode를 지원한다.