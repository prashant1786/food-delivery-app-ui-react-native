# Food Delivery App UI - React Native

## Project Overview

This project is a Food Delivery App UI built using React Native with Expo.

The main goal of this assignment was to implement all major React Navigation patterns inside one complete application.

The app demonstrates:

- Stack Navigation
- Bottom Tab Navigation
- Drawer Navigation
- Nested Navigators
- Authentication Flow
- AsyncStorage Persistence
- Deep Linking
- Programmatic Navigation
- Screen Transition Animations

---

# Tech Stack

- React Native
- Expo SDK 56
- React Navigation v7
- AsyncStorage
- Expo Vector Icons

---

# Screenshots

## <image src="ss1.png" height="700">

## <image src="ss2.png" height="700">

## <image src="ss3.png" height="700">

## <image src="ss4.png" height="700">

## <image src="ss5.png" height="700">

# Features

## Authentication Flow

- Onboarding Screen
- Login Screen
- Persisted Authentication State
- Logout Functionality

---

## Stack Navigation

Flow:

Onboarding → Login → Home → Restaurant Detail → Cart

Features:

- Params Passing
- Custom Headers
- Back Navigation
- Transition Animations

---

## Bottom Tab Navigation

Tabs Included:

- Home
- Search
- Orders
- Profile

Features:

- Vector Icons
- Orders Badge
- Nested Home Stack
- Hidden Tab Bar on Detail and Cart Screens

---

## Drawer Navigation

Drawer inside Profile Tab includes:

- My Orders
- Settings
- Help
- Logout

Features:

- Custom Drawer Content
- User Avatar
- User Name

---

# Navigation Structure

```txt
Root Navigator
│
├── Auth Stack
│   ├── Onboarding
│   └── Login
│
└── Bottom Tabs
    │
    ├── Home Stack
    │   ├── Home
    │   ├── Restaurant Detail
    │   └── Cart
    │
    ├── Search
    ├── Orders
    │
    └── Profile Drawer
        ├── Profile
        ├── My Orders
        ├── Settings
        ├── Help
        └── Logout
```

---

# Programmatic Navigation Used

| Method   | Usage                    |
| -------- | ------------------------ |
| navigate | Home → Restaurant Detail |
| goBack   | Cart → Previous Screen   |
| replace  | Onboarding → Login       |
| reset    | Login → Main App         |

---

# Deep Linking Setup

Configured using Expo Linking.

Example:

```bash
npx uri-scheme open foodapp://restaurant/123 --android
```

---

# Project Structure

```txt
src/
│
├── navigation/
├── screens/
│   ├── auth/
│   ├── home/
│   ├── tabs/
│   └── drawer/
│
├── context/
├── components/
└── assets/
```

---

# How to Run Locally

## Clone Repository

```bash
git clone https://github.com/prashant1786/food-delivery-app-ui-react-native
```

## Install Dependencies

```bash
npm install
```

## Start Expo

```bash
npx expo start
```

---

# Assumptions Made

- Mock authentication is used
- Static restaurant data is used
- No backend integration
- Cart state is stored locally

---
