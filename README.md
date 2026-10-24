# FECONF 2026 · AI로 디자인하기

**당근의 톤에 맞게** — 정현수 · 당근 Design Engineer

[웹 발표 보기](https://junghyeonsu.github.io/feconf-2026-public/) · 웹에서 **P**를 누르면 대본과 참고 링크를 볼 수 있습니다.

64장의 발표 자료와 [대본·참고 링크](docs/presentation-script.md)입니다. 의도 정의, 맥락, 레퍼런스, 디자인 시스템, 디자인 언어의 다섯 영역을 다룹니다.

## 공개 웹 만들기

```sh
bun install --frozen-lockfile
bun scripts/export-html.mjs --public
```

`output/public/`에 정적 웹사이트를 생성합니다. 이 폴더만 호스팅하면 됩니다. 이미지와 영상은 별도 파일로 제공하며, 저장소 하위 경로에서도 동작합니다.

```sh
python3 -m http.server 4175 --bind 127.0.0.1 --directory output/public
```

브라우저에서 `http://127.0.0.1:4175/`를 엽니다.

- 방향키 / PageUp·PageDown으로 장표를 이동합니다.
- `F`로 전체 화면을 사용합니다.
- `P`로 기존 발표자 창을 열면 현재·다음 장표, 대본·참고 링크, 타이머가 표시됩니다. 팝업 허용이 필요할 수 있습니다.
- 발표자 창의 이전·다음 버튼과 청중 창의 방향키는 서로 동기화됩니다.
- 영상과 전환 효과는 웹에서 재생됩니다. 동작 줄이기 설정을 사용하면 전환과 자동 영상 재생을 줄입니다.
- 전체 대본과 참고 링크는 위의 대본 문서에서도 읽을 수 있습니다.

## 편집과 오프라인 발표

```sh
bun run dev
bun scripts/export-html.mjs
```

장표 원본은 `slides/design-system-beyond/index.tsx`입니다. 오프라인용 단일 HTML은 `output/html/feconf-2026-standalone.html`에 생성됩니다. [내보내기 안내](docs/html-export.md)를 참고하세요.

대본의 참고 링크는 `docs/presentation-script.md`에서 관리합니다. 내보낼 때 페이지 순서와 대사를 장표 원본과 대조하므로, 장표의 노트를 바꾼 경우 대본 문서도 함께 갱신해야 합니다.

## 공개용 소스 준비

```sh
bun scripts/prepare-public-source.mjs
```

`output/public-source/`에 발표·대본·실행에 필요한 파일만 복사합니다. 기존 `.git`, 연구 자료, 검토 기록, 로컬 출력물, 에이전트 설정은 포함하지 않습니다. 이 명령은 Git 초기화, 원격 저장소 생성, 공개 전환, 업로드를 수행하지 않습니다.

## 자료 출처

도구 링크는 대본의 도입 및 각 섹션 시작 페이지 아래에 모았습니다. 제품 화면·영상·로고의 권리는 각 권리자에게 있습니다.
