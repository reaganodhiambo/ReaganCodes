import React, { useState } from 'react';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import { Editor } from '@tinymce/tinymce-react';

function BlogAdd() {
  const [form, setForm] = useState({
    title: '',
    content: '',
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

  const handleEditorChange = (content) => {
    setForm({ ...form, content });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      formData.append('tags', form.tags);
      formData.append('published', form.published);
      formData.append('author', 1);
      if (imageFile) {
        formData.append('image', imageFile);
      }
      const res = await fetch('/api/blogs/create/', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setForm({ title: '', content: '', tags: '', published: false });
        setImageFile(null);
      } else {
        setError(data.error || 'Failed to add blog');
      }
    } catch (err) {
      setError('Failed to add blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark-background min-h-screen text-white">
      <PageMeta title="Add Blog" description="Add a new blog post." />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-sky-blue">Add Blog</h1>
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
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            value={form.content}
            onEditorChange={handleEditorChange}
            init={{
              plugins: [
                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
              ],
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
              skin: 'oxide-dark',
              content_css: 'dark',
              height: 500,
              encoding:'html',
            }}
          />
          <input
            className="w-full mb-2 p-2 border rounded bg-white text-black"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
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

export default BlogAdd; 