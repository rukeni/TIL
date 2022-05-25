# Docker Swarm

# 도커 스웜에서의 용어

- 스웜(swarm) : 군중이라는 뜻인데, 도커 설치하면 따로 설치하지 않아도 된다. 스웜 클러스터 자체도 스웜이라고 부른다. (스웜을 만들다. 스웜에 가입하다 = 클러스터를 만들다. 클러스터에 가입하다)
- 노드(node) : 스웜 클러스터에 속한 도커 서버의 단위이다. 사실, 한 서버에 하나의 도커데몬만 실행하므로 서버가 곧 노드이다. 노드의 종류는 매니저 노드와 워커 노드가 있다.
    - 매니저 노드(manager node) : 스웜 클러스터에서 상태를 관리하는 노드이다. 매니저 노드는 곧 워커노드가 될 수도 있지만 스웜 명령어는 매니저 노드에서만 실행된다.
    - 워커 노드(worker node) : 매니저 노드의 명령을 받아 컨테이너를 생성하고 상태를 체크하는 노드이다.
- 서비스(service) : 기본적인 배포 단위로, 하나의 서비스는 하나의 이미지를 기반으로 생성하고 동일한 컨테이너를 한개 이상 실행할 수 있다.
- 태스크 : 컨테이너 배포 단위이다. 하나의 서비스는 여러개의 태스크를 실행할 수 있고 각각의 테스트가 컨테이너를 관리한다.

## 도커 스웜이 제공하는 기능

- 스케줄링(scheduling) : 서비스를 만들면 컨테이너를 워커노드에 배포한다. 현재는 균등하게 배포하는 방식만 지원하며 추후 다른 배포 전략이 추가될 예정이다. 노드에 라벨을 지정하여 특정 노드에만 배포할 수 있고 모든 서버에 한 대씩 배포하는 기능(Global)도 제공한다. 서비스별로 CPU, Memory 사용량을 미리 설정할 수 있다. O
- 고가용성(High Available) : Raft 알고리즘을 이용하여 여러 개의 매니저노드를 운영할 수 있다. 3대를 사용하면 1대가 죽어도 클러스터는 정상적으로 동작하며 매니저 노드를 지정하는 방법은 간단하므로 쉽게 사용할 수 있다.
- 멀티 호스트 네트워크(Multi Host Network) : Overlay network로 불리는 SDN(Software defined networks)를 지원하여 여러 노드에 분산된 컨테이너를 하나의 네트워크로 묶을 수 있다. 컨테이너마다 독립된 IP가 생기고 서로 다른 노드에 있어도 할당된 IP로 통신할 수 있다.(호스트 IP를 몰라도됨)
- 서비스 디스커버리(Service Discovery) : 서비스 디스커버리를 위한 자체 DNS 서버를 가지고 있다. 컨테이너를 생성하면 서비스명과 동일한 도메인을 등록하고 컨테이너가 멈추면 도메인을 제거한다. 멀티 호스트 네트워크를 사용하면 여러 노드에 분산된 컨테이너가 같은 네트워크로 묶이므로 서비스 이름으로 바로 접근할 수 있다. Consul이나 etcd, zookeeper와 같은 외부 서비스를 사용하지 않고 어떠한 추가 작업도 필요 없다. 스웜이 알아서 다 해준다.
- 순차적 업데이트(Rolling Update) : 서비스를 새로운 이미지로 업데이트하는 경우 하나 하나 차례대로 업데이트한다. 동시에 업데이트하는 작업의 개수와 업데이트 간격 시간을 조정할 수 있다. O
- 상태체크(Health check): 서비스가 정상적으로 실행되었는지 확인하기 위해 컨테이너 실행 여부 뿐아니라 특정 쉘 스크립트가 정상적으로 실행됐는지 여부를 추가로 체크할 수 있다. 컨테이너 실행 여부로만 체크할 경우 아직 서버가 실행 되지 않아 오류가 날 수 있는 미묘한 타이밍을 잡는데 효과적이다.
- 비밀값 저장(Secret Management): 비밀번호를 스웜 어딘가에 생성하고 컨테이너에서 읽을 수 있다. 비밀 값을 관리하기 위한 외부 서비스를 설치하지 않고 쉽게 사용할 수 있다.
- 로깅(Logging): 같은 노드에서 실행 중인 컨테이너뿐 아니라 다른 노드에서 실행 중인 서비스의 로그를 한곳에서 볼 수 있다. 특정 서비스의 로그를 보려면 어느 노드에서 실행 중인지 알 필요도 없고 일일이 접속하지 않아도 된다. O
- 모니터링(Monitoring): 리소스 모니터링 기능은 제공하지 않는다. 써드 파티 서비스인 (promet heus, grafana)를 사용해야 한다. O
- 크론, 반복작업(Cron): 크론, 반복작업도 알아서 구현해야 한다.

### Docker Swarm mode

 mode라는 이름에서 유추할 수 있듯이, docker가 가지고 있는 기능중 하나. 특별히 설치할 필요가 없다. docker가 가지고 있는 추상화 개념을 그대로 사용했다. 추가적으로 Node라는 개념이 나오는데 이는 클러스터링을 하는 툴에서는 공통적으로 등장하는 개념으로 보통 Node==하나의서버를 의마한다. Production 환경의 Docker Swarm상에서도 Node는 보통 하나의 Container를 사용하므로 서버로 이해해도 된다.

- 공통적으로 도커스웜으로 개념을 익히고 **쿠버네티스로 대규모 서비스 운영을 하라고 한다.** 이유를 아직 명확하게 이해하지는 못했지만 조사해볼 필요 있음.

### Swarm Architecture

 스웜은 매니저 노드와 워커 노드 단 두 종류뿐이다. Manager Node는 분산처리를 담당한다. Raft 합의 알고리즘에 의해서 작동되고 일반적으로 홀수개의 Manager Node를 사용한다. Worker Node는 실제 컨테이너들을 가지면서 Docker Daemon이 열심히 일을하는 Node이다. 실제로 Host역할을 하는 Node는 Manager, Worker 두 역할 모두 수행 할 수 있다. 굳이 매니저와 워커로 나누어서 업무를 수행하는 것은 Fault-Tolerance이점을 위해서라고 할 수 있다.

- Raft 알고리즘 링크: [https://suckzoo.github.io/tech/2018/01/03/raft-1.html](https://suckzoo.github.io/tech/2018/01/03/raft-1.html)
    - 분산처리를 위한 Raft의 설명, 기존 시스템의 문제, Raft 증명법이 모두 있다.
    - 좋은 블로그 ...
- Fault tolerant : 일부 결함이 발생해도 정상적으로 혹은 부분적으로 기능이 동작하는 시스템.

### Swarm 실행

 스웜은 Manager Node에 Service라는 이름으로 업무를 정의한다. Manager Node는 Worker Node들에 Task라는 추상적인 기본 작업 단위로 전달하여, Service를 생성한다. 즉, Service를 생성하려면 Task라는 기본단위가 필요하다. 기본적으로, Manager Node는 Service를 Worker Node로 실행하지만, Manager만을 위한 Task를 Manager Node에서만 실행하도록 구성할 수도 있다. 또한, Manager Node는 안정적인 Swarm 상태를 유지하는데 필요한 Ochestration 및 Cluster 관리 기능들을 수행한다. Ochestration 작업을 수행할 단일 리더를 선출하기도 한다.

- Cluster 상태 유지
- Scheduling Service
- Swarm Mode의 HTTP API Endpoints 제공

### Worker Node

 Worker Node는 Manager Node로부터 Task를 수신받고 Container를 실행한다. 즉, Schedule에 대한 결정을 내리거나 Swarm Mode의 HTTP API를 제공하지 않고, **오로지 Container를 실행시키는 것이 유일한 목적인 Docker Instance이다.** Worker Node에서 실행되고 할당된 Task의 상태에 대해서 Manager Node에 알린다. 이를 통해, Manager Node가 Worker Node들이 안정적인 상태를 유지할 수 있도록 한다.

### 궁금한점

- Ingress LoadBalancer의 a single point of failure