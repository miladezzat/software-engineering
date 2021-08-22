import Head from 'next/head';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <NavBar />

            {/* <!-- Page Header--> */}
            <header className="masthead" style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>About Me</h1>
                                <span className="subheading">This is what I do.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Main Content--> */}
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Hello, I`m Milad. I`m Software Engineer and Photographer. You can connect me on <a href='https://www.linkedin.com/in/miladezzat' target='_blank' rel="noopener noreferrer"> LinkedIn </a>, and you can find me on <a href="https://milad-ezzat.netlify.app/">website</a>. I share what I learned about Software Engineering, Productivity, and building new habits on my <a href='https://www.youtube.com/channel/UCewDJdWsup1lIgiV8v7dNnQ' target='_blank' rel="noopener noreferrer"> Youtube channel </a> and blog. Feel free to join my newsletter to follow along.</p>
                            <p>This website for some notes and simple things i learned during my life work, I loved to shared it with you.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Layout>
    )
}