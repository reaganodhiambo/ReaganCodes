import React, { useState } from 'react';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import { addBlog } from '../utils/api';
import MarkdownRenderer from '../components/MarkdownRenderer';
import supabase from '../utils/supabase';

function BlogAddMarkdown() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    image_url: '',
    tags: '',
    published: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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

  const uploadImageToSupabase = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `blog-images/${fileName}`;
    let { error: uploadError } = await supabase.storage.from('reagancodes').upload(filePath, file);
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from('reagancodes').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    let imageUrl = form.image_url || '';
    try {
      if (imageFile) {
        imageUrl = await uploadImageToSupabase(imageFile);
      }
      await addBlog({ ...form, image_url: imageUrl });
      setForm({ title: '', content: '', image_url: '', tags: '', published: false });
      setImageFile(null);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark-background min-h-screen text-white">
      <PageMeta title="Add Blog (Markdown)" description="Add a new blog post using markdown." />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-sky-blue">Add Blog (Markdown)</h1>
        <form onSubmit={handleSubmit} className="mb-8 bg-card p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">New Blog</h2>
          <input
            className="w-full mb-2 p-2 border rounded"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="content" className="block mb-2 mt-4">Content (Markdown)</label>
          <textarea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={10}
            className="w-full p-2 border rounded mb-4 text-black"
            placeholder="Write your blog post in markdown..."
            required
          />
          <div className="mb-4">
            <label className="block mb-2">Preview:</label>
            <div className="p-4 border rounded bg-gray-50 dark:bg-dark-background text-black dark:text-white">
              <MarkdownRenderer content={form.content} />
            </div>
          </div>
          <input
            className="w-full mb-2 p-2 border rounded bg-white text-black"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            name="image_url"
            placeholder="Image URL (optional)"
            value={form.image_url}
            onChange={handleChange}
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="published"
              id="published"
              checked={form.published}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="published" className="text-base">Published</label>
          </div>
          <Button type="submit" variant="filled" disabled={loading}>
            {loading ? 'Adding...' : 'Add Blog'}
          </Button>
          {error && <div className="text-red-600 mt-2">{error}</div>}
          {success && <div className="text-green-500 mt-2">Blog added successfully!</div>}
        </form>
      </div>
    </div>
  );
}

export default BlogAddMarkdown; 