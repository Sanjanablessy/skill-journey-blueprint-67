
import { useState } from 'react';

export const useEmailValidation = () => {
  const [emailErrors, setEmailErrors] = useState({ login: '', signup: '' });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (email: string, type: 'login' | 'signup') => {
    if (email && !validateEmail(email)) {
      setEmailErrors(prev => ({ ...prev, [type]: 'Please enter a valid email address' }));
    } else {
      setEmailErrors(prev => ({ ...prev, [type]: '' }));
    }
  };

  return {
    emailErrors,
    validateEmail,
    handleEmailChange,
    setEmailErrors
  };
};
