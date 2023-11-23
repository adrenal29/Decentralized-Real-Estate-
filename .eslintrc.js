module.exports = {
    // ... other configurations
    plugins: ['react-hooks'],
    rules: {
      // ... other rules
      'react-hooks/exhaustive-deps': 'off', // or 'warn' if you want to keep it as a warning
    },
  };