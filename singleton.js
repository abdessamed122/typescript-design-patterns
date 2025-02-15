// //------------good partcise //-------------------------------
// class Logger {
//     private static instance: Logger;
//     // Private constructor prevents direct instantiation
//     private constructor() {}
//     // Public method to get the single instance
//     public static getInstance(): Logger {
//       if (!Logger.instance) {
//         Logger.instance = new Logger();
//       }
//       return Logger.instance;
//     }
//     //  end of Public method to get the single instance
//     public log(message: string): void {
//       console.log(`[LOG]: ${message}`);
//     }
//   }
//   // Usage:
//   const logger1 = Logger.getInstance();
//   const logger2 = Logger.getInstance();
//   logger1.log("Singleton pattern in TypeScript");
//   logger2.log("Same instance is used");
//   // Checking if both instances are the same
//   console.log(logger1 === logger2); // Output: true
// ------------good partcise //-------------------------------
// ------------bad partcise //-------------------------------
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) {
        console.log("[LOG]: ".concat(message));
    };
    return Logger;
}());
// Creating multiple instances
var logger1 = new Logger();
var logger2 = new Logger();
logger1.log("Message from logger1");
logger2.log("Message from logger2");
console.log(logger1 === logger2); // Output: false (different instances)
