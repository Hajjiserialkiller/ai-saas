import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';

export const fetchAIOutput = async () => {
  const results = await db.select().from(AIOutput);
  return results;
};