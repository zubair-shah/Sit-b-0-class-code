import logo2 from '../assets/img/logo2.png'

function OurMission() {

    return (
        <>
            {/* <!-- ==============================mission-start================== --> */}
            <section id="mission">
                <h2>Our Mission</h2>
                <div className="mission-text">
                    <p>
                        <img src={logo2} alt="logo.png" className="missionimg" />
                        We strive to bring people interesting and unique art that inspires them to be more creative and enjoy their homes. We know art can be expensive, so we work with
                        a rotating set of artists and photographers to being you fantastic prints - all for free. We just ask that you donate what you think is fair, or share the site with someone who might like great art as much as you do.
                    </p>
                </div>
            </section>
            {/* <!-- ==== */}
        </>
    )
}

export default OurMission;