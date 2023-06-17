import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/styles.module.css'
import axios from 'axios';


interface ProfileProps {
	news: NewsItem[];
	json: number;
	button1: () => void;
	button2: () => void;
  }
interface NewsItem {
	src: string;
	id: string;
  }
export function Upload() {
	const [uploading, setUploading] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState<File>();
	const handleUpload = async () => {
		setUploading(true);
		try {
			if (!selectedFile) return;
			const formData = new FormData();
			formData.append("myImage", selectedFile);
			const { data } = await axios.post("./api/image", formData);
			console.log(data);
		} catch (error: any) {
			console.log(error.response?.data);
		}
		setUploading(false);
	};
	return (
		<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', zIndex: '999' }}>
			<label>
				<input type='file' hidden onChange={({ target }) => {
					if (target.files) {
						const file = target.files[0];
						setSelectedImage(URL.createObjectURL(file));
						setSelectedFile(file);
					}
				}} />
				<div style={{ width: '300px', height: '100px', border: '1px solid red', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					{selectedImage ? (<img src={selectedImage} style={{ width: "100px" }} />) : (<span>Select Image</span>)}
				</div>
			</label>
			<button disabled={uploading} style={{ opacity: uploading ? '0.5' : '1', background: 'black', color: "#fff" }} onClick={handleUpload} >{uploading ? 'Uploading' : 'Upload'}</button>
		</div>
	)
}
const Profile: React.FC<ProfileProps> = (props) => {
	return(
	<div className="w-[20%] h-full max-lg:hidden h-full flex flex-col items-center justify-between">
		<div className={styles.profile}>
									<div className={styles.circle}></div>
									<div className="w-full h-[3vw] flex flex-col items-center justify-between text-[1vw]">
										<h1>Abu Saleh(Fate)</h1>
										<p style={{color: "#777"}} className='text-[0.8vw]'>Frontend developer/Graphics Designer</p>
									</div>
									<div className='w-full h-[20%] flex items-center justify-evenly text-lg'>
										<button>Github Profile</button>
										<button>Google Profile</button>
									</div>
		</div>
		<div className={styles.history}>
									<img src="/images/seele logo.jpg"/>
									<div>
										<h1 style={{background: "blue", width: "40%", height: "1.2vw", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", borderRadius: "20vw"}}>Web Design</h1>
										<h1 className='text-lg'>Soft UI</h1>
										<p style={{color: "#666"}}>Soft UI Design System is built with over 70 frontend individual elements, like buttons, inputs, navbars, navtabs, cards or alerts, giving you the freedom of choosing and combining. All components can take variations in colour, that you can easily modify using SASS files and classes.</p>
									</div>
		</div>
		<div className={styles.card}>
  									<div className={styles.imge}>
   										 <img src='/images/seele blue.jpg'/>
										<span>
  											<p>Abu Saleh</p>
    										<p>Frontend Developer</p>
										</span>
  									</div>
  									<div className={styles.Description} style={{backgroundImage: `url("${props.news[props.json].src}")`}}>
										<div className={styles.image}></div>
									</div>
  									<div className={styles.socialmedia}>
										<div className={styles.icons}>
											<i className="fi fi-brands-youtube" id={styles.youtube}></i>
											<i className="fi fi-brands-linkedin" id={styles.linkedin}></i>
											<i className="fi fi-brands-github" id={styles.github}></i>
											<i className="fi fi-brands-twitter" id={styles.twitter}></i>
										</div>
										<div className={styles.slides}><i className="fi fi-rr-caret-left" onClick={props.button1}></i><i className="fi fi-rr-caret-right" onClick={props.button2}></i></div>
									</div>
		</div>
		</div>
	)
}
export {Profile}