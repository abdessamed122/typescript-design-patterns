

## **🛠️ Singleton Pattern**  

### **📌 Definition**  
The **Singleton Pattern** ensures that a class has **only one instance** and provides a **global access point** to that instance. This is useful when only one object is needed to coordinate actions across a system, such as logging, configuration management, or database connections.

---

### **📖 How It Works?**  
1. The class has a **private static instance** that stores the single instance.  
2. The **constructor is private**, preventing direct instantiation.  
3. A **public static method (`getInstance()`)** is used to return the single instance, creating it if necessary.  

---

### **📝 Singleton Pattern in TypeScript**  

```typescript
class Singleton {
  private static instance: Singleton;

  // Private constructor prevents direct instantiation
  private constructor() {}

  // Public method to get the single instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

// Usage
const logger1 = Singleton.getInstance();
const logger2 = Singleton.getInstance();

logger1.log("Singleton pattern in TypeScript");

// Check if both instances are the same
console.log(logger1 === logger2); // Output: true
```

---

### **✅ Key Features**  
✔ **Ensures a single instance** of the class.  
✔ **Prevents multiple instantiations**, saving memory.  
✔ **Useful for logging, caching, and shared resources.**  

---

### **🚀 Real-World Examples**  
- **Logging System** (Ensures only one logger writes logs)  
- **Database Connection Pool** (Only one connection manager for efficiency)  
- **Configuration Manager** (Ensures a single source of truth for settings)  

---

### **⚠️ Problems Without Singleton**
If we don’t use the Singleton Pattern, multiple instances of a class could be created, leading to:  
❌ **Inconsistent state** (e.g., different loggers writing logs differently).  
❌ **Memory wastage** (Unnecessary object duplication).  
❌ **Uncontrolled resource access** (e.g., multiple database connections).  

Example **without** Singleton:  
```typescript
class Logger {
  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

console.log(logger1 === logger2); // Output: false (Different instances)
```

---

### **🎯 Conclusion**
The **Singleton Pattern** is useful when a class should have **only one instance** throughout the lifecycle of an application. It helps in managing **shared resources efficiently** and ensures **global access to a single instance**.  

🚀 **Use it wisely!** Avoid it if multiple instances are needed for better scalability.  

---

