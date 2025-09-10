# 클라우드 기반 AI융합 자바 풀스택 웹 개발자 실전 과정 실습 기록

## 📚 실습 기록

- **2025-09-10:** [git 프로젝트 생성](git/git-init/README.md)

---

## 💻 실습 내역

### Git 초기 설정

1.  **폴더 및 파일 생성**
    - `practice` 폴더 생성
    - `practice/git/git-init` 파일 생성
    ```bash
    touch git-init
    ```

2.  **Git 저장소 초기화**
    ```bash
    git init
    ```

3.  **파일 스테이징**
    ```bash
    git add .
    ```

4.  **로컬 커밋**
    ```bash
    # 스테이징에서 로컬 저장소로 이동: git commit -m "커밋 메시지"
    git commit -m "1. practice_20250910 commit"
    ```

5.  **원격 저장소 연결 확인**
    ```bash
    git remote -v
    ```

6.  **원격 저장소 연결**
    ```bash
    # 원격 저장소 연결: git remote add <별칭> <원격 저장소 주소>
    git remote add practice https://github.com/qqqkyj/practice.git
    ```

7.  **원격 저장소로 푸시**
    ```bash
    # 로컬 저장소에서 원격 저장소로 이동: git push <원격저장소 명> <브랜치 명>
    git push practice main
    ```