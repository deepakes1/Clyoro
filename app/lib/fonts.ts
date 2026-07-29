import { Bebas_Neue, DM_Sans, DM_Serif_Display } from 'next/font/google';

export const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
export const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });
export const dmSerif = DM_Serif_Display({ subsets: ['latin'], style: ['normal', 'italic'], weight: '400' });
