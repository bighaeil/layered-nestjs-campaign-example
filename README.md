# Modular Monolith NestJS Campaign Example

이 예제는 **모듈러 모놀리스 아키텍처**를 NestJS로 구현한 프로젝트입니다.  
도메인: 알림 캠페인 즉시 발송 (Push 로그 기반)

---

## 📚 시나리오

1. 캠페인 생성
2. 발송 가능한 회원 목록 조회
3. Push 채널 발송 (실제 발송 대신 `console.log`)
4. 감사 로그 기록

---

## 🏗 아키텍처 스타일

- **Modular Monolith**
  - 도메인별 모듈 분리 (Campaign / Member / Push / Audit)
  - 모듈 간 통신은 Service 의존성을 통한 명시적 호출
  - DDD의 Bounded Context 개념과 유사하게 경계를 유지

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