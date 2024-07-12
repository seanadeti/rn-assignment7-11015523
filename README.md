![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-12 at 23 26 20](https://github.com/user-attachments/assets/750b5bd0-956d-449d-9ef4-360bbba58ad7)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-12 at 23 26 25](https://github.com/user-attachments/assets/831dd46c-61b4-4d9d-8d81-60140d87dc59)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-12 at 23 26 45](https://github.com/user-attachments/assets/17d39eae-b165-4270-8291-5387dc96adf5)

## Features

Product Catalog: Browse through a collection of fashion items fetched from an external API.
Product Details: View detailed information about each product including images, descriptions, and prices.
Shopping Cart: Add products to cart, remove items, and view the total cost.
Persistent Storage: Uses AsyncStorage to persist the user's cart items locally on the device.
Navigation: Implemented with React Navigation for seamless navigation between screens.
Context API: Utilizes React's Context API for state management across different components.

##Design Choices

React Native: Chosen for its ability to develop cross-platform mobile applications with native-like performance.
AsyncStorage: Used for storing cart items locally on the user's device to maintain state between sessions.
Navigation: Employed React Navigation's Drawer and Stack navigators for intuitive navigation flow.
Context API: Implemented to manage global state (cart items) throughout the app.

##Implementation

Screens: Includes Home screen for product listing, Product Detail screen for detailed product view, and Cart screen for managing shopping cart items.
Components: Modularized components such as product cards, cart items, and navigation elements for code reusability.
API Integration: Fetches product data from the 'https://fakestoreapi.com/products' API.
UI/UX: Designed with a clean and minimalist interface, focusing on user-friendly navigation and clear product presentation.
