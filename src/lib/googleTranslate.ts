// "use server";
// import Translate from "@google-cloud/translate";

// const translate = new Translate.v2.Translate({
//   projectId: process.env.GOOGLE_PROJECT_ID,
//   keyFilename: "./src/lib/norsea-atlantic-7dd36cceb8dc.json",
// });

// export async function googleTranslateArray(text: string[], target: string) {
//     if (target === "en") return text;
//   const [response] = await translate.translate(text, target);

//   return response;
// }

// export async function googleTranslate(text: string, target: string) {
//     if (target === "en") return text;
//     const [response] = await translate.translate(text, target);
  
//     return response;
//   }


