import { guid } from '@datorama/akita';

export interface Posting {
  id: string;
  title: string;
  company: string;
  salaryMin: number;
  salaryMax: number;
  city: string;
  street: string;
  postalCode: string;
}

/**
 * A factory function that creates Posting
 */
export function createPosting(params: Partial<Posting>): Posting {
  return {
    id: guid(),
    ...params
  } as Posting;
}
