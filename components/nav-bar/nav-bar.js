import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <>
            <nav className="d-flex d-md-none justify-content-center border-bottom">
                <Link href='/'>
                    <a className="nav-link px-lg-3 py-3 py-lg-4">
                        Home
                    </a>
                </Link>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-md-flex" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link href="/">
                        <a className="navbar-brand"> <Image src="/android-chrome-192x192.png" alt="milad" width="30" height="30" /> Milad E. Fahmy</a>
                    </Link>
                    <button className="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4">
                                        Home
                                    </a>
                                </Link></li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4">About</a>
                                </Link></li>
                            <li className="nav-item">
                                <Link href="/posts/a-surprising-feature-of-javaScript-optional-chaining">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4">Sample Post</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4">Contact</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://miladezzat.github.io">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4">Http Status Codes</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}