// Import React's StrictMode - helps identify potential problems in development
import { StrictMode } from 'react'

// Import createRoot - the modern way to render React apps (React 18+)
import { createRoot } from 'react-dom/client'

// Import global CSS styles for the entire application
import './index.css'

// Import the main App component - your application's root component
import App from './App.jsx'

// Import Redux Provider - makes Redux store available to all components
import { Provider } from 'react-redux'

// Import the Redux store - contains your global state management
import { store } from './redux/store.js'

// Find the HTML element with id="root" in index.html and create a React root
createRoot(document.getElementById('root')).render(
  // Wrap the entire app with Redux Provider to enable global state access
  <Provider store={store}>
    {/* Render the main App component inside Redux context */}
    <App />
  </Provider>
  // Note: The comma here is unnecessary and can be removed
  ,
)