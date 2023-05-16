import { RxCross1 } from 'react-icons/rx';
import { useRouter } from "next/router";


export default function Menu() {
    const router = useRouter();
    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        router.push(router.pathname, router.asPath, { locale: lang });
        console.log(lang);
    };
    return (
        <>
            {/* This is the Menu That Opens Up when pressing The Burger Menu */}
            <section id="Menu" className="Menu-open">
                <div className="Menu-open_Box">
                    <a href="#">
                        <img
                            src="/logo.png"
                            alt="The logo of instagram"
                            className="Container_logo"
                        />
                    </a>
                    <a className="Menu-open_Close" href="#"><RxCross1 className="Menu-open_close" /></a>
                </div>
                <div className="Menu-open_Box-2">
                    <div className="Menu-open_links-con">
                        <a className="Menu-open_links" href="">Packages</a>
                        <a className="Menu-open_links" href="">Blogs</a>
                        <a className="Menu-open_links" href="#Gallery">Gallery</a>
                        <a className="Menu-open_links" href="">Offers</a>
                        <a className="Menu-open_links" href="">FeedBack</a>
                        <a className="Menu-open_links" href="">Contact</a>
                    </div>
                    <div className="Menu-open_lang-con">
                        <select className="Menu-open_selector"
                            defaultValue={router.locale}
                            onChange={handleChangeLanguage}
                        >
                            <option className="Menu-open_option" value="en">English</option>
                            <option className="Menu-open_option" value="uk">Ukrainian</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}