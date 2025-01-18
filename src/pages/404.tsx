import { useTranslation } from "next-i18next";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";

export default function ERRPAGE() {
    const { t } = useTranslation("Home");
    const Error_code: any = t('Error_code', { returnObjects: true });
    const Error_btn: any = t('Error_btn', { returnObjects: true });

    return (
        <div className="ErrPage">
            {Error_code[0]}<br />
            {Error_code[1]}<br />
            <Link href="/">
                <button className="ErrPage_btn">{Error_btn}</button>
            </Link>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const lang = locale ?? 'en';

    return {
        props: {
            ...(await serverSideTranslations(lang, ['Home'])),
        },
    };
};