import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
