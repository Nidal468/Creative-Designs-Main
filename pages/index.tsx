import type { NextPage } from 'next'
import Head from 'next/head'
import { Upload, Profile } from '../components/main'
import {Nav} from '../components/java.jsx'
import styles from "../styles/styles.module.css"
import news from "../public/json/news.json"
import {useState, useEffect} from "react"
import { useSession } from 'next-auth/react';
const Home: NextPage = () => {
	const { data: session, status } = useSession();
	interface NewsItem {
		src: string;
  		id: string;
	}
	const [isBackground1, setIsBackground1] = useState(false);
	const [isBackground2, setIsBackground2] = useState(true);
	const [isBackground3, setIsBackground3] = useState(true);
	const [isColor1, setIsColor1] = useState(false);
	const [isColor2, setIsColor2] = useState(true);
	const [isColor3, setIsColor3] = useState(true);
	const [isNews, setIsNews] = useState(0);
	const bg1 = isBackground1? "": "#fff";
	const bg2 = isBackground2? "": "#fff";
	const bg3 = isBackground3? "": "#fff";
	const shadow1 = isColor1? "":" 0px -6px 10px #e0e0e0,  0px 6px 10px #e0e0e0";
	const shadow2 = isColor2? "":" 0px -6px 10px #e0e0e0,  0px 6px 10px #e0e0e0";
	const shadow3 = isColor3? "":" 0px -6px 10px #e0e0e0,  0px 6px 10px #e0e0e0";
	const [count, setCount] = useState<number>(0);
		useEffect(() => {
		const fetchJsonData = async () => {
			try {
			  const response = await fetch("/json/news.json");
			  const jsonData: NewsItem[] = await response.json();
		
			  const count = jsonData.length; // Count the number of items in the JSON data
			  setCount(count);
		
			  jsonData.forEach((news: NewsItem) => {
				if (news.id) {
				  // Do something with the news item
				}
			  });
			} catch (error) {
			  console.log("Error fetching JSON data:", error);
			}
		  };
		
		  fetchJsonData();
		}, []);
		useEffect(() => {
			if (session?.user) {
			  const { name, image } = session.user;
			}
		  }, [session]);
		  
	function NewsR(){
		if (isNews < count-1) {
			setIsNews(prev => prev + 1);
			console.log(isNews);
		  }
	}
	function NewsL(){
		if (isNews > 0) {
			setIsNews(prev => prev - 1);
			console.log(isNews);
		  }
	}
	function Button1(){
		setIsBackground1(false);
		setIsBackground2(true);
		setIsBackground3(true);
		setIsColor1(false);
		setIsColor2(true);
		setIsColor3(true);
	}
	function Button2(){
		setIsBackground1(true);
		setIsBackground2(false);
		setIsBackground3(true);
		setIsColor1(true);
		setIsColor2(false);
		setIsColor3(true);
	}
	function Button3(){
		setIsBackground1(true);
		setIsBackground2(true);
		setIsBackground3(false);
		setIsColor1(true);
		setIsColor2(true);
		setIsColor3(false);
	}
  return (
    <div>
      <Head>
        <title>Creative Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<main className={styles.main}>
				<div className={styles.hero}>
					<div className={styles.sideBar}>
						<div className={styles.buttons}>
						<div className={styles.button} style={{background: bg1, boxShadow: shadow1}} onClick={Button1}><i className="fi fi-rr-home" id={styles.icon}></i></div>
						<div className={styles.button} style={{background: bg2, boxShadow: shadow2}} onClick={Button2}><i className="fi fi-rr-apps-add" id={styles.icon}></i></div>
						<div className={styles.button} style={{background: bg3, boxShadow: shadow3}} onClick={Button3}><i className="fi fi-rr-shopping-cart-add" id={styles.icon}></i></div>
						</div>
						<div className={styles.user}>
						{session?.user ? (
							<img id={styles.iconP} src={session.user.image?? ''} alt={session.user.name?? ''}/>
						): (
							<img id={styles.iconP} src='/images/seele nyx logo.jpg'/>
						)}
						</div>
					</div>
					<div className={styles.body}>
						<Nav/>
						<div className="w-full h-[90%] flex items-start justify-between px-[2%] py-[1%]">
							<div className="w-[40%] h-full flex items-end">
								<div className={styles.github}></div>
							</div>
							{session ? (
							<Profile news={news} json={isNews} button1={NewsL} button2={NewsR}/>
							): null}
						</div>
					</div>
				</div>
			</main>
			
    </div>
  )
}

export default Home