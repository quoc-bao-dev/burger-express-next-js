import Container from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Box = () => <div className="h-20 w-20 bg-primary"></div>;

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
            <div className="px-16 py-6 bg-primary">
                <h1 className="text-3xl font-bold text-center text-primary-foreground">
                    Burger Express {t('title')}
                </h1>
            </div>
            <Link href={'/color'}>Click here for Color Document</Link>
            <div className="px-16 py-6 bg-background">
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-card rounded-lg p-4">
                        <h2 className="text-lg font-bold text-card-foreground">
                            Menu
                        </h2>
                        <ul>
                            <li>Beef Burger</li>
                            <li>Chicken Burger</li>
                            <li>Vegetarian Burger</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1>Home Page</h1>
            <article>
                <header>
                    <h2>Burger beef</h2>
                </header>
                <div>
                    <p>The good food</p>
                </div>
                <footer>
                    <button>Add to cart</button>
                </footer>
            </article>

            <Container>
                <Box />
            </Container>
        </>
    );
}
