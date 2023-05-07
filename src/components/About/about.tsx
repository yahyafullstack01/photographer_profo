export default function About() {
    return (
        <div className="About">
            <h1 className="About_title">About Me</h1>
            <div className="About_grid">
                <div className="About_text-con">
                    <p className="About_text">
                        I understand the importance of capturing moments that are meaningful and special. I have always been passionate about photography, and over the years, I have honed my skills and developed my unique style.
                        My approach to photography is to capture authentic and natural moments that reflect the true personality of my subjects.
                        <br></br><br></br>
                        My love for photography began when I received my first camera as a gift from my parents. From that moment, I was hooked, and I have been capturing memories ever since. I take pride in being able to create a comfortable and relaxed environment for my clients, which allows me to capture their genuine emotions and personalities.
                        Whether it's a family photoshoot, engagement shoot, or wedding, I strive to create images that evoke emotion and tell a story.
                        <br></br><br></br>
                        My passion for photography drives me to continually improve my craft and stay up-to-date with the latest techniques and equipment.
                        Thank you for considering me as your photographer. I would be honored to capture your memories and create images that you will cherish for a lifetime.
                    </p>
                </div>
                <img
                    className="About_img"
                    src="/Me.jpg"
                    alt="About Me photo"
                />
            </div>
        </div>
    )
}