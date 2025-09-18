# KAA 測試站 IA 與內容盤點（摘要）

## 導覽結構
- 公告中心（/news/）
  - 類別：法規、公會公告、公會公文、公文轉達、招標
  - RSS：/news/rss.xml
- 活動與學習（/events/）
  - iCal：/events/ical.ics
- 線上課程（/courses/）
- 設計獎（/awards/）
- 專業資源（/resources/）
- 會員與治理（/membership/）
- 服務（/services/）
- 封存庫（/archive/）
- 關於（/about/）

## 內容模型（摘要）
- Article: id, title, category, tags, summary, body, attachments[], publisher, published_at, updated_at
- Event: id, title, start, end, venue, isCPD, credits{hours,type}, materials[]
- Course: id, title, format(live/on-demand), modules[], credits
- AwardCycle: year, name, categories[], winners[]

## 後續工作
- 公告中心：加全文搜尋/篩選（日期、類別、附件），列表卡片化
- 活動：報名/候補、簽到 QR、教材歸檔、iCal/Google Calendar 雙向
- 服務：線上委託表單 2.0（reCAPTCHA、回執信、案件編號）
- 業務申辦精靈：步驟導引＋附件版本控管
- 設計獎：徵件流程與歷屆庫
- CMS：導入 Strapi/Directus 對應上列模型
