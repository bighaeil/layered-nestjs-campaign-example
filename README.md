# Layered NestJS Campaign Example

NestJS 기반 **레이어드 아키텍처** 예제 프로젝트입니다.  
공통 도메인은 **알림 캠페인 즉시 발송**이며, 실제 발송은 Push 로그로 대체합니다.

---

## 📚 시나리오

1. 캠페인 생성
2. 발송 가능한 회원 목록 조회
3. Push 채널 발송 (실제 발송 대신 `console.log`)
4. 감사 로그 기록

---

## 🏗 아키텍처 스타일

- **Layered Architecture**
    - Controller → Service → Repository → Entity
    - 단순하고 직관적인 구조
    - 소규모 프로젝트/MVP에 적합

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