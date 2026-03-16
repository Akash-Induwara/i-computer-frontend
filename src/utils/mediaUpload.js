import { createClient } from "@supabase/supabase-js";

let url = "https://ajcrghbdzbzvjqatvohv.supabase.co";
let key =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3JnaGJkemJ6dmpxYXR2b2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NzI2MDMsImV4cCI6MjA4OTI0ODYwM30.duoSqriDgW6dzWIPHMGokpyXSjvzp_QTsaMOAOxLGn4";
const supabase = createClient(url, key);

export default function uploadMedia(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file selected");
		} else {
			const timeStamp = new Date().getTime();
			const fileName = timeStamp + "_" + file.name;

			supabase.storage
				.from("images").upload(fileName, file, {
					upsert: false,
					cacheControl: "3600",
				}).then(() => {

					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;

					resolve(publicUrl);
				})
				.catch((error) => {
					reject(error);
				});
		}
	});
}
