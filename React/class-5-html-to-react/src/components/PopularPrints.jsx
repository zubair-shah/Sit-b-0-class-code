import logo2 from '../assets/img/logo2.png'

function PopularPrints() {

    return (
        <>
            <div className="stripe">
                <section id="popular-prints">
                    <h2>
                        Popular Prints
                    </h2>
                    <ul>
                        <li>
                            <figure className="color7">
                                <img src="./assets/img/fork-it-up.jpg" alt="Pop Art: This must be the place" />

                                <figcaption>
                                    <a href="#">Fork It Up</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="color9">
                                <img src="./assets/img/eyeing-you.jpg" alt="Pop Art: This must be the place" />

                                <figcaption>
                                    <a href="#">Eyeing You</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="color6">
                                <img src="./assets/img/lets-scoot.jpg" alt="Pop Art: This must be the place" />

                                <figcaption>
                                    <a href="#">Let's Scoot</a>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default PopularPrints;