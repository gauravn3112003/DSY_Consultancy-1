import baseUrl from "directsecondyearadmission/baseUrl";
const EXTERNAL_DATA_URL = baseUrl;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
     <loc>https://dsyconsultancy.netlify.app/</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>
     <priority>1.00</priority>
     </url>
     <url>
     <loc>https://dsyconsultancy.netlify.app/home</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>
     <priority>0.80</priority>
     </url>
     <url>
     <loc>https://dsyconsultancy.netlify.app/latest</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>
     <priority>0.80</priority>
     </url>
     <url>
     <loc>https://dsyconsultancy.netlify.app/AllCollege</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>
     <priority>0.80</priority>
     </url>
     <url>
     <loc>https://dsyconsultancy.netlify.app/contactus</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>
     <priority>0.80</priority>
     </url>
     <url>
       <loc>https://dsyconsultancy.netlify.app/College</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>

     </url>
     <url>
       <loc>https://dsyconsultancy.netlify.app/Login</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>

     </url>
     <url>
       <loc>https://dsyconsultancy.netlify.app/Register</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>

     </url>
     <url>
       <loc>https://dsyconsultancy.netlify.app/Profile</loc>
     <lastmod>2023-03-05T07:14:29+00:00</lastmod>

     </url>


     
     ${posts
       .map((item) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}CollegeDa/${item._id}`}</loc>
           <lastmod>${item.updatedDate}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const request = await fetch(EXTERNAL_DATA_URL + "/api/getAllColleges");
  const posts = await request.json();
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
