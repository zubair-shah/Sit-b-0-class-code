import hero1200 from '../assets/img/hero-1200.png'
import hero838 from '../assets/img/hero-838.png'
import hero300 from '../assets/img/hero-300.png'

function Banner() {
    return (
        <>
            {/* <!-- ============================banner-start================= --> */}
            <section id="hero">
                <picture>
                    <source srcSet={hero1200} media="(min-width: 839px)" />
                    <source srcSet={hero838} media="(min-width: 301px)" />
                    <img src={hero300} alt="Rainbow hero image banner." />
                </picture>
            </section>

            {/* <!-- ============================banner-end========================= --> */}
        </>
    )
}

export default Banner;