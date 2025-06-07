
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface UseOpenAIProps {
  systemPrompt?: string;
}

export const useOpenAI = ({ systemPrompt }: UseOpenAIProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateResponse = async (message: string): Promise<string | null> => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('openai-chat', {
        body: {
          message,
          systemPrompt,
        },
      });

      if (error) {
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      return data.response;
    } catch (error) {
      console.error('OpenAI API error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to generate response',
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generateResponse,
    isLoading,
  };
};
