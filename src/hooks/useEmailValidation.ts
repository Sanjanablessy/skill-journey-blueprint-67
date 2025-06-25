
import { useState } from 'react';

export const useEmailValidation = () => {
  const [emailErrors, setEmailErrors] = useState({ login: '', signup: '' });

  const validateEmail = (email: string): boolean => {
    // More comprehensive email validation with Google domain check
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    // Check if email is not empty and matches the regex
    if (!email || email.trim() === '') {
      return false;
    }
    
    // Check for basic format
    if (!emailRegex.test(email)) {
      return false;
    }
    
    // Additional checks
    const parts = email.split('@');
    if (parts.length !== 2) return false;
    
    const [localPart, domain] = parts;
    
    // Local part validation
    if (localPart.length === 0 || localPart.length > 64) return false;
    if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
    if (localPart.includes('..')) return false;
    
    // Domain validation
    if (domain.length === 0 || domain.length > 253) return false;
    if (domain.startsWith('.') || domain.endsWith('.')) return false;
    if (domain.includes('..')) return false;
    
    // Google email domain validation
    const googleDomains = ['gmail.com', 'googlemail.com'];
    const domainLower = domain.toLowerCase();
    if (!googleDomains.includes(domainLower)) {
      return false;
    }
    
    return true;
  };

  const handleEmailChange = (email: string, type: 'login' | 'signup') => {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      setEmailErrors(prev => ({ ...prev, [type]: 'Email is required' }));
    } else if (!validateEmail(trimmedEmail)) {
      const parts = trimmedEmail.split('@');
      if (parts.length === 2) {
        const domain = parts[1].toLowerCase();
        const googleDomains = ['gmail.com', 'googlemail.com'];
        if (!googleDomains.includes(domain)) {
          setEmailErrors(prev => ({ ...prev, [type]: 'Please use a valid Google email address (Gmail)' }));
        } else {
          setEmailErrors(prev => ({ ...prev, [type]: 'Please enter a valid Google email address' }));
        }
      } else {
        setEmailErrors(prev => ({ ...prev, [type]: 'Please enter a valid Google email address' }));
      }
    } else {
      setEmailErrors(prev => ({ ...prev, [type]: '' }));
    }
  };

  const clearEmailError = (type: 'login' | 'signup') => {
    setEmailErrors(prev => ({ ...prev, [type]: '' }));
  };

  return {
    emailErrors,
    validateEmail,
    handleEmailChange,
    setEmailErrors,
    clearEmailError
  };
};
