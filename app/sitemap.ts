export const dynamic = 'force-static';
import { company } from '@/config/company';
export default function sitemap() {
  return [{ url: company.url, changeFrequency: 'monthly' as const, priority: 1 }];
}
