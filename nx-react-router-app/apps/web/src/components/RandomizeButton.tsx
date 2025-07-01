import { useState } from 'react';
import { useBreadcrumbs } from '../lib/breadcrumb-context';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

export default function RandomizeButton() {
  const { randomize } = useBreadcrumbs();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await randomize();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant="outline"
      className="bg-blue-500 text-white hover:bg-blue-600"
      size="sm"
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading...
        </span>
      ) : (
        'Randomize!'
      )}
    </Button>
  );
}
