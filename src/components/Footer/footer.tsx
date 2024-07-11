import Image from 'next/image';

export default function Footer() {
    return (
        <div className="Footer">
            <div className='Footer_holder'>
                <div className="Footer_container">
                    <div className="Footer_icon-box">
                        <a href="https://www.instagram.com/pic_best_moments" target="_blank">
                            <Image
                                src="/instagram.webp"
                                width={100} 
                                height={100}
                                alt="The logo of instagram"
                                className="Footer_social Footer_img"
                            />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552729176710" target="_blank">
                            <Image
                                src="/facebook.webp"
                                width={100}
                                height={100}
                                alt="The logo of facebook"
                                className="Footer_social Footer_img"
                            />
                        </a>
                        <a href="https://t.me/Yacha_01" target="_blank">
                            <Image
                                src="/telegram.webp"
                                width={100}
                                height={100}
                                alt="The logo of telegram"
                                className="Footer_social Footer_img"
                            />
                        </a>
                        <a href='https://wa.me/34645550126' target="_blank">
                            <Image
                                src="/whatsapp.webp"
                                width={100}
                                height={100}
                                alt="The logo of whatsapp"
                                className="Footer_social Footer_img"
                            />
                        </a>
                    </div>
                    <div className='Footer_text-box'>
                        <p className='Footer_text'>Built with</p>
                        <a href='https://nextjs.org/' target='_blank'>
                            <Image
                                src="/next.webp"
                                width={100}
                                height={100}
                                alt="The logo of next"
                                className="Footer_social Footer_img"
                            />
                        </a>
                        <p className='Footer_text'>Made by Mejor Tech</p>
                    </div>
                </div>
                <div className="Footer_text-down">
                    <p>© All Rights Reserved Terms of Use and Privacy Policy</p>
                    <a href="mailto:photographbusiness01@gmail.com" target="_blank">photographbusiness01@gmail.com</a>
                </div >
            </div>
        </div>
    )
}