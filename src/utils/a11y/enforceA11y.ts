 
 export function enforceA11y(
    componentName: string,
    rules: { condition: boolean; message: string }[]
  ): void {
    if (process.env.NODE_ENV !== 'development') return; // Only warns in dev mode
  
    rules.forEach(({ condition, message }) => {
      if (condition) {
        console.warn(`[A11yUI] ${componentName}: ${message}`);
      }
    });
  }
  