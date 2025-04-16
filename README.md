# 2023 소주톤 – 얼레벌레 바캉스 🌊🍹

> **소주톤**은 주니어 개발자·디자이너·기획자가 한데 모여  
> 12시간 동안 협업과 네트워킹을 즐기는 부산 해커톤입니다.  
> 본 레포지토리는 2회 소주톤(2023.09.02) 공식 홈페이지 소스코드를 담고 있습니다.

![sojuton banner](public/images/sojuton-poster.png)

## ✨ 주요 특징
- **Next.js 13 App Router** 기반 SSR/SSG 하이브리드 웹
- **TypeScript** 100% 적용
- **Tailwind CSS 3 + DaisyUI** — 디자인 시스템 & 컴포넌트 킷
- **Lucide‑React** 아이콘 세트
- 커스텀 Variable 폰트(**Pretendard**, **Climate Crisis**) 즉시 로드
- 빌드 타임 없이 Vercel 서버리스로 1‑Click 배포

## 📂 프로젝트 구조
```
app/               # App Router 엔트리 및 전역 레이아웃
  globals.css
  layout.tsx
  page.tsx
components/        # UI 컴포넌트 (Home·Layout 섹션 등)
const/             # 정적 데이터: FAQ·스케줄·메타데이터·스폰서
style/             # 폰트 로더
utils/             # 공통 유틸리티 (D‑Day 계산 등)
public/            # 정적 이미지·폰트 (assets/* 경로로 import)
...
```

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
pnpm i      # or npm install / yarn
```

### 2. 개발 서버 실행
```bash
pnpm dev    # http://localhost:3000
```

### 3. 프로덕션 빌드
```bash
pnpm build
pnpm start  # 로컬 프리뷰
```

> **Node 18 이상**을 권장합니다.  
> Vercel 배포 시 별도 설정 없이 `next build` → `next start` 경로로 자동 구성됩니다.

## 🛠️ 사용 스크립트
| 명령어          | 설명                        |
|-----------------|-----------------------------|
| `pnpm dev`      | 개발 모드 (HMR)             |
| `pnpm build`    | 프로덕션 빌드               |
| `pnpm start`    | 로컬 서버(빌드 결과 미리보기)|
| `pnpm lint`     | ESLint(core‑web‑vitals)     |
citeturn0file0

## 🖌️ 스타일 & UI
- **Tailwind Config** 확장: 전역 폰트 변수(`--font‑pretendard`, `--font‑climate‑crisis`) 및 DaisyUI `winter` 테마 적용.
- DaisyUI 컴포넌트를 그대로 사용하면서 필요 시 Tailwind 유틸리티로 세밀 조정.
- 반응형 레이아웃은 `max-w-4xl` 컨테이너 중심으로 설계.

## 📑 메타데이터
`const/metadata.ts` 에서 Open Graph·SEO 태그를 일괄 관리합니다.  
사이트 제목·설명·OG 이미지 경로만 변경하면 손쉽게 다른 이벤트로 재활용할 수 있습니다. citeturn0file0

## 🤝 Contributing
1. 포크 후 새로운 브랜치(`feat/my-awesome-feature`)를 생성하세요.  
2. 커밋 메시지는 Conventional Commits 규칙을 지켜 주세요.  
3. PR 제출 전 `pnpm lint`로 코드 품질을 확인합니다.

## 📝 라이선스
[MIT](LICENSE) – 자유롭게 사용·수정·배포 가능하나,  
저작권 및 라이선스 전문을 반드시 포함해야 합니다.

## 🙏 Acknowledgements
- **Elice Lab 부산점** — 공간 및 장비 후원
- **JetBrains, 한빛미디어, Elba** — 경품 및 운영 지원
- 모든 소주톤 참가자와 운영진 여러분, 그리고 커뮤니티에 감사드립니다!

---

> Made with ☕, 🎧 DJ Okawari, and plenty of 소주. Enjoy your 얼레벌레 바캉스!  
> 문의: [soujucon.community@gmail.com](mailto:soujucon.community@gmail.com)
```

필요에 따라 배너 이미지 경로·스폰서 리스트·메타데이터 등을 업데이트해 주세요.  
추가 개선 사항이나 다른 섹션(예: 환경 변수, CI/CD 설명 등)이 필요하면 알려주시면 이어서 도와드리겠습니다!
