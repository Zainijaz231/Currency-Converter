# 💱 Currency Converter

A premium-grade currency converter application built with React 19 and modern web technologies. Features real-time exchange rates, comprehensive dark mode, glass-morphism design, and seamless user experience with auto-conversion capabilities.

![Currency Converter Preview](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Dark Mode](https://img.shields.io/badge/Dark_Mode-✨-black?style=for-the-badge&logoColor=white)

## ✨ Features

### 🌟 **Core Functionality**
- 🌍 **Real-time Exchange Rates**: Live currency rates from ExchangeRate-API
- 🔄 **Instant Currency Switching**: Quick swap functionality with smooth animations
- ⚡ **Auto-conversion**: Real-time updates as you type (no button clicking needed!)
- 📊 **Exchange Rate Display**: Shows current rates with precision formatting
- 🎯 **Popular Currency Shortcuts**: Quick-select chips for major currencies
- 💰 **Currency Symbols & Flags**: Beautiful flag emojis and currency symbols

### 🎨 **Design & UX**
- 🎭 **Glass-morphism UI**: Ultra-modern translucent design with backdrop blur
- 🌈 **Gradient Backgrounds**: Multi-layered gradient effects with radial gradients
- 💫 **Smooth Animations**: Fluid transitions, hover effects, and micro-interactions
- 📱 **Fully Responsive**: Perfect experience across all devices
- 🎪 **Interactive Elements**: Engaging hover states and visual feedback
- 🔢 **Number Formatting**: Professional thousands separators and decimal handling

### 🌙 **Dark Mode System**
- 🌅 **Light Mode**: Bright, vibrant design with modern gradients
- 🌙 **Dark Mode**: Elegant dark theme with deep purple-blue gradients  
- 💻 **System Mode**: Auto-follows OS theme preference (default)
- 🎛️ **Smart Toggle**: Animated sun/moon/system icons with status indicators
- 💾 **Persistent Settings**: Remembers your preference automatically
- 🔄 **Real-time Switching**: Instant theme changes without page reload

### 🚀 **Technical Excellence**
- ⚡ **Custom Hooks**: Efficient `useCurrencyInfo` hook with error handling
- 🛡️ **Error Management**: Comprehensive error states and fallback APIs
- 🔧 **TypeScript Ready**: Structured for easy TypeScript integration
- 📦 **Vite Build**: Lightning-fast development and optimized production builds
- 🧹 **Clean Code**: Well-organized components and context management

## 🛠️ Technologies Used

- **React 19.1.1** - Latest React with modern features and hooks
- **Vite 7.1.7** - Lightning-fast build tool and development server
- **React Context API** - Theme management with dark/light/system modes
- **Custom Hooks** - `useCurrencyInfo` for efficient API management
- **CSS3** - Modern styling with gradients, animations, and glass-morphism
- **ExchangeRate-API** - Reliable free currency exchange rate service
- **ES6+** - Modern JavaScript features with async/await patterns

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zainijaz231/Currency-Converter
   cd currency-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 📱 Usage

### 💱 **Currency Conversion**
1. **Select Source Currency**: Choose the currency you want to convert from
2. **Enter Amount**: Input the amount - auto-conversion happens instantly!
3. **Select Target Currency**: Choose the destination currency
4. **View Results**: See converted amount and exchange rate automatically
5. **Quick Swap**: Click the swap button to reverse currencies instantly
6. **Popular Currencies**: Click currency chips for quick currency selection

### 🌙 **Dark Mode Control**
- **🌅 Light Mode**: Click theme toggle for bright, vibrant interface
- **🌙 Dark Mode**: Switch to elegant dark theme for comfortable viewing
- **💻 System Mode**: Default mode that follows your OS theme preference
- **🔄 Cycling**: Click the toggle to cycle: Light → Dark → System → Light
- **💾 Persistence**: Your theme choice is remembered across sessions

## 🎯 Key Components

### Custom Hook: `useCurrencyInfo`

```javascript
const { data, loading, error } = useCurrencyInfo(from);
```

**Features:**
- 🔄 Real-time currency data fetching
- ⏳ Loading state management
- 🛡️ Error handling with fallback APIs
- 🔄 Auto-refetching on currency changes
- 📊 Structured data return format

### Input Component

```javascript
<Input
  label="From"
  amount={amount}
  currencyOptions={options}
  selectCurrency={from}
/>
```

**Features:**
- 🎨 Enhanced styling with glass-morphism
- 🌍 Currency flags and symbols
- 💰 Professional number formatting
- 📱 Fully responsive design
- ♿ Accessible form controls

### Theme System

```javascript
import { useTheme } from './contexts/ThemeContext';
const { theme, toggleTheme, isLight, isDark } = useTheme();
```

**Features:**
- 🌙 Complete dark/light mode support
- 💻 System theme detection
- 💾 Persistent theme storage
- 🔄 Smooth transitions
- 🎛️ Smart toggle controls

### Theme Toggle Component

```javascript
<ThemeToggle />
```

**Features:**
- 🎭 Animated icon transitions
- 📊 Visual status indicators
- 🎯 Three-mode cycling
- 📱 Mobile-optimized interface

## 🎨 Design Features

### 🌟 **Visual Design**
- **🎭 Glass-morphism Effect**: Translucent cards with backdrop blur and subtle shadows
- **🌈 Multi-layer Gradients**: Radial and linear gradients for depth and richness
- **💫 Smooth Animations**: Fluid transitions, hover effects, and micro-interactions
- **🎭 Modern Typography**: Clean, readable fonts with perfect spacing
- **📱 Responsive Grid**: Adapts beautifully to all screen sizes
- **🎪 Interactive Elements**: Engaging hover states and visual feedback

### 🌙 **Theme System**
- **🌅 Light Mode**: Bright, vibrant interface with purple-blue gradients
- **🌙 Dark Mode**: Elegant dark theme with deep, rich color palette
- **💻 System Integration**: Auto-detects and follows OS theme preference
- **🔄 Theme Transitions**: Smooth 0.3s transitions between all modes
- **🎛️ Smart Toggle**: Animated icons with status indicators and tooltips
- **💾 Persistent Settings**: Theme preference saved in localStorage

## 📁 Project Structure

```
currency-projects/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Input.jsx           # Enhanced input component with flags & symbols
│   │   └── ThemeToggle.jsx     # Dark mode toggle component
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Theme management context
│   ├── hooks/
│   │   └── useCurrencyInfo.js  # Custom currency API hook with error handling
│   ├── App.css                 # Comprehensive styles with dark mode support
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles and input styling
│   └── main.jsx                # Application entry point with theme provider
│
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Information

This application uses **ExchangeRate-API** for real-time exchange rates:

- **Primary API**: `https://api.exchangerate-api.com/v4/latest/{currency}`
- **Fallback API**: Automatic fallback for reliability
- **Data Source**: Live, frequently updated currency rates
- **Features**: Free tier, no API key required for basic usage
- **Error Handling**: Comprehensive error management with retry mechanisms
- **CORS**: Fully enabled for browser requests

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Future Enhancements

- [ ] 📈 Historical exchange rate charts and graphs
- [ ] 💝 Currency favorites and portfolio tracking
- [ ] 📱 Offline mode with cached rates and PWA support
- [ ] 🎨 Additional theme variations (Ocean, Forest, Sunset)
- [ ] 💱 Crypto currency support (BTC, ETH, etc.)
- [ ] 📊 Currency trend analysis and predictions
- [ ] 📤 Export conversion history and reports
- [ ] 🗣️ Voice conversion for accessibility
- [ ] 🌐 Multi-language support (i18n)
- [ ] 📋 Copy conversion result with one click
- [ ] 🎯 Smart currency suggestions based on location

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



If you have any questions or need help with this project, please open an issue or contact the maintainer.

---

⭐ **Star this repository if you found it helpful!**
