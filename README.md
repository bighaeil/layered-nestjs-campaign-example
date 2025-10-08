# Microkernel NestJS Campaign Example

NestJS 기반 **마이크로커널 아키텍처** 예제 프로젝트입니다.  
공통 도메인은 **알림 캠페인 즉시 발송**이며, Core + Plugin 구조로 구현했습니다.
- Notification Plugin (Push)
- Audit Plugin (Audit Log)

---

## 📚 시나리오

1. 캠페인 생성
2. 발송 가능한 회원 목록 조회
3. Notification Plugin을 통한 Push 발송
4. Audit Plugin을 통한 감사 로그 기록

---

## 🏗 아키텍처 스타일

- **Microkernel**
  - Core: 캠페인, 회원, 계약(interfaces/tokens)
  - Plugins: Push, Audit
  - Plugin 교체 및 확장 용이

---

## 🚀 실행 방법

```bash
# install dependencies
npm install

# run app
npm run start:dev
```

## 🧪 테스트 방법
```bash
curl -X POST http://localhost:3000/campaigns \
  -H "Content-Type: application/json" \
  -d '{"title":"Promotion Event", "message":"50% discount for all items!"}'
```