  export const API = async ({
    CT = "application/json",
    method = "GET",
    endpoint,
    body
  }) => {
    
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
  
    // No establecer "Content-Type" si el body es una instancia de FormData
    if (!(body instanceof FormData)) {
      headers["Content-Type"] = CT;
    }
  
    try {
      const fetchOptions = {
        method,
        headers,
        body: body instanceof FormData ? body : JSON.stringify(body)
      };
  
      const res = await fetch(import.meta.env.VITE_BASE_URL + endpoint, fetchOptions);
  
      if (res.status === 404) {
        return {
          status: 404,
          data: []
        };
      }
      if (res.status === 400) {
        return {
          status: 400,
          data: []
        };
      }
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
  
      return {
        status: res.status,
        data
      };
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  };
  