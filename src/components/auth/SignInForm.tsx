
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useEmailValidation } from '@/hooks/useEmailValidation';

interface SignInFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
}

const SignInForm = ({ onSubmit, isLoading }: SignInFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { emailErrors, validateEmail, handleEmailChange, setEmailErrors } = useEmailValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(loginData.email)) {
      setEmailErrors(prev => ({ ...prev, login: 'Please enter a valid email address' }));
      return;
    }

    await onSubmit(loginData.email, loginData.password);
  };

  const handleEmailInputChange = (email: string) => {
    setLoginData(prev => ({ ...prev, email }));
    handleEmailChange(email, 'login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="signin-email">Email</Label>
          <Input
            id="signin-email"
            type="email"
            placeholder="your@email.com"
            value={loginData.email}
            onChange={(e) => handleEmailInputChange(e.target.value)}
            className={emailErrors.login ? "border-red-500" : ""}
            required
          />
          {emailErrors.login && (
            <p className="text-sm text-red-500">{emailErrors.login}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="signin-password">Password</Label>
          <div className="relative">
            <Input
              id="signin-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
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
          disabled={isLoading || !!emailErrors.login}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </CardFooter>
    </form>
  );
};

export default SignInForm;
