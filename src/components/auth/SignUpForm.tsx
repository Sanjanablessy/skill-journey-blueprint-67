
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useEmailValidation } from '@/hooks/useEmailValidation';

interface SignUpFormProps {
  onSubmit: (email: string, password: string, fullName: string) => Promise<void>;
  isLoading: boolean;
}

const SignUpForm = ({ onSubmit, isLoading }: SignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({ email: '', password: '', fullName: '' });
  const { emailErrors, validateEmail, handleEmailChange, setEmailErrors } = useEmailValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(signupData.email)) {
      setEmailErrors(prev => ({ ...prev, signup: 'Please enter a valid email address' }));
      return;
    }

    await onSubmit(signupData.email, signupData.password, signupData.fullName);
  };

  const handleEmailInputChange = (email: string) => {
    setSignupData(prev => ({ ...prev, email }));
    handleEmailChange(email, 'signup');
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Create a new account to get started with your IT career journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="signup-fullname">Full Name</Label>
          <Input
            id="signup-fullname"
            type="text"
            placeholder="Your full name"
            value={signupData.fullName}
            onChange={(e) => setSignupData(prev => ({ ...prev, fullName: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-email">Email</Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="your@email.com"
            value={signupData.email}
            onChange={(e) => handleEmailInputChange(e.target.value)}
            className={emailErrors.signup ? "border-red-500" : ""}
            required
          />
          {emailErrors.signup && (
            <p className="text-sm text-red-500">{emailErrors.signup}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="signup-password">Password</Label>
          <div className="relative">
            <Input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Choose a password"
              value={signupData.password}
              onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading || !!emailErrors.signup}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Account
        </Button>
      </CardFooter>
    </form>
  );
};

export default SignUpForm;
