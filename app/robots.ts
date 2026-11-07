export const dynamic = 'force-static';
import { company } from '@/config/company';
export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: company.url + '/sitemap.xml' };
}
