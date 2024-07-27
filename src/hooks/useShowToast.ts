import { useToast } from '@/components/ui/use-toast';
import { useCallback } from 'react';

const useShowToast = () => {
	const { toast } = useToast();

	//useCallback used to prevent infinite loop, by caching the function
	const showToast = useCallback(
		(
			title: string,
			description: string,
			variant: 'default' | 'destructive' = 'default'
		) => {
			toast({
				title: title,
				description: description,
				variant: variant,
			});
		},
		[toast]
	);
	return showToast;
};

export default useShowToast;
