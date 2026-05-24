import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Calgary Cardinals · RMLL Provincials 2026',
  description: 'Home of the 2026 RMLL Alberta Major Female Provincial Championships — July 17–19 at Brentwood Arena, Calgary.',
  openGraph: {
    title: 'Calgary Cardinals · RMLL Provincials 2026',
    description: 'Live scores, schedule, fundraising & more. July 17–19 · Brentwood Arena, Calgary AB.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: '60px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
