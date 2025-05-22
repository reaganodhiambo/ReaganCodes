import React, { useEffect, useState } from 'react';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Use Vite environment variable for API base URL, fallback to local if not set
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const API_URL = `${API_BASE_URL}/api/blogs/`;

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: '', // holds the firebase URL
    tags: '',
    published: true
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBlogs(data);
    } catch {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    let imageUrl = form.image;
    try {
      // If a new image file is selected, upload to Firebase
      if (imageFile) {
        const imageRef = ref(storage, `blog_images/${Date.now()}_${imageFile.name}`);
        // Upload the file
        await uploadBytes(imageRef, imageFile);
        // Get the download URL
        imageUrl = await getDownloadURL(imageRef);
      }
      // Send the blog data to the API
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, image: imageUrl }),
      });
      // If the response is not ok, throw an error
      if (!res.ok) throw new Error('Failed to add blog');
      // Reset the form
      setForm({ title: '', content: '', image: '', tags: '', published: false });
      // Clear the image file
      setImageFile(null);
      // Fetch the blogs again
      fetchBlogs();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark-background min-h-screen text-white">
      <PageMeta title="Blog" description="Read and add new blog posts." />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-sky-blue">Blog</h1>
        <form onSubmit={handleSubmit} className="mb-8 bg-card p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>
          <label htmlFor="title">Title</label>
          <input
            className="w-full mb-2 p-2 border rounded"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="content">Content</label>
          <textarea
            className="w-full mb-2 p-2 border rounded"
            name="content"
            placeholder="Content"
            value={form.content}
            onChange={handleChange}
            rows={4}
            required
          />
          <label htmlFor="image">Image</label>
          <input
            className="w-full mb-2 p-2 border rounded bg-white text-black"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            alt={handleImageChange} 
          />
          <label htmlFor="tags">Tags</label>
          <input
            className="w-full mb-2 p-2 border rounded"
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
          />
          <div className="flex items-center mb-4">
            <label htmlFor="published">Published</label>
            <input
              type="checkbox"
              name="published"
              id="published"
              checked={form.published}
              onChange={handleChange}
              className="mr-2"
            />
          </div>
          <Button type="submit" variant="filled" disabled={loading}>
            {loading ? 'Adding...' : 'Add Blog'}
          </Button>
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
          {loading && <div>Loading...</div>}
          {blogs.length === 0 && !loading && <div>No blogs found.</div>}
          <ul className="space-y-6">
            {blogs.map((blog) => (
              <li key={blog.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-dark-background">{blog.title}</h3>
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} className="mb-2 max-h-60 w-full object-cover rounded" />
                ) : (
                  <div className="mb-2 max-h-60 w-full object-cover rounded bg-gray-200 flex items-center justify-center text-gray-500" style={{height: '15rem'}}>No image</div>
                )}
                <div className="mb-2 text-gray-700">{blog.content}</div>
                <div className="text-sm text-gray-500">Tags: {blog.tags}</div>
                <div className="text-sm text-gray-500">Created at: {new Date(blog.created_at).toLocaleDateString()}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog; 