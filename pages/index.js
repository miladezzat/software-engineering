/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { filter } from '../lib/search';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const pageSize = 10;

function paginate(array, pageSize, pageNumber = 1) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData: allPostsData,
        }
    }
}

export default function Home({ allPostsData }) {
    const [pageNumber, setPageNumber] = useState(1);
    const [allposts, setPosts] = useState(paginate(allPostsData, pageSize, pageNumber));
    const router = useRouter();
    const { page } = router.query;

    useEffect(() => {
        if (page && page > 0) {
            setPageNumber(+page);
            setPosts(paginate(allPostsData, pageSize, +page));
        } else {
            setPageNumber(1);
            setPosts(paginate(allPostsData, pageSize, 1));
        }
    }, [page]);

    const handleNextPosts = () => {
        if (pageNumber * pageSize < allPostsData.length) {
            router.query.page = pageNumber + 1
            router.push(router);

            setPosts(paginate(allPostsData, pageSize, pageNumber + 1));
            setPageNumber(pageNumber + 1);
        }
    }

    const handlePrevPosts = () => {
        if (pageNumber * pageSize > 0) {
            router.query.page = pageNumber - 1;
            router.push(router);

            setPosts(paginate(allPostsData, pageSize, pageNumber - 1));
            setPageNumber(pageNumber - 1);
        }
    }

    const handleSearch = () => {
        const search = document.getElementById('search').value;
        const result = filter(allPostsData, search);
        setPosts(result);
    }


    return (
        <Layout>
            <Head>
                <title>Codegeek</title>
            </Head>
            <NavBar />
            {/* <!-- Page Header--> */}
            <header className="masthead d-none d-md-flex" style={{ backgroundImage: "url('https://codegeek.vercel.app/url?imageUrl=https://software-engineering.vercel.app/images/cover.png&imageFormat=webp')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Codegeek</h1>
                                <span className="subheading">Codegeek is a free website to learning software engineering</span>
                            </div>
                            <div className="text-center mt-5">
                                <input id="search" type="text" placeholder="search" className="p-2 mr-2" />
                                <button onClick={handleSearch} className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Main Content--> */}
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {
                            allposts.map((post, index) => {
                                const {
                                    id,
                                    created,
                                    title,
                                    subTitle,
                                    tags,
                                    readingTime,
                                    author,
                                    card } = post;
                                return (<Fragment key={id + index}>
                                    {/* <!-- Post preview--> */}
                                    <div className="post-preview" key={id}>
                                        <Link href={`/posts/${id}`}>
                                            <a>
                                                {/* {console.log({ card })} */}
                                                <img
                                                    src={card}
                                                    alt={title} className="border" />
                                                <h2 className="post-title">{title}</h2>
                                                <h3 className="post-subtitle">{subTitle}</h3>
                                            </a>
                                        </Link>
                                        <p className="post-meta">
                                            <Date dateString={created} readingTime={readingTime} />
                                            {tags?.map(tag => (
                                                <span key={`${tag}-${id}`}><span className={`${utilStyles.tag} text-white`} key={tag}>#{tag} </span>&nbsp;</span>
                                            ))}
                                        </p>
                                    </div>
                                    {/* <!-- Divider--> */}
                                    <hr className="my-4" key={id + index} />
                                </Fragment>)
                            })
                        }


                        <div className="d-flex justify-content-end  mb-4">
                            {/* <!-- Pager--> */}
                            {
                                pageNumber > 1 &&
                                <div className=" d-flex justify-content-start w-50">
                                    <button className="btn btn-primary text-uppercase" onClick={handlePrevPosts}>←prev</button>
                                </div>
                            }


                            {/* <!-- Pager--> */}
                            <div className="d-flex justify-content-end w-50">
                                <button className="btn btn-primary text-uppercase" onClick={handleNextPosts}>next →</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}
