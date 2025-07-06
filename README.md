# ユーザー管理アプリ / User Management App

React + TypeScript + Vite + Chakra UI を使って開発したシンプルなユーザー管理アプリです。  
This is a simple user management app built with React, TypeScript, Vite, and Chakra UI.

ログイン、ユーザー一覧の表示、詳細モーダルの表示などの機能を備えており、モダンなReact開発の学習を目的に作成されました。  
It features login, user list display, and user detail modals — intended as a modern UI practice project.

---

## 🔧 使用技術 / Tech Stack

- React 18 + Vite  
- TypeScript  
- Chakra UI  
- ESLint (TypeScript rules)  
- Custom React Hooks  

---

## ✅ 主な機能 / Features

- ユーザーIDによるログイン（パスワードなし）  
  Login with user ID (no password)  
- ユーザー一覧の取得と表示  
  Fetch and display user list  
- ユーザー詳細モーダル  
  User detail shown in a modal  
- 管理者判定によるUI制御  
  Conditional UI based on admin check  
- レスポンシブ対応  
  Responsive layout with Chakra UI  

---

## 📁 ディレクトリ構成 / Directory Structure
src/
├── components/
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── Login.tsx
│ │ └── UserManagement.tsx
│ └── organisms/User/
│ ├── UserCard.tsx
│ └── UserDetailModal.tsx
├── hooks/
│ ├── useAuth.ts
│ ├── useAllUsers.ts
│ ├── useLoginUser.ts
│ └── useSelectUser.ts


---

## 🚀 セットアップ方法 / Getting Started

```bash
git clone https://github.com/hiroki-saito08/react-user-management.git
cd react-user-management
npm install
npm run dev

🗓️ 作成時期 / Created
2025年6月 / June 2025
