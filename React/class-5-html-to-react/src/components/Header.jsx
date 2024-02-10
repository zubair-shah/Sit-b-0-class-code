import logo from '../assets/img/header-logo.svg'

function Header() {

    return (
        <>
            {/* <!-- ========================header-start===================== --> */}
            <div className="header">
                <header>
                    <nav>
                        <ul>
                            <li><a href="#"><img src={logo} alt="Wall of Wonder" /></a></li>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Donate</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            {/* <!-- ==============================header-end================== --> */}
        </>
    )
}

export default Header;