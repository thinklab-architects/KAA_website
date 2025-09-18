# KAA Website

這是一個使用 GitHub Pages 建立的專業網站，經過優化可在 VS Code 中使用 GPT Codex 進行編輯。

## 🚀 快速開始

### 1. 克隆專案
```bash
git clone https://github.com/thinklab-architects/KAA_website.git
cd KAA_website
```

### 2. 在 VS Code 中開啟
```bash
code .
```

### 3. 安裝建議的擴展
VS Code 會自動提示安裝建議的擴展，包括：
- GitHub Copilot（GPT Codex 功能）
- GitHub Copilot Chat
- Live Server（本地開發伺服器）
- Prettier（程式碼格式化）

### 4. 本地開發
1. 安裝 Live Server 擴展後，右鍵點擊 `index.html`
2. 選擇 "Open with Live Server"
3. 瀏覽器會自動開啟 `http://localhost:5500`

## 📁 專案結構

```
KAA_website/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── script.js           # JavaScript 功能
├── _config.yml         # Jekyll 配置（GitHub Pages）
├── .vscode/            # VS Code 設定
│   ├── settings.json   # 編輯器設定
│   ├── extensions.json # 建議的擴展
│   └── launch.json     # 調試配置
├── .gitignore          # Git 忽略文件
├── LICENSE             # MIT 授權
└── README.md           # 說明文件
```

## 🛠️ 使用 GPT Codex 編輯

### 啟用 GitHub Copilot
1. 確保已安裝 GitHub Copilot 擴展
2. 登入 GitHub 帳戶
3. 開始輸入程式碼，Copilot 會自動提供建議

### 最佳實踐
- 使用描述性的註解來獲得更好的建議
- 利用 Copilot Chat 進行程式碼討論和問題解決
- 使用 `Ctrl+Space` 手動觸發建議

## 🌐 GitHub Pages 部署

網站會自動部署到 GitHub Pages：
- URL: `https://thinklab-architects.github.io/KAA_website`
- 每次推送到 `main` 分支時自動更新

### 啟用 GitHub Pages
1. 前往 GitHub 專案設定
2. 找到 "Pages" 部分
3. 選擇 Source: "Deploy from a branch"
4. 選擇 Branch: "main" 和 "/ (root)"

## 🎨 自訂網站

### 修改內容
- 編輯 `index.html` 來改變網站內容
- 更新 `styles.css` 來調整樣式
- 修改 `script.js` 來增加互動功能

### 配置設定
- 編輯 `_config.yml` 來調整 Jekyll 設定
- 更新網站標題、描述等資訊

## 🔧 開發工具

### 本地伺服器
使用 Live Server 擴展進行即時預覽：
```bash
# 安裝擴展後，右鍵點擊 HTML 文件
# 選擇 "Open with Live Server"
```

### 程式碼格式化
使用 Prettier 進行自動格式化：
```bash
# 保存時自動格式化（已在設定中啟用）
# 或使用快捷鍵 Shift+Alt+F
```

## 📱 響應式設計

網站已經過優化，支援多種設備：
- 桌面電腦（1200px+）
- 平板電腦（768px - 1199px）
- 手機（< 768px）

## 🤝 貢獻

1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/新功能`)
3. 提交變更 (`git commit -am '新增某功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 建立 Pull Request

## 📄 授權

本專案使用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件。

## 🆘 支援

如有問題或建議，請：
- 建立 Issue
- 聯繫專案維護者
- 查看 GitHub Pages 文件

---

**注意**: 這個網站已經過優化，可以與 VS Code 的 GPT Codex (GitHub Copilot) 完美配合使用，提供智能程式碼建議和協助。