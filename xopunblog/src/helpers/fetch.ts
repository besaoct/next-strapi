
export const apiEndpoint = 'http://127.0.0.1:1337/api';
export const APIBaseUrl = 'http://127.0.0.1:1337';

export const fetchSinglePost = async (slug:any) => {
    const options = {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      };
    
      try {
    const req = await fetch(`${apiEndpoint}/blogs?filters[slug][$eq]=${slug}&populate[0]=SEO&populate[1]=SEO.MetaTag&populate[2]=img`, { 
        cache: 'no-store',
        headers: options.headers
       });
    const res = await req.json();
    return res.data[0];
} catch (err) {
    console.error(err);
  }
};  


export async function fetchCategories() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    };
  
    try {
      const res = await fetch(
        `${apiEndpoint}/categories/`, 
        { 
        cache: 'no-store',
        headers: options.headers
       });
      const response = await res.json();
      return response;
    } catch (err) {
      console.error(err);
    }
  }
  
  export async function fetchBlogs() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    };
  
    try {
      const res = await fetch(
       `${apiEndpoint}/blogs?populate=*`,
       { 
        cache: 'no-store',
        headers: options.headers
       }
   
      );
      const response = await res.json();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  export async function fetchAbout() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    };
  
    try {
      const res = await fetch(
       `${apiEndpoint}/about?populate=[0]=blocks`,
       { 
        cache: 'no-store',
        headers: options.headers
       }
   
      );
      const response = await res.json();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }




  export async function fetchBlogsPage() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    };
  
    try {
      const res = await fetch(
       `${apiEndpoint}/blogs-page?populate[0]=blocks&populate[1]=blocks.MetaTag`,
       { 
        cache: 'no-store',
        headers: options.headers
       }
   
      );
      const response = await res.json();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }



  export async function fetchHomePage() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    };
  
    try {
      const res = await fetch(
       `${apiEndpoint}/home?populate[0]=blocks&populate[1]=blocks.MetaTag`,
       { 
        cache: 'no-store',
        headers: options.headers
       }
   
      );
      const response = await res.json();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

