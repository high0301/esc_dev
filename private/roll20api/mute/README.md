# [roll20 API] mute.js
roll20 에서 특정 플레이어를 공개 뮤트시킬 수 있는 API 입니다.

## 요약
- 특정 플레이어의 채팅 메세지를 지속적으로 하얀색 김칠로 가립니다. 드래그하면 내용 확인이 가능합니다.

### 설명서
1. **!setGM GM이름** 으로 GM의 이름을 먼저 등록합니다. GM으로 등록된 사람만 뮤트 기능 사용이 가능합니다.
2. **!m 뮤트시킬이름** 으로 뮤트시킬 사람을 지정합니다. 
3. **!m** 를 한번 더 입력하면 뮤트가 해제됩니다. 
    이미 누군가를 뮤트 시킨 상태에서는 **!m 뮤트시킬이름2** 을 입력한다 해도 무조건 해제가 됩니다. (뮤트는 한번에 한명씩만 가능)