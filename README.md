# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# SAPUI5_ReactNative_OData

## 🚀 Overview
This is a **React Native** application that integrates **SAP UI5** with **OData** to display product data from an SAP Cloud system. Built using **Expo**, it supports **Web, iOS, and Android** platforms.

## 📌 Features
- 🌐 Fetches product data from **SAP OData API**.
- 📱 Works on **Web, iOS, and Android** using **React Native**.
- 🏗️ Uses **Expo Router** for navigation.
- 🔗 Integrates with **SAP Cloud**.
- 🎨 Follows **SAP Fiori** UI principles.

## 🛠️ Installation
### **1️⃣ Clone the Repository**
```sh
git clone git@github.com:Larzzondev/SAPUI5_ReactNative_OData.git
cd SAPUI5_ReactNative_OData
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
To run the app locally:
```sh
npx expo start
```
- Press `w` to run **Web** version.
- Press `i` to open in **iOS simulator**.
- Press `a` to open in **Android emulator**.

## 📄 Folder Structure
```
SAPUI5_ReactNative_OData/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx       # Home screen
│   │   ├── explore.tsx     # Explore screen
│   │   ├── _layout.tsx     # Tab navigation layout
├── components/
│   ├── HelloWave.tsx       # Animated component
│   ├── ThemedText.tsx      # Text component with themes
│   ├── ThemedView.tsx      # View component with themes
├── assets/
│   ├── images/
│   │   ├── icon.png        # App icon
│   │   ├── splash.png      # Splash screen image
├── package.json            # Project dependencies
├── app.json                # Expo app config
├── tsconfig.json           # TypeScript config
```

## 🌍 API Integration
This app fetches product data from an **OData API** using `axios`.

### **Example API Request**
```js
const API_URL = 'https://my-mock-odata-api.com/products';

useEffect(() => {
    axios.get(API_URL)
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
}, []);
```

## 🔄 Future Enhancements
- ✅ Implement authentication with **OAuth/SAP SSO**.
- ✅ Add offline support using **SQLite**.
- ✅ Improve UI/UX based on **SAP Fiori Guidelines**.

## 🎯 Next Steps: SwiftUI + SAP UI5
We are transitioning to **SwiftUI** for iOS, integrating **SAP UI5** via `WKWebView`.

## 💡 Contributing
Feel free to fork the repository and submit pull requests! 🚀

## 📜 License
MIT License. Created by **LarzzonDev**.

