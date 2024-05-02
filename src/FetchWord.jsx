import { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  // State to hold fetched data, loading status, and error
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // Create an AbortController for managing the requests
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Fetch data using Promise with the Fetch API
    const fetchUsingPromiseWithFetchApi = () => {
      fetch(`${BASE_URL}?page=${page}`, { signal }) // Fetch data based on the current page
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
          setPosts(data); // Set the fetched data
          setError(null); // Clear any previous errors
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch aborted"); // Log a message when the request is intentionally aborted
            return; // Exit the function to prevent further error handling
          }
          setError(error.message); // Handle and set the error message
        })
        .finally(() => setIsLoading(false)); // Turn off loading indicator
    };

    // Fetch data using async/await with the Fetch API
    const fetchUsingAsyncAwaitWithFetchApi = async () => {
      try {
        const response = await fetch(`${BASE_URL}?page=${page}`, { signal }); // Fetch data based on the current page
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted"); // Log a message when the request is intentionally aborted
          return; // Exit the function to prevent further error handling
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data using Promise with Axios
    const fetchUsingPromiseWithAxios = () => {
      axios
        .get(`${BASE_URL}?page=${page}`, { signal }) // Fetch data based on the current page
        .then(({ data }) => {
          setPosts(data); // Set the fetched data
          setError(null); // Clear any previous errors
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Fetch aborted"); // Log a message when the request is intentionally aborted
            return; // Exit the function to prevent further error handling
          }
          setError(error.message); // Handle and set the error message
        })
        .finally(() => setIsLoading(false)); // Turn off loading indicator
    };

    // Fetch data using async/await with Axios
    const fetchUsingAsyncAwaitWithAxios = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}?page=${page}`, {
          signal,
        }); // Fetch data based on the current page
        setPosts(data); // Set the fetched data
        setError(null); // Clear any previous errors
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch aborted"); // Log a message when the request is intentionally aborted
          return; // Exit the function to prevent further error handling
        }
        setError(error.message); // Handle and set the error message
      } finally {
        setIsLoading(false); // Turn off loading indicator
      }
    };

    // Trigger all fetching methods on component mount
    fetchUsingPromiseWithFetchApi();
    fetchUsingAsyncAwaitWithFetchApi();
    fetchUsingPromiseWithAxios();
    fetchUsingAsyncAwaitWithAxios();

    // Cleanup: Abort the controller and set loading to true when the component unmounts
    return () => {
      abortController.abort(); // Cancel any ongoing requests
      setIsLoading(true); // Reset loading state
    };
  }, [page]); // Re-run the effect when the 'page' state changes

  return (
    <div className="container">
      <h1>Fetching Data in React</h1>
      {/* Button to load more data */}
      <button onClick={() => setPage(page + 1)}>Fetch API ({page})</button>

      {/* Display errors if any */}
      {error && <div>{error}</div>}

      {/* Display loading indicator */}
      {isLoading && <div>Loading...</div>}

      {/* Display the fetched data */}
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
