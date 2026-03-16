
import { useState } from "react";
import uploadMedia from "../utils/mediaUpload";


export default function TestPage() {

	const [file , setFile] = useState(null);

	async function handleUpload(){
		
		try{

			const url = await uploadMedia(file);
			console.log(url);

		}catch(error){
			console.log(error);
		}
		

	}

	function handleUploadOld(){

		uploadMedia(file).then((url)=>{
			console.log(url);
		}).catch((error)=>{
			console.log(error);
		})
	}

	return (
		<div className="w-full h-screen flex justify-center items-center bg-primary text-secondary flex-col gap-10">
			
			<input onChange={
				(e)=>{
					setFile(e.target.files[0])
				}
			} type="file"/>

			<button onClick={handleUpload} className="bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-secondary/80 transition">
				Upload
			</button>
		</div>
	);
}
